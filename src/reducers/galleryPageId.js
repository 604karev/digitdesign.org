import * as R from 'ramda';
import {
    FETCH_ITEM_BY_ID_FAILURE,
    FETCH_ITEM_BY_ID_START,
    FETCH_ITEM_BY_ID_SUCCESS
} from "actions/actionsType";

const initialState = {
    id: null,
    isLoading: false
};

export default (state = initialState, {type, id}) => {
    switch (type) {
        case FETCH_ITEM_BY_ID_START:
            return R.merge(state, {isLoading: true});
        case FETCH_ITEM_BY_ID_FAILURE:
            return R.merge(state, {isLoading: true});
        case FETCH_ITEM_BY_ID_SUCCESS:
            return R.merge(state, {
                id: id,
                isLoading: false
            });

        default:
            return state
    }

}