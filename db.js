// Define the 'users' collection schema
const usersSchema = {
  email: { type: String, required: true },
  password: { type: String, required: true },
};

// Create the 'users' collection
const usersCollection = db.collection('users');

// Insert a new user into the 'users' collection
async function createUser(email, password) {
  try {
    const result = await usersCollection.insertOne({ email, password });
    console.log(`User ${email} created with ID: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
  }
}

// Find a user in the 'users' collection by email and password
async function findUser(email, password) {
  try {
    const user = await usersCollection.findOne({ email, password });
    return user;
  } catch (error) {
    console.error(error);
  }
}

// Export the 'createUser' and 'findUser' functions
module.exports = { createUser, findUser };
