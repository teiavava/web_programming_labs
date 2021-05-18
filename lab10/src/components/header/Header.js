import React from "react";
import "./Header.scss"
import {Link} from "react-router-dom";

const Header = () => (
    <div>
        <div className="my-header">
            <div className="one">UPB</div>
            <div className="two">BOOKISH</div>
        </div>
        <Link to="/books" style={{margin: "20px"}}>Books</Link>
        <Link to="/authors">Authors</Link>
    </div>
);

export default Header;