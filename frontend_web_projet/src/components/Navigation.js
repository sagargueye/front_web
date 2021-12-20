import React, {useContext, useState} from 'react';
import {Badge, Dropdown, Nav} from "react-bootstrap";
import Auth from "../contexts/Auth";
import {logout} from "../services/AuthApi";
import axios from "axios";
import {getItem} from "../services/LocaleStorage";
import {isEmpty} from "../Utils/project_lib";

const Navigation = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const [userMoney, setUserMoney] = useState("")

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        console.log("handleLogout done");
    }

    const GetMoney = () => {
        if (!isEmpty(getItem('userId'))) {
            const url_api = "https://asi2.aiveo.fr/api/user/user/"+ getItem("userId")
            axios.get(url_api).then((response) => {setUserMoney(response.data.account)})
            console.log("userMoney: ",userMoney)
            return <h4>
                Money: <Badge bg="secondary">{userMoney} €</Badge>
            </h4>
        }
    }

    return (
        <nav color="elegant-color-dark" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./">Home</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="./Buy">Buy</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="./Sell">Sell</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="./Play">Play</Nav.Link>
                    </Nav>
                </ul>
                <ul className="navbar-nav ms-auto ">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Account
                        </Dropdown.Toggle>
                        {(!isAuthenticated && (
                            <>
                        <Dropdown.Menu>
                            <Dropdown.Item href="./SignIn">SignIn</Dropdown.Item>
                            <Dropdown.Item href="./SignUp">SignUp</Dropdown.Item>
                        </Dropdown.Menu>
                            </>)) || (
                            <>
                                <GetMoney/>
                            <Dropdown.Menu>
                            <Dropdown.Item
                                href="./"
                                onClick={handleLogout}>
                                Log out
                            </Dropdown.Item>
                            <Dropdown.Item href="./Profile">Profile</Dropdown.Item>
                            </Dropdown.Menu>
                            </>
                            )}
                    </Dropdown>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
