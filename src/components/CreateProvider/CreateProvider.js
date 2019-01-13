import React, { Component } from 'react';
import axios from 'axios';

import Button from '../CreateProvider/Button/Button';
import Input from '../CreateProvider/Input/Input';
import classes from './CreateProvider.css';

class CreateProvider extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push( '/' );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );

        return (
            <div className={classes.CreateProvider}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default CreateProvider;




/*{
     state = {
        last_name: '',
        first_name: '',
        email_address: '',
        speciality: '',
        practice_name: ''
    }

    postDataHandler = () => {
        const data = {
            last_name: this.state.last_name,
            first_name: this.state.first_name,
            email_address: this.state.email_address,
            speciality: this.state.speciality,
            practice_name: this.state.practice_name
        };
        axios.post(' http://localhost:3001/src/text ', data).then(response => {console.log(response)});
    }
 */


/*
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
    }

    render () {

        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}
*/

       /* let post = null;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <section className= "ProviderList-wrapper"
                >
                <div className="FullPost">
                    <div>
                        <p>{this.state.loadedPost.title},{this.state.loadedPost.first_name}</p>
                        <p>{this.state.loadedPost.body}</p>
                    </div>
                    <div>
                        <p>{this.state.loadedPost.email_address}</p>
                        <p>{this.state.loadedPost.practice_name}</p>
                    </div>
                </div>
                <div className="Edit">
                    <button onClick={this.deletePostHandler} className="Delete">Remove</button>
                </div>
                </section>
            );
        }
        return post;*/
/* 
    render () {
        return (
            <div className= "CreateProvider-wrapper">
                <h3>Create Provider</h3>
                <label>Last Name</label>
                <input type="text" value={this.state.last_name} onChange={(event) => this.setState({last_name: event.target.value})} />
                <label>First Name</label>
                <input type="text" value={this.state.first_name} onChange={(event) => this.setState({first_name: event.target.value})} />

                <label>Email Address</label>
                <input type="text" value={this.state.email_address} onChange={(event) => this.setState({email_address: event.target.value})} />

                <label>Speciality</label>
                <input type="text" value={this.state.speciality} onChange={(event) => this.setState({speciality: event.target.value})} />

                <label>Practice Name</label>
                <input type="text" value={this.state.practice_name} onChange={(event) => this.setState({practice_name: event.target.value})} />
               
                <button onClick={this.postDataHandler}>Submit</button>
            </div>
        );
    }
}
 */

