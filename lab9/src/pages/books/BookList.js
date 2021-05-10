import React, {useState, useEffect} from "react";
import {api, globalData} from "../../repo/api"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Book from "../../components/book/Book"

function BookList() {
    let [books, setBooks] = useState([]);
    let [isLoading, setLoading] = useState(false);

    async function loadBooks() {
        setLoading(true)
        let res = await api.getBooks();
        setLoading(false)
        setBooks(res.data.response)
    }

    useEffect(() => {
        loadBooks()
    }, [])

    return (
        <div>
            <Header></Header>
            <h3 style={{color: "gray"}}>{books.length} books added</h3>

            {books.map(book => (
                <Book title={book.name} id={book.id}></Book>
            ))}
            <Footer/>
        </div>
    );
}

export default BookList;