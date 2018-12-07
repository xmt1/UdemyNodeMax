const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//404
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});




app.listen(3000);