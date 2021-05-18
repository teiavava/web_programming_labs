import Header from "../../components/header/Header";
import "./Authors.scss"
import React, {useState} from "react";
import {api} from "../../repo/api";
import {Redirect} from "react-router";

export function AddAuthor() {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [authorAdded, setAuthorAdded] = useState(false);

    async function addAuthor(){
        await api.addAuthor({firstName, lastName});
        setAuthorAdded(true);
    }

    if(authorAdded){
        return <Redirect to="/authors"/>
    }

    return <>
        <Header></Header>
        <h1> Add Author </h1>
        <label>
            <p>First Name</p>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <label>
            <p>Last Name</p>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label>
        <div>
            <button className="button black-button" style={{background: "#3f3d56"}} onClick={addAuthor}>Add Author</button>
        </div>
    </>
}