import React from 'react';
import Navigation from "../components/Navigation";
import {Image} from "react-bootstrap";

const NotFound = () => {
    return (
        <div>
            <Navigation/>
            <Image
                src={"/images/NotFound.jpg"}
                fluid
                alt={"NotFound 😤 "}
            />
        </div>
    );
};

export default NotFound;
