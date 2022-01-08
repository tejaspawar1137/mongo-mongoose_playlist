  
   // TODO: INSERT
  // 1 show dbs = to show databases
   // 2 use {database name} = if it already exist then he create new
 //   3 db.{collectionname}.insertOne({})
 //   4 show collections = see collection name
  //  5 db.pawarDb.find().pretty()
   // 6 db = active database
    db.pawarDb.insertOne({}) // one document
    db.pawarDb.insertMany({}) // many document

          // TODO: FIND

      db.collection.find(query,projection)
      db.pawarDb.find({name: "react"}, {_id: 0,name:1}).pretty()
      db.pawarDb.findOne({name: 'react'}).pretty()
      db.pawarDb.find({name: "react"}).pretty().skip(1) 
      db.pawarDb.find({name: "react"}).pretty().limit(1) // get the first value

       // TODO: UPDATE

          db.collection_name.updateOne(filter, update)      // update one

          db.collection_name.update(filter, update)      // update many

          db.pawarDb.updateMany({name: "react"}, {$set: {videos: 90}})   


           // TODO: DELETE
           db.COLLECTION_NAME.deleteMany(DELETION_CRITTERIA)

           db.pawarDb.deleteMany({name: "tejas"})

           db.pawarDb.deleteMany({}) // all the data delete