import './App.css';

// Route
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import SignIn from "./pages/SignIn";

import {useState} from "react";

// Authentication
import {hasAuthenticated} from "./services/AuthApi";
import Auth from "./contexts/Auth";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Profile from "./pages/Profile";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())
    ;
    return (
        <Auth.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <AuthenticatedRoute exact path={"/Buy"} component={Buy}/>
                <AuthenticatedRoute exact path={"/Sell"} component={Sell}/>
                <AuthenticatedRoute exact path={"/Profile"} component={Profile}/>
                <Route exact path={"/SignIn"} component={SignIn}/>
                <Route component={NotFound}/>
            </Switch>
        </Auth.Provider>
    );
}

export default App;
