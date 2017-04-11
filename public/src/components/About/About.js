import React from 'react'

const About = React.createClass({
  handleGetPage(){
    this.props.getPage('about.json')
  },
  componentDidMount(){
    this.handleGetPage()
  },
  render(){
    return(
      <div className="fade">
      <h4>{this.props.pageData.url}</h4>
      <h1>{this.props.pageData.title}</h1>
      <p dangerouslySetInnerHTML={{__html: this.props.pageData.body}}></p>
        <button onClick={this.handleGetPage}>Get Data</button>

      </div>
      )
  }
})

export default About