const PORT = 8000;

//REQUIRES
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const Favorite = require('./models/Favorite');
const Yelp = require('./models/Yelp');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');


//APP DECLARATION
const app = express();


//GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static('build'));


// WEBPACK CONFIGURATION 
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, noInfo: true
}))

app.use(webpackHotMiddleware(compiler));

//ROUTES

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
})

app.get('/favorites', (req, res) => {
  Favorite.getAll((err, favorites) => {
    if (err) return res.status(400).send(err);
    res.send(favorites);
  })
})


app.get('/searchResults?', (req, res) => {
  Yelp.yelpSearch(req, (err, results) => {
    if(err) return res.status(400).send(err);
    res.send(results);
  })
})

app.get('/details/:id', (req, res) => {
  Yelp.yelpBusiness(req, (err, data) => {
    if(err) return res.status(400).send(err);
    res.send(data)
  })
}) 

app.post('/favorites', (req, res) => {
  Favorite.create(req.body, err => {
    if(err) return res.status(400).send(err);
    res.send(req.body)
  })
})

app.delete('/favorites/:id', (req, res) => {
  Favorite.delete(req, (err,favorites)   => {
    if(err) return res.status(400).send(err);
     res.send(favorites);
  })
 
})

app.put('/favorites/:id', (req, res) => {
  Favorite.update(req, err => {
    if(err) return res.status(400).send(err);
  })
  res.send('updated favorites');
})




// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
})




