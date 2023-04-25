// Importing required modules
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Connection URI
const uri = "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority";

// Creating a new express app
const app = express();

// Setting up a route for job postings
app.get('/job-postings', (req, res) => {

  // Creating a new MongoClient instance
  const client = new MongoClient(uri);

  // Connect to the MongoDB server
  client.connect(err => {
    if (err) {
      console.log(`Error occurred while connecting to MongoDB Atlas: ${err}`);
      res.send(`Error occurred while connecting to MongoDB Atlas: ${err}`);
    } else {
      console.log("Connected successfully to MongoDB Atlas");

      // Fetching the job postings data from the collection
      const jobBoardDB = client.db("jobboard");
      const jobPostingsCollection = jobBoardDB.collection("postings");
      jobPostingsCollection.find({}).toArray((err, result) => {
        if (err) {
          console.log(`Error occurred while fetching job postings data: ${err}`);
          res.send(`Error occurred while fetching job postings data: ${err}`);
        } else {
          console.log(`Fetched ${result.length} job postings`);

          // Rendering the job postings data on a web page
          let html = '<h1>Job Postings</h1><ul>';
          for (let posting of result) {
            html += `<li><h3>${posting.title}</h3><p>${posting.description}</p><p>Location: ${posting.location}</p><p>Deadline: ${posting.deadline}</p><p>Contact Phone: ${posting.contactPhone}</p><p>Contact Email: ${posting.contactEmail}</p></li>`;
          }
          html += '</ul>';
          res.send(html);
        }

        // Close the client connection
        client.close();
      });
    }
  });
});

// Starting the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
