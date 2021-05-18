import React, {useState, useEffect} from "react";
import {api, globalData} from "../../repo/api"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Author from "../../components/author/Author"
import Table from "../../components/Table";
import {Link} from "react-router-dom";

function AuthorsList() {
    let [authors, setAuthors] = useState([]);
    let [isLoading, setLoading] = useState(false);

    async function loadAuthors() {
        setAuthors([]);
        setLoading(true)
        let res = await api.getAuthors();
        setLoading(false)
        setAuthors(res.data.response)
    }

    useEffect(() => {
        loadAuthors()
    }, [])

    let header = ["First Name", "Last Name"];
    let data=[];

    if(authors.length){
        data = authors.map(({firstName, lastName}) => [firstName, lastName]);
    }

    async function deleteAuthor(authorIdx){
        let author = authors[authorIdx];
        await api.deleteAuthor(author.id);
        await loadAuthors();
    }

    return (
        <div>
            <Header></Header>
            <h3 style={{color: "gray"}}>{authors.length} authors added</h3>
            <h3><Link to="/authors/add">Add author</Link></h3>
            <Table header={header} data={data} onElementDelete={deleteAuthor}/>
            <Footer/>
        </div>
    );
}

export default AuthorsList;