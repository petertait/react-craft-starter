import React from 'react'
import  About  from '../../components/About/About'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActionCreators from '../../redux/modules/page'


const AboutContainer = React.createClass({
  render(){

    return (
        <About pageData = {this.props.pageData} getPage={this.props.getPage}/>
      )
  }
})

function mapStateToProps(state){
  return {
    pageData: state.page.data
  }
}

function mapDispatchToProps(dispatch){
  return (bindActionCreators(pageActionCreators, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)