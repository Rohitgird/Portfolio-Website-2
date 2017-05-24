import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <p id="about-me">about me</p>
                <div id="about-col">
                    <h1>Hi There,</h1>
                    <p id="line-1">My name is Rohit Girdhar and I am <span className="highlight" id="myage">20</span> years old.. I'm a student at Manipal Institute of Technology, Karnataka currently based in <span id="nd">New Delhi</span>. I love making beautiful websites that everyone loves and I am also passionate about UI/UX design and web animations.</p>
                    <p id="line-2">I love to work with backend developers so that together we can make fully functional websites that look pretty. Having just completed by 4th Semester I am <span id="nd">looking for an Intership</span> to help Startups/Businesses up their game in the market.</p>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}
