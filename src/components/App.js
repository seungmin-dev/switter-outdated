import AppRouter from "components/Router";
import React, {useState} from "react";
//import fbase from "fbase";
import {authService} from "fbase";

function App() {
  // const authService = fbase.auth();
  // 이렇게 해줘도 되고 fbase.js에서 export 해줘도 됨.

  // component들의 경로를 상대 -> 절대경로로 지정(jsconfig.json)
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    console.log('authService.currentUser',authService);
    return (
      <>
        <AppRouter isLoggedIn={isLoggedIn}/>
        <footer>&copy; {new Date().getFullYear()} Switter</footer>
      </>)
}

export default App;
