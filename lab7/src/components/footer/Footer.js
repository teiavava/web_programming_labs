import React from "react";
import "./Footer.scss"

const Footer = () => (
    <div>
    <div className="small_footer">
        <div className='col1-small-footer'>UPB 2021</div>
        <div className='col2-small-footer'>Laborator #7 PWEB</div>
    </div>
    <div className="main_footer">
        <div className="small-column">
            <div className="row">
                <div className="square" />
            </div>
            <div className="row">
                <p>#4B4B4B</p>
            </div>
            <div className="row">
                <div className="rounded-white-square" />
            </div>
        </div>
        <div className="small-column">
            <div className="row">
                <div className="white-square" />
            </div>
            <div className="row">
                <p>#FFFFFF</p>
            </div>
            <div className="row">
                <p>Border-radius:10px</p>
                <p>box-shadow</p>
            </div>
        </div>
        <div className="large-column">
            <h4>Futura PT</h4>
            <h4 className="h41">lorem ipsum dolor sit amet, comsetetur</h4>
            <h4 className="h42">lorem ipsum dolor sit amet, comsetetur</h4>
            <h4 className="h43">lorem ipsum dolor sit amet, comsetetur</h4>
        </div>
        <div className="large-column">
            <h4 className="h45">Futura PT</h4>
            <h4 className="h44">lorem ipsum dolor sit amet, comsetetur</h4>
            <h4 className="h45">lorem ipsum dolor sit amet, comsetetur</h4>
            <h4 className="h46">lorem ipsum dolor sit amet, comsetetur</h4>
        </div>
    </div>
    </div>
);

export default Footer;