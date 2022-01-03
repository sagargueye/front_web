import React, {useState} from 'react';
import Navigation from "../components/Navigation";
import VinList from "../components/Vins/VinList";
import LinkCard from "../components/Cards/LinkCard";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Home = () => {
    const [cards] = useState([
        /*
        {
            "image": "/images/video-game.png",
            "title": "Play",
            "action": "Join a room !",
            "text": "Fight another players !",
            //"url": "/Play"
        },*/
        {
            "image": "/images/shopping-cart.png",
            "title": "Buy",
            "action": "Buy",
            "text": "Buy news cards !",
            "url": "/Buy"
        },
        {
            "image": "/images/playing-cards.png",
            "title": "Sell",
            "action": "Sell",
            "text": "Sell yours cards!",
            "url": "/Sell"
        },
    ])


    return (
        <div>
            <Navigation/>
            <Header/>
            <VinList/>


            {/*<div className="row row-cols-1 row-cols-md-3 g-4">*/}
            {/*    {*/}
            {/*        cards.map(card => (*/}
            {/*            <LinkCard card={card} key={card.title}/>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}


            <Footer/>
        </div>
    );
};

export default Home;
