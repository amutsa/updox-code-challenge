import React from 'react';

import styles from './Post.css';


const post = (props) => {
        const orderData = [];

        for (let orderDataName in props.orderData) {
            orderData.push(
                {
                   id: props.orderData[orderDataName] 
                }
            );
        }

        const orderDataOutput = orderData.map(fd => {
            return <span key={fd.id}
                         style= {{
                             display:'inline-block',
                             margin: '0 5px',
                             border: '1px solid #ccc',
                             padding:'5px'
                             }}>
            {fd.id}
            </span>
        });

        return (
    <article onClick={props.clicked}>
        <div className={styles.PostContent} >
        <div><h6>{orderDataOutput[2]}{orderDataOutput[1]}<br/>{orderDataOutput[0]}</h6></div>
        <div><h6>{orderDataOutput[3]}<br/>{orderDataOutput[4]}</h6></div>
            
            
        </div>
    </article>
 );
};
export default post;

/*
import React from 'react';

import styles from './Post.css';


const post = (props) => {
        const orderData = [];

        for (let orderDataName in props.orderData) {
            orderData.push(
                {
                   name: props.orderData[orderDataName] 
                }
            );
        }

        const orderDataOutput = orderData.map(fd => {
            return <span key={fd.name}
                         style= {{
                             display:'inline-block',
                             margin: '0 5px',
                             border: '1px solid #ccc',
                             padding:'5px'
                             }}>
            {fd.name}
            </span>
        });

        return (
    <article onClick={props.clicked}>
        <div className={styles.PostContent} >
            <div><h6>{orderDataOutput[2]}{orderDataOutput[1]}<br/>{orderDataOutput[0]}</h6></div>
            <div><h6>{orderDataOutput[3]}<br/>{orderDataOutput[4]}</h6></div>
        </div>
    </article>
 );
};
export default post;
*/