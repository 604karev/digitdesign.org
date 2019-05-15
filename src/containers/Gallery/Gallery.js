import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGallery} from '../../actions/index'
import * as R from 'ramda'
import {Link} from 'react-router-dom'
import './Gallery.sass'
import Masonry from 'react-masonry-component';
import {getGallery} from '../../selectors';


class Gallery extends Component {

    componentDidMount = () => {
        this.props.fetchGallery();
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
                    className="design-gallery-row-element-link"
                    to={`/slider/${item.id}`}>
                    <img
                        className="img-fluid"
                        src={item.img}
                        alt={item.img}/>
                    <span className="design-gallery-row-element-link__overlay">
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


});

const mapDispatchToProps = {
    fetchGallery
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)