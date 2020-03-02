import React from "react";
import { Route } from "react-router-dom";
import Splash from "./splash/splash";

const App = () => {
    return (
        <div className="app">
            {/* <h1>First Route goes here.</h1> */}
            <Route exact path="/" component={Splash} />
        </div>
    );
};

export default App;