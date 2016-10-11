import React, { Component } from 'react'
import InputForm from './InputForm'
import SearchTable from './SearchTable'

export default class SearchPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Business Search</h1>
        <div className='row'>
          <InputForm />
        </div>
        <div className='row'>
          <SearchTable />
        </div>

      </div>
    )
  }
}
