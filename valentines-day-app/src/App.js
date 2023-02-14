import './App.css';
import React, { useEffect, useState } from 'react'
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import { SignedIn } from './Contexts/SignedIn';
import { InterestedIn } from './Contexts/InterestedIn';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [interestedIn, setInterestedIn] = useState("both");

  useEffect(() => {
    if (localStorage.getItem('userAndPass')) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <SignedIn.Provider value={{setIsLoggedIn}}>
    <InterestedIn.Provider value={{interestedIn, setInterestedIn}}>
      <div className="App">
        {isLoggedIn ?
        <MainPage></MainPage> :
        <Login></Login>}
      </div>
    </InterestedIn.Provider>
    </SignedIn.Provider>
  );
}

export default App;
