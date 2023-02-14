import React, { useContext, useState } from "react";
import { SignedIn } from "../../Contexts/SignedIn";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setIsLoggedIn} = useContext(SignedIn);

    function handleLogin(e) {
        e.preventDefault();
        localStorage.setItem('userAndPass', JSON.stringify([userName, password]));
        setIsLoggedIn(true);
    }

    return (
        <form>
            <input placeholder="Enter User Name" value={userName} onChange={e => setUserName(e.target.value)}></input>
            <input placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </form>
    )
}

export default Login;