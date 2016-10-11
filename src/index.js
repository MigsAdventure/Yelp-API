import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import YelpStore from './stores/YelpStore'
import Layout from './components/Layout'
import InputForm from './components/InputForm'
import SearchPage from './components/SearchPage'
import SearchTable from './components/SearchTable'
import DetailsPage from './components/DetailsPage'
import FavoritesPage from './components/FavoritesPage'


render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>
      <IndexRoute component={SearchPage}/>
      <Route path='/details/:id' component={DetailsPage}/>
      <Route path='/favorites' component={FavoritesPage}/>
    </Route>

  </Router>,
  document.getElementById('root')
);
