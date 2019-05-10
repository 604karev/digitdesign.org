import * as R from 'ramda'

export const getGalleryItemById = (state, id) => R.prop(id, state.gallery);

export const getGallery = (state, ownProps) => {
    const activeCategory = getActiveCategory(ownProps);
    const applyCategory = array => R.prop('category', array).some(
        elementArray => (
            R.equals(
                elementArray, activeCategory
            )
        )
    );
    return R.compose(
        R.when(R.always(activeCategory), R.filter(applyCategory)),
        R.map(id => getGalleryItemById(state, id)),
        R.reverse,
    )(state.galleryPage.ids)
};

export const getActiveCategory = ownProps => {
    return R.path(['match', 'params', 'category'], ownProps)
};

export const getGalleryLength = state => R.compose(
    R.length,
    R.values,
)(state.gallery);


