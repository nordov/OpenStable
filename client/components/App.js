import React from "react";
import { Route } from "react-router-dom";
import Splash from "./splash/splash";

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Splash} />
        </div>
    );
};

export default App;