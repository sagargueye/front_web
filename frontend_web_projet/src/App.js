import logo from './logo.svg';
import Home from  './pages/home';
import menu_nav from "./pages/menu_nav";
import React from "react";

function App() {
  return (
        <div className="Home">
            <Home/>

            {Home}
        </div>

      /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
*/
  );
}

export default App;
