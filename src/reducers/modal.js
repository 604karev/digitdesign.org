import {TOGGLE_MODAL} from "../actions/actionsType";

const initialState = false;

export default (state = initialState, {type}) => {
    switch (type) {
        case TOGGLE_MODAL:
            return !state;
        default:
            return state
    }
}