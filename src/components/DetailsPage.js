import React, { Component } from 'react'
import YelpActions from '../actions/YelpActions'
import YelpStore from '../stores/YelpStore'

export default class DetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      details: YelpStore.getDetails()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    YelpStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    YelpStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      details: YelpStore.getDetails()
    })
  }

  render() {
    let {details} = this.state;
    return (
      <div>
        <h1>Details</h1>
        <div className="detailsContainer">
          <h2>{details.name}</h2>
          <img src={details.image}/>
          <img src={details.rating}/>
          <h2>{details.reviewCount}</h2>
          <h2>{details.phone}</h2>
          <h2>{details.address}</h2>
          <h2>{details.hood}</h2>
          <h2>{details.reviewSnip}</h2>
        </div>
      </div>
      )
  }

}