const mongodb = require("mongodb"); // CALL THE MONGO DB DRIVER

const MongoClient = mongodb.MongoClient; // GETS THE MONGO DB CLIENT FROM THE MONGO-DRIVER
let db;

async function Connect(){
try {
    const client = await MongoClient.connect("mongodb://localhost:27017");  // CONNECTS TO THE MONGO-DB
    db = client.db("mongodb"); // CALLS || CREATE THE DATABASE
}catch(error){
    throw error;
}
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
    Connect,  // EXPORTS CONNECTIONS INSTACE 
    getDb   // EXPORTS THE DATABASE
}


