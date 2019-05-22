import React from 'react'
import {Modal} from 'reactstrap';
import './index.sass'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getReviews} from "selectors";


const ModalPanelInfo = ({infoIsOpen, toggleModalInfo, reviews}) => {

    const renderReviews = (review) => {

        const renderSocial = ({link, img}, index) => {
            return (
                <Link key={index} className="reviews-messengers__link" to={link}>
                    <img className="reviews-messengers__img" src={img} alt={img}/>
                </Link>
            )
        };

        const renderParagraph = (paragraph, index) => (
            <p key={index} className="testimonial__paragraph">
                {paragraph}
            </p>

        );

        return (
            <div key={review.id} className="col-md-6 col-lg-3 py-3 px-xl-2">
                <div className="reviews-author">
                    <img className="reviews-author__image float-left" src={review.photo}
                         alt="author_foto"/>
                    <div className="reviews-author__wrapper ">
                        <h3 className="reviews-author__h3 h3">{review.name}</h3>
                        <p className="reviews-author__position"> {review.position}</p>
                    </div>
                </div>
                <div className="reviews-messengers">
                    {review.socialNetworks.map(
                        (item, index) => renderSocial(item, index)
                    )}
                </div>
                <div className="testimonial">
                    <h4 className="testimonial__h4 h4">Original review</h4>
                    {review.originalReview.map(
                        (item, index) => renderParagraph(item, index)
                    )}
                </div>
                <div className="testimonial testimonial_translation">
                    <h4 className="testimonial__h4 h4">Translation review</h4>
                    {review.translateReview.map(
                        (item, index) => renderParagraph(item, index)
                    )}
                </div>
            </div>
        )
    };

    return (
        <Modal className="modal-window" isOpen={infoIsOpen} id="aboutModal" fade>
            <section className="s-modal-header">
                <div className="modal-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="modal-close float-right">
                                    <button onClick={toggleModalInfo} data-dismiss="modal"
                                            data-target="#aboutModal"
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
                                    <svg className="info-text__icon" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="i_icon_path"
                                              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
                                              fill="white"/>
                                    </svg>
                                    Info
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="s-about pt-lg-3 pt-xl-5 ">
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
                                        <li className="contact-list__element contact-list__element_upper">
                                            <a className="contact-list__link"
                                               href="https://join.slack.com/t/digitdesignorg/shared_invite/enQtNDIyNzc1ODk1Mjg3LTNkNjRlNDRjNjY4ZWYxYThhY2RlZDBiM2ZmMDIxODM0MWRmZjVlMGE5ZWJiNTFmNGVmYTBiMmI0YzJjZTE2Yjc">digitgesign.org</a>
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
                                <div className="social-block">
                                    <ul className="social-list">
                                        <li className="social-list__item">
                                            <Link className="social-list__link" to='#'>
                                                <svg className="social-list__image social-list__image_facebook"
                                                     width="8" height="17" viewBox="0 0 8 17" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.28362 16.8197V8.65888H7.6343L7.94582 5.84663H5.28362L5.28762 4.43907C5.28762 3.70559 5.36034 3.31257 6.45963 3.31257H7.92918V0.5H5.57816C2.75422 0.5 1.76026 1.86425 1.76026 4.15848V5.84695H0V8.6592H1.76026V16.8197H5.28362Z"
                                                        fill="#3B5998"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="social-list__item">
                                            <Link className="social-list__link" to='#'>
                                                <svg className="social-list__image" width="31" height="30"
                                                     viewBox="0 0 31 30" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M11.3894 9.26419C11.3894 10.2449 10.6512 11.0296 9.46593 11.0296H9.4442C8.30297 11.0296 7.56519 10.2449 7.56519 9.26419C7.56519 8.26275 8.32544 7.5 9.48833 7.5C10.6512 7.5 11.3673 8.26275 11.3894 9.26419ZM11.1654 12.4238V22.6374H7.76608V12.4238H11.1654ZM23.4245 22.6371L23.4247 16.7809C23.4247 13.6438 21.7477 12.1837 19.5108 12.1837C17.706 12.1837 16.8979 13.175 16.4467 13.8705V12.4238H13.047C13.0918 13.3822 13.047 22.6374 13.047 22.6374H16.4467V16.9333C16.4467 16.628 16.4688 16.3235 16.5587 16.105C16.8044 15.4951 17.3637 14.8638 18.3029 14.8638C19.5334 14.8638 20.0253 15.8003 20.0253 17.1728V22.6371H23.4245Z"
                                                          fill="#0077B5"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="social-list__item">
                                            <Link className="social-list__link" to='#'>
                                                <svg className="social-list__image" width="30" height="30"
                                                     viewBox="0 0 30 30" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M14.794 12.5281C14.794 11.9499 14.6425 11.4543 14.3406 11.0394C13.8373 10.3638 12.984 10.0176 11.778 10H7V19.7541H11.4553C11.9577 19.7541 12.4224 19.7114 12.8523 19.6232C13.2822 19.5341 13.6538 19.3717 13.969 19.1332C14.2493 18.9253 14.4826 18.6691 14.6689 18.3657C14.9633 17.9072 15.1101 17.3884 15.1101 16.8102C15.1101 16.2497 14.9812 15.7726 14.7253 15.381C14.4666 14.9884 14.0866 14.7016 13.5823 14.5197C13.9144 14.3527 14.1656 14.1671 14.3368 13.9647C14.6425 13.6028 14.794 13.123 14.794 12.5281ZM21.461 11.6687H17.2239V10.4548H21.461V11.6687ZM17.7179 15.4339C17.7875 14.9643 17.9577 14.5921 18.2277 14.3174C18.4977 14.0427 18.8797 13.9054 19.3688 13.9054C19.8204 13.9054 20.1976 14.0344 20.5043 14.2933C20.8072 14.5541 20.9784 14.9327 21.0133 15.4339H17.7179ZM21.0876 12.6877C21.5984 12.9123 22.0189 13.2687 22.35 13.755C22.652 14.1837 22.8458 14.6812 22.9342 15.2464C22.986 15.5768 23.0067 16.0557 22.9982 16.6784H17.6708C17.7028 17.4014 17.9549 17.909 18.4366 18.1995C18.7282 18.3805 19.0791 18.4715 19.4911 18.4715C19.9248 18.4715 20.2795 18.361 20.5513 18.1411C20.7009 18.0213 20.8326 17.8561 20.9455 17.6445H22.8975C22.8458 18.0715 22.6087 18.5067 22.1892 18.9485C21.5344 19.6492 20.6172 20 19.4384 20C18.4648 20 17.6059 19.7049 16.8637 19.1128C16.1176 18.5216 15.747 17.5582 15.747 16.2255C15.747 14.9754 16.0828 14.0167 16.7536 13.3494C17.4262 12.684 18.2964 12.3489 19.3679 12.3489C20.0048 12.3489 20.5777 12.4622 21.0876 12.6877ZM8.97086 18.0613V15.4599H11.4055C11.8288 15.4636 12.159 15.5193 12.3942 15.6251C12.8147 15.8153 13.0236 16.1634 13.0236 16.6719C13.0236 17.2715 12.8072 17.6761 12.3735 17.8896C12.1355 18.0037 11.8006 18.0613 11.3716 18.0613H8.97086ZM8.97086 11.6937V13.8459H11.3754C11.8034 13.8459 12.1524 13.7651 12.4215 13.6037C12.6887 13.4422 12.8232 13.1563 12.8232 12.748C12.8232 12.2923 12.6463 11.9925 12.2926 11.8459C11.9859 11.7447 11.5965 11.6937 11.1233 11.6937H8.97086Z"
                                                          fill="#1769FF"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="social-list__item">
                                            <Link className="social-list__link" to='#'>
                                                <svg className="social-list__image" width="30" height="30"
                                                     viewBox="0 0 30 30" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M23 14.9889C23 15.5299 22.9449 16.0702 22.8367 16.5968C22.7312 17.111 22.575 17.6157 22.3703 18.0983C22.1703 18.5722 21.9222 19.029 21.6324 19.455C21.3468 19.8782 21.0179 20.2753 20.6566 20.6373C20.2944 20.9977 19.896 21.3258 19.4729 21.6125C19.0455 21.9004 18.5881 22.1481 18.1139 22.349C17.6306 22.5526 17.1247 22.7086 16.611 22.8139C16.0837 22.9224 15.5414 22.9778 14.9996 22.9778C14.4574 22.9778 13.9152 22.9224 13.3886 22.8139C12.8742 22.7086 12.3683 22.5526 11.8854 22.349C11.4112 22.1481 10.9533 21.9004 10.526 21.6125C10.1029 21.3258 9.70446 20.9977 9.34311 20.6373C8.98138 20.2753 8.65244 19.8782 8.36649 19.455C8.07819 19.029 7.82973 18.5722 7.62895 18.0983C7.42423 17.6157 7.2676 17.1109 7.16173 16.5968C7.0547 16.0702 7 15.5299 7 14.9889C7 14.4475 7.05467 13.906 7.16176 13.3806C7.26763 12.8664 7.42426 12.3609 7.62898 11.8792C7.82976 11.4048 8.07823 10.9477 8.36652 10.5217C8.65247 10.0981 8.98141 9.70171 9.34314 9.33932C9.70449 8.97887 10.1029 8.65162 10.526 8.3653C10.9534 8.07623 11.4112 7.82856 11.8855 7.62726C12.3683 7.42321 12.8742 7.26681 13.3887 7.16228C13.9152 7.05462 14.4575 7 14.9997 7C15.5415 7 16.0837 7.05462 16.6111 7.16228C17.1247 7.26684 17.6306 7.42324 18.1139 7.62726C18.5881 7.82853 19.0456 8.07623 19.4729 8.3653C19.896 8.65162 20.2945 8.97887 20.6566 9.33932C21.0179 9.70171 21.3469 10.0981 21.6324 10.5217C21.9222 10.9477 22.1703 11.4049 22.3703 11.8792C22.575 12.3609 22.7312 12.8664 22.8367 13.3806C22.9449 13.906 23 14.4475 23 14.9889ZM12.0846 8.81817C10.1794 9.71655 8.7575 11.4696 8.31411 13.5823L8.32067 13.5823C8.55415 13.5845 11.3757 13.6106 14.6215 12.7494C13.439 10.6515 12.1757 8.93952 12.0846 8.81817ZM8.17311 14.7713C8.2942 14.776 11.6698 14.8516 15.1875 13.8C15.3832 14.1831 15.5704 14.5716 15.7419 14.9593C15.652 14.9851 15.5614 15.0116 15.4723 15.0412C11.7854 16.2318 9.91576 19.5439 9.91811 19.5475C8.82977 18.3393 8.16763 16.7416 8.16763 14.989C8.16763 14.9384 8.1693 14.8889 8.17098 14.839V14.839V14.839V14.839V14.839L8.17098 14.839L8.17098 14.8389C8.17174 14.8165 8.1725 14.794 8.17311 14.7713ZM19.5116 9.86848C18.3088 8.80938 16.7294 8.16695 14.9996 8.16695C14.4445 8.16695 13.9058 8.23405 13.3898 8.35809L13.4009 8.37296C13.5627 8.58932 14.8076 10.2543 15.9438 12.3377C18.5006 11.3805 19.4787 9.91763 19.511 9.86938L19.5116 9.86848ZM16.1909 16.0951L16.2075 16.0898C17.1688 18.5847 17.5657 20.674 17.6669 21.27C16.8469 21.6183 15.9457 21.8107 14.9996 21.8107C13.4151 21.8107 11.9604 21.2673 10.8005 20.3666C10.8148 20.3357 12.1312 17.5078 16.1622 16.1046C16.1716 16.1011 16.1812 16.0981 16.1909 16.0951ZM18.8175 20.6466C20.3515 19.6129 21.441 17.9714 21.7449 16.0701C21.6043 16.0249 19.6929 15.4206 17.4877 15.7737C18.3838 18.2328 18.7479 20.2355 18.8175 20.6466ZM16.9235 14.3437C16.7817 14.0109 16.6282 13.6798 16.4696 13.3545C19.1497 12.2615 20.2487 10.6936 20.2753 10.6556L20.2757 10.6551C21.2343 11.8171 21.8136 13.3014 21.8293 14.9187C21.8274 14.9183 21.8247 14.9177 21.8212 14.917C21.6418 14.8797 19.3732 14.4079 17.0712 14.6971C17.0232 14.5801 16.9739 14.4631 16.9235 14.3437Z"
                                                          fill="#F26798"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li className="social-list__item">
                                            <Link className="social-list__link" to='#'>
                                                <svg className="social-list__image" width="30" height="30"
                                                     viewBox="0 0 30 30" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0" maskUnits="userSpaceOnUse" x="0"
                                                          y="0"
                                                          width="30" height="30">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                              d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
                                                              fill="white"/>
                                                    </mask>
                                                    <g mask="url(#mask0)">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                              d="M15.0008 7C12.8281 7 12.5554 7.0095 11.702 7.04833C10.8504 7.08733 10.269 7.22217 9.76036 7.42C9.23419 7.62434 8.78785 7.89768 8.34318 8.34251C7.89818 8.78719 7.62484 9.23352 7.41984 9.75953C7.2215 10.2684 7.0865 10.8499 7.04817 11.7012C7.01 12.5546 7 12.8274 7 15.0001C7 17.1728 7.00967 17.4446 7.04833 18.298C7.0875 19.1496 7.22234 19.731 7.42 20.2396C7.62451 20.7658 7.89784 21.2122 8.34268 21.6568C8.78719 22.1018 9.23352 22.3758 9.75936 22.5802C10.2684 22.778 10.8499 22.9128 11.7014 22.9518C12.5547 22.9907 12.8272 23.0002 14.9998 23.0002C17.1726 23.0002 17.4444 22.9907 18.2978 22.9518C19.1495 22.9128 19.7315 22.778 20.2405 22.5802C20.7665 22.3758 21.2122 22.1018 21.6567 21.6568C22.1017 21.2122 22.375 20.7658 22.58 20.2398C22.7767 19.731 22.9117 19.1495 22.9517 18.2981C22.99 17.4448 23 17.1728 23 15.0001C23 12.8274 22.99 12.5547 22.9517 11.7014C22.9117 10.8497 22.7767 10.2684 22.58 9.7597C22.375 9.23352 22.1017 8.78719 21.6567 8.34251C21.2116 7.89751 20.7666 7.62417 20.24 7.42C19.73 7.22217 19.1483 7.08733 18.2966 7.04833C17.4433 7.0095 17.1716 7 14.9983 7H15.0008ZM14.734 8.44142H14.7341L15.0008 8.44149C17.1368 8.44149 17.39 8.44916 18.2335 8.48749C19.0135 8.52316 19.4368 8.6535 19.7188 8.763C20.0922 8.908 20.3583 9.08133 20.6382 9.36134C20.9182 9.64134 21.0915 9.90801 21.2368 10.2813C21.3463 10.563 21.4768 10.9864 21.5123 11.7664C21.5507 12.6097 21.559 12.863 21.559 14.9981C21.559 17.1331 21.5507 17.3864 21.5123 18.2298C21.4767 19.0098 21.3463 19.4331 21.2368 19.7148C21.0918 20.0881 20.9182 20.354 20.6382 20.6338C20.3582 20.9138 20.0923 21.0871 19.7188 21.2321C19.4372 21.3421 19.0135 21.4721 18.2335 21.5078C17.3901 21.5461 17.1368 21.5545 15.0008 21.5545C12.8646 21.5545 12.6114 21.5461 11.7681 21.5078C10.9881 21.4718 10.5647 21.3415 10.2826 21.232C9.90922 21.087 9.64255 20.9136 9.36254 20.6336C9.08254 20.3536 8.90921 20.0876 8.76387 19.7141C8.65437 19.4324 8.52387 19.0091 8.48837 18.2291C8.45004 17.3858 8.44237 17.1324 8.44237 14.9961C8.44237 12.8597 8.45004 12.6077 8.48837 11.7644C8.52404 10.9844 8.65437 10.561 8.76387 10.279C8.90887 9.90568 9.08254 9.63901 9.36254 9.359C9.64255 9.079 9.90922 8.90567 10.2826 8.76033C10.5646 8.65033 10.9881 8.52033 11.7681 8.48449C12.5061 8.45116 12.7921 8.44116 14.2831 8.43949V8.44149C14.4224 8.44128 14.5723 8.44134 14.734 8.44142ZM18.3111 10.7297C18.3111 10.1995 18.7411 9.76999 19.2711 9.76999V9.76966C19.8011 9.76966 20.2311 10.1997 20.2311 10.7297C20.2311 11.2597 19.8011 11.6897 19.2711 11.6897C18.7411 11.6897 18.3111 11.2597 18.3111 10.7297ZM15.0006 10.8919C12.7318 10.892 10.8924 12.7314 10.8924 15.0002C10.8924 17.2691 12.7319 19.1078 15.0008 19.1078C17.2696 19.1078 19.1085 17.2691 19.1085 15.0002C19.1085 12.7314 17.2694 10.8919 15.0006 10.8919ZM17.6674 15.0002C17.6674 13.5273 16.4734 12.3335 15.0007 12.3335C13.5278 12.3335 12.334 13.5273 12.334 15.0002C12.334 16.4729 13.5278 17.6669 15.0007 17.6669C16.4734 17.6669 17.6674 16.4729 17.6674 15.0002Z"
                                                              fill="#FF5CA3"/>
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 px-xl-2">
                                <div className="contact-block">
                                    <h2 className="contact-block__h2 h2"> Career</h2>
                                    <ul className="contact-list">
                                        <li className="contact-list__element contact-list__element_upper">
                                            <span className="contact-list__year">2018 — Omega-R</span>
                                        </li>
                                        <li className="contact-list__element contact-list__element_upper">
                                            <span className="contact-list__year">2017 — Websolutions.by</span>
                                        </li>
                                        <li className="contact-list__element contact-list__element_upper">
                                            <span className="contact-list__year">2015 — Artezio.com</span>
                                        </li>
                                        <li className="contact-list__element contact-list__element_upper">
                                            <span className="contact-list__year">2013 — Freelance</span>
                                        </li>
                                        <li className="contact-list__element contact-list__element_upper">
                                            <span className="contact-list__year">2011 — Atmatic.com</span>
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
                            {reviews.map(item => renderReviews(item))}
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
    )
};
const mapStateToProps = (state) => ({
    reviews: getReviews(state)
});


export default connect(mapStateToProps)(ModalPanelInfo)