import React, {Component} from "react";
import {Link} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import './Slider.sass';
import {connect} from 'react-redux';
import * as R from 'ramda'
import {getGalleryItemById} from '../../selectors'
import NavigationLayout from '../../components/Navigation/NavigationLayout';
import NavigationSlider from '../../components/Navigation/NavigationSlider'
import {fetchItemById} from '../../actions/index'


class Slider extends Component {

    componentDidMount = () => {
        this.props.fetchItemById(Number(this.props.match.params.id))
    };

    componentDidUpdate = (prevProps) => {
        window.scrollTo(0, 0);
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchItemById(Number(this.props.match.params.id));
        }
    };
    renderPortfolioImages = () => {
        const {portfolioItem} = this.props;
        return (
            portfolioItem.portfolioImg.map(
                (image) => <img key={image} className="carousel-image" src={image} alt={image}/>
            )
        )
    };

    getSliderId = (currentId) => {
        const {gallery} = this.props;
        if (currentId > gallery.length) {
            currentId = 1;

        }
        if (currentId <= 0) {
            currentId = gallery.length
        }
        return currentId
    };


    render() {
        const {location, portfolioItem} = this.props;
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
                            classNames='slide'
                        >
                            <div className="carousel-img-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-10 offset-md-1">
                                            {portfolioItem && (this.renderPortfolioImages())}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                    <Link className="slick-arrow slick-next"
                          to={`/slider/${portfolioItem && this.getSliderId(portfolioItem.id + 1)}`}/>
                    <Link className="slick-arrow slick-prev"
                          to={`/slider/${portfolioItem && this.getSliderId(portfolioItem.id - 1)}`}/>
                </section>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    portfolioItem: getGalleryItemById(state, state.galleryPageId.id),
    gallery: R.values(state.gallery),

});
const mapDispatchToProps = {
    fetchItemById
};
export default connect(mapStateToProps, mapDispatchToProps)(Slider)