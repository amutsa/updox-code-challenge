import React, { Component } from 'react';
//import axios from 'axios';

import CreateProvider from '../components/CreateProvider/CreateProvider';
import ProviderList from '../components/ProviderList/ProviderList';



import './ContainedBlog.css';


class ContainedBlog extends Component {

  render() {

    return (
        <div className = "content-wrapper">
          <CreateProvider></CreateProvider>
          <ProviderList></ProviderList>
        </div>
        );
  }
}

export default ContainedBlog;

/*
  state = {
    posts: [],
    checkbox:false
  }
  componentDidMount () {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response =>{this.setState({posts: response.data});
      //console.log(response);
    });


  }

  handleCheckbox(e){
  	let value = e.target.checked;
    this.setState({checkbox: value})
  }
  handleInput(e){
  	let value = e.target.value;
    this.setState({author: value}, {title: value})
  }
*/


  /*  const posts = this.state.posts.map(post => {
      return <div className="Post">
      <div><input type="checkbox" onChange={this.handleCheckbox.bind(this)}/></div>
               
                  
                  <div><Post key={post.id} title={post.title}/></div>                             
             </div>
    })
    */