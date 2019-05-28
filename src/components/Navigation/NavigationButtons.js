import React, {Component} from 'react'
import './NavigationButtons.sass'
import ModalPanelInfo from 'components/ModalPanelInfo'
import ModalPanelContact from 'components/ModalPanelContact'

class NavigationButton extends Component {
    state = {
        infoIsOpen: false,
        contactIsOpen: false
    };

    toggleModal = (e) => {
        this.setState({[e.currentTarget.name]: !this.state[e.currentTarget.name]})
    };

    render() {
        return (
            <div className="icons float-right">
                <button aria-hidden="true" role="presentation" onClick={this.toggleModal}
                        name="contactIsOpen"
                        data-toggle="modal"
                        data-target="#contact"
                        className="btn ico-mail ml-3 rounded-0">
                    <svg className="ico-mail-svg" width="20" height="16" viewBox="0 0 20 16"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                            fill="black"/>
                    </svg>
                </button>
                <button aria-hidden="true"
                        role="presentation"
                        onClick={this.toggleModal}
                        className="btn ico-slider ml-3 rounded-0"
                        data-toggle="modal"
                        data-target="#about"
                        name="infoIsOpen"
                >
                    <svg className="ico-slider-svg" width="20" height="20" viewBox="0 0 20 20"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
                            fill="black"/>
                    </svg>
                </button>
                <ModalPanelInfo
                    infoIsOpen={this.state.infoIsOpen}
                    toggleModal={this.toggleModal}
                />
                <ModalPanelContact
                    contactIsOpen={this.state.contactIsOpen}
                    toggleModal={this.toggleModal}
                />
            </div>
        )
    }
}

export default NavigationButton