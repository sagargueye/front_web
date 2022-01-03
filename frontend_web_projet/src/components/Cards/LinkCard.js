import React from 'react';
import {Link} from "react-router-dom";

const LinkCard = (props) => {
    const {card} = props;

    return (
        <div className="card">
            <img
                src={card.image}
                className="card-img-top"
                alt="..."
                height="40%"
            />
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                    {card.text}
                </p>
                {/*<Link style={{padding: "10px"}} to={card.url} className="btn btn-primary">{card.action}</Link>*/}
            </div>
        </div>
    );
};

export default LinkCard;
