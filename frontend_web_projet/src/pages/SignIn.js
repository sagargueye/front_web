import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Auth from "../contexts/Auth";
import {useHistory} from "react-router-dom";
import {login} from "../services/AuthApi";
import {useDispatch} from "react-redux";
import {getUsers} from "../actions/user.actions";

const SignIn = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const dispatch = useDispatch();
    let history = useHistory()

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
        setUser({...user, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await login(user);
            console.log("reponse: " + response)
            setIsAuthenticated(response);
            history.replace('/');
            dispatch(getUsers(true))
        } catch ({ response }) {
            console.log("bug")
            console.log(response);
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            history.replace('/');
        }
    }, [history, isAuthenticated]);


    return (
        <div>
            <Navigation/>
            <form style={{padding: "10px"}} onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input
                        name="username"
                        type="username"
                        id="form1Example1"
                        className="form-control"
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form1Example1">username</label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        name="password"
                        type="password"
                        id="form1Example2"
                        className="form-control"
                        onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form1Example2">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form1Example3"
                                checked
                            />
                            <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
            </form>
            <Footer/>
        </div>
    );
};

export default SignIn;
