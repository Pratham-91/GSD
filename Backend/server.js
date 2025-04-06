import express from 'express'
import dotenv from 'dotenv'
import connectToMongodb from './db/connectToMongodb.js'

const app = express();
dotenv.config();

const PORT = process.env.PORT|| 5000

app.get('/',(req,res)=>{
    res.send('Hello world !')
})

app.listen(PORT,()=>{
    connectToMongodb()
    console.log(`server is running on ${PORT}`)
})