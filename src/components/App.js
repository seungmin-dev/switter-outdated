import AppRouter from "components/Router";
import React, {useEffect, useState} from "react";
//import fbase from "fbase";
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {  
    authService.onAuthStateChanged((user) => {
      if( user) {
        setUserObj({
          displayName : user.displayName,
          uid : user.uid,
          updateProfile : (args) => user.updateProfile(args)
        });
      }
      setInit(true);
    });
  },[]);
  const refreshUser = () => {
    const user = authService.currentUser;
    if(user) {
      setUserObj({
        displayName : user.displayName,
        uid : user.uid,
        updateProfile : (args) => user.updateProfile(args)
      });
    } else {
      setUserObj(null);
    }
  }
  return (
    <>
      {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} /> : "Initializing..."}
      {/* <footer>&copy; {new Date().getFullYear()} Switter</footer> */}
    </>)
}

export default App;
