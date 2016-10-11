import axios from 'axios';
import ServerActions from './actions/ServerActions';



const API = {
    searchResults(results) {
     axios.get(`http://localhost:8000/searchResults?name=${results.name}&location=${results.location}`)
     .then(response => {
      ServerActions.receiveSearchResults(response.data.businesses); 
     })
     .catch(err => {
      console.log('err: ', err)
     })
    },

    sendDetails(details) {
      axios.get(`http://localhost:8000/details/${details}`)
      .then(response => {
        ServerActions.receiveDetails(response.data)
      })
      .catch(err => {
        console.log('err: ', err);
      })
    },
      
  fetchFavorites() {
    axios.get('http://localhost:8000/favorites')
    .then(response => {
     ServerActions.receiveFavorites(response);
    })
    .catch(err => {
      console.log('err: ', err);
    })
  },

  addFavorite(newFavorite){
    axios.post('http://localhost:8000/favorites/', newFavorite)
    .then(response => {
    })
    .catch( err => {
      console.log('err:', err);
    })
  },

  deleteFavorite(delFav) {
    axios.delete(`http://localhost:8000/favorites/${delFav}`)
    .then(response => {
      console.log('del res:' ,response);
      ServerActions.deleteFavorite(response);
      API.fetchFavorites();
    })
    .catch(err => {
      console.log('err: ', err);
    })
  },



}

export default API;