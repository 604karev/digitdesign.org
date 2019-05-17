import React from 'react'
import {Modal} from 'reactstrap';
import './ModalPanel.sass'
import {Link} from 'react-router-dom'


const ModalPanel = ({isOpen, toggleModal}) => {
    return (
        <Modal className="modal-window" isOpen={isOpen} id="exampleModal" fade>
            <section className="s-modal-header">
                <div className="modal-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="modal-close float-right">
                                    <button onClick={toggleModal} data-dismiss="modal"
                                            data-target="#exampleModal"
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
                                <div className="info-text float-left">
                                    <svg className="info-text__icon" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="i_icon_path"
                                              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
                                              fill="white"/>
                                    </svg>
                                    Info
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="s-about pt-lg-5">
                <div className="about-me">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 px-xl-2">
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
                            <div className="col-sm-6 col-lg-3 px-xl-2">
                                <div className="contact-block">
                                    <h2 className="contact-block__h2 h2"> Career</h2>
                                    <ul className="contact-list">
                                        <li className="contact-list__element">
                                            <span className="contact-list__year">2018 — </span>OMEGA-R
                                        </li>
                                        <li className="contact-list__element">
                                            <span className="contact-list__year">2017 — </span>WEBSOLUTIONS.by
                                        </li>
                                        <li className="contact-list__element">
                                            <span className="contact-list__year">2015 — </span>ARTEZIO.COM
                                        </li>
                                        <li className="contact-list__element">
                                            <span className="contact-list__year">2013 — </span>FREELANCE
                                        </li>
                                        <li className="contact-list__element">
                                            <span className="contact-list__year">2011 — </span>ATMATIC.COM
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 px-xl-2">
                                <div className="contact-block">
                                    <h2 className="contact-block__h2 h2">Skills</h2>
                                    <p className="contact-block__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces,
                                        Flash, Corporate Identity, Logo, UI design, Game design, Mobile design.
                                    </p>
                                    <p className="contact-block__paragraph">Adobe Photoshop, Adobe illustrator,
                                        CorelDraw, Adobe Animate, Word, Power Point, Zeplin, Figma
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 px-xl-2">
                                <div className="contact-block">
                                    <h2 className="contact-block__h2 h2">About me</h2>
                                    <p className="contact-block__paragraph with-photo">
                                        <img className="contact-block__image"
                                             src="/image/ava_me_for_site02.png" alt="ava_me"/>
                                    </p>
                                    <p className="contact-block__paragraph">Hello! My name is
                                        Alexander. I was born in 1987. I have higher education in informatics
                                        university of the country. There istaste inart, communication,
                                        responsibility, accuracy.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="s-reviews">
                <div className="reviews">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 px-xl-2">
                                <h2 className="reviews__h2 h2">Reviews <Link className="reviews__link" to="#">See
                                    more on FB</Link></h2>
                            </div>
                            <div className="col-md-6 col-lg-3 py-3 px-xl-2">
                                <div className="reviews-author">
                                    <img className="reviews-author__image float-left" src="/image/author_photo.png"
                                         alt="author_foto"/>
                                    <div className="reviews-author__wrapper ">
                                        <h3 className="reviews-author__h3 h3">Sergey Poltavin</h3>
                                        <p className="reviews-author__position"> Omega-R, Director</p>
                                    </div>
                                </div>
                                <div className="reviews-messengers">
                                    <img className="reviews-messengers__img" src="/image/Skype.svg" alt="Skype"/>
                                    <img className="reviews-messengers__img" src="/image/Slack.svg" alt="Slack"/>
                                    <img className="reviews-messengers__img" src="/image/Youtube.svg"
                                         alt="Youtube"/>
                                    <img className="reviews-messengers__img" src="/image/LinkedIN.svg"
                                         alt="LinkedIN"/>
                                    <img className="reviews-messengers__img" src="/image/Facebook.svg"
                                         alt="Facebook"/>
                                    <img className="reviews-messengers__img" src="/image/Mail.svg" alt="Mail"/>
                                </div>
                                <div className="testimonial">
                                    <h4 className="testimonial__h4 h4">Original review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                                <div className="testimonial testimonial_translation">
                                    <h4 className="testimonial__h4 h4">Translation review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 py-3 px-xl-2">
                                <div className="reviews-author">
                                    <img className="reviews-author__image float-left" src="/image/author_photo.png"
                                         alt="author_foto"/>
                                    <div className="reviews-author__wrapper ">
                                        <h3 className="reviews-author__h3 h3">Sergey Poltavin</h3>
                                        <p className="reviews-author__position"> Omega-R, Director</p>
                                    </div>
                                </div>
                                <div className="reviews-messengers">
                                    <img className="reviews-messengers__img" src="/image/Skype.svg" alt="Skype"/>
                                    <img className="reviews-messengers__img" src="/image/Slack.svg" alt="Slack"/>
                                    <img className="reviews-messengers__img" src="/image/Youtube.svg"
                                         alt="Youtube"/>
                                    <img className="reviews-messengers__img" src="/image/LinkedIN.svg"
                                         alt="LinkedIN"/>
                                    <img className="reviews-messengers__img" src="/image/Facebook.svg"
                                         alt="Facebook"/>
                                    <img className="reviews-messengers__img" src="/image/Mail.svg" alt="Mail"/>
                                </div>
                                <div className="testimonial">
                                    <h4 className="testimonial__h4 h4">Original review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                                <div className="testimonial testimonial_translation">
                                    <h4 className="testimonial__h4 h4">Translation review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 py-3 px-xl-2">
                                <div className="reviews-author">
                                    <img className="reviews-author__image float-left" src="/image/author_photo.png"
                                         alt="author_foto"/>
                                    <div className="reviews-author__wrapper ">
                                        <h3 className="reviews-author__h3 h3">Sergey Poltavin</h3>
                                        <p className="reviews-author__position"> Omega-R, Director</p>
                                    </div>
                                </div>
                                <div className="reviews-messengers">
                                    <img className="reviews-messengers__img" src="/image/Skype.svg" alt="Skype"/>
                                    <img className="reviews-messengers__img" src="/image/Slack.svg" alt="Slack"/>
                                    <img className="reviews-messengers__img" src="/image/Youtube.svg"
                                         alt="Youtube"/>
                                    <img className="reviews-messengers__img" src="/image/LinkedIN.svg"
                                         alt="LinkedIN"/>
                                    <img className="reviews-messengers__img" src="/image/Facebook.svg"
                                         alt="Facebook"/>
                                    <img className="reviews-messengers__img" src="/image/Mail.svg" alt="Mail"/>
                                </div>
                                <div className="testimonial">
                                    <h4 className="testimonial__h4 h4">Original review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                                <div className="testimonial testimonial_translation">
                                    <h4 className="testimonial__h4 h4">Translation review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 py-3 px-xl-2">
                                <div className="reviews-author">
                                    <img className="reviews-author__image float-left" src="/image/author_photo.png"
                                         alt="author_foto"/>
                                    <div className="reviews-author__wrapper ">
                                        <h3 className="reviews-author__h3 h3">Sergey Poltavin</h3>
                                        <p className="reviews-author__position"> Omega-R, Director</p>
                                    </div>
                                </div>
                                <div className="reviews-messengers">
                                    <img className="reviews-messengers__img" src="/image/Skype.svg" alt="Skype"/>
                                    <img className="reviews-messengers__img" src="/image/Slack.svg" alt="Slack"/>
                                    <img className="reviews-messengers__img" src="/image/Youtube.svg"
                                         alt="Youtube"/>
                                    <img className="reviews-messengers__img" src="/image/LinkedIN.svg"
                                         alt="LinkedIN"/>
                                    <img className="reviews-messengers__img" src="/image/Facebook.svg"
                                         alt="Facebook"/>
                                    <img className="reviews-messengers__img" src="/image/Mail.svg" alt="Mail"/>
                                </div>
                                <div className="testimonial">
                                    <h4 className="testimonial__h4 h4">Original review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                                <div className="testimonial testimonial_translation">
                                    <h4 className="testimonial__h4 h4">Translation review</h4>
                                    <p className="testimonial__paragraph">
                                        UI, UX, Web design, Graphic design, Illustrations, Banners, Prints,
                                        Animation, Presentations, Interfaces, Flash, Corporate Identity, Logo, UI
                                        design, Game design, Mobile design.
                                    </p>
                                    <p className="testimonial__paragraph">
                                        Adobe Photoshop, Adobe illustrator, Corel Draw, Adobe Animate, Word, Power
                                        Point, Zeplin, Figma
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
    )
};


export default ModalPanel