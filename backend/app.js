const express= require("express")
const app= express();
app.use(express.json());
const {Client}= require('pg');
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"8650",
    database:"SentenceFillIn"
})



client.connect((err)=>{
    console.log("connected");

});
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept');
    next();
})
app.get("/sentence",(req,response)=>{
    client.query(`Select * from sentencefillin`,(err,res)=>{
    if(!err){ 
        const data= res.rows;
        const actualData=data.map((item)=>{
            return(
                {
                    id:item.id,
                    question:item.question,
                    answer:item.answer,
                    distractor:[item.option_1,item.option_2,item.option_3]

                }
               

            )
        })
        return response.json({actualData});
    }
    else{
        
        console.log(err.message)
    }
    
})

})



app.get("/comprehension",(req,response)=>{
    client.query(`Select * from Comprehension`,(err,res)=>{
        if(!err){
            const Datacomp= res.rows;
            const actualDataComprehension= Datacomp.map((item)=>{
                return(
                    {
                        id:item.id,
                        question:item.question,
                        corrected:item.corrected,
                        distractor:[item.option_11,item.option_22,item.option_33]
                    }
                )
            })
            return response.json({actualDataComprehension})
        }
        else{
            console.log(err.message)
        }
    })
   
})

app.post("/register",(req,res)=>{
    const {username,password}= req.body;
    client.query('select * from loginusers where users=$1',[username],(err,resl)=>{
        if(err) {
            return res.json({successfull:false})

        }
        if(resl && resl.rowCount>0) {
           if(resl.rows[0].password==password){
              return res.json({successfull:true})
           } 
            return res.json({successfull:false})
        }
        else{
            client.query('INSERT INTO loginusers (users,password) VALUES ($1,$2)',[username,password],
            (err,result)=>{
            if(err) throw new err;
            else {
                return res.json({successfull:true})
            }
         })
                 }
        
            })

    
    
})



app.listen(9999,()=>{
    console.log("hello");
})

