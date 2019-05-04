import React, {Component} from 'react'
import NavigationLayout from '../components/NavigationLayout';
import NavigationSlider from '../components/NavigationSlider'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getGalleryItemById} from '../selectors'
import {fetchItemById} from '../actions'
import './Slider.sass'
import * as R from 'ramda'


class Slider extends Component {


    componentDidMount = () => {
        this.props.fetchItemById(Number(this.props.match.params.id))

    };
    componentWillUpdate = () => {
        window.scrollTo(0, 0);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchItemById(Number(this.props.match.params.id))
        }


    }


    renderPortfolioImages = () => {
        const {portfolioItem} = this.props;
        return portfolioItem.portfolioImg.map(
            image => <img key={image} className="carousel-image" src={image} alt={image}/>
        )
    };
    getSliderId = (currentId) => {
        const {gallery} = this.props;
        if (currentId > gallery.length) {
            currentId = 1
        }
        if (currentId <= 0) {
            currentId = gallery.length
        }
        return currentId


    };


    render() {
        const {portfolioItem} = this.props;
        return (
            <div className="App">
                <NavigationLayout>
                    <NavigationSlider/>
                </NavigationLayout>
                <section className="s-carousel-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1">
                                {portfolioItem && this.renderPortfolioImages()}
                            </div>
                            <Link className="slick-arrow slick-next"
                                  to={`/slider/${portfolioItem && this.getSliderId(portfolioItem.id + 1)}`}/>
                            <Link className="slick-arrow slick-prev"
                                  to={`/slider/${portfolioItem && this.getSliderId(portfolioItem.id - 1)}`}/>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    portfolioItem: getGalleryItemById(state, state.galleryPageId.id),
    gallery: R.values(state.gallery)

});
const mapDispatchToProps = {
    fetchItemById
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider)