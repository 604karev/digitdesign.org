import {
    FETCH_GALLERY_FAILURE,
    FETCH_GALLERY_START, FETCH_GALLERY_SUCCESS, FETCH_ITEM_BY_ID_FAILURE, FETCH_ITEM_BY_ID_START,
    FETCH_ITEM_BY_ID_SUCCESS
} from "./actionsType";
import {fetchGalleryApi, fetchItemByIdApi} from '../api'

export const fetchGallery = () => async dispatch => {

    dispatch({type: FETCH_GALLERY_START, isLoading: true});

    try {
        const gallery = await fetchGalleryApi();
        dispatch({
            type: FETCH_GALLERY_SUCCESS,
            payload: gallery,
            isLoading: false
        })
    }
    catch (err) {
        dispatch({
            type: FETCH_GALLERY_FAILURE,
            payload: err,
            error: true,
            isLoading: false
        })
    }
};

export const fetchItemById = (id) => async dispatch => {

    dispatch({type: FETCH_ITEM_BY_ID_START});

    try {
        const item = await fetchItemByIdApi(id);
        dispatch({
            type: FETCH_ITEM_BY_ID_SUCCESS,
            payload: item,
            id: id
        })
    }
    catch (err) {
        dispatch({
            type: FETCH_ITEM_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
};