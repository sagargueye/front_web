import axios from "axios";

export const PURCHASE_TRANSACTION = "PURCHASE_TRANSACTION";
export const SALE_TRANSACTION = "SALE_TRANSACTION";

export const purchaseTransaction = (data) => {
    console.log("Start purchaseTransaction --> data: ", data)
    return (dispatch) => {
        return axios({
            method: "post",
            url: `https://asi2.aiveo.fr/api/store/buy`,
            data: {...data}
        })
            .then(() => {
                dispatch({type: PURCHASE_TRANSACTION, payload: {...data}});
            })
            .catch((err) => console.log(err));
    }
}

export const saleTransaction = (data) => {
    console.log("Start saleTransaction --> data: ", data)
    return (dispatch) => {
        return axios({
            method: "post",
            url: `https://asi2.aiveo.fr/api/store/sell`,
            data: {...data}
        })
            .then(() => {
                dispatch({type: SALE_TRANSACTION, payload: {...data}});
            })
            .catch((err) => console.log(err));
    }
}
