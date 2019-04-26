import {
    FETCH_GALLERY_FAILURE,
    FETCH_GALLERY_START, FETCH_GALLERY_SUCCESS
} from "./actionsType";
import {fetchGalleryApi} from '../api'

export const fetchGallery = () => async dispatch => {

    dispatch({type: FETCH_GALLERY_START});

    try {
        const gallery = await fetchGalleryApi();
        dispatch({
            type: FETCH_GALLERY_SUCCESS,
            payload: gallery
        })
    }
    catch (err) {
        dispatch({
            type: FETCH_GALLERY_FAILURE,
            payload: err,
            error: true
        })
    }
};