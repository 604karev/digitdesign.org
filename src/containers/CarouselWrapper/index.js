import React from "react";
import {Link, Route} from "react-router-dom";
import Carousel from 'components/Carousel';
import {connect} from 'react-redux';
import {getGalleryItemById} from 'selectors'
import Navigation from 'components/Navigation';
import NavigationSlider from 'components/Navigation/NavigationSlider'
import SwitchWithSlide from 'components/Carousel/Slider/SwitchWithSlide';
import './index.sass'

const CarouselWrapper = ({portfolioItem, gallery}) => {

    const getItem = (key, i) => {
        let keys = Object.keys(gallery);
        let index = keys.indexOf(key);
        index = index + i;
        if (i === 1 && index === keys.length) {
            index = 0
        }
        if (i === -1 && index === -1) {
            index = keys.length - 1
        }
        return gallery[keys[index]] && gallery[keys[index]].id;
    };

    return (
        <div className="App">
            <Navigation>
                <NavigationSlider/>
            </Navigation>
            <section className="s-carousel">
                <SwitchWithSlide>
                    <Route exact path='/carousel/:id' component={Carousel}/>
                </SwitchWithSlide>
                <Link className="slick-arrow slick-next"
                      to={`/carousel/${portfolioItem && getItem(portfolioItem.id.toString(), -1)}`}/>
                <Link className="slick-arrow slick-prev"
                      to={`/carousel/${portfolioItem && getItem(portfolioItem.id.toString(), +1)}`}/>

            </section>
        </div>
    )
};

const mapStateToProps = (state) => ({
    gallery: state.gallery,
    portfolioItem: getGalleryItemById(state, state.galleryPageId.id)
});

export default connect(mapStateToProps)(CarouselWrapper)