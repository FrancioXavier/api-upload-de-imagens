const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set("strictQuery", true);

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.amt2oqu.mongodb.net/?retryWrites=true&w=majority`);

    console.log('Banco de dados conectado!');
};

main().catch(err => console.log(err));

module.exports = main;