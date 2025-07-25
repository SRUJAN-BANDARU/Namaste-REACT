import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
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
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
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