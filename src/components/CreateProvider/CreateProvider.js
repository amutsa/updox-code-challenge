import React, { Component } from 'react';
import axios from '../../axios-providers';

import Button from '../CreateProvider/Button/Button';
import Input from '../CreateProvider/Input/Input';
import classes from './CreateProvider.css';
//import Post from '../components/Post/Post';

class CreateProvider extends Component {
    state = {
        submitForm: {
            last_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Fisrt Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email_address: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail address'
                },
                value: '',
                validation: {
                    isEmail: true,
                    required: true
                },
                valid: false,
                touched: false
            },
            specialty: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Speciality'},
                        {value: 'Surgery', displayValue: 'Surgery'},
                        {value: 'Pediatrics', displayValue: 'Pediatrics'},
                        {value: 'Endocrinology', displayValue: 'Endocrinology'},
                        {value: 'Podiatry', displayValue: 'Podiatry'},
                    ]
                },
                value: '',
                validation:{},
                valid: true
            },
            practice_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Practice Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    formHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.submitForm) {
            formData[formElementIdentifier] = this.state.submitForm[formElementIdentifier].value;
        }
        const data = {
            formData: formData
        }
        axios.post( '/dataSource.json', data )
            .then(
                response => console.log(response)/*  response => {
                this.setState( { loading: false } );
                this.props.history.push( '/'  );
            }*/ ).catch(error => console.log(error) /* error => {
                this.setState( { loading: false } );
            }  */);
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
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
        const updatedsubmitForm = {
            ...this.state.submitForm
        };
        const updatedFormElement = { 
            ...updatedsubmitForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedsubmitForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedsubmitForm) {
            formIsValid = updatedsubmitForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({submitForm: updatedsubmitForm, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.submitForm) {
            formElementsArray.push({
                id: key,
                config: this.state.submitForm[key]
            });
        }
        let form = (
            <form onSubmit={this.formHandler}>
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
                <Button btnType="Success" disabled={!this.state.formIsValid}>Submit</Button>
            </form>
        );

        return (
            <div className={classes.CreateProvider}>
                <h3>Create Provider</h3>
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


