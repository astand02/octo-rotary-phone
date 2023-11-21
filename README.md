# Social Network API

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description 

  The Social Network API is a powerful tool that enables users to effortlessly create a simple profile, share their thoughts, respond to their friends' thoughts, and conveniently delete any thoughts, reactions, or users. Additionally, it offers user-friendly code for monitoring user engagement, allowing users to incorporate custom features as desired. This application leverages Mongoose Object Document Mapper for Node.js, MongoDB for a NoSQL database, and Express.js for efficient routing.

  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo Video](#demo-video)
  - [Questions](#questions)

  ## Installation
  To install this application:

  1. Start by cloning the repository
  2. Make sure to install Node.js, MongoDB, Nodemon, and Insomnia (to ensure application runs correctly) 
  3. Run `npm install`
  

  ## Usage 
   To use this application:
   
   1. Open a new command line in main folder.
   2. Run `npm run seed` in command line to seed users into your database.
   3. Run `npm run start` to start application
   4. Open insomnia and type in `localhost:3001/api/_` in the URL bar. 
   
   The following routes can be used in the URL bar in order to manuvour application:
  
  User + Friends
  1. `/api/users` Find All Users
  2. `/api/users/:userId` Find User by Id
  3. `/api/users/:userId/friends/:friendId` Add Friend and Delete Friend

  Thought + Reactions
  1. `/api/thoughts` Find All Thoughts
  2. `/api/thoughts/:thoughtId` Find Thought By Id, Update Thouhts or Delete Thoughts.
  3. `/api/thoughts/:thoughtId/reactions` Add Reaction
  4. `/api/thoughts/:thoughtId/reactions/:reactionId` Delete Reaction

  To end Live Server:
  - Run `CONTROL-C` in command line, `y` to confirm.

  ## Demo Video 

  ### User
  ![User](images/users.gif)

  ### Add/Remove Friends
  ![Friend](images/friends.gif)

  ### Thoughts
  ![Thought](images/thoughts.gif)

  ### Add/Remove Reactions
  ![Reaction](images/reaction.gif)

  ## Questions 
  Feel free to contact me directly at standridgealison@gmail.com for more information about this project. 
  To check out my other github repositories click the link
  https://github.com/astand02.

