const {Client}= require('pg');
const data=()=>{
    const client = new Client({
        host:"localhost",
        user:"postgres",
        port:5432,
        password:"8650",
        database:"SentenceFillIn"
    })
    return client;
}
module.export={data};