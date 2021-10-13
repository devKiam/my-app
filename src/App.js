import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";


function App() {

    // array of objects
    let players = [
        {name: "Shakib al Hasan", type: "All-rounder"},
        {name: "Tamim Iqbal", type: "Opener batsman"},
        {name: "Naim Sheikh", type: "Opener batsman"}
    ]

    return (
        <div className="App">
            {
                players.map(player =>
                    <Person name={player.name} type={player.type}/>
                )
            }
            <Counter/>
            <API/>
        </div>
    );
}


// Person component
function Person(props) {
    return (
        <div className="person-class">
            <h1>{props.name}</h1>
            <p>{props.type}</p>
        </div>
    );
}


// state component example
function Counter() {

    let [count, setCount] = useState(0)

    //functions for handling button events + -
    let handleIncrease = () => {
        setCount(++count)
    }
    let handleDecrease = () => {
        setCount(--count)
    }

    // do not call the onClick action function
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}


//component for API users
function API() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            {
                users.map(user => <h3>{user.name}</h3>)
            }
        </div>
    )
}


export default App;
