import React from 'react';

import './Post.css';

const post = (props) => (
    <article  onClick={props.clicked}>
        <div><h6>{props.last_name}, {props.first_name}<br></br>{props.email_address}, {props.specialty}, {props.practice_name}</h6></div>
        {/* <div><h6>{props.specialty}<br></br>{props.practice_name}</h6></div>  */}
    </article>
);

export default post;