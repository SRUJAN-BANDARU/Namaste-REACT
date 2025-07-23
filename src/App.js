{/* <div id="parent">
    <div id="child">
        <h1>This is the first heading</h1>
        <h2>This is the second heading</h2>
    </div>
</div> */}

import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import AppLayout from "./components/AppLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)