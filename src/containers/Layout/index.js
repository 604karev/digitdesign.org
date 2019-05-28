import React from 'react'
import Navigation from 'components/Navigation';
import NavigationLinksWrapper from 'components/Navigation/NavigationLinksWrapper';


const Layout = ({children}) => {
    return (
        <div className="App">
            <Navigation>
                <NavigationLinksWrapper/>
            </Navigation>
            <main className="page-main">
                <section className="s-gallery">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col p-0">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
};
export default Layout