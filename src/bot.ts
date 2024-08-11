const { MongoClient, ServerApiVersion } = require('mongodb');
const tmi = require("tmi.js");

import {getPrevGame} from "./api/api";
import {getChampionNameText, getRoleText} from "./helpers/helpers";

const { BOT_USER_NAME, TOKEN, CHANNEL_NAME, DB_PASS, DB_LOGIN, INITIAL_BALANCE_VALUE } = require("./utility/constants");

const uri = `mongodb+srv://${DB_LOGIN}:${DB_PASS}@cluster0.j9yo8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

let dbClient = null;

async function run () {
    try {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();
        return client;
    } catch (error) {
        console.error(error);;
    }
}

run().then(res => {
    dbClient = res;
    app().then(r => console.log("APP IS RUNNING"));
}).catch(console.dir);

const app = async () => {
    const client = await new tmi.Client({
        // options: { debug: true },
        identity: {
            username: BOT_USER_NAME,
            password: `oauth:${TOKEN}`
        },
        channels: [ CHANNEL_NAME ]
    });

    await client.connect();

    client.on('message', async (channel, tags, message, self) => {
        if (self || !message.startsWith('!')) return;
        const command = message
          .slice(1)
          .split(' ')
          .shift()
          .toLowerCase();

        switch (command) {
            case "прошлая":
                getPrevGame.then(({win, championName, role, kills, deaths, assists, minions}) => {
                    const responseText = `Прошлую игру ${win ? "победил catJam" : "проебал peepoClown"} ${getChampionNameText(championName)} ${getRoleText(role)}. КДА - ${kills}/${deaths}/${assists}. Нафармил - ${minions} мобов.`
                    client.say(channel, responseText);
                }).catch(err => console.log(err));
                return
            case "баланс":
                const { username } = tags;

                const KEGLYA_DB = dbClient.db("keglya_db");
                const USERS_COLLECTION = KEGLYA_DB.collection("users");
                const uniqueUser = await USERS_COLLECTION.findOne({ name: username });

                if (!uniqueUser.name) {
                    await USERS_COLLECTION.insertOne({
                        name: username,
                        balance: INITIAL_BALANCE_VALUE,
                        successBets: 0,
                        totalBets: 0,
                        activeBets: [],
                    })
                }

                client.say(channel, `@${username}, твой баланс ${uniqueUser?.balance || INITIAL_BALANCE_VALUE}`);
                return
            default:
                return;
        }
    });
}
