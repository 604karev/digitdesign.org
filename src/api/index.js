import * as R from 'ramda'

export const fetchGalleryApi = async () => {
    const response = await fetch('./gallery.json');
    return await response.json()
};

export const fetchItemByIdApi = async id => {
    const response = await fetch('../gallery.json');
    const portfolioItem = await response.json();
    return R.find(R.propEq('id', id), portfolioItem);
};