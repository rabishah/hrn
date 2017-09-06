import React, { Component } from 'react';
import './App.scss';

import Tickets from './stores/tickets.json';
import iMenuLogoSVG from './images/menu-logo.svg';


import IconGroup from './components/IconGroup.js';
import Card from './components/Card.js';

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
          <div className="Menu__Logo" dangerouslySetInnerHTML={{__html: iMenuLogoSVG}} />
          <ul className="Menu__SubMenu">
            <li><IconGroup icon="fa fa-user" title="Single Attandee" /></li>
            <li><IconGroup icon="fa fa-users" title="Group Tickets" /></li>
            <li><IconGroup icon="fa fa-bullseye" title="Investors" /></li>
            <li><IconGroup icon="fa fa-lightbulb-o" title="Startups" /></li>
          </ul>
        </div>

        <div className="App__Content">
          <ul className="">
            <li>
              <span>Early Bird</span>
              <span>Sold Out</span>
            </li>
            <li>
              <span>Summer Saver</span>
              <span>
                <i className=""></i>
                <span>
                  <span>Until</span>
                  <span>Aug.31</span>
                </span>
              </span>
            </li>
            <li>
              <span>Regular</span>
            </li>
            <li>
              <span>Late</span>
            </li>
            <li>
              <span>Onsite Registration</span>
            </li>
          </ul>

          <p>Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable
            helvetica sartorial. Dreamcatcher live-edge lo-fi, chartreuse echo park interest
            distillery glossier plaid fingerstache.Fashion axe keytar truffaut migas Farm-to-table
            PBR&B. Drinking vinegar sustainable helvetica sartorial.</p>

          <ul className="Card__Wrapper">{$cards}</ul>

          <button> Compare Benefits </button>
          <div>
            <p>OUR TRUSTED PARTNERS</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="App__Footer">
          <div className="Menu__Logo" dangerouslySetInnerHTML={{__html: iMenuLogoSVG}} />
          <ul>
            <li>HRN</li>
            <li>About</li>
            <li>Team</li>
            <li>Jobs</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default App;
