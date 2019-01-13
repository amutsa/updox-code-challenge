import React, { Component } from 'react';


import './Dropdown.css';

class Dropdown extends Component {
    state = {
        display: false
    };

    show = this.show.bind(this);
    hide = this.hide.bind(this);

    show(e) {
      e.preventDefault();
      this.setState({display: true}, () => {
        document.addEventListener('click', this.hide);
      });
    }

    hide() {
      this.setState({display: false}, () => {
        document.removeEventListener('click', this.hide);
      });
    }

    render () {
        return (
            <div className="dropdown">
            <div className="button" onClick={this.show}> Sort </div>
   
             { this.state.display ? (
             <ul>
            <li><a className="active" href="#Last Name">Last Name</a></li>
            <li><a href="#First Name">First Name</a></li>
            <li>Speciality</li>
            <li><a href="#Practice Names">Practice Name</a></li>
            <li divider></li>
            <li><a href="#Asending" divider>Asending</a></li>
            <li><a href="#Desending">Desending</a></li>
             </ul>
           ):
           (
             null
           )
           }
            </div>
        );
    }
}

export default Dropdown;