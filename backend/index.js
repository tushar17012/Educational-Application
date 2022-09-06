// const {Client}= require('pg');
// conty
// const client = new Client({
//     host:"localhost",
//     user:"postgres",
//     port:5432,
//     password:"8650",
//     database:"SentenceFillIn"
// })

// client.connect((err)=>{
//     console.log("connected");

// });

// module.export = {client};
// // client.query(`Select * from SentenceFillIn`,(err,res)=>{
// //     if(!err){
// //         console.log(res.rows);
// //     }
// //     else{
// //         console.log(err.message)
// //     }
// //     client.end;
// // })
const {Client}= require('pg');

const call=()=>{
    Client.query(`Select * from SentenceFillIn`,(err,res)=>{
        if(!err){
            console.log(res.rows);
        }
        else{
            console.log(err.message)
        }
        Client.end;
})}
module.exports={call};