
//const mongodb = require('mongodb');

const mongoURI = "mongodb://Rohit:rohit@ac-pm5bttv-shard-00-00.vrcqw6n.mongodb.net:27017,ac-pm5bttv-shard-00-01.vrcqw6n.mongodb.net:27017,ac-pm5bttv-shard-00-02.vrcqw6n.mongodb.net:27017/?ssl=true&replicaSet=atlas-pd64sh-shard-0&authSource=admin&retryWrites=true&w=majority" + "/covidtally"

let mongoose = require('mongoose');
const { tallySchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
collection_connection = mongoose.model('covidtally', tallySchema)


exports.connection = collection_connection; 
// module.exports = collection_connection
