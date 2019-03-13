import React, { Component } from 'react';
import styles from './App.css';

import ContainedBlog from './containers/ContainedBlog';

class App extends Component {
  render() {
    let paragraph = ['p'].join(' '); /* to change the text color of the v2.0 text in the paragraph.*/

    
    return (
      <div className={styles.App}>
      <h1>Provider Directory</h1>
      <p className={paragraph}>v2.0</p>
        <ContainedBlog/>
      </div>
    );
  }
}

export default App;
