import React, {useState, useEffect} from "react";
import {api, globalData} from "../../repo/api"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Book from "../../components/book/Book"
import Table from "../../components/Table";
import {Link} from "react-router-dom";

function BookList() {
    let [books, setBooks] = useState([]);
    let [isLoading, setLoading] = useState(false);

    async function loadBooks() {
        setBooks([])
        setLoading(true)
        let res = await api.getBooks();
        setLoading(false)
        setBooks(res.data.response)
    }

    useEffect(() => {
        loadBooks()
    }, [])


    let header = ["Id", "Name"];
    let data=[];

    if(books.length){
        data = books.map(({id, name, authorId}) => [id, name]);
    }


    async function deleteBook(bookIdx){
        let book = books[bookIdx];
        try{
            await api.deleteBook(book.id);
        } catch (e){
            console.log(e);
        }
        
        await loadBooks();
    }


    return (
        <div>
            <Header></Header>
            <h3 style={{color: "gray"}}>{books.length} books added</h3>
            <h3><Link to="/books/add">Add book</Link></h3>
            <Table header={header} data={data} onElementDelete={deleteBook}/>
            <Footer/>
        </div>
    );
}

export default BookList;