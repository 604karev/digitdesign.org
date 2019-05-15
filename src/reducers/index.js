import {combineReducers} from 'redux'
import galleryPage from './galleryPage'
import galleryPageId from './galleryPageId'
import gallery from './gallery'
import modal from './modal'

export default combineReducers({
    gallery,
    galleryPageId,
    galleryPage,
    modal
})