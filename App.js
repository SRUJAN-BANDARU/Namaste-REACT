{/* <div id="parent">
    <div id="child">
        <h1>This is the first heading</h1>
        <h2>This is the second heading</h2>
    </div>
</div> */}

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{}, 
    React.createElement("div",{id:"child"}, 
        [React.createElement("h1",null , "This is the rea heading")]
    )
)

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(parent);