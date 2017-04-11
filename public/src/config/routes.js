import React from 'react'
import { Route, Router, browserHistory, IndexRoute, Link, IndexLink } from 'react-router'
import { MainContainer, AboutContainer, PostContainer, NewsContainer, HomeContainer} from '../containers'
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer} >
      <IndexRoute component={HomeContainer} />
      <Route path='news' component={NewsContainer} />
      <Route path='/news/:slug' component ={PostContainer} />
    </Route>
  </Router>
)

export default routes
