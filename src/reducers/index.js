import {combineReducers} from 'redux'
import galleryPage from './galleryPage'
import galleryPageId from './galleryPageId'
import gallery from './gallery'
import mobileMenu from './mobileMenu'
import reviews from './reviews'
import mail from './mail'

export default combineReducers({
    gallery,
    galleryPageId,
    galleryPage,
    mobileMenu,
    reviews,
    mail
})