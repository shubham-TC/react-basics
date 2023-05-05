import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [count,setCount] = useState(10);

    const someStyle = {
        background:"lightblue",
        color:"white",
        fontSize:"35px",
        fontWeight:"bold",
    };

    function decrement()
    {
        // setCount(count-1);
        setCount(prevCount => prevCount - 1);
    }

    function increment()
    {
        // setCount(count+1);
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <span>{count}</span>
              <button onClick={decrement}>-</button>
              <button onClick={increment}>+</button>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={someStyle}>
          Edit <code>src/App.js</code> and save to reload - nice page refresh without reload ! NICE REACT
          <br/>
          {50 / 5}
<br/>
          {10 * 2 }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
