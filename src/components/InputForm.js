import React, {Component} from 'react';
import YelpActions from '../actions/YelpActions';
import uuid from 'uuid'

export default class InputForm extends Component {
  constructor() {
    super();
  }

  submit(e) {
    e.preventDefault();
    let {nameInput,locationInput} = this.refs;
    let search = {
      name: nameInput.value,
      location: locationInput.value,
      id: uuid()
    }

    YelpActions.sendSearch(search);
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input className='form-control' ref='nameInput' type="text" placeholder="Business Name"/>
        <input className='form-control' ref='locationInput' type="text" placeholder="Zip or City"/>
        <button className="btn btn-primary">Search</button>
      </form>
      )
  }
}