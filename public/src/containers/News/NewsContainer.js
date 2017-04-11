import React from 'react'
import News from '../../components/News/News'
import { objToArray } from '../../helpers/utils'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActionCreators from '../../redux/modules/page'


const NewsContainer = React.createClass({
  handleGetPage(){
    this.props.getPage('news')
  },
  componentDidMount(){
    this.handleGetPage()
  },
  render(){
    return (
        <News pageData={this.props.pageData}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)