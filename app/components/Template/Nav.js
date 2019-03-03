import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nuruddin Nasiruddin</h2>
        <p><a href="mailto:nuruddin.nasiruddin@gmail.com">nuruddin.nasiruddin@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nuruddin. I like building things.
            I am a <a href="https://gatech.edu/">Georgia Tech</a> graduate student, and a Software Engineering Lead at <a href='www.coxautomotiveinc.com'>Cox Automotive</a>. Before Cox Automotive I was
            at <a href="http://pps.io">Priority Payment Systems</a>, <a href="http://cengage.com">Cengage Learning</a>, <a href="http://expedia.com">Expedia</a>, <a href="http://hrblock.com">H&amp;R Block</a>, and <a href="http://cerner.com">Cerner</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Nuruddin Nasiruddin <Link to="/">nuruddinnasiruddin.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
