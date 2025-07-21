{/* <div id="parent">
    <div id="child">
        <h1>This is the first heading</h1>
        <h2>This is the second heading</h2>
    </div>
</div> */}

import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

/*

    Component overview

    Header
     - Logo
     - Nav Items
    
    Body
     - Search
     - Restaurant container
        - Restaurant card
            - Img
            - Name of Res, Star Rating, Cuisine, delivery time
    
    Footer
     - Copyright
     - Links
     - Address
     - Contact


*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51uyzBl1_6QnPPORZTKqlKU5yGN7-3cS0Og&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQFjEMeWI2rkKKYTCyy_l6rQd7J0w13fe6g&s" alt="res-logo"/>
            <h3>{props.resName}</h3>
            <h4>{props.item}, {props.cuisine}, {props.region}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time} minutes</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" item = "Biriyani" cuisine = "South Indian" region="Asian" rating = "4.4" time = "38"/>
                <RestaurantCard resName="KFC" item = "Chicken" cuisine = "South Indian" region="Asian" rating = "4.4" time = "38"/>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}



const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)