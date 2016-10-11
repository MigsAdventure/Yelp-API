import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveSearchResults(results){
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: {results}
    })
  },

  receiveDetails(details) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_DETAILS',
      payload: {details}
    })
  },

  receiveFavorites(favorites) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FAVORITES',
      payload: {favorites},
    })
  },

  deleteFavorite(favorite) {
    AppDispatcher.dispatch({
      type: 'DELETE_FAVORITE',
      payload: {favorite}
    })
  },

}

export default ServerActions;