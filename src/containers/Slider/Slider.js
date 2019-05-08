import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getGalleryItemById} from '../../selectors'
import {fetchItemById} from '../../actions/index'
import './Slider.sass'


class Slider extends Component {
    state = {
        direction: ''
    }

    componentDidMount = () => {
        this.props.fetchItemById(Number(this.props.match.params.id))
    };

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchItemById(Number(this.props.match.params.id))
        }
    }

    renderPortfolioImages = () => {
        const {portfolioItem} = this.props;
        return (
            portfolioItem.portfolioImg.map(
                (image) => <img key={image} className="carousel-image" src={image} alt={image}/>
            )
        )
    };

    render() {
        const {portfolioItem} = this.props;
        return (
            <div className="carousel-img-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1">
                            {portfolioItem && (this.renderPortfolioImages())}
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    portfolioItem: getGalleryItemById(state, state.galleryPageId.id)

});
const mapDispatchToProps = {
    fetchItemById
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider)