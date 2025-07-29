import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [login, setLogin] = useState("Login");
    const changeMessage = ()=>{
        if(login == "Login"){
            setLogin("Logout");
            
        }
        else{
            setLogin("Login");
        }
    }

    //if no dependency array => useEffect is called on every render
    //if the dependency array is empty => useEffect is called on initial render(just once)
    //if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact changes
    useEffect(()=>{
        console.log('Header rendered');
    },[])

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={()=>{
                        changeMessage()
                    }}>{login}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;