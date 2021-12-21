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

        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">La cave</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> Menu
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="./">Accueil</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                 href="./profil">Mon profil</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                 href="./macave">Ma cave</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                 href="./search">Recherche</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                 href="./about">A propos</a></li>
                    </ul>
                </div>
            </div>
        </nav>



    /*
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
     */
    );
};

export default Navigation;
