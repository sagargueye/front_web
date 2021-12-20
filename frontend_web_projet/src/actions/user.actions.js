import axios from "axios";
import {getItem} from "../services/LocaleStorage";

export const GET_USER_DATA = "GET_USER_DATA";

export const getUsers = (boolean) => {
    return (dispatch) => {
        if (boolean) {
            const userId = getItem('userId')
            console.log("jesus")
            console.log(userId)
            return axios
                .get(`https://asi2.aiveo.fr/api/card/card/user/`+ userId)
                .then((res) => {
                    dispatch({ type: GET_USER_DATA, payload: res.data });
                })
                .catch((err) => console.log(err));
        } else {
            dispatch({ type: GET_USER_DATA, payload: {} });
        }
    };
};
