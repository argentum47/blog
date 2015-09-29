import React from 'react';

export default React.createClass({
  render: function() {
    return(
      <div className="container-flex">
        <section className="summary">
          <h2 className="heading">ABOUT</h2>
          <div className="bread"><span className="crumb">Who</span>Amitava Ghosh</div>
          <div className="bread"><span className="crumb">Where</span>India</div>
          <div className="bread"><span className="crumb">What</span>Web Developer</div>
          <div className="bread"><span className="crumb">When</span>2010-Present</div>
          <div className="bread"><span className="crumb">Why</span>PASSION</div>
        </section>
        <section className="skillset">
          <h2>Skills</h2>
          <span className="skill">Javascript</span>
          <span className="skill">PHP</span>
          <span className="skill">Rails on Ruby</span>
          <span className="skill">HTML & CSS</span>
        </section>
        <section className="social">
          <h3>Get me on</h3>
          <span>gmail:</span> <a href="mailto:princeofpersiaa3.ag@gmail.com">princeofpersiaa3.ag</a><br/>
          <span>github:</span> <a href="github.com/argentum47">argentum47</a>
        </section>
      </div>
    );
  }
});
