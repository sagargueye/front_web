import React, {useEffect, useRef, useState} from 'react';
import Navigation from "../components/Navigation";
import {isEmpty} from "../Utils/project_lib";
import CardInfo from "../components/Cards/CardInfo";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import CardSelected from "../components/Cards/CardSelected";
import {getUsers} from "../actions/user.actions";
import {getItem} from "../services/LocaleStorage";
import {saleTransaction} from "../actions/transaction.actions";

const Sell = () => {
    const [currentCard, setCurrentCard] = useState(null)
    const user = useSelector((state) => state.userReducer);
    const [cardButtonAction, setCardButtonAction] = useState(false)
    const dispatch = useDispatch();
    const mounted = useRef();

    const onCardClick = async (card) => {
        setCardButtonAction(true)
        console.log("Start onCardClick")
        // GET USER ID & CARD ID
        const dataTransaction = {
            user_id: getItem("userId"),
            card_id: card.id
        }
        console.log("dataTransaction: ", dataTransaction)
        // CALL ACTION SELL
        await dispatch(saleTransaction(dataTransaction))
        dispatch(getUsers(true))
        console.log("End onCardClick")
    };

    // TODO: fusion page Buy and Sell
    const clickHandler = (props) => {
        console.log("Start clickHandler")
        setCardButtonAction(false)
        setCurrentCard(props)
        console.log("End clickHandler")
    };

    const Selection = (props) => {
        console.log("Selection")
        console.log((props.isEmpty))
        if(props.isEmpty === null) {
            console.log("props isEmpty")
            console.log("End Selection")
            return <p>Select card</p>
        } else {
            console.log("props isNotEmpty")
            console.log("End Selection")
            return <CardSelected
                card={currentCard}
                pageName={"Buy"}
                onCardClick={onCardClick}/>
        }
    }

    useEffect( () => {
        if (!mounted.current) {
            console.log("FirstPageLoading")
            dispatch(getUsers(true))
            mounted.current = true;
        }
    });

    return (
        <div>
            <Navigation/>
            <div className="container" style={{padding: "10px"}}>
                <div className="row">
                    <div className="col-md">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item flex-fill list-group-item-danger">Name</li>
                            <li className="list-group-item flex-fill list-group-item-danger">Description</li>
                            <li className="list-group-item flex-fill list-group-item-danger">Family</li>
                            <li className="list-group-item flex-fill list-group-item-danger">Energy</li>
                            <li className="list-group-item flex-fill list-group-item-danger">HP</li>
                            <li className="list-group-item flex-fill list-group-item-danger">Price</li>
                        </ul>
                        {!isEmpty(user) &&
                        user.map((card) =>
                            <CardInfo
                                onClick={clickHandler}
                                card={card}
                                key={card.id} />)}
                    </div>
                    <div className="col-md">
                        {!cardButtonAction ? (
                            <Selection isEmpty={currentCard} />
                        ): (<h1>Select card</h1>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Sell;
