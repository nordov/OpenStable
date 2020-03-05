import React from "react";
import Main from "./general_layout/main/main";
import { Query } from "react-apollo";
import Queries from "../graphql/queries";
import resetCSS from "./reset.css";

const { IS_LOGGED_IN } = Queries;

const App = () => {
    return (
        <div>
            <Main />
        </div>
    );
};

export default App;