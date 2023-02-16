import './App.css';
import AboutTheTeam from './Components/AboutheTeamPage/AboutTheTeam';
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
<<<<<<< HEAD
    <SignedIn.Provider value={{setIsLoggedIn}}>
    <InterestedIn.Provider value={{interestedIn, setInterestedIn}}>
=======
    <SignedIn.Provider value={{ setIsLoggedIn }}>
>>>>>>> 6055f8b62cd93e308209edfed0f91ffd4f70bfd8
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
