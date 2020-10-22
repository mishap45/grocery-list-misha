import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import ReduxStore from './Store/Redux'
import {BrowserRouter} from 'react-router-dom'
import AppContainer from './AppContainer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
