const express = require("express");
const mongodb = require("mongodb");
const db = require("./model");
const app = express();
app.use(express.json());
const ObjectId = mongodb.ObjectId;

app.get("/", async (req, res) => {
    const data = await db.getDb().collection("clients").find({}).toArray();
    res.send(data)
}); 

app.get("/:id", async (req, res) => {
    const data = await db.getDb().collection("clients").find({ _id: ObjectId(req.params)}).toArray();
    res.send(data); 
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

app.patch("/patch/:id", async (req, res) => {
    const id = req.params;
    const data = await db.getDb().collection("clients").updateOne({_id: ObjectId(id)},{
        $set : {
            "name" : req.body.name
        },
        $currentDate: { lastModified: true }
    })
    res.send(data);

});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params;
    const data = await db.getDb().collection("clients").deleteOne({_id: ObjectId(id)});
    res.json({
        status: "successful",
        message: `Object with ${id} has been deleted succefully`
    })
});

db.Connect().then(() => {
    app.listen(3000, () => {console.log("Running script on console")});
});
