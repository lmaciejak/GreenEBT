import React from 'react';
import ReactDOM from 'react-dom';
import "../App.css";

import SlideShow from './SlideShow';
import Copyright from './Copyright';


class AboutPage extends React.Component {
  constructor(props) {
    super(props)
  }
  
    render() {
      return (
        <div className="about-us">
          <h1 className="About-header">About GreenEBT</h1>
          <p id='about-text'>Founded in March 2018, GreenEBT seeks to connect EBT recipients with farmers markets 
            accepting EBT.</p>

          <h2 className="About-header">The Team</h2>
          <ul>
            <li>Ivan Mendoza - Tech Lead</li>
            <li>Omari Rose - Demo Lead</li>
            <li>Le'Shanda Miller - Project Lead</li>
            <li>Princess Guerrero - Scrum Master</li>
            <li>Luiza Maciejak - Design Lead</li>
          </ul>

        <div className="gallery">
          <SlideShow />
        </div>
          
          
          <h2 className="About-header">Contact us</h2>
            <p>Email: contact@greenebt.com <br />
               Phone: 212-345-5678 <br />
               Address: 494 Broadway 36th fl. New York, NY 10003
            </p>

            <Copyright />
        </div>
      );
    }
  }

  export default AboutPage;