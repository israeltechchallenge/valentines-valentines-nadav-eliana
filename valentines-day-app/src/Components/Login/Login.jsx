import React, { useContext, useState } from "react";
import { InterestedIn } from "../../Contexts/InterestedIn";
import { SignedIn } from "../../Contexts/SignedIn";
import './Login.css';

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setIsLoggedIn} = useContext(SignedIn);
    const {setInterestedIn} = useContext(InterestedIn);

    function handleLogin(e) {
        e.preventDefault();
        localStorage.setItem('userAndPass', JSON.stringify([userName, password]));
        setIsLoggedIn(true);
    }

    function handleInterestedIn(e) {
        setInterestedIn(e.target.value);
    }

    return (
        <form className="login-form">
            <input placeholder="Enter User Name" value={userName} onChange={e => setUserName(e.target.value)}></input>
            <input placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <div className="dropdown">
                <label className="interested">Interested In:</label>
                <select className="options" onChangeCapture={handleInterestedIn}>
                    <option value="both">Both</option>
                    <option value="female">Females</option>
                    <option value="male">Males</option>
                </select>
            </div>
            <button className="login-btn" onClick={handleLogin}>Login</button>
        </form>
    )
}

export default Login;