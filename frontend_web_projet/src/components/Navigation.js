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
            //const url_api = "https://asi2.aiveo.fr/api/user/user/"+ getItem("userId")
            //axios.get(url_api).then((response) => {setUserMoney(response.data.account)})
            setUserMoney("9300");
            console.log("userMoney: ",userMoney)
            return <h4>
                Money: <Badge bg="secondary">{userMoney} €</Badge>
            </h4>
        }
    }

    return (
        <div>




            {/*<nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">*/}
            {/*    <div class="container">*/}
            {/*        <a href="#" class="navbar-brand">*/}
            {/*            <img src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png" width="45" alt="" class="d-inline-block align-middle mr-2"/>*/}
            {/*                <span class="text-uppercase font-weight-bold">Company</span>*/}
            {/*        </a>*/}

            {/*        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>*/}

            {/*        <div id="navbarSupportedContent" class="collapse navbar-collapse">*/}
            {/*            <ul class="navbar-nav ml-auto">*/}
            {/*                <li class="nav-item active"><a href="#" class="nav-link">Home <span class="sr-only">(current)</span></a></li>*/}
            {/*                <li class="nav-item"><a href="#" class="nav-link">About</a></li>*/}
            {/*                <li class="nav-item"><a href="#" class="nav-link">Services</a></li>*/}
            {/*                <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}





            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div className="container">
                        {/*<a className="navbar-brand" href="#page-top">La cave</a>*/}
                        <a href="#" className="navbar-brand">
                            <img src={"/images/logo1-transparent.png"} width="45" alt=""
                                 lassName="d-inline-block align-middle mr-2"/>
                                <span >La cave</span>
                        </a>

                        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                                type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                         href="#portfolio">Accueil</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                         href="#about">Mon profil</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                         href="#contact">Ma cave</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                         href="#contact">Recherche</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                         href="#contact">A propos</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <img class="masthead-avatar mb-5" src={"/images/logo1-transparent.png"} alt="..." />
                    <h1 class="masthead-heading text-uppercase mb-0">Bienvenu à la cave</h1>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <p class="masthead-subheading font-weight-light mb-0">Découvrez notre riche collection de vin </p>
                </div>
            </header>
        </div>
    );
};

export default Navigation;
