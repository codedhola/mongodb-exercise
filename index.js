const express = require("express");
const db = require("./model");
const app = express();

app.get("/", async (req, res) => {
    const data = await db.getDb().collection("clients").find().toArray()
    console.log(data);
    res.send(data)
}); 


db.Connect().then(() => {
    app.listen(3000, () => {console.log("Running script on console")});
});
