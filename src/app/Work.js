import React from 'react';

export default class Work extends React.Component {
    render() {
        return (
                <div>
                   <img src="arrow.svg" alt="Click Here Arrow" id="arrow" />
                    <h4 id="work-together" className="blur-text">WORK WITH ME</h4>
                    <div className="work-section">
                        <h1 id="email-addre">rohitgird12@gmail.com</h1>
                        <img src="logo.png" id="logo" alt="Logo" />
                        <h5 id="work-caption">Let's work together and create something beautiful!</h5>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                </div>
        );
    }
}
