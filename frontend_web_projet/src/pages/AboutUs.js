import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../styles/about.css'

const AboutUs = () => {
    return (
        <div>
            <Navigation/>

            <div className="container about">
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card " /*h-100*/>
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src={"/images/logo1-transparent.png"}
                                                 alt="Maxwell Admin"/>
                                        </div>
                                        <h5 className="user-name">LA CAVE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="col-lg-12 ">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-2 mb-4 contributeurAbout" >
                                            <div className="candidate-list candidate-grid">
                                                <div className="candidate-list-image">
                                                    <img className="img-fluid"
                                                         src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                                </div>
                                                <div className="candidate-list-details">
                                                    <div className="candidate-list-info">
                                                        <div className="candidate-list-title">
                                                            <h5>Enzo Contini</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-2 mb-4 contributeurAbout">
                                            <div className="candidate-list candidate-grid">
                                                <div className="candidate-list-image">
                                                    <img className="img-fluid"
                                                         src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                                </div>
                                                <div className="candidate-list-details">
                                                    <div className="candidate-list-info">
                                                        <div className="candidate-list-title">
                                                            <h5>Dorian Dugué</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-2 mb-4 contributeurAbout">
                                            <div className="candidate-list candidate-grid">
                                                <div className="candidate-list-image">
                                                    <img className="img-fluid"
                                                        src="https://fr-static.z-dn.net/files/dbe/b64b5e181b017eb9c277da2bc52b26e1.jpg" alt=""/>
                                                </div>
                                                <div className="candidate-list-details">
                                                    <div className="candidate-list-info">
                                                        <div className="candidate-list-title">
                                                            <h5>Sagar Gueye</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-2 mb-4 contributeurAbout">
                                            <div className="candidate-list candidate-grid">
                                                <div className="candidate-list-image">
                                                    <img className="img-fluid"
                                                         src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                                </div>
                                                <div className="candidate-list-details">
                                                    <div className="candidate-list-info">
                                                        <div className="candidate-list-title">
                                                            <h5>Hugo Ferrer</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-2 mb-4 contributeurAbout">
                                            <div className="candidate-list candidate-grid">
                                                <div className="candidate-list-image">
                                                    <img className="img-fluid"
                                                         src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                                                </div>
                                                <div className="candidate-list-details">
                                                    <div className="candidate-list-info">
                                                        <div className="candidate-list-title">
                                                            <h5>Brian Gasparini</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <section className="page-section bg-primary text-white mb-0" id="about" >
                                    <div className="container">
                                        <h2 className="page-section-heading text-center text-uppercase text-white">A propos du
                                            site</h2>
                                        <div className="divider-custom divider-light">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 ms-auto ">
                                                <p className="lead" style={{textAlign: "justify"}}>
                                                    La cave est un système informatique visant à fournir au grand public des
                                                    informations sur les vins du monde.
                                                    Par le biais d’une application mobile et d’un site web qui lui est mis à
                                                    disposition,
                                                    l’utilisateur accède à plusieurs services qui le guident dans le choix d’un
                                                    vin.

                                                </p>
                                            </div>
                                            <div className="col-lg-5 me-auto">
                                                <p className="lead">Le système fournit une palette d’outils afin de conseiller
                                                    au
                                                    mieux tout un chacun :
                                                    <ul>
                                                        <li>Outil de recherche de vins</li>
                                                        <li>Outil de recommandation de vins</li>
                                                        <li>Outil de scannage de bouteilles de vins</li>
                                                        <li>Outil de cave personnelle</li>
                                                        <li>Outil de profils personnels</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default AboutUs;
