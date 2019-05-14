import React from 'react'
import NavigationButtons from './NavigationButtons'
import './NavigationLayout.sass'

const NavigationLayout = ({children}) => (
    <section className="s-nav-bar">
        <nav className="nav-bar relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <NavigationButtons/>
                        {children}
                    </div>
                </div>
            </div>
        </nav>
    </section>


);

export default NavigationLayout