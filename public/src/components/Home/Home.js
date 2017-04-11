import React from 'react'

const Home = React.createClass({
  render(){
    return (
    <div>
      <h1>{this.props.pageData.title}</h1>
      <p dangerouslySetInnerHTML={{__html: this.props.pageData.body }}></p>
    </div>
    )
  }
})

export default Home
