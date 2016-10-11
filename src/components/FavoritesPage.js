import React, {Component} from 'react'
import uuid from 'uuid';

import YelpActions from '../actions/YelpActions'
import YelpStore from '../stores/YelpStore'


export default class FavoritesPage extends Component {
  constructor() {
    super();

    this.state = {
      favorites: YelpStore.getFavorites()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    YelpActions.fetchFavorites();
    YelpStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    YelpStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      favorites: YelpStore.getFavorites()
    })
  }

  deleteFavorite(id) {
    YelpActions.deleteFavorite(id);
  }

  render() {
    let {favorites} = this.state;
    return (
      <div>
        <h1>Favorites</h1>
        {
          favorites.map(business => {
            return (
                <div key={uuid()} className='col-xs-3'>
                  <h3>{business.name}</h3>
                  <img className='searchImage' src={business.image}/>
                  <h4>{business.location}</h4>
                  <h4>{business.phone}</h4>
                  <img src={business.rating} alt=""/>
                  <button className="btn btn-danger delBtn"  onClick={this.deleteFavorite.bind(this, business.id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}
