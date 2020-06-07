import React from 'react';
import {Provider} from 'react-redux'
import ReactDom from 'react-dom'
import App from './components/App';
import store from './store';
import { add } from './action/useraction';
ReactDom.render( 
    <Provider store={store}>
<App/>
    </Provider>
,document.querySelector('#root'));