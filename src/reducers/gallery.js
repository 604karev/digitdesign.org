import * as R from 'ramda'
import {
    FETCH_GALLERY_SUCCESS,
    FETCH_ITEM_BY_ID_SUCCESS
} from "actions/actionsType";

const initialState = {};

export default (state = initialState,{type, payload}) => {
    switch (type){
        case FETCH_GALLERY_SUCCESS:
            const newValue = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValue);

        case FETCH_ITEM_BY_ID_SUCCESS:
            const byIdValue = R.indexBy(R.prop('id'), payload);
            return R.merge(state, byIdValue);

        default:
            return state
    }
}
