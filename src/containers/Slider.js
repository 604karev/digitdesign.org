import React, {Component} from 'react'
import NavigationLayout from '../components/NavigationLayout';
import NavigationSlider from '../components/NavigationSlider'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {getGalleryItemById, getGallery} from '../selectors'
import {fetchItemById} from '../actions'
import './Slider.sass'
import * as R from 'ramda'


class Slider extends Component {
    componentDidMount = () => {
        this.props.fetchItemById(Number(this.props.match.params.id))
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

    render() {
        const {portfolioItem} = this.props;
        console.log(portfolioItem);
        console.log(this.props.match.params.id);
        return (
            <div className="App">
                <NavigationLayout>
                    <NavigationSlider/>
                </NavigationLayout>
                <section className="s-carousel-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 p-0">
                                {portfolioItem && this.renderPortfolioImages()}
                            </div>
                            <Link className="slick-arrow slick-next"
                                  to={`/slider/${portfolioItem && portfolioItem.id + 1}`}/>
                            <Link className="slick-arrow slick-prev"
                                  to={`/slider/${portfolioItem && portfolioItem.id - 1}`}/>
                        </div>
                    </div>

                </section>


            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    portfolioItem: getGalleryItemById(state, state.galleryPageId.id),
    gallery: getGallery(state, ownProps)
});
const mapDispatchToProps = {
    fetchItemById
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slider))