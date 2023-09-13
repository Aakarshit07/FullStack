import { useState } from "react";
import "./SignIn.css"
import logo from "../../assets/instagram.png"

function Login(){
    const [login, setLogin] = useState(true);

    const switchLogin = () => {
        setLogin(!login)
    }

    return (
        <>
        <div className="main-wrapper">

            <div className="img-container">
                <img src={logo}  className="img"/>
            </div>

            <div className="text-area"> 
                <input hidden={login} type="text"  placeholder='Mobile Number or Email' className="input" />
                <input hidden={login} type="text"  placeholder='Full Name'  className="input" />
                <input type="text" placeholder="Phone number, username, or email" className="input"/>
                <input type="text" placeholder="Password" className="input"/>
                <button className="btn">{login ? "Log in" : "Sign up"  }</button>
            </div>
                <div id="footer" className="footer-link">
                { login? "Don't have an account?":"Have an account?" }<span className="link" onClick={switchLogin}>{login? "Sign up" : "Log in"}</span>
                </div>
        </div>

        </>
    )
}

export default Login;