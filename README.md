# MONGODB EXERCISE

A Repo Based on The Basics Of Mongodb

## Mongo db commands run in the shell

- #### *This shows the list of database available*

```mongodb
  show dbs
```

- #### *This Creates a database for you automatically*

```mongodb
  use productify
```

> MONGODB makes use of collection for it database modelling, which makes it easier to make queries. To create a collection, you must be in the existing database ...

- #### This Creates or switch to the Collection 'Products' in the database

```mongodb
  db.products
```

> MONGODB makes writing to a collection possible by calling the collection from the database with the use of some methods

#### *insertOne*

- #### This Creates a single object into the Collection 'Products' in the
  
  database An 'id' is created automatically by mongodb in the database*

```mongodb
  db.products.insertOne({
    name: "HP Pavilon",
    stock: 200,
    spec: {
      lowSpec: "core i3, 1.9gh 8gb ram, 128ssd storage",
      midSpec: "core i5, 2.1gh 8/16gb ram, 128/500ssd storage"
      highSpec: "core i7, 2.4gh 8/16gb ram, 256/500ssd storage"
    },
    type: "laptop"
  })
```

#### *find*

- #### Finds all the products in the database collection provided and return them as an 'Array'

```mongodb
db.products.find()
 ```

#### *find({filter}, {projection :(of object property needed)})*

- #### Finds all the products in the database collection that matches the filter

```mongodb
db.products.find({
    type: "laptop"
  }, {name: 1, stock: 0, _id: 0})
 ```
  
#### *findOne({filter}, {projection :(of object property needed)})*

- #### Finds the first match of the given property

```mongodb
db.products.findOne({
    type: "laptop"
  }, {name: 1, stock: 0, _id: 0})
```

#### *updateOne({_id}, {$set{properties to update}})*

- #### Gets the _id object and update the properties

```mongodb
db.products.updateOne({_id: objectId("..")},
 $set{ {name: HP folio, "spec.lowSpec" 
:"core i5, 2.2gh 8gb ram, 256 ssd storage"}
})
```

#### *deleteOne({_id})*

- #### Deletes the object of the selected _id 

```mongodb
db.products.deleteOne({_id: objectId("..")})
```

#### *deleteMany({Property})*

- #### Deletes the object of the selected Property

```mongodb
db.products.deleteMany({type: laptop})
```