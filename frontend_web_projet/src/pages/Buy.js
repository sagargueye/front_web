import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";
import {isEmpty} from "../Utils/project_lib";
import CardInfo from "../components/Cards/CardInfo";
import {useState} from "react";
import CardSelected from "../components/Cards/CardSelected";
import {getItem} from "../services/LocaleStorage";
import {purchaseTransaction} from "../actions/transaction.actions";
import {useDispatch} from "react-redux";
import {getCards} from "../actions/card.actions";

const Buy = () => {
    const [currentCard, setCurrentCard] = useState(null);
    const cards = useSelector((state) => state.cardReducer);
    const [cardButtonAction, setCardButtonAction] = useState(false)
    const dispatch = useDispatch();

    const onCardClick = async (card) => {
        setCardButtonAction(true)
        console.log("Start onCardClick")
        // GET USER ID & CARD ID
        const dataTransaction = {
            user_id: getItem("userId"),
            card_id: card.id
        }
        await dispatch(purchaseTransaction(dataTransaction))
        dispatch(getCards())
        console.log("End onCardClick")
    }

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
                        {!isEmpty(cards) &&
                        cards.map((card) =>
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
}

export default Buy;
