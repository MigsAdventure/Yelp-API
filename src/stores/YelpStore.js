import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _searchResults = [];
let _details = [];
let _favoriteList = [];

class YelpStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      let { type, payload } = action;
      switch (type) {
        case 'RECEIVE_SEARCH_RESULTS': 
              {
              let searchResults = payload.results;
              let resultsObj = searchResults.map(business => {
                return {
                  name: business.name, 
                  phone: business.display_phone,
                  image: business.image_url,
                  rating: business.rating_img_url,
                  location: business.location.city,
                  id: business.id
                }
              })
              _searchResults = resultsObj;
              this.emit('CHANGE');
             }break;

        case 'RECEIVE_DETAILS' : 
              {
                let details = payload.details;
                _details = {
                  name: details.name,
                  reviewCount: details.review_count,
                  rating: details.image_url,
                  reviewSnip: details.snippet_text,
                  image: details.image_url,
                  phone: details.display_phone,
                  address: details.location.display_address,
                  hood: details.location.neighborhoods
                }
                this.emit('CHANGE');
              }break;

        case 'RECEIVE_FAVORITES' :
              {
                _favoriteList =  payload.favorites.data;
                this.emit('CHANGE');
              }break;

      }
    })

  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getSearchResults() {
    return _searchResults;
  }

  getDetails() {
    return _details;
  }

  getFavorites() {
    return _favoriteList;
  }

}

export default new YelpStore();
