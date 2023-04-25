// Importing required modules
const MongoClient = require('mongodb').MongoClient;

// Connection URI
const uri = "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority";

// Creating a new MongoClient instance
const client = new MongoClient(uri);

// Connect to the MongoDB server
client.connect(err => {
  if (err) {
    console.log(`Error occurred while connecting to MongoDB Atlas: ${err}`);
  } else {
    console.log("Connected successfully to MongoDB Atlas");
  }

  // Creating a new database and collection for job postings
  const jobBoardDB = client.db("jobboard");
  jobBoardDB.createCollection("postings", (err, res) => {
    if (err) {
      console.log(`Error occurred while creating job postings collection: ${err}`);
    } else {
      console.log("Job postings collection created successfully!");
    }
  });

  // Close the client connection
  client.close();
});
const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Insert a single document
  const job = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    location: document.getElementById('location').value,
    deadline: document.getElementById('deadline').value,
    contactPhone: document.getElementById('contactPhone').value,
    contactEmail: document.getElementById('contactEmail').value
  };
  db.collection('jobs').insertOne(job, function(err, result) {
    console.log("Job listing data inserted into the collection");
    client.close();
  });
});
