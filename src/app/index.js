import React from 'react';
import ReactDOM from 'react-dom';
// import { findDOMNode } from 'react-dom';
// import {Router, Route, browserHistory, Link} from 'react-router';

import App from './App';


class Root extends React.Component {

    render() {
        return (
                <App />
        );
    }
}


ReactDOM.render(<Root/>, document.getElementById('app'));
