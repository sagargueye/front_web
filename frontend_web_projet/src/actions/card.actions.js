import axios from "axios";

export const GET_CARDS = "GET_CARDS";

export const getCards = () => {
    return (dispatch) => {
        return axios
            .get(`https://asi2.aiveo.fr/api/card/cards_to_sell`)
            .then((res) => {
                dispatch({ type: GET_CARDS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};
