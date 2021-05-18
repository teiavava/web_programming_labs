import Header from "../../components/header/Header";
import "./Books.scss"
import React, {useState} from "react";
import {api} from "../../repo/api";
import {Redirect} from "react-router";

export function AddBook() {
    let [name, setName] = useState("");
    let [authorId, setAuthorId] = useState("");
    let [bookAdded, setBookAdded] = useState(false);

    async function addBook(){
        await api.addBook({name, authorId});
        setBookAdded(true);
    }

    if(bookAdded){
        return <Redirect to="/books"/>
    }

    return <>
        <Header></Header>
        <h1> Add Book </h1>
        <label>
            <p>Name</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
            <p>Author ID</p>
            <input type="text" value={authorId} onChange={(e) => setAuthorId(e.target.value)}/>
        </label>
        <div>
            <button className="button black-button" style={{background: "#3f3d56"}} onClick={addBook}>Add Book</button>
        </div>
    </>
}