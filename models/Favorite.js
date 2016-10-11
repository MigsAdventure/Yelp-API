const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const filename = path.join(__dirname, '../data/favorites.json');

exports.getAll = function(cb) {
  fs.readFile(filename, (err, buffer) => {
    if(err) return cb(err);
    try {
      var data = JSON.parse(buffer);
    } catch(e) {
      var data = [];
    }
    cb(null, data);
  })
}

exports.write = function(newData, cb) {
  let json = JSON.stringify(newData);
  fs.writeFile(filename, json, cb);
}

exports.create = function(newItem, cb) {
  exports.getAll((err, items) => {
    if(err) return cb(err);
    items.push(newItem);
    exports.write(items, cb);
  })
}

exports.delete = function(req, cb){
  exports.getAll((err, favorites) => {
    let deleteFavorite = req.params.id;
    let newfavorites = favorites.filter(favorite => {
      if (favorite.id !== deleteFavorite) {
        return favorite;
      }
    })
    exports.write(newfavorites, cb)
    cb(null, newfavorites)
  })
}



























