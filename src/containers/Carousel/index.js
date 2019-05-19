import React from "react";
import {Link, Route} from "react-router-dom";
import Carousel from 'components/Carousel';
import {connect} from 'react-redux';
import {getGalleryItemById, getGalleryLength} from 'selectors'
import Navigation from 'components/Navigation';
import NavigationSlider from 'components/Navigation/NavigationSlider'
import SwitchWithSlide from 'components/Carousel/Slider/SwitchWithSlide';
import './index.sass'

const CarouselWrapper = ({portfolioItem, galleryLength}) => {

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
            <Navigation>
                <NavigationSlider/>
            </Navigation>
            <section className="s-carousel">
                <SwitchWithSlide>
                    <Route exact path='/slider/:id' component={Carousel}/>
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

export default connect(mapStateToProps)(CarouselWrapper)