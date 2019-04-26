export const fetchGalleryApi = async () => {
    const response = await fetch('./gallery.json');
    return await response.json()

}