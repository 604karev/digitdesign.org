import React from 'react'
import NavigationButtons from './NavigationButtons'
import './index.sass'

const Navigation = ({children}) => (
    <header className="page-header">
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
    </header>


);

export default Navigation