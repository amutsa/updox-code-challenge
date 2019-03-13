import React, { Component } from 'react';
import axios from '../../axios-providers';

//import './.css';

class Update extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( '/dataSource.json' + this.props.id )
                    .then( response => {
                       this.setState( { loadedPost: response.data } );
                       // console.log(response);
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/dataSource.json' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {

        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div >
                    <h6>{this.state.loadedPost.orderData}</h6>
                    
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default Update;