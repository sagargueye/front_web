import React, {useContext} from 'react';
import Auth from "../contexts/Auth";
import {Redirect, Route} from "react-router-dom";

const AuthenticatedRoute = ({path, component}) => {
    const {isAuthenticated} = useContext(Auth);

    return isAuthenticated ? (
        <Route exact path={path} component={component}/>
    ) : (
        <Redirect to="/SignIn"/>
    )
}

export default AuthenticatedRoute;
