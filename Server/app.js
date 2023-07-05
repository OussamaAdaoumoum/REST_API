const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");

const cors = require("cors");

const app = express();

app.use(router);

//allow cross-origin requests 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://oussama:Oussama2001@cluster0.aqunadl.mongodb.net/REST_API'); //yourDatabaseApi
mongoose.connection.once('open',()=>{
    console.log("connected to the database")
})



app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
  });