import React from 'react'
import NavigationLayout from '../../components/Navigation/NavigationLayout';
import Navigation from '../../components/Navigation/NavigationLinks';


const Layout = ({children}) => {
    return (
        <div className="App">
            <NavigationLayout>
                <Navigation/>
            </NavigationLayout>
            <section className="s-gallery">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col p-0">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Layout