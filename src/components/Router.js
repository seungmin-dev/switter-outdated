import React, {useState} from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? 
                <>
                <Route exact="true" path="/">
                    <Home userObj={userObj} />
                </Route>
                <Route exact="true" path="/profile">
                    <Profile userObj={userObj} refreshUser={refreshUser} />
                </Route>
                <Redirect from="*" to="/" />
                </> : 
                (<><Route exact="true" path="/">
                    <Auth />
                </Route>
                <Redirect from="*" to="/" />
                </>)
                }
            </Switch>
        </Router>
    )
};

export default AppRouter;