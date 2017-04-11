import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Post } from '../../components'
import * as postActionCreators from '../../redux/modules/page'

const PostContainer = React.createClass({
  handleGetPage(){
    this.props.getSinglePage('news/' + this.props.params.slug);
  },
  componentDidMount(){
    this.handleGetPage()
  },
  render(){
    return (
    <div>
        <Post title={this.props.title} body={this.props.body} />
      </div>
      )
  }
})

function mapStateToProps(state){
  console.log(state)
  return {
    title: state.page.singlePageData.title,
    body: state.page.singlePageData.body
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(postActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)