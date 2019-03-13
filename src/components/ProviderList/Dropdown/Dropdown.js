import React, { Component } from 'react';
//import { Sizes } from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import styles from './Dropdown.css';

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

  render() { 
    const names = [["first_name", "first name"],["last_name", "last name"],["specialty","specialty"],["practice_name","practice_name"]]
    const { orderBy, order, doOrderBy, doOrder } = this.props;
    const checked = <span> <Glyphicon glyph="ok"/> </span>;
    //input was removed.
    const output = names.map((item)=>{
        return <li><a /*href="#"*/ onClick={ doOrderBy }  data-value={ item[0]}>{item[1] } { orderBy === item[0] ? checked : null }</a></li>
    });      
          
    return (
      <div className={styles.Dropdown}>
      <div className={styles.Button} onClick={this.show}> Sort </div>
          { this.state.display ?
            (<ul className={styles.dropdownmenu}>
              { output }
              <li className="divider"></li>
              <li><a /*href="#"*/ onClick={ doOrder } data-value="asc">ascendind { order === "asc" ? checked : null }</a></li>
              <li><a /*href="#"*/ onClick={ doOrder } data-value="desc">descending { order === "desc" ? checked : null }</a></li>
            </ul>):(null)
          }
      </div>  
   )   
  }
}

export default Dropdown;

/* state = {
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
      <div className={styles.Dropdown}>
      <div className={styles.Button} onClick={this.show}> Sort </div>

       { this.state.display ? (
       <ul>
      <li><a className={styles.active} href="#Last Name">Last Name</a></li>
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
} */
