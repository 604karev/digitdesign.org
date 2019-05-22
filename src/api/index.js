export const fetchGalleryApi = async () => {
    const response = await fetch('./gallery.json');
    return await response.json()
};

export const fetchItemByIdApi = async () => {
    const response = await fetch('../gallery.json');
    return await response.json()
};

export const fetchReviewsApi = async () => {
    const response = await fetch('./reviews.json');
    return await response.json()
};