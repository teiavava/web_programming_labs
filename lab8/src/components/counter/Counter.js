import React, {useState, useEffect} from 'react';
import './Counter.scss'


function ElementsList(props) {
    const elements = [];

    for (let i = 0; i < props.count; i++) {
        elements.push(<img src={"./mini-icon.png"} alt="mini-icon" height={18} width={18} />);
    }

    return elements;
}


export default function Counter() {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        document.title = "Updated value to " + value
        // alert.show
    })

    async function onIncrement(){
        setValue(value + 1);
    }

    async function onDecrement(){
        setValue(value - 1);
    }

    async function onReset(){
        setValue(0);
    }

    useEffect(()=>{
        if(value === 0){
            alert("0 strawberries!!")
        }
    })

    return (
        <div>
            <div className="image-box">
                <img className="header-img" src={"./strawberry.jpg"} width={'100%'} height={'100%'}/>
                <p className="header-title">Strawberry Counter</p>
            </div>
            <div className="box">
                <p>{<ElementsList count={value}/>}</p>
                {/*<p>{value}</p>*/}
                <button className="button black-button" style={{background: "#ffa3a3"}} onClick={onIncrement}>Increment</button>
                <button className="button black-button" style={{background: "#ffa3a3"}} onClick={onDecrement}>Decrement</button>
                <button className="button black-button" style={{background: "#5d4141"}} onClick={onReset}>Reset</button>
            </div>
        </div>

    );
}