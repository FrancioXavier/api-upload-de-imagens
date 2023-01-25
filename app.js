const express = require('express');
const app = express();
const api_routes = require("./routes/api-routes");

//Settings
    //Dotenv
        require('dotenv').config();

    //DB
        require("./db")
    
    //JSON
        app.use(express.json())

//Routes
    app.use('/pictures', api_routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor conectado na porta ${port}`);
});