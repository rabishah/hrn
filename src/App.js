import React, { Component } from 'react';
import './App.scss';

import Tickets from './stores/tickets.json';
import Events from './stores/events.js';

import iMenuLogoSVG from './images/menu-logo.svg';
import './images/workday.png';

import Breadcrumbs from './components/Breadcrumbs.js';
import Button from './components/Button.js';
import Card from './components/Card.js';
import List from './components/List.js';
import Navigation from './components/Navigation.js';

class App extends Component {
  constructor() {
    super();
    this.Tickets = Tickets;
    this.Partners =  Events.partners;
    this.MetaLinks = Events.metaLinks;
    this.SocialLinks = Events.socialLinks;
    this.OfficialLinks = Events.officialLinks;
    this.Description = Events.desc;
    this.Timeline = Events.timeline;

    this.state = {
      showBenefits: false,
      btnMessage: 'Compare Benefits'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showBenefits: !this.state.showBenefits,
      btnMessage: !this.state.showBenefits ? 'Close' : 'Compare Benefits'
    })
  }

  render() {
    const $cards = Tickets.map((t) => {
      return <li key={t.name}><Card ticket={t} showBenefits={this.state.showBenefits} /></li>
    });

    return (
      <div className="App">
        <div className="App__Header">
          <div className="App__Logo" dangerouslySetInnerHTML={{__html: iMenuLogoSVG}} />
          <div className="App__Menu">
            <div className="App__Menu--Wrapper">
              <Navigation />
            </div>
          </div>
        </div>
        <div className="Spacing__50"></div>
        <div className="App__Content">
          <Breadcrumbs selected={1} list={this.Timeline} />
          <div className="Spacing__50"></div>
          <p className="Description">{this.Description}</p>
          <div className="Spacing__40"></div>
          <ul className="Card__Wrapper">{$cards}</ul>
          <div className="Spacing__50"></div>
          <div className="center">
            <Button handleClick={this.handleClick}>
              {this.state.btnMessage}
            </Button>
          </div>
          <div className="Spacing__80"></div>
          <div className="center">
            <p>OUR TRUSTED PARTNERS</p>
            <List
              name="partners"
              placement="center"
              wrap={true}
              itemSpacing="1em"
              list={this.Partners} />
          </div>
        </div>

        <div className="App__Footer">
          <div className="Logo" dangerouslySetInnerHTML={{__html: iMenuLogoSVG}} />
          <div className="Spacing__30"></div>
          <List
            name="meta-links"
            placement="center"
            wrap={false}
            itemSpacing="1em"
            list={this.MetaLinks}
          />
          <div className="Spacing__10"></div>
          <List
            name="social-links"
            placement="center"
            wrap={false}
            itemSpacing="1.5em"
            list={this.SocialLinks}
          />
          <div className="Spacing__10"></div>
          <div className="App__Footer__Links">
            <List
              name="official-links"
              placement="center"
              wrap={false}
              list={this.OfficialLinks}
            />
          </div>
          <div className="Spacing__50"></div>
        </div>

      </div>
    )
  }
}

export default App;
