import React from "react";
import {Link, Route} from "react-router-dom";
import Slider from './Slider';
import './Slider.sass';
import {connect} from 'react-redux';
import * as R from 'ramda'
import {getGalleryItemById} from '../../selectors'
import NavigationLayout from '../../components/Navigation/NavigationLayout';
import NavigationSlider from '../../components/Navigation/NavigationSlider'
import SwitchWithSlide from "./SwitchWithSlide";


const SliderWrapper = ({location, portfolioItem, gallery}) => {
    const getSliderId = (currentId) => {
        if (currentId > gallery.length) {
            currentId = 1
        }
        if (currentId <= 0) {
            currentId = gallery.length
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
    gallery: R.values(state.gallery),

});

export default connect(mapStateToProps)(SliderWrapper)