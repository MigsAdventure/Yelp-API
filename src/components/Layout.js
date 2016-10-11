import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import YelpActions from '../actions/YelpActions';


export default class Layout extends Component {
  constructor() {
    super();
  }


  render() {
    let path = this.props.location.pathname;
    return(
      <div className="container">
        <h1 className="text-center">Yelp API</h1>

          <ul className="nav nav-tabs">
      
            <li role="presentation" className={classNames({ active: path === '/'})}>
              <Link to='/'>Search</Link>
            </li>
            <li role="presentation" className={classNames({ active: path === `/details/${this.props.params.id}`})}>
              <Link to={`/details/${this.props.params.id}`} >Details</Link>
            </li>
            <li role='presentation' className={classNames({ active: path === '/favorites'})}>
              <Link to='/favorites'>Favorites</Link>
            </li>
        </ul>
        {this.props.children}
      </div>
      )
  }
}