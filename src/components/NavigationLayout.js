import React from 'react'
import NavigationButtons from './NavigationButtons'
import './NavigationLayout.sass'

const NavigationLayout = ({children}) => (
    <section className="s-nav-bar">
        <div className="container">
            <div className="row">
                <nav className="nav-bar relative">
                    <div className="col-sm-3 col-md-12">
                        <NavigationButtons/>
                        {children}
                    </div>
                </nav>
            </div>
        </div>
    </section>


);

export default NavigationLayout