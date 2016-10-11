const Yelp = require('yelp');

const yelp = new Yelp({
  consumer_key: '7A8eMSras5SLcnfTYfLx5A',
  consumer_secret: 'Iul5_vH51Q5_AvTlGjnR95T35mI',
  token: 'jSFgqgpvMYUNSXFpYPQVB_aPxa4iPjfP',
  token_secret: 'Fmj32ccWjZqd-WGUlqBKijyn_yA',
});

exports.yelpSearch = function(req, cb) {
  let search = req.query;
  yelp.search({ term: search.name, location: search.location })
.then(function (data) {
  cb(null, data);
})
.catch(function (err) {
  console.error(err);
});
}

exports.yelpBusiness = function(req, cb) {
  let id = req.params.id;
  yelp.business(`${id}`, function(err, data) {
  if (err) return console.log(error);
  cb(null, data);
});
}



