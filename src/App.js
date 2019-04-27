import React, {Component} from 'react';
import './App.sass';
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {Route, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Layout from './containers/Layout'
import Gallery from './containers/Gallery'


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        const withLayout = Component => props => <Layout> <Component {...props}/> </Layout>
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Route path='/' component={withLayout(Gallery)}>
                    </Route>
                </Provider>
            </BrowserRouter>


        )
    }
}

export default App;
