const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PQl0AKiR#c0nZuxW-RDV42Mfuojtg7SwyYrMIczSYL1p2HpQHDeU",
MONGODB: process.env.MONGODB || "mongodb+srv://KINGANJANA:123455@cluster0.t0jie.mongodb.net/",
};
