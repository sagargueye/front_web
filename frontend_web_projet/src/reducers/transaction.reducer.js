import { PURCHASE_TRANSACTION,  SALE_TRANSACTION} from "../actions/transaction.actions";

const initialState = {};

export default function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case PURCHASE_TRANSACTION:
            return action.payload;
        case SALE_TRANSACTION:
            return action.payload;
        default:
            return state;
    }
}