import React, { Component } from 'react';
import './App.scss';

import Tickets from './stores/tickets.json';
import iMenuLogoSVG from './images/menu-logo.svg';
import './images/workday.png';

import Breadcrumbs from './components/Breadcrumbs.js';
import Button from './components/Button.js';
import Card from './components/Card.js';
import IconGroup from './components/IconGroup.js';

const Timeline = [
  <div>
    <span>Early Bird</span>
    <span className="highlight">Sold Out</span>
  </div>,
  <div className="summer-saver">
    <span><strong>Summer Saver</strong></span>
    <i className="fa fa-clock-o clock"></i>
    <span className="deadline">
      <span className="black">Until</span>
      <span className="red">Aug.31</span>
    </span>
  </div>,
  <div>Regular</div>,
  <div>Late</div>,
  <div>Onsite Registration</div>
];

class App extends Component {
  constructor() {
    super();
    this.Tickets = Tickets;
  }

  render() {
    const $cards = Tickets.map((t) => {
      return <li key={t.name}><Card ticket={t} /></li>
    });

    return (
      <div className="App">
        <div className="App__Header">
          <div className="App__Logo" dangerouslySetInnerHTML={{__html: iMenuLogoSVG}} />
          <div className="App__Menu">
            <ul className="Menu">
              <li className="blue"><IconGroup icon="fa fa-user" title="Single Attandee" /></li>
              <li><IconGroup icon="fa fa-users" title="Group Tickets" /></li>
              <li><IconGroup icon="fa fa-bullseye" title="Investors" /></li>
              <li><IconGroup icon="fa fa-lightbulb-o" title="Startups" /></li>
            </ul>
          </div>
        </div>
        <div className="Spacing__50"></div>
        <div className="App__Content">
          <Breadcrumbs selected={1} list={Timeline} />
          <div className="Spacing__50"></div>
          <p className="Description">Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable
            helvetica sartorial. Dreamcatcher live-edge lo-fi, chartreuse echo park interest
            distillery glossier plaid fingerstache.Fashion axe keytar truffaut migas Farm-to-table
            PBR&B. Drinking vinegar sustainable helvetica sartorial.</p>
          <div className="Spacing__40"></div>
          <ul className="Card__Wrapper">{$cards}</ul>

          <div className="Spacing__50"></div>
          <div className="Benefits">
            <Button>Compare Benefits</Button>
          </div>
          <div className="Spacing__80"></div>
          <div className="Partners">
            <p>OUR TRUSTED PARTNERS</p>
            <ul>
              <li><img src="images/workday.png" /></li>
              <li><img src="images/workday.png" /></li>
              <li><img src="images/workday.png" /></li>
              <li><img src="images/workday.png" /></li>
              <li><img src="images/workday.png" /></li>
            </ul>
          </div>
        </div>

        <div className="App__Footer">
          <div className="Logo" dangerouslySetInnerHTML={{__html: iMenuLogoSVG}} />
          <div className="Spacing__30"></div>
          <ul className="navigation">
            <li>HRN</li>
            <li>About</li>
            <li>Team</li>
            <li>Jobs</li>
            <li>Contact</li>
          </ul>
          <div className="Spacing__10"></div>
          <ul className="social">
            <li><i className="fa fa-twitter"></i></li>
            <li><i className="fa fa-linkedin"></i></li>
            <li><i className="fa fa-facebook"></i></li>
            <li><i className="fa fa-instagram"></i></li>
            <li><i className="fa fa-slideshare"></i></li>
            <li><i className="fa fa-youtube"></i></li>
          </ul>
          <div className="Spacing__10"></div>
          <ul className="inline App__Footer__Links">
            <li>HRN</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Copyright <i className="fa fa-copyright"></i> 2015 HRN Europe. All Rights Reserved.</li>
          </ul>
          <div className="Spacing__50"></div>
        </div>

      </div>
    )
  }
}

export default App;
