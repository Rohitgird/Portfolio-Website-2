import React from 'react';

import Loader from './Loader';
import TopImage from './TopImage';
import About from './About';
import Code from './Code';
import Design from './Design';
import Work from './Work';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Loader />
            	<TopImage />
                <About />
                <Code />
                <Design />
                <Work />
            </div>
        );
    }
}

