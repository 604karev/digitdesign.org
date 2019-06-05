import * as email from 'emailjs-com'

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

export const sendMessageApi = async (data) => {

    const templateParams = {
        from_name: `${data.name}(${data.email})`,
        to_name: 'digitdd@gmail.com',
        name: data.name,
        subject: data.subject,
        message_html: data.message
    };

    return await email.send('gmail', 'template_6QwMgsdR', templateParams, 'user_O0R69LedaqEOPpYZjWvgO')

};