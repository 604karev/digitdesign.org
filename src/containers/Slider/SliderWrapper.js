import React from "react";
import {Link, Route} from "react-router-dom";
import Slider from './Slider';
import './Slider.sass';
import {connect} from 'react-redux';
import {getGalleryItemById, getGalleryLength} from '../../selectors'
import NavigationLayout from '../../components/Navigation/NavigationLayout';
import NavigationSlider from '../../components/Navigation/NavigationSlider'
import SwitchWithSlide from "./SwitchWithSlide";



const SliderWrapper = ({portfolioItem, galleryLength}) => {
    const getSliderId = (currentId) => {
        if (currentId > galleryLength) {
            currentId = 1
        }
        if (currentId <= 0) {
            currentId = galleryLength
        }
        return currentId
    };

    return (
        <div className="App">
            <NavigationLayout>
                <NavigationSlider/>
            </NavigationLayout>
            <section>
                <SwitchWithSlide>
                    <Route exact path='/slider/:id' component={Slider}/>
                </SwitchWithSlide>
                <Link className="slick-arrow slick-next"
                      to={`/slider/${portfolioItem && getSliderId(portfolioItem.id + 1)}`}/>
                <Link className="slick-arrow slick-prev"
                      to={`/slider/${portfolioItem && getSliderId(portfolioItem.id - 1)}`}/>
            </section>
        </div>

    )
};
const mapStateToProps = (state) => ({
    portfolioItem: getGalleryItemById(state, state.galleryPageId.id),
    galleryLength: getGalleryLength(state),

});

export default connect(mapStateToProps)(SliderWrapper)