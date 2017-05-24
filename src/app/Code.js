import React from 'react';

export default class Code extends React.Component {
    render() {
        return (
                <div>
                    <h2 id="code" className="animated">CODE</h2>
                    <img src="web.png" alt="IECSE Website" id="web" />
                    <a href="http://www.iecsemanipal.com" target="_blank">
                        <div className="vid-container">
                            <video autoPlay loop preload id="iecse-vid">
                                <source src="iecse-website.mp4" type="video/mp4" />
                                <source src="iecse-website.webm" type="video/webm" />
                            </video>
                        </div>
                        </a>
                </div>
        );
    }
}
