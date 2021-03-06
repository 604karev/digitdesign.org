import * as R from 'ramda'
import {
    FETCH_REVIEWS_SUCCESS
} from "actions/actionsType";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_REVIEWS_SUCCESS:
            const newValue = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValue);
        default:
            return state
    }

}