import React from 'react';

const CardInfo = (props) => {
    const {card} = props;

    return (
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item flex-fill ">{card.name}</li>
            <li className="list-group-item flex-fill">{card.description}</li>
            <li className="list-group-item flex-fill">{card.family}</li>
            <li className="list-group-item flex-fill">{card.energy}</li>
            <li className="list-group-item flex-fill">{card.hp}</li>
            <li className="list-group-item flex-fill">{card.price}</li>
            <li className="list-group-item flex-fill">
                <button onClick={props.onClick.bind(null, card)}>Click me</button>
            </li>
        </ul>
    );
};

export default CardInfo;
