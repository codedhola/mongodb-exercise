const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let db;

async function Connect(){
  const client = await MongoClient.connect("mongodb://localhost:27017");
  db = client.db("mongodb");
}

function getDb(){
    if(!db){
        throw {
            message: "Database Not Connected"
        }
    }
    return db;
}

module.exports = {
    Connect, 
    getDb   
}


