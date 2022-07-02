import { FETCH_ALL } from '../constants/actionTypes'

export default (currency = [], action) => {

    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        default:
            return currency
    }
}
