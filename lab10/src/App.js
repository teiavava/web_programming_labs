import './App.scss';
import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import BookList from "./pages/books/BookList";

import {api, globalData} from "./repo/api"
import AuthorsList from "./pages/authors/AuthorsList";
import {AddAuthor} from "./pages/authors/AddAuthor";
import {AddBook} from "./pages/books/AddBook";

function App() {
    let [isLoggedIn, setLoggedIn] = useState(false);
    globalData.setLoggedIn = setLoggedIn

    return <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route path="/authors/add">
                        <AddAuthor/>
                    </Route>
                    <Route path="/books/add">
                        <AddBook/>
                    </Route>
                    <Route path="/authors">
                        <AuthorsList/>
                    </Route>
                    <Route path="/books">
                        <BookList/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
}

export default App;
