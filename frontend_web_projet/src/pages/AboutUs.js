import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <div>
            <Navigation/>

            <section class="page-section bg-primary text-white mb-0" id="about" style={{marginTop:"6.5em"}}>
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-white">A propos du site</h2>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 ms-auto ">
                            <p class="lead" style={{textAlign: "justify"}}>
                                La cave est un système informatique visant à fournir au grand public des informations sur les vins du monde.
                                Par le biais d’une application mobile et d’un site web qui lui est mis à disposition,
                                l’utilisateur accède à plusieurs services qui le guident dans le choix d’un vin.

                            </p>
                        </div>
                        <div class="col-lg-5 me-auto">
                            <p class="lead">Le système fournit une palette d’outils afin de conseiller au
                                mieux tout un chacun :
                                <ul>
                                    <li>Outil de recherche de vins</li>
                                    <li>Outil de recommandation de vins</li>
                                    <li>Outil de scannage de bouteilles de vins</li>
                                    <li>Outil de cave personnelle</li>
                                    <li>Outil de profils personnels </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>

    );
};

export default AboutUs;
