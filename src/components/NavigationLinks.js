import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NavigationLinks extends Component {
    render() {
        return (
            <div className="nav-bar-list h-100">
                <Link to="/" className="nav-bar-logo d-none d-lg-block">
                    DigitDesign
                </Link>
                <ul className="nav-bar-wrapper">
                    <li className="nav-bar-list__element">
                        <Link to="/" className="nav-bar-list__link all">All
                        </Link>
                    </li>
                    <li className="nav-bar-list__element">
                        <Link to="/web-design" className="nav-bar-list__link">#Web design
                        </Link>
                    </li>
                    <li className="nav-bar-list__element">
                        <Link to="/mobile" className="nav-bar-list__link">#Mobile
                        </Link>
                    </li>
                    <li className="nav-bar-list__element">
                        <Link to="/icons" className="nav-bar-list__link">#Icons
                        </Link>
                    </li>
                    <li className="nav-bar-list__element">
                        <Link to="/identity" className="nav-bar-list__link">#Identity
                        </Link>
                    </li>
                    <li className="nav-bar-list__element">
                        <Link to="/art" className="nav-bar-list__link">#Art
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationLinks