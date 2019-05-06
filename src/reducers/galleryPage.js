import * as R from 'ramda'
import {FETCH_GALLERY_START, FETCH_GALLERY_SUCCESS} from "../actions/actionsType";

const initialState = {
    ids: [],
    isLoading: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_GALLERY_START:
            return R.merge(state, {
                ids: [],
                isLoading: true
            });

        case FETCH_GALLERY_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload),
                isLoading: false
            });


        default:
            return state
    }
}


