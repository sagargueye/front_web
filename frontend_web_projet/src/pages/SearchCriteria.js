import React, {useState} from 'react';

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../styles/profile.css'
import '../styles/search.css'


const SearchCriteria = () => {
    return (
        <div>
            <Navigation/>


            <div className="container search" >
                <div className="row" >
                    <div className="copyright py-4 text-center text-white" style={{backgroundColor: "#1abc9c"}}>
                        <div className="container"><b>Critères de recherche</b></div>
                    </div>
                    <form className="form-inline" style={{padding: "2em",border: '2px solid #e0e2e3',borderRadius: "10px"}}>

                        <div className="row"  >
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Nom</label>
                                <input type="text" className="form-control" id="nom" placeholder="Vin rouge"/>
                            </div>
                            <div className="col ">
                                <label htmlFor="formGroupExampleInput">Vignole</label>
                                <input type="text" className="form-control" id="vignole" placeholder="vignoble de savoie"/>
                            </div>
                            <div className="col">
                                <label htmlFor="exampleFormControlSelect1">Type</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option value={""}>Type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: `${2}em` }}>
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Région</label>
                                <input type="text" className="form-control" id="nom" placeholder="Vin rouge"/>
                            </div>
                            <div className="col ">
                                <label htmlFor="formGroupExampleInput">millésime</label>
                                <input type="text" className="form-control" id="vignole" placeholder="vignoble de savoie"/>
                            </div>
                            <div className="col ">
                                <label htmlFor="formGroupExampleInput">Saveur</label>
                                <input type="text" className="form-control" id="vignole" placeholder="vignoble de savoie"/>
                            </div>

                        </div>

                        <div className="row" style={{ marginTop: `${2}em` }}>

                            <div className="col">
                                <label htmlFor="exampleFormControlSelect1">Étoile</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option value={"1"}>1</option>
                                    <option  value={"2"}>2</option>
                                    <option  value={"3"}>3</option>
                                    <option  value={"4"}>4</option>
                                    <option  value={"5"}>5</option>
                                </select>
                            </div>
                            <div className="col"> </div>
                            <div className="col"> </div>
                        </div>

                        <div className="row" style={{ marginTop: `${2}em` }}>
                            <div className="col text-center">
                                <button type="submit" className="btn btn-success ">Lancer la recherche </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default SearchCriteria;
