// Create web server 
// Create a comments array in memory
// Create a route to handle POST requests
// Create a route to handle GET requests
// Create a route to handle DELETE requests
// Create a route to handle PUT requests
// Start the web server
// Test the web server using Postman

// Import the express module
const express = require('express');
// Import the body-parser module
const bodyParser = require('body-parser');
// Create a new web server
const app = express();
// Define the port number
const port = 3000;
// Create an array to store the comments
let comments = [];
// Use the body-parser middleware
app.use(bodyParser.json());
// Create a route to handle POST requests
app.post('/comments', (req, res) => {
    // Get the comment from the request body
    let comment = req.body;
    // Add the comment to the comments array
    comments.push(comment);
    // Send a response with the comment
    res.send(comment);
});
// Create a route to handle GET requests
app.get('/comments', (req, res) => {
    // Send a response with the comments array
    res.send(comments);
});
// Create a route to handle DELETE requests
app.delete('/comments/:id', (req, res) => {
    // Get the comment id from the request parameters
    let id = req.params.id;
    // Find the comment with the given id
    let comment = comments.find(c => c.id == id);
    // Delete the comment from the comments array
    comments = comments.filter(c => c.id != id);
    // Send a response with the deleted comment
    res.send(comment);
});
// Create a route to handle PUT requests
app.put('/comments/:id', (req, res) => {
    // Get the comment id from the request parameters
    let id = req.params.id;
    // Get the updated comment from the request body
    let comment = req.body;
    // Find the comment with the given id
    let index = comments.findIndex(c => c.id == id);
    // Update the comment in the comments array
    comments[index] = comment;
    // Send a response with the updated comment
    res.send(comment);
});
// Start the web server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// Test the web server using Postman