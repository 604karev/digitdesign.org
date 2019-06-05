import {
    SEND_MESSAGE_FAILURE,
    SEND_MESSAGE_SUCCESS,
} from "actions/actionsType";


const initialState = null;
export default (state = initialState, {type, isSent}) => {

    switch (type) {
        case SEND_MESSAGE_SUCCESS:
            return isSent;

        case SEND_MESSAGE_FAILURE:
            return isSent;
            
        default:
            return state
    }

}