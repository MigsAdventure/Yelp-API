import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import YelpActions from '../actions/YelpActions'
import YelpStore from '../stores/YelpStore';

export default class SearchTable extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.state = {
      results: YelpStore.getSearchResults()
    }
  }

  componentWillMount() {
    YelpStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    YelpStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: YelpStore.getSearchResults()
    })
  }

  getId(id) {
  
    browserHistory.push(`/details/${id}`);
    YelpActions.sendDetails(id);
  }

  setFavorite(business) {
    YelpActions.addFavorite(business);
  }


  render() {
    let {results} = this.state;
    return (
      <div>
        {
          results.map((business, i) => (
            <div key={i}  id={business.id} className='col-xs-3 yelpSquare'>
              <h3>{business.name}</h3>
              <img onClick={() => this.getId(business.id)} className='searchImage' src={business.image}/>
              <h4>{business.location}</h4>
              <h4>{business.phone}</h4>
              <img src={business.rating} alt=""/>
              <button className="btn btn-success"  id={business.id} onClick={this.setFavorite.bind(this, business)}>Favorite</button>
            </div>
          ))
        }
      </div>
    )
  }

}
