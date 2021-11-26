// import React, { Component } from "react";
import React from 'react';

// function Person() {

//     return (
//         <div>
//             <h1>Tor nanir putki shoi</h1>
//         </div>
//     );
// }

//arrow function
let Person = (props) => {
    // console.log(props);
    return (
        <div>
            {/* <h1>Number: {Math.random()}</h1> */}
            <h1>Name: {props.name} and Age: {props.age} years </h1>
            <h4>Extra info {props.children}</h4>
        </div>
    );
}

// class Person extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         //console.log(this.props);
//         return (
//             <div>
//                 <h1>Name: {this.props.name} and Age: {this.props.age} years </h1>
//                 <h4>Extra info {this.props.children}</h4>
//             </div>
//         );
//     }
// }

export default Person;