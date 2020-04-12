import React from 'react' ; 

function Person(props){
    return(
        <h1> {props.name} , age is {props.age} and Date is {props.Date} </h1>
    );
}


export default Person ; 