import React from "react";
import "./Book.scss"

function Book(props) {
    return <div className="book">
        <div className='col1'>
        </div>
        <div className='col2'>
            <h1>{props.title}</h1>
            <h3>{props.id}</h3>
        </div>
    </div>
}

export default Book;