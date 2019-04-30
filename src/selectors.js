import * as R from 'ramda'

export const getGalleryItemById = (state, id) => {
    console.log(state, id)
 return   R.prop(id, state.gallery)
};

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
        R.reverse,
        R.values,
    )(state.gallery)
};

export const getActiveCategory = ownProps => {
    return R.path(['match', 'params', 'category'], ownProps)
};

