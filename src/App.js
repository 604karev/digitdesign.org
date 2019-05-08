import React, {Component} from 'react';
import './App.sass';
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import {Provider} from 'react-redux'
import Layout from './containers/Layout/Layout'
import Gallery from './containers/Gallery/Gallery'
import SliderWrapper from './containers/Slider/SliderWrapper'


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {

    render() {
        const withLayout = Component => props => <Layout store={store}> <Component {...props}/> </Layout>;

        return (
            <Router>
                <Provider store={store}>
                    <Switch>
                        <Route path='/' component={withLayout(Gallery)} exact/>
                        <Route path='/:category' component={withLayout(Gallery)} exact/>
                        <SliderWrapper/>
                    </Switch>
                </Provider>
            </Router>
        )
    }
}

export default App;
