import * as R from 'ramda'
import {FETCH_GALLERY_SUCCESS} from "../actions/actionsType";

const initialState = {
    ids:[]
};

export default (state = initialState,{type, payload}) => {
    switch (type){
        case FETCH_GALLERY_SUCCESS:
            return R.merge(state, {ids: R.pluck('id', payload)});

        default:
            return state
    }
}


