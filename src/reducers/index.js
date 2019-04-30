import {combineReducers} from 'redux'
import galleryPage from './galleryPage'
import galleryPageId from './galleryPageId'
import gallery from './gallery'

export default combineReducers({
    gallery,
    galleryPageId,
    galleryPage
})