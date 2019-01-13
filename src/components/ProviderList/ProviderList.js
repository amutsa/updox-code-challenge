import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import Dropdown from './Dropdown/Dropdown';


import '../ProviderList/ProviderList.css';


class ProviderList extends Component {
    
    state = {
        posts: [],
        checkbox:false
      }
      componentDidMount () {
        axios.get('dataSource.json')
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
    
      render() {
        const posts = this.state.posts.map(post => {
          return  <div className="Post">
                    <div><input type="checkbox" onChange={this.handleCheckbox.bind(this)}/></div>                    
                    <div><Post 
                    key={post.id} 
                    last_name={post.last_name}
                    first_name={post.first_name}
                    email_address={post.email_address}
                    specialty={post.specialty}
                    practice_name={post.practice_name}/>
                    </div>                             
                  </div>
        })
        
        return (
          <section>
            <div className="ProviderList-wrapper">
              <div className="ProviderList-sort">
                <h3>Provider List</h3>
                <Dropdown></Dropdown>
              </div>  
              <div className= "ProviderList">
              
                {posts}
              
              </div>
              <div className="Edit"><button>Remove</button></div>
            </div>
            
          </section> 
        );
      }
    }
export default ProviderList;

