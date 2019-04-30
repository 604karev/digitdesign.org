import React from 'react';
import './App.sass';
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Layout from './containers/Layout'
import Gallery from './containers/Gallery'
import Slider from './containers/Slider'



const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
    const withLayout = Component => props => <Layout> <Component {...props}/> </Layout>;
    return (
        <Router>
            <Provider store={store}>
                <Route path='/' component={withLayout(Gallery)} exact/>
                <Route path="/:category" component={withLayout(Gallery)} exact/>
                <Route path="/:category/:id" component={Slider} exact/>
            </Provider>
        </Router>


    )
};

export default App;
