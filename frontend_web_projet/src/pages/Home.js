import React, {useState} from 'react';
import Navigation from "../components/Navigation";
import vins from "../components/Vins/VinList";
import LinkCard from "../components/Cards/LinkCard";
import Footer from "../components/Footer";

const Home = () => {
    const [cards] = useState([
        /*
        {
            "image": "/images/video-game.png",
            "title": "Play",
            "action": "Join a room !",
            "text": "Fight another players !",
            //"url": "/Play"
        },*/
        {
            "image": "/images/shopping-cart.png",
            "title": "Buy",
            "action": "Buy",
            "text": "Buy news cards !",
            "url": "/Buy"
        },
        {
            "image": "/images/playing-cards.png",
            "title": "Sell",
            "action": "Sell",
            "text": "Sell yours cards!",
            "url": "/Sell"
        },
    ])


    return (
        <div>
            <Navigation/>

            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Ma cave</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal1">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={"/images/portfolio/cabin.png"} alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal2">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="images/portfolio/cake.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal3">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="images/portfolio/circus.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal4">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="images/portfolio/game.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal5">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="images/portfolio/safe.png" alt="..."/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#portfolioModal6">
                                <div
                                    className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i
                                        className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="images/portfolio/submarine.png" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<div className="row row-cols-1 row-cols-md-3 g-4">*/}
            {/*    {*/}
            {/*        cards.map(card => (*/}
            {/*            <LinkCard card={card} key={card.title}/>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}


            <Footer/>
        </div>
    );
};

export default Home;
