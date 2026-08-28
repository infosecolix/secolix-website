import { useState } from 'react';
import { services } from '../data.js';

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const [mega, setMega] = useState(false);
  const close = () => { setMenu(false); setMega(false); };

  return (
    <>
      <div className="top">
        <span>● Secolix Security Operations</span>
        <span>Offensive Security · Digital Forensics · Threat Defense</span>
      </div>

      <header>
        <a className="brand" href="#home" onClick={close}>
          <img src="/secolix-logo.png" alt="" width="34" height="34" />
          <b>secolix<small>CYBERSECURITY</small></b>
        </a>

        <nav className={menu ? 'open' : ''} aria-label="Primary">
          <div
            className="navitem"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <a href="#capabilities" onClick={close} aria-haspopup="true" aria-expanded={mega}>
              Solutions <i className="care">⌄</i>
            </a>
            <div className={'megamenu' + (mega ? ' show' : '')}>
              <div className="megacol">
                <small>By Capability</small>
                {services.map((s) => (
                  <a key={s.id} href="#capabilities" onClick={close}>{s.title}</a>
                ))}
              </div>
              <div className="megacol">
                <small>By Need</small>
                <a href="#operations" onClick={close}>Threat Hunting &amp; Intel</a>
                <a href="#platform" onClick={close}>MDR / SOC Platform</a>
                <a href="#process" onClick={close}>Security Process</a>
                <a href="#industries" onClick={close}>Industries We Serve</a>
              </div>
              <div className="megapromo">
                <span className="kicker">Not sure where to start?</span>
                <p>Tell us what you need to assess, investigate or protect and we'll shape the right engagement.</p>
                <a className="btn primary" href="#contact" onClick={close}>Talk to an expert →</a>
              </div>
            </div>
          </div>

          <a href="#operations" onClick={close}>Operations</a>
          <a href="#industries" onClick={close}>Industries</a>
          <a href="#platform" onClick={close}>Platform</a>
          <a href="#resources" onClick={close}>Resources</a>
          <a href="#why" onClick={close}>Company</a>
          <a href="#impact" onClick={close}>Impact</a>
          <a href="#careers" onClick={close}>Careers</a>
        </nav>

        <a className="navcta" href="#contact">Start a security review ↗</a>
        <button className="hamb" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>
          {menu ? '×' : '☰'}
        </button>
      </header>
    </>
  );
}
