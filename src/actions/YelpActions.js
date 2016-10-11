import API from '../API';

const YelpActions = {
  sendSearch(results) {
    API.searchResults(results);
  },

  sendDetails(details) {
    API.sendDetails(details);
  },

  fetchFavorites(fav) {
    API.fetchFavorites(fav);
  },

  addFavorite(fav) {
    API.addFavorite(fav);
  },

  deleteFavorite(fav) {
    API.deleteFavorite(fav);
  }
}
export default YelpActions;