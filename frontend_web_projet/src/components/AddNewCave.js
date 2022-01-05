import React from "react";


const AddNewCave = () => {
    return (
<div className="portfolio-modal modal fade" id="CreateCaveModal" tabIndex="-1" aria-labelledby="CreateCaveModal"
     aria-hidden="true">
    <div className="modal-dialog modal-xl">
        <div className="modal-content">
            <div className="modal-header border-0">
                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">nouvelle cave</h2>
                            <form className="form-inline" >

                                <div className="row" style={{ marginTop: `${2}em` }}  >
                                    <div className="col">
                                        <input type="text" className="form-control" id="nom" placeholder="Nom cave"/>
                                    </div>

                                </div>




                                <div className="row" style={{ marginTop: `${2}em` }}>
                                    <div className="col text-center">
                                        <button type="submit" className="btn btn-success ">Créer </button>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>




                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default AddNewCave;