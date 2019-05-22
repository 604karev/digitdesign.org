import {fetchGalleryApi, fetchItemByIdApi, fetchReviewsApi} from 'api'
import {
    FETCH_GALLERY_FAILURE,
    FETCH_GALLERY_START,
    FETCH_GALLERY_SUCCESS,
    FETCH_ITEM_BY_ID_FAILURE,
    FETCH_ITEM_BY_ID_START,
    FETCH_ITEM_BY_ID_SUCCESS,
    TOGGLE_MOBILE_MENU,
    FETCH_REVIEWS_FAILURE,
    FETCH_REVIEWS_START,
    FETCH_REVIEWS_SUCCESS
} from "actions/actionsType";

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

export const toggleMenu = () => dispatch => {
    dispatch({type: TOGGLE_MOBILE_MENU})
};

export const fetchReviews = () => async dispatch => {

    dispatch({type: FETCH_REVIEWS_START, isLoading: true});

    try {
        const gallery = await fetchReviewsApi();
        dispatch({
            type: FETCH_REVIEWS_SUCCESS,
            payload: gallery,
            isLoading: false
        })
    }
    catch (err) {
        dispatch({
            type: FETCH_REVIEWS_FAILURE,
            payload: err,
            error: true,
            isLoading: false
        })
    }
};