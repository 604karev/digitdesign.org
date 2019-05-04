import * as R from 'ramda';
import {FETCH_ITEM_BY_ID_SUCCESS} from "../actions/actionsType";

const initialState = {
    id: null
};

export default (state = initialState, {type, payload, id}) => {
    switch (type) {
        case FETCH_ITEM_BY_ID_SUCCESS:
            return R.merge(state, {id: id});

        default:
            return state
    }

}