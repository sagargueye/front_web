import React from 'react';
import {Button} from "react-bootstrap";

const CardSelected = (props) => {
    const {card} = props;
    const {pageName} = props;

    const clickAction = () => {
        props.onCardClick(card)
    }

    return (
        <div className="card">
            <img
                src={card.imgUrl}
                className="card-img-top"
                alt="..."
                height="300"
            />
            <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">
                    Energy: {card.energy}
                </p>
                <p className="card-text">
                    HP: {card.hp}
                </p>
                <p className="card-text">
                    Attack: {card.attack}
                </p>
                <p className="card-text">
                    Defence: {card.defence}
                </p>
                <p className="card-text">
                    Price: {card.price} €
                </p>
                <Button
                    onClick={clickAction}>
                    {pageName}
                </Button>
            </div>
        </div>
    );
};

export default CardSelected;