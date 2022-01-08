const mongoose = require("mongoose");
const validator = require('validator')

mongoose
  .connect("mongodb://localhost:27017/tejasDatabase", {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => {
    console.log("connetion succesful");
  })
  .catch((err) => {
    console.log(err);
  });

const playlistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
   // unique: true,
    // lowercase: true,
    // trim: true,
    // minlength: [5, 'minimum 10 letter'],
    // maxlength: 20,
  },
  ctype: {
      type: String,
      required: true
  },
  videos: {
      type: Number,
      validate(value){
           if(value < 0){
               throw new Error('videos count should not be negative')
           }
      }
  },
  author: String,
  email: {
    type: String,
   // unique: true,
    required: true,
  
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection creation
const Playlist = mongoose.model("Playlist", playlistSchema);

//  create document or insert
const createDocument = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: "Javascript",
      ctype: "Front End",
      videos: 150,
      author: "Tejas Pawar",
      email: "tejaspawar1183@gmail.com",
      active: true,
    });
    const mongoPlaylist = new Playlist({
      name: "   MongoDb  ",
      ctype: "Databases",
      videos: 40,
      author: "Tejas Pawar",
      email: "tejaspawar11183@gmail.com",
      active: true,
    });
    const mongoosePlaylist = new Playlist({
      name: "Mongoose",
      ctype: "Database",
      videos: 10,
      author: "Tejas Pawar",
      email: "tejaspawar111183@gmail.com",
      active: true,
    });
    const expressPlaylist = new Playlist({
      name: "express",
      ctype: "back end",
      videos: 10,
      author: "Tejas Pawar",
      email: "tejaspawar13@gmail.com",
      active: true,
    });
    const reactPlaylist = new Playlist({
      name: "React",
      ctype: "Front End",
      videos: 10,
      author: "Tejas Pawar",
      email: "tejaspawar3@gmail.com",
      active: true,
    });
     const result = await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist,reactPlaylist ])
  } catch (err) {
    console.log(err);
  }
};
createDocument();

const getDocument = async () => {
    // COMPARISON OPERATOR
    // $lt $gt $gte $lte $in
    // { ctype: {$in: ['Front End', 'Databases']}}
    // { ctype: {$nin: ['Front End', 'Databases']}}
    //  LOGICAL OPERATOR
   // $and $or $not $nor
   // $or = {$or: [{ctype: "Front End"},{author: "Tejas Pawar"}]}
   // $and = {$and: [{ctype: "back End"},{author: "Tejas Pawar"}]}
  try {
    const result = await Playlist.find({author: "Tejas Pawar"})
      .select({ name: 1 })
      .sort({name: -1})
      //.countDocuments()
    //  .limit(1);
    // .skit(1)
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
 //  getDocument();

             // update the document
           const updateDocument  = async (_id) => {
                  try {
                    const result =  await Playlist.updateOne({_id}, {$set: {name: "Java"}})
                    console.log(result);
                  }catch(err) {
                      console.log(err);
                  }
           }
         //  updateDocument("61d576368994bfe13b9e5ebe")

                        // delete the document
                          const deleteDocument = async () => {
                           try {
                            const result =  await Playlist.deleteMany({active: true})
                            console.log(result);
                           }catch(err) {
                               console.log(err);
                           }
                          }
               //    deleteDocument()