import React, { Component } from 'react';
//import axios from 'axios';

import CreateProvider from '../components/CreateProvider/CreateProvider';
import ProviderList from '../components/ProviderList/ProviderList';



import styles from './ContainedBlog.css';


class ContainedBlog extends Component {

  render() {

    return (
        <div className = {styles.ContentWrapper}>
          <CreateProvider></CreateProvider>
          <ProviderList></ProviderList>
        </div>
        );
  }
}

export default ContainedBlog;


  /*  const posts = this.state.posts.map(post => {
      return <div className="Post">
      <div><input type="checkbox" onChange={this.handleCheckbox.bind(this)}/></div>
               
                  
                  <div><Post key={post.id} title={post.title}/></div>                             
             </div>
    })
    */