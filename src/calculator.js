import {useState,useEffect} from "react";
import "./calculator.css"
export default function Calculator() {
    let [value,setValue] = useState("0");
    useEffect(function () {
        console.log(new Date())
    }, [])
    function handleClick(e) {
        setValue(value + e.target.innerText)
    }
    function showResult() {
       setValue(eval(value))
    }
    return (
        <>
            <div id="calculator">
                <input type="text" value={value}/>
                <div className="clac-row">
                    <button onClick={handleClick}>9</button>
                    <button onClick={handleClick}>8</button>
                    <button onClick={handleClick}>7</button>
                </div>
                <div className="clac-row">
                    <button onClick={handleClick}>6</button>
                    <button onClick={handleClick}>5</button>
                    <button onClick={handleClick}>4</button>
                </div>
                <div className="clac-row">
                    <button onClick={handleClick}>3</button>
                    <button onClick={handleClick}>2</button>
                    <button onClick={handleClick}>1</button>
                </div>
                <div className="clac-row">
                    <button onClick={handleClick}>+</button>
                    <button onClick={handleClick}>-</button>
                    <button onClick={handleClick}>/</button>
                </div>
                <div className="clac-row">
                    <button onClick={showResult}>=</button>
                    <button onClick={() => setValue("")}>C</button>
                </div>
            </div>
        </>
    )
}
// HOOK -
// 1. Use State
// 2. useEffect -

// a page , b page - route change
// profile page - profile delete -