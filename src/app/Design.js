import React from 'react';

export default class Deign extends React.Component {
    render() {
        return (
                <div>
                    <h2 id="design">DESIGN</h2>
                        {/*<div id="particles-js"></div>*/}
                    <div className="img-container">
                        <div className="img-g-5 mg"><span id="fake">.</span></div>
                        <div className="img-g-1 mg"><span id="fake">.</span></div>
                        <div className="img-g-2 mg"><span id="fake">.</span></div>
                        <div className="img-g-3 mg"><span id="fake">.</span></div>
                        <div className="img-g-4 mg"><span id="fake">.</span></div>
                        <span id="more">  and more...  </span>
                    </div>
                </div>
        );
    }
}
