import React, {useState} from "react";
import "./Login.scss"
import {api, globalData} from "../../repo/api"
import {Redirect} from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";

export default function Login() {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [error, setError] = useState("")
    let [loggedIn, setLoggedIn] = useState(false)

    async function onLoginClick(){
        try{
            await api.login(username, password)
            setLoggedIn(true);
        } catch (e){
            setError("Login Error")
        }
    }

    if (loggedIn){
        return <Redirect to={"/books"}/>
    }

    return (
        <div>
            <Header></Header>
            <img className="bookish-img" src={"./bookish.png"} width={'60%'} height={'78%'}/>
            <div className="box">
                Don't have an account? <Link to='/register'>Register</Link>
                <h1> Login </h1>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button className="button black-button" style={{background: "#3f3d56"}} onClick={onLoginClick}>Login</button>
                </div>
            </div>
            <h1>{error}</h1>
            <Footer></Footer>
        </div>
    );
}