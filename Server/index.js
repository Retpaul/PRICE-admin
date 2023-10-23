import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import studentRoutes from './Routes/student.js'

const app = express();
app.use(cors())

app.use(bodyParser.json({limit:'20mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}))

app.use('/students',studentRoutes)

const CONNECTION_URL = "mongodb+srv://retyitpaul60:hPQSIx8n5yH0KO3p@cluster1.4ubnfxk.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is connected on Port:${PORT}`)
    })
}).catch(err=>{
    console.log(err.message)
})
