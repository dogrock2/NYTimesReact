import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home"



const App = () =>

    <Router>
        <div>
            <Header />
            <div className={"container"}>
                <Route exact path="/" component={Home} />
            </div>
        </div>
    </Router>;

export default App;