import React from 'react'
import { Main } from '../../components'
import { Link, IndexLink } from 'react-router'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const MainContainer = React.createClass({
  render(){
    return (
      <div>
      <ul>
        <li><IndexLink to={'/'}>Home</IndexLink></li>
        <li><Link to={'/news'}>News</Link></li>
      </ul>
    <ReactCSSTransitionGroup
    component="div"
      transitionName="fade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
      transitionAppear={true}
      transitionAppearTimeout={500}
      >
         {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
      </ReactCSSTransitionGroup>
      </div>
      )
  }
})

export default MainContainer