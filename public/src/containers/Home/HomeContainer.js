import React from 'react'
import { Home } from '../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActionCreators from '../../redux/modules/page'

const HomeContainer = React.createClass({
  handleGetPage(){
    this.props.getSinglePage('homepage');
  },
  componentDidMount(){
    this.handleGetPage()
  },
  render(){
    return (
      <Home pageData={this.props.pageData} key={'hello'} />
      )
  }
})

function mapStateToProps(state){
  return {
    pageData: state.page.singlePageData
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(pageActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)