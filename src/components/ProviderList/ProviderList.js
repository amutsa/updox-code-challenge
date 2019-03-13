import React, { Component } from 'react';
import axios from '../../axios-providers';
import Post from '../../components/Post/Post';
import Dropdown from './Dropdown/Dropdown';
//import Update from '../Update/Update';
import _ from 'lodash';
import styles from'../ProviderList/ProviderList.css';
import style from '../Post/Post.css';


class ProviderList extends Component {
    
    state = {
        posts: [],
        loading: true,
        selectedPostId: null,
        orderBy: "first_name",
        order: "asc",
      }

      doOrderBy = this.doOrderBy.bind(this);
      doOrder = this.doOrder.bind(this);

      doOrderBy(e){
        e.preventDefault();
        const newOrderBy = e.target.getAttribute('data-value');
        this.setState({orderBy : newOrderBy});
      }

      doOrder(e){
        e.preventDefault();
        const newOrder = e.target.getAttribute('data-value');
        this.setState({order : newOrder});
      }


      componentDidMount () {
        axios.get('/dataSource.json')
          .then(response =>{
            const fetchedData = [];
            for (let key in response.data){
              fetchedData.push({
                ...response.data[key],
                id: key
              });
            }
            this.setState({loading: false, posts: fetchedData});
            console.log(response);
        }).catch(err => {
          this.setState({loading: false});
        });
      }

    handleCheckbox = (id) => {
      this.setState({selectedPostId: id})
      console.log({selectedPostId: id})
    }

   render() {

    const orderBy = this.state.orderBy;
    const order = this.state.order;
    
    let sorted = this.state.orderData;
    
    sorted = _.orderBy(sorted, (item) => {return item[orderBy]}, order);     
    
    const items = sorted.map((item)=>{
      return <Post data={ item } key={ item.id } orderBy={ this.state.orderBy } /> 
    }); 
    
        const posts = this.state.posts.map(post => {
     
          return  <div className={style.Post}>
                    <div>
                      <input type="checkbox" 
                                onChange={this.handleCheckbox.bind(this)}
                                id={this.state.selectedPostId}/>
                    </div>        
                    <div>
                       <Post 
                            key={post.id} 
                            orderData={post.orderData}
                            orderBy={ this.state.orderBy }
                            clicked={() => this.handleCheckbox(post.id)}/>
                    </div>                              
                  </div>
        })
        
        return (
          <section>
            <div className={styles.ProviderListWrapper}>
              <div className={styles.ProviderListSort}>
                <h3>Provider List</h3>
                <Dropdown                   
                doOrderBy={ this.doOrderBy }
                doOrder={ this.doOrder }
                orderBy={ this.state.orderBy }
                order={ this.state.order } />

              </div>  
              <div className= {styles.ProviderList}>
              
                {posts}
              
              </div>
              <div className={styles.Edit} onClick={this.deletePostHandler}><button>Remove</button></div>
            </div>
            
          </section> 
        );
      }
    }
export default (ProviderList);

