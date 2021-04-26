import React, {useState} from 'react';
import Counter from "./counter/Counter";
import Footer from "./footer/Footer";
import Header from "./header/Header";


export default function Layout() {
    return (
        <div className="flex-container">
            <Header />
            <Counter />
            <Footer />
        </div>
    );
}