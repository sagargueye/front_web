import React, {useState} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AddNewCave from "../components/AddNewCave";
import VoirCave from "../components/Caves/VoirCave";
// import {useHistory} from "react-router-dom";


const MaCave = () => {
    const [caves, setCaves] = useState([
        {
            id: 1,
            name: 'Cave 1 ',
            src:"/images/portfolio/cave.jpg"
        },
        {
            id: 2,
            name: 'Cave 2',
            src:"/images/portfolio/cave.jpg"
        }
    ]);

    // function GotoCave(Cave) {
    //     let url = "/VoirCave/"+Cave.id;
    //     console.log(url);
    //     const VoirCave = useHistory();
    //     VoirCave.push(url);
    // }

    return (
        <div>
            <Navigation/>
            <AddNewCave/>
            <VoirCave/>

            <section className="page-section portfolio" id="portfolio" style={{marginTop:"3em"}}>
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Mes caves</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                 data-bs-target="#CreateCaveModal">
                                <div className="portfolio-item-caption d-flex align-items-center
                                    justify-content-center h-100 w-100" style={{opacity:"1"}}>
                                    <div className="portfolio-item-caption-content text-center text-white" >
                                        <span> Cr??er une nouvelle cave</span><br></br>
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={"/images/portfolio/cave.jpg"} alt="..."/>
                            </div>
                        </div>

                        {caves && caves.map(cave =>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target={"#voirCave"+ cave.id} key={cave.id} >
                                    <div className="portfolio-item-caption d-flex align-items-center
                                        justify-content-center h-100 w-100" >
                                        <div className="portfolio-item-caption-content text-center text-white" style={{opacity:"1"}}>
                                            <span> Voir</span><br></br>
                                            <i className="fas fa-eye fa-3x"> </i>
                                        </div>
                                    </div>
                                    <div className="portfolio-item-caption d-flex align-items-center
                                        justify-content-center h-30 w-100" style={{opacity:"1",}}>
                                        <div className="portfolio-item-caption-content text-center text-white" style={{opacity:"1"}}>
                                            <span> {cave.name}</span><br></br>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={cave.src} alt="..." />
                                </div>
                            </div>
                        )}

                        {/*<div className="col-md-6 col-lg-4 mb-5">*/}
                        {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal"*/}
                        {/*         data-bs-target="#portfolioModal3">*/}
                        {/*        <div*/}
                        {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white">*/}
                        {/*                <span> Voir</span><br></br>*/}
                        {/*                <i className="fas fa-eye fa-3x"> </i>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="portfolio-item-caption d-flex align-items-center*/}
                        {/*            justify-content-center h-30 w-100" style={{opacity:"1",}}>*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white" style={{opacity:"1"}}>*/}
                        {/*                <span> Cave 2 </span><br></br>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <img className="img-fluid" src={"/images/portfolio/cave.jpg"} alt="..."/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6 col-lg-4 mb-5 mb-lg-0">*/}
                        {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal"*/}
                        {/*         data-bs-target="#portfolioModal4">*/}
                        {/*        <div*/}
                        {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white">*/}
                        {/*                <span> Voir</span><br></br>*/}
                        {/*                <i className="fas fa-eye fa-3x"> </i>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="portfolio-item-caption d-flex align-items-center*/}
                        {/*            justify-content-center h-30 w-100" style={{opacity:"1",}}>*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white" style={{opacity:"1"}}>*/}
                        {/*                <span> Cave 3 </span><br></br>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <img className="img-fluid" src={"/images/portfolio/cave.jpg"} alt="..."/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6 col-lg-4 mb-5 mb-md-0">*/}
                        {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal"*/}
                        {/*         data-bs-target="#portfolioModal5">*/}
                        {/*        <div*/}
                        {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white">*/}
                        {/*                <span> Voir</span><br></br>*/}
                        {/*                <i className="fas fa-eye fa-3x"> </i>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="portfolio-item-caption d-flex align-items-center*/}
                        {/*            justify-content-center h-30 w-100" style={{opacity:"1",}}>*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white" style={{opacity:"1"}}>*/}
                        {/*                <span> Cave 4 </span><br></br>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <img className="img-fluid" src={"/images/portfolio/cave.jpg"} alt="..."/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6 col-lg-4">*/}
                        {/*    <div className="portfolio-item mx-auto" data-bs-toggle="modal"*/}
                        {/*         data-bs-target="#portfolioModal6">*/}
                        {/*        <div*/}
                        {/*            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white">*/}
                        {/*                <span> Voir</span><br></br>*/}
                        {/*                <i className="fas fa-eye fa-3x"> </i>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="portfolio-item-caption d-flex align-items-center*/}
                        {/*            justify-content-center h-30 w-100" style={{opacity:"1",}}>*/}
                        {/*            <div className="portfolio-item-caption-content text-center text-white" style={{opacity:"1"}}>*/}
                        {/*                <span> Cave 5 </span><br></br>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <img className="img-fluid" src={"/images/portfolio/cave.jpg"} alt="..."/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default MaCave;
