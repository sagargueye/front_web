import { GET_USER_DATA } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return action.payload;
        default:
            return state;
    }
}