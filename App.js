{/* <div id="parent">
    <div id="child">
        <h1>This is the first heading</h1>
        <h2>This is the second heading</h2>
    </div>
</div> */}

const parent = React.createElement("div",{}, 
    React.createElement("div",{id:"child"}, 
        [React.createElement("h1",null , "This is the first heading"), React.createElement("h2", null, "This is the second heading")]
    )
)

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(parent);