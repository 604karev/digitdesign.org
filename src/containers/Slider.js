import React, {Component} from 'react'
import NavigationLayout from '../components/NavigationLayout';
import NavigationSlider from '../components/NavigationSlider'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getGalleryItemById} from '../selectors'
import {fetchItemById} from '../actions'
import './Slider.sass'
import * as R from 'ramda'


class Slider extends Component {
    componentDidMount = () => {
        this.props.fetchItemById(this.props.match.params.id)
    };


    renderPortfolioImages = () => {
        const {portfolioItem} = this.props;
        return portfolioItem.portfolioImg.map(
            image => <img key={image} className="carousel-image" src={image} alt={image}/>
        )
    };

    render() {
        const {portfolioItem} = this.props;
        console.log(portfolioItem);
        return (
            <div className="App">
                <NavigationLayout>
                    <NavigationSlider/>
                </NavigationLayout>
                <section className="s-carousel-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 offset-1">
                                {portfolioItem && this.renderPortfolioImages()}
                            </div>
                        </div>
                    </div>

                </section>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    portfolioItem: getGalleryItemById(state, state.galleryPageId.id)
});
const mapDispatchToProps = {
    fetchItemById
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slider))