import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Slider from './Slider';
import './Slider.sass';
import {connect} from 'react-redux';
import * as R from 'ramda'
import {getGalleryItemById} from '../../selectors'
import NavigationLayout from '../../components/Navigation/NavigationLayout';
import NavigationSlider from '../../components/Navigation/NavigationSlider'



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
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={location.key}
                        timeout={{enter: 500, exit: 500}}
                        classNames="slide"
                    >
                        <Switch location={location}>
                            <Route exact path='/slider/:id' component={Slider}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
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