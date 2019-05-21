import React, {Component} from 'react'
import {Modal} from 'reactstrap'
import './index.sass'
import Select from 'react-select';

const options = [
    {value: 'all', label: 'All'},
    {value: 'web-design', label: '#Web design'},
    {value: 'mobile', label: '#Mobile'},
    {value: 'icons', label: '#Icons'},
    {value: 'identity', label: '#Identity'},
    {value: 'art', label: '#Art'}
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        padding: 10,
        // backgroundColor: '#100f0f',
        color: '#ffffff'
    }),
    indicatorSeparator: () => false,


};


class modalPanelContact extends Component {


    render() {
        const {contactIsOpen, toggleModalContact} = this.props;

        return (
            <Modal className="modal-window" isOpen={contactIsOpen} id="contactModal" fade>
                <section className="s-modal-header">
                    <div className="modal-header">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="modal-close float-right">
                                        <button onClick={toggleModalContact} data-dismiss="modal"
                                                data-target="#contactModal"
                                                className="btn modal-close__icon"
                                        >
                                            <svg className="modal-close__svg" width="14" height="14"
                                                 viewBox="0 0 14 14"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path className="modal-close__path"
                                                      d="M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z"
                                                      fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <h1 className="info-text float-left h1">
                                        <svg className="info-text__icon info-text__icon_envelope" width="20" height="16" viewBox="0 0 20 16"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                                                fill="white"/>
                                        </svg>
                                        Contact us
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s-contact-us">
                    <form action="#" className="contact-us w-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="contact-block">
                                        <h2 className="contact-block__h2 h2">Contact info</h2>
                                        <ul className="contact-list">
                                            <li className="contact-list__element">
                                                <a className="contact-list__link" href="mailto:DIGITDD@GMAIL.COM">digitdd@gmail.com</a>
                                                <svg className="contact-list__image float-left" width="20" height="16"
                                                     viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                                                        fill="white"/>
                                                </svg>
                                            </li>
                                            <li className="contact-list__element">
                                                <a className="contact-list__link"
                                                   href="http://DIGITDESIGN.ORG/">digitdesign.org</a>
                                                <svg className="contact-list__image panel-skype float-left" width="22"
                                                     height="22"
                                                     viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M20.8604 13.1538C21.0029 12.4662 21.0913 11.7343 21.0913 11.0024C21.0913 5.42754 16.5773 0.918507 11.0073 0.918507C10.2755 0.918507 9.54854 1.00201 8.85598 1.14936C7.92274 0.427327 6.76355 0 5.50122 0C2.46572 0 0 2.46572 0 5.50122C0 6.76355 0.427327 7.92274 1.14445 8.85107C1.00201 9.53872 0.913595 10.2706 0.913595 11.0024C0.913595 16.5773 5.42754 21.0864 10.9975 21.0864C11.7294 21.0864 12.4563 21.0029 13.1489 20.8555C14.0821 21.5726 15.2413 22 16.4987 22C19.5342 22 22 19.5342 22 16.4987C22.0049 15.2413 21.5775 14.0821 20.8604 13.1538ZM11.3021 17.6481C8.07991 17.6481 5.38333 16.2139 5.38333 14.4554C5.38333 13.6695 5.8254 12.9524 6.83232 12.9524C8.3648 12.9524 8.50724 15.1578 11.1596 15.1578C12.4219 15.1578 13.2373 14.5979 13.2373 13.866C13.2373 12.9475 12.4514 12.8051 11.1743 12.4907C8.10447 11.7343 5.38825 11.4101 5.38825 8.20762C5.38825 5.29983 8.26656 4.22415 10.747 4.22415C13.4534 4.22415 16.1893 5.29983 16.1893 6.94529C16.1893 7.77538 15.6294 8.50724 14.701 8.50724C13.311 8.50724 13.2668 6.86179 11.0172 6.86179C9.75484 6.86179 8.95421 7.20561 8.95421 7.96694C8.95421 8.93948 9.97587 9.03771 12.3483 9.58784C14.3818 10.0446 16.8033 10.9042 16.8033 13.3994C16.8033 16.3023 13.9986 17.6481 11.3021 17.6481Z"
                                                        fill="#ffffff"/>
                                                </svg>
                                            </li>
                                            <li className="contact-list__element">
                                                <a className="contact-list__link"
                                                   href="https://join.slack.com/t/digitdesignorg/shared_invite/enQtNDIyNzc1ODk1Mjg3LTNkNjRlNDRjNjY4ZWYxYThhY2RlZDBiM2ZmMDIxODM0MWRmZjVlMGE5ZWJiNTFmNGVmYTBiMmI0YzJjZTE2Yjc">DIGITDESIGN.ORG</a>
                                                <svg className="contact-list__image panel-slack float-left" width="22"
                                                     height="22"
                                                     viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.9921 9.10921L12.9399 11.9429L10.003 12.9252L9.05519 10.0914L11.9921 9.10921ZM14.0253 21.0777C6.4621 23.3466 3.19128 21.5884 0.922328 14.0253C-1.34662 6.4621 0.411569 3.19128 7.97473 0.922328C15.5379 -1.34662 18.8087 0.411569 21.0777 7.97473C23.3466 15.5379 21.5884 18.8087 14.0253 21.0777ZM17.9837 11.442C17.7921 10.8428 17.1389 10.5285 16.5398 10.7201L15.1155 11.1964L14.1677 8.36271L15.5919 7.88633C16.1911 7.6948 16.5054 7.04162 16.3139 6.44246C16.1223 5.8433 15.4691 5.52898 14.87 5.72052L13.4458 6.1969L12.9546 4.71864C12.7631 4.11948 12.1099 3.80517 11.5108 3.99671C10.9116 4.18824 10.5973 4.84142 10.7888 5.44058L11.2799 6.91884L8.34307 7.90598L7.85196 6.42772C7.66042 5.82856 7.00724 5.51425 6.40808 5.70578C5.80892 5.89732 5.49461 6.5505 5.68614 7.14966L6.17725 8.62792L4.75302 9.1043C4.15386 9.29583 3.83955 9.94901 4.03108 10.5482C4.18824 11.0049 4.63024 11.3045 5.08698 11.3241C5.29816 11.3536 5.46514 11.275 6.89919 10.7986L7.84704 13.6324L6.42281 14.1088C5.82365 14.3003 5.50934 14.9535 5.70087 15.5526C5.85803 16.0094 6.30003 16.309 6.75677 16.3286C6.96795 16.3581 7.13493 16.2795 8.56898 15.8031L9.0601 17.2814C9.24181 17.8118 9.83606 18.1948 10.504 18.0033C11.1031 17.8118 11.4174 17.1586 11.2259 16.5594L10.7348 15.0812L13.6717 14.094L14.1628 15.5723C14.3445 16.1027 14.9387 16.4858 15.6067 16.2942C16.2058 16.1027 16.5201 15.4495 16.3286 14.8503L15.8375 13.3721L17.2617 12.8957C17.8609 12.6894 18.1752 12.0363 17.9837 11.442Z"
                                                        fill="white"/>
                                                </svg>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="feedback">
                                        <h2 className="feedback__h2 h2">Feedback</h2>
                                        <div className="feedback-item">
                                            <label
                                                htmlFor="name"
                                                className="feedback-item__label">Your name
                                            </label>
                                            <input
                                                className="form-control feedback-item__input"
                                                id="name"
                                                type="text"
                                                placeholder="How can I call you"
                                                required/>
                                        </div>
                                        <div className="feedback-item">
                                            <label
                                                htmlFor="contact"
                                                className="feedback-item__label">Your contact
                                            </label>
                                            <input
                                                className="form-control feedback-item__input"
                                                id="contact"
                                                type="text"
                                                placeholder="business@mail.com"
                                                required/>
                                        </div>
                                        <div className="feedback-item">
                                            <label
                                                htmlFor="category"
                                                className="feedback-item__label">Your contact
                                            </label>
                                            <Select
                                                theme={(theme) => {
                                                    return {
                                                        ...theme,
                                                        borderRadius: 0,
                                                        colors: {
                                                            primary25: 'rgb(0, 123, 255)',
                                                            primary: 'rgba(0, 123, 255, 0.25)',
                                                        },
                                                    }
                                                }}
                                                defaultValue={options[0]}
                                                styles={customStyles}
                                                onChange={this.handleChange}
                                                options={options}
                                                className="feedback-item__select"
                                                name="category"
                                                id="category"
                                            />

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="feedback-item feedback-item_margin_top">
                                        <label htmlFor="your-question" className="feedback-item__label">Your
                                            question</label>
                                        <textarea
                                            className="form-control feedback-item__area w-100"
                                            name="contact-us__area"
                                            id="your-question"
                                            cols="30"
                                            rows="11"
                                            placeholder="What would you like to ask us? Maybe you have specific suggestions?"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 offset-md-6 col-lg-3 offset-lg-9">
                                    <button type="submit" className="btn btn-light float-right w-100 feedback-button">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </Modal>
        )
    }
};
export default modalPanelContact