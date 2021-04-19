import React, {useState} from 'react';
import './Counter.scss'


export default function Counter() {
    const [value, setValue] = React.useState(0);

    async function onIncrement(){
        setValue(value + 1);
    }

    async function onDecrement(){
        setValue(value - 1);
    }

    async function onReset(){
        setValue(0);
    }

    return (
        <div className="box">
            <p>{value}</p>
            <button className="button black-button" onClick={onIncrement}>Increment</button>
            <button className="button black-button" onClick={onDecrement}>Decrement</button>
            <button className="button black-button" onClick={onReset}>Reset</button>
        </div>
    );
}