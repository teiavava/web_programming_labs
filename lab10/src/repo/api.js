import axios from 'axios';
import {useState} from "react";

let IP = "127.0.0.1";
let PORT = "3001"
let API_HOST = "http://" + IP + ":" + PORT + "/api/v1"

let token = localStorage.getItem("token") || "";

let user = {};
let userStr = localStorage.getItem("user");
if(userStr){
    user = JSON.parse(userStr);
}

let globalData = {user: {}}

async function login(username, pass) {
    let res = await axios.post(API_HOST + "/users/login", {username: username, password: pass});
    if (res.status === 200) {
        token = res.data.response.token;

        user = {
            username: username,
            password: pass
        }
        console.log(res.data)
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        globalData.user = user;
    }
    return res;
}

async function register(username, password, email) {
    let res = await axios.post(API_HOST + "/users", {username: username, password: password, email: email});
    if (res.status === 200) {
        token = res.data.token;
        user = {
            email: res.data.email,
            username: res.data.username
        }
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        globalData.user = user;
    }
    return res;
}

async function getBooks() {
    return axios.get(API_HOST + `/books`, {headers: {Authorization: `jwt ${token}`}});

}

async function getAuthors() {
    return axios.get(API_HOST + `/authors`, {headers: {Authorization: `jwt ${token}`}});
}

async function addAuthor(author) {
    return axios.post(API_HOST + `/authors`, author, {headers: {Authorization: `jwt ${token}`}});
}

async function addBook(book) {
    return axios.post(API_HOST + `/books`,book, {headers: {Authorization: `jwt ${token}`}});
}

async function deleteAuthor(authorId) {
    return axios.delete(API_HOST + `/authors/` + authorId, {headers: {Authorization: `jwt ${token}`}});
}

async function deleteBook(bookId) {
    return axios.delete(API_HOST + `/books/` + bookId, {headers: {Authorization: `jwt ${token}`}});
}


let api = {
    login, register, getAuthors, getBooks, deleteAuthor, deleteBook, addAuthor, addBook}
export {api, globalData}