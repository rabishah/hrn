import React, { Component } from 'react';
module.exports = {
  partners : [
    <img className="Img--100" src="images/workday.png" />,
    <img className="Img--100" src="images/workday.png" />,
    <img className="Img--100" src="images/workday.png" />,
    <img className="Img--100" src="images/workday.png" />,
    <img className="Img--100" src="images/workday.png" />
  ],
  metaLinks : [
    <a className="white uppercase Text--10" href="/hrn">HRN</a>,
    <a className="white uppercase Text--10" href="/about">About</a>,
    <a className="white uppercase Text--10" href="/team">Team</a>,
    <a className="white uppercase Text--10" href="/jobs">Jobs</a>,
    <a className="white uppercase Text--10" href="/contact">Contact</a>
  ],

  socialLinks : [
    <a className="white uppercase" href="#"><i className="fa fa-twitter"></i></a>,
    <a className="white uppercase" href="#"><i className="fa fa-linkedin"></i></a>,
    <a className="white uppercase" href="#"><i className="fa fa-facebook"></i></a>,
    <a className="white uppercase" href="#"><i className="fa fa-instagram"></i></a>,
    <a className="white uppercase" href="#"><i className="fa fa-slideshare"></i></a>,
    <a className="white uppercase" href="#"><i className="fa fa-youtube"></i></a>,
  ],

  officialLinks : [
    <a className="white" href="#">HRN</a>,
    <a className="white" href="#">Terms & Conditions</a>,
    <a className="white" href="#">Cookie Policy</a>,
    <a className="white" href="#">Copyright <i className="fa fa-copyright"></i> 2015 HRN Europe. All Rights Reserved.</a>,
  ],

  desc: "Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica sartorial. Dreamcatcher live-edge lo-fi, chartreuse echo park interes distillery glossier plaid fingerstache.Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica sartorial.",

  timeline: [
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
  ]
};
