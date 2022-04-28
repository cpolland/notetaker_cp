const express = require('express');
//const path = require('path');
const apiRoutes = require('./routes/apiroutes');
const viewroutes = require("./routes/viewroutes")

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/',viewroutes)


// TODO: GET route for 404 page

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
