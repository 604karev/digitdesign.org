export const fetchGalleryApi = async () => {
    const response = await fetch('./gallery.json');
    return await response.json()
};

export const fetchItemByIdApi = async () => {
    const response = await fetch('../gallery.json');
    return await response.json()

};