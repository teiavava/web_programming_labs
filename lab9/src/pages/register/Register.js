import React, {useState} from "react";
import "./Register.scss"
import {api, globalData} from "../../repo/api"
import {Redirect} from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";

export default function Register() {
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [error, setError] = useState("")
    let [loggedIn, setLoggedIn] = useState(false)
    let [register, setRegister] = useState(false)

    async function onRegisterClick(){
        try{
            await api.register(username, password, email)
            setLoggedIn(true);
            console.log("OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
            globalData.setLoggedIn(true);
        } catch (e){
            console.log("NOT OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
            setError("Login Error")
        }
    }

    if(loggedIn){
        return <Redirect to={"/"}/>
    }

    if(register){
        return <Redirect to={"/register"}/>
    }

    return (
        <div>
            <Header></Header>
            <img className="bookish-img" src={"./bookish.png"} width={'60%'} height={'78%'}/>
            <div className="box">
                Already have an account? <Link to='/login'>Login</Link>
                <h1> Register </h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <button className="button black-button" style={{background: "#3f3d56"}} onClick={onRegisterClick}>Register</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}