import React from "react";
import '../css/Book.css';

const Book = (props) => {

    return (
        <div className='Book'>
            <h1 onClick={props.change}>Book: {props.bookName}</h1>
            <h3>Writer: {props.writer}</h3>
            <input type='text' onChange={props.inputName} value={props.bookName}></input>
        </div>
    );
}

export default Book;