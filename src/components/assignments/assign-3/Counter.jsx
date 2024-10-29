import { useState } from "react";

function Counter() {
    let [counter,setCounter]=useState(0);
    function handleIncrement(){
        setCounter(counter+1);
    }
    function handleDecrement(){
        setCounter(counter-1);
    }
    function handleReset(){
        setCounter(counter-counter);
    }
  return (
    <div className="container text-center">
        <h1 className="display-1 m-4 text-primary">Counter</h1>
        <h3 className="display-3 m-4 text-success"> Value of the count: {counter}</h3>
        <div className="d-flex g-5 justify-content-evenly m-5 p-3">
            <button className="bg-warning" onClick={handleIncrement}>Increment Counter</button>
            <button className="bg-warning" onClick={handleDecrement}>Decrement Counter</button>
            <button className="bg-warning" onClick={handleReset}>Reset Counter</button>
        </div>
    </div>
  )
}

export default Counter;