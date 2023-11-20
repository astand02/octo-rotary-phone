const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const mongoose = require("mongoose");

const users = [
  {
    username: "John",
    email: "1234@email.com",
    thought: []
},
];

console.log(connection);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing students
  await User.deleteMany({});

  // Adds seed data to database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});

