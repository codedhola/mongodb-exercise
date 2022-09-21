const express = require("express");
const { ObjectId } = require("mongodb");
const db = require("./model");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const data = await db.getDb().collection("clients").find({_id : ObjectId("6327a2a3f553fbe749aeb2fe")}).toArray()
    console.log(data);
    res.send(data)
}); 

app.post("/post", async (req, res) => {
    const data = {
        title: req.body.title, 
        name: req.body.name,
        content: req.body.content,
        date: Date.now()
    }
    const accept = await db.getDb().collection("clients").insertOne(data);
    res.send(accept);
}); 


db.Connect().then(() => {
    app.listen(3000, () => {console.log("Running script on console")});
});
