import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import '../styles/Post.css';
import helloParh from '../static/posts/Hello World.md'
import GraphCMS from '../services/graphcms';


class Post extends Component {

  constructor(props) {
    super(props)
    this.state = { markdown: '', bar: 'foo'}
    this.graphClient = new GraphCMS(); 

    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    // fetch(helloParh)
    // .then((res) => res.text())
    // .then((text) => {
    //   this.setState({ markdown: text })
    // })

    const data = this.graphClient.fetchPosts();
    this.setState({markdown: data})
    console.log('Current state:', this.state.bar)


  }



  render() {
    const { markdown } = this.state;
    console.log('Markdown source:', markdown)

    return (
      <>
      <ReactMarkdown children={markdown} /> 
      </>
    )
  } 
}

export default Post
