const express = require('express');
const cors = require('cors');
const app = express();
const conexao = require('./bd.js');
 
app.use(cors());
app.use(express.json());


app.listen(3000,()=> console.log("Server online in port 3000"));



app.get('/', (req,res)=>{
    conexao.query(
        'show databases',(err, json)=>{
        if(err){
            console.log(ReferenceError)
            res.json({
                "Programa":"Conecta banco de dados",
                "API": "Api está online na porta 3000",
                "BD" : "Banco de dados não está conectado",
            })
                
        }else{
            res.json({
                "Programa":"Conecta banco de dados",
                "API": "Api está online na porta 3000",
                "BD" : "Banco de dados está conectado na porta 3306",
                "Bases de dados": json
            })
        }
    
})
})