import React, { Component } from "react";
import stableCSS from "./stable.css";
import StableMap from './stable_map';

class Stable extends Component{

    render(){
        return(
            <div>
                <h1>Stables Component</h1>
                <StableMap id={'5e5e040729bcea4a739b5460'}/>
            </div>
        );
    };
}

export default Stable;