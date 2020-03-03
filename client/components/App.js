import React from "react";
import Splash from "./splash/splash";
import { Query } from "react-apollo";
import { Route } from "react-router-dom";
import Queries from "../graphql/queries";

const { IS_LOGGED_IN } = Queries;

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Splash} />
        </div>
    );
};

export default App;