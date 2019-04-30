import * as R from 'ramda'

export const fetchGalleryApi = async () => {
    const response = await fetch('./gallery.json');
    return await response.json()
};

export const fetchItemByIdApi = async id => {
    const response = await fetch('../gallery.json');
    const portfolioItem = await response.json();
    const isEquals = (item, id) => R.equals(R.toString(item.id), id);
    return R.find(item => isEquals(item, id), portfolioItem);
};