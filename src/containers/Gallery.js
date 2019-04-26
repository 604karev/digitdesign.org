import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGallery} from '../actions'
import * as R from 'ramda'
import {Link} from 'react-router-dom'
import './Gallery.sass'

class Gallery extends Component {
    state = {
        width: window.innerWidth,
    };

    componentDidMount = () => {
        this.props.fetchGallery();
        window.addEventListener("resize", this.updateDimensions);
    };
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    };

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth
        });
    };
    sliceTo = (arr, n) => {
        let newArray = [];
        for (let k = 0; k < n; k++) {
            newArray[k] = []
        }
        for (let i = 0; i < arr.length; i += n) {
            let tempArray = arr.slice(i, i + n);
            for (let j = 0; j < n; j++) {
                if (tempArray[j]) {
                    newArray[j].push(tempArray[j])
                }
            }

        }
        return newArray

    };


    renderGallery = (item, index) => {
        return (
            <div className="design-gallery-row-element" key={index}>
                <Link
                    className="design-gallery-row-element-link"
                    to={'/' + item.category[0] + '/' + item.id}>
                    <img
                        className="design-gallery-row-element__image"
                        src={item.img}
                        alt={item.img}/>
                    <span
                        className="design-gallery-row-element-link__overlay">
                        {item.category.map(
                            (categoryEl, index) => {
                                return (
                                    categoryEl === 'web-design' ?
                                        <span
                                            key={index}
                                            className="element-category">#Web design</span> : categoryEl === 'mobile' ?
                                        <span key={index}
                                              className="element-category">#Mobile</span> : categoryEl === 'art' ?
                                            <span key={index}
                                                  className="element-category">#Art</span> : categoryEl === 'icons' ?
                                                <span key={index}
                                                      className="element-category">#Icons</span> : categoryEl === 'identity' ?
                                                    <span key={index}
                                                          className="element-category">#Identity</span> : null

                                )
                            })}
                    </span>
                </Link>
            </div>
        )
    };
    renderGalleryRow = (array, index) => (
        <div className="design-gallery-row" key={index}>
            {array.map((galleryItem, index) => this.renderGallery(galleryItem, index))}
        </div>
    );


    render() {
        const {gallery} = this.props;
        let splitGallery = this.sliceTo(gallery, 5);

        if (this.state.width <= 1199) {
            splitGallery = this.sliceTo(gallery, 4);
        }
        if (this.state.width <= 991) {
            splitGallery = this.sliceTo(gallery, 3);
        }
        if (this.state.width <= 768) {
            splitGallery = this.sliceTo(gallery, 2);
        }
        if (this.state.width <= 480) {
            splitGallery = this.sliceTo(gallery, 1);
        }


        return (
            <div className="design-gallery">
                {splitGallery.map((array, index) => this.renderGalleryRow(array, index))}
            </div>
        )

    }
}

const mapStateToProps = state => ({
    gallery: R.values(state.gallery)
});

const mapDispatchToProps = {
    fetchGallery
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)