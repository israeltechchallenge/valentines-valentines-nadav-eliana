import './App.css';
import React, { useEffect, useState } from 'react'
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import { SignedIn } from './Contexts/SignedIn';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('userAndPass')) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <SignedIn.Provider value={{setIsLoggedIn}}>
      <div className="App">
        {isLoggedIn ?
        <MainPage></MainPage> :
        <Login></Login>}
      </div>
    </SignedIn.Provider>
  );
}

export default App;
