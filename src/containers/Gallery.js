import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGallery} from '../actions'
import * as R from 'ramda'
import {Link} from 'react-router-dom'
import './Gallery.sass'
import Masonry from 'react-masonry-component';



class Gallery extends Component {


    componentDidMount = () => {
        this.props.fetchGallery();

    };

    renderGallery = (item, index) => {
        return (
            <div key={index} className="design-gallery-element">
                <Link
                    className="design-gallery-row-element-link"
                    to={`/${item.category[0]}/${item.id}`}>
                    <img
                        className="img-fluid"
                        src={item.img}
                        alt={item.img}/>
                    <span className="design-gallery-row-element-link__overlay">
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


    render() {
        const {gallery} = this.props;
        return (


            <Masonry className="design-gallery" >
                {gallery.map((array, index) => this.renderGallery(array, index))}
            </Masonry>
        )

    }
}

const mapStateToProps = state => ({
    gallery: R.reverse(R.values(state.gallery))
});

const mapDispatchToProps = {
    fetchGallery
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)