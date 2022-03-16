// const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

const url='mongodb+srv://mukul:Pass%400000@cluster0.kdwef.gcp.mongodb.net/interiit?retryWrites=true&w=majority';
let get_db;
MongoClient.connect(url, (err, client) => { 
    if (err) {
        console.log(err);
    } else {
        get_db = client;
        console.log("Connected to MongoDB");
    }
});
console.log("hi");
console.log(get_db);
export default get_db;