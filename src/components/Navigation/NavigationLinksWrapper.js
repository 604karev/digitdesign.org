import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MobileNavigation from './MobileNavigation'
import NavigationLinks from './NavigationLinks'


class NavigationLinksWrapper extends Component {
    state = {
        width: window.innerWidth,
        mobileIsOpened: false
    };

    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);

    };
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);

    };
    updateDimensions = () => {
        this.setState({
            width: window.innerWidth
        });

    };

    openMobileNav = () => this.setState({
        mobileIsOpened: !this.state.mobileIsOpened
    });

    render() {
        return (
            this.state.width < 768 ?
                <MobileNavigation mobileMenuState={this.state.mobileIsOpened} openMobileNav={this.openMobileNav}/>
                : <div className="nav-bar-list h-100">
                    <Link to="/" className="nav-bar-logo">
                        {this.state.width > 991 ? `DigitDesign` :
                            <svg width="66" height="39" viewBox="0 0 66 29" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.1 1.8C20.6 0.6 17.7 0 14.5 0H0V29H14.5C17.8 29 20.7 28.4 23.2 27.2C25.7 26 27.6 24.3 29 22.2C30.4 20 31.1 17.5 31.1 14.5C31.1 11.5 30.4 9 29 6.8C27.6 4.6 25.6 2.9 23.1 1.8ZM19.2 19.6C17.9 20.8 16.2 21.4 14.1 21.4H9.9V7.6H14.1C16.2 7.6 17.9 8.2 19.2 9.4C20.5 10.6 21.1 12.3 21.1 14.5C21.1 16.7 20.4 18.4 19.2 19.6Z"
                                    fill="black"/>
                                <path
                                    d="M63.8999 6.8C62.4999 4.6 60.5999 2.9 58.0999 1.8C55.5999 0.6 52.6999 0 49.3999 0H35.3999C34.2999 0 33.3999 0.9 33.3999 2C33.3999 2.4 33.4999 2.9 33.7999 3.2C33.8999 3.3 33.9999 3.5 33.9999 3.6C35.9999 6.8 36.9999 10.4 36.9999 14.5C36.9999 18.6 35.9999 22.3 33.9999 25.4C33.8999 25.5 33.7999 25.6 33.7999 25.7C33.4999 26 33.3999 26.5 33.3999 26.9C33.3999 28 34.2999 28.9 35.3999 28.9H49.3999C52.6999 28.9 55.5999 28.3 58.0999 27.1C60.5999 25.9 62.4999 24.2 63.8999 22.1C65.2999 19.9 65.9999 17.4 65.9999 14.4C65.9999 11.5 65.2999 9 63.8999 6.8ZM54.0999 19.6C52.7999 20.8 51.0999 21.4 48.9999 21.4H44.7999V7.6H48.9999C51.0999 7.6 52.7999 8.2 54.0999 9.4C55.3999 10.6 55.9999 12.3 55.9999 14.5C55.9999 16.7 55.3999 18.4 54.0999 19.6Z"
                                    fill="black"/>
                            </svg>}
                    </Link>
                    <NavigationLinks/>
                </div>

        )
    }
}

export default NavigationLinksWrapper