import React from 'react'
import { Link } from 'react-router'
import {objToArray} from '../../helpers/utils'
import routes from '../../config/routes'

const News = React.createClass({
  render(){
    let items = this.props.pageData
    let list = items.map((item)=>{
      let slug = item.slug
      return (
        <li key={item.url}>
        <Link to={'news/' + slug}><h1>{item.title}</h1></Link>
        <div dangerouslySetInnerHTML={{__html: item.body }}></div>
        </li>
      )
    });

    return (
        <div>
            <ul>
              {list}
            </ul>
        </div>
      )
  }
})

export default News