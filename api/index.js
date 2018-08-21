const express = require('express')
const bodyParser = require('body-parser');
// Create express instnace
const app = express()

// Require API routes
const routes = require('./routes/api')

app.use(bodyParser.json())
// Import API Routes
app.use(routes)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
