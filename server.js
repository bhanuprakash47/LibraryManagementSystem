import connectDB from "./config/db.js"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"



dotenv.config()


const app=express()
app.use(cors())
app.use(express.json())



const PORT=process.env.PORT || 5000


const initializeServerAndDB=async()=>{
    try{
        await connectDB()

        app.listen(PORT,()=>{
            console.log("server is running on port",PORT)
        })
    }catch(err){
        console.error("Server failed to start",err.message)
        process.exit(1)
    }
}

initializeServerAndDB()