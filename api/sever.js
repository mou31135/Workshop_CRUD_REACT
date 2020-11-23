const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3333;
const cors = require('cors');
const mongoose = require("mongoose");
//--------------------ROUTER-------------------------------------//
const businessRoute = require('./router/business');


var mongo_uri = "mongodb+srv://root:1234@cluster0.fti7k.gcp.mongodb.net/MONGO-TEST?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port:');
});

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

app.use('/business', businessRoute);

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});
