require('dotenv').config();
const express = require('express');
const initApiRoutes = require('./routes/apiRoutes');
const configCors = require('./config/cors');
const connection = require("./config/configDB");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config req.body
configCors(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// ======================

initApiRoutes(app);

// ======================
app.listen(port, hostname, () => {
    console.log(`RUN PORT: ${port}`)
})

