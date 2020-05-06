import React from 'react';
import './App.css';
import NavBar from "./component/navbar";
import Counters from "./component/counters";

function App() {
    return (
        <React.Fragment>
            <NavBar/>
            <main className="container">
                <Counters/>
            </main>
        </React.Fragment>
    );
}

export default App;
