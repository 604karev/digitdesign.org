import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGallery, fetchReviews} from 'actions/index'
import * as R from 'ramda'
import {Link} from 'react-router-dom'
import './index.sass'
import Masonry from 'react-masonry-component';
import {getGallery} from 'selectors';


class Gallery extends Component {

    componentDidMount = () => {
        this.props.fetchGallery();
        this.props.fetchReviews()
    };

    replaceSymbols = item =>
        <span className="element-category" key={item}>
            {`#${R.compose(
                R.replace(/^./, R.toUpper),
                R.replace('-', ' ',))(item)}`}
                </span>;

    renderGallery = (item, index) => {
        return (
            <div key={item.id} className="design-gallery-element">
                <Link
                    className="design-gallery__link"
                    to={`/carousel/${item.id}`}>
                    <img
                        className="img-fluid"
                        src={item.img}
                        alt={item.img}/>
                    <span className="design-gallery__overlay">
                           {R.map(this.replaceSymbols, item.category)}
                    </span>
                </Link>
            </div>
        )
    };

    render() {
        const {gallery} = this.props;

        return (
            <Masonry
                className="design-gallery">
                {R.reverse(gallery.map((array, index) => this.renderGallery(array, index)))}
            </Masonry>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    gallery: getGallery(state, ownProps),
    isLoading: state.galleryPage.isLoading
});

const mapDispatchToProps = {
    fetchGallery,
    fetchReviews
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)