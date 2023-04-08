const express = require("express");
const cors = require("cors");
const {readdirSync} = require('fs')
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected !"))
  .catch((err) => console.log("Database connection error !", err));


 //Autoload Routes
 readdirSync('./routes').map((r)=>app.use('/api' ,require(`./routes/${r}`)))



  const port = process.env.PORT || 8080

  app.listen(port,()=>console.log('Server listening on port',port));