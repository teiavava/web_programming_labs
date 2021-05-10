import React from "react";
import "./Author.scss"

function Author(props) {
    return <div className="author">
        <div className='col1'>
        </div>
        <div className='col2'>
            <h2>{props.firstName}</h2>
            <h2>{props.lastName}</h2>
            <h3>{props.id}</h3>
        </div>
    </div>
}

export default Author;