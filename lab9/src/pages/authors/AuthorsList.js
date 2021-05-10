import React, {useState, useEffect} from "react";
import {api, globalData} from "../../repo/api"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Author from "../../components/author/Author"

function AuthorsList() {
    let [authors, setAuthors] = useState([]);
    let [isLoading, setLoading] = useState(false);

    async function loadAuthors() {
        setLoading(true)
        let res = await api.getAuthors();
        setLoading(false)
        setAuthors(res.data.response)
    }

    useEffect(() => {
        loadAuthors()
    }, [])

    return (
        <div>
            <Header></Header>
            <h3 style={{color: "gray"}}>{authors.length} authors added</h3>

            {authors.map(author => (
                <Author firstName={author.firstName} lastName={author.lastName} id={author.id}></Author>
            ))}
            <Footer/>
        </div>
    );
}

export default AuthorsList;