const express = require('express');
const path = require('path');

const app = express();

// Serve the main directory
app.use(express.static(path.join(__dirname)));

// Serve the React app
app.use('/build', express.static(path.join(__dirname, 'treact', 'build')));

// Set the correct MIME type for CSS files
app.get('*.css', (req, res, next) => {
  res.contentType('text/css');
  next();
});

// Catch-all route for the React app
app.get('/build/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'treact', 'build', 'index.html'));
});

// Serve the main index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
