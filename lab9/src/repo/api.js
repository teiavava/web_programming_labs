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
        token = res.data.response.access_token;
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
        token = res.data.access_token;
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
    // return axios.get(API_HOST + `/books`, {headers: {Authorization: `jwt ${token}`}});
    return axios.get(API_HOST + `/books`, {headers: {Authorization: `jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiQURNSU4iLCJpYXQiOjE2MjA2NDkwMzAsImF1ZCI6InB3IGNsaWVudCIsImlzcyI6InB3IGJhY2tlbmQiLCJzdWIiOiJwdyJ9.YZcQAI7pVFVBQLQDAQjSGhmPyHnQokAQuIXgasxBMuE`}});

}

async function getAuthors() {
    // return axios.get(API_HOST + `/authors`, {headers: {Authorization: `jwt ${token}`}});
    return axios.get(API_HOST + `/authors`, {headers: {Authorization: `jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJSb2xlIjoiQURNSU4iLCJpYXQiOjE2MjA2NDkwMzAsImF1ZCI6InB3IGNsaWVudCIsImlzcyI6InB3IGJhY2tlbmQiLCJzdWIiOiJwdyJ9.YZcQAI7pVFVBQLQDAQjSGhmPyHnQokAQuIXgasxBMuE`}});
}

let api = {
    login, register, getAuthors, getBooks}
export {api, globalData}