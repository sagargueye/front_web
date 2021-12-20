import React from 'react';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="elegant-color-dark" className="text-center text-white fixed-bottom">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">CPE Lyon Cards Application</h5>
                        <p>
                            Contact --> Jeremy.laurent@cpe.fr
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://gitlab.com/JeremyL71CPE/cpe_asi_frontend">Repository</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;
