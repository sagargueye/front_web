import {
    GET_CARDS,
} from "../actions/card.actions";

const initialState = {};

export default function cardReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS:
            return action.payload;
        default:
            return state;
    }
}