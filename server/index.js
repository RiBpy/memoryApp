import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from "./routes/post.js"

const app=express();
app.use("/post",postRoutes);

app.use(bodyParser.json({limit:'22mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'22mb',extended:true}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://memoryApp:memoryApp@cluster0.i3xr8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT=process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server is running on: ${PORT}`)))
.catch((err)=>console.log(err.message))

