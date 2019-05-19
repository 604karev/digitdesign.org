import {
    TOGGLE_MOBILE_MENU
} from "actions/actionsType";

const initialState = false;

export default (state = initialState, {type}) => {
    switch (type) {
        case TOGGLE_MOBILE_MENU:
            return !state;
        default:
            return state
    }
}