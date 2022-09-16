# MONGODB EXERCISE
A Repo Based on The Basics Of Mongodb
<<<<<<< HEAD



=======
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

- #### *This Creates or switch to the Collection 'Products' in the database*
```mongodb
  db.products
```

> MONGODB makes writing to a collection possible by calling the collection from the database with the use of some methods

 #### *insertOne*
- #### *This Creates a single object into the Collection 'Products' in the database An 'id' is created automatically by mongodb in the database*
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
 - #### *Finds all the products in the database collection provided and return them as an 'Array'*
 ```
  db.products.find()
 ```
  
>>>>>>> 528d40ca9ac54605a028ca79361b80873101af00
