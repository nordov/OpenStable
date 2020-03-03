import React from "react";
import { Query } from "react-apollo";
import { Route } from "react-router-dom";
import Queries from "../graphql/queries";

const { IS_LOGGED_IN } = Queries;

const App = () => {
    return (
        <div>
            <h1>First Route goes here.</h1>
            {/*This is the first route: <Route exact path="/" component={GodsList} /> */}
        </div>
    );
};

export default App;