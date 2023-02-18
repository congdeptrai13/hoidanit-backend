require('dotenv').config()
const express = require('express') //commonjs
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database")
const fileUpload = require('express-fileupload');

const mongoose = require("mongoose");
const app = express()// app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());

//config template engine
configViewEngine(app);

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })) //for form data

//khai báo route
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

//test connection
; (async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`backend zero app listening on port ${port}`)
    })
  } catch (error) {
    console.log("error connect to db: ", error);
  }
})()
