export default function Footer() {
  return (
    <footer>
      <div className="footerbrand">
        <a className="brand" href="#home">
          <img src="/secolix-logo.png" alt="" width="34" height="34" />
          <b>secolix<small>CYBERSECURITY</small></b>
        </a>
        <p>Offensive security, investigations and continuous threat defense for modern organizations.</p>
      </div>

      <div className="footerlinks">
        <div>
          <small>CAPABILITIES</small>
          <a href="#capabilities">VAPT</a>
          <a href="#capabilities">Forensics</a>
          <a href="#operations">Threat Hunting</a>
          <a href="#operations">Threat Intelligence</a>
        </div>
        <div>
          <small>COMPANY</small>
          <a href="#why">Why Secolix</a>
          <a href="#industries">Industries</a>
          <a href="#case-studies">Engagement Examples</a>
          <a href="#contact">Contact</a>
          <a href="#careers">Careers</a>
        </div>
        <div>
          <small>PLATFORM</small>
          <a href="#platform">MDR / SOC</a>
          <a href="#platform">Roadmap</a>
          <a href="#process">Security Process</a>
        </div>
        <div>
          <small>RESOURCES</small>
          <a href="#resources">Threat Reports</a>
          <a href="#resources">Guides</a>
          <a href="#resources">Glossary</a>
        </div>
      </div>

      <div className="footercontact">
        <small>CONTACT</small>
        <a href="mailto:contact.secolix@gmail.com">contact.secolix@gmail.com</a>
        <a href="mailto:info.secolix@gmail.com">info.secolix@gmail.com</a>
        <span>Ahmedabad, Gujarat, India</span>
      </div>

      <div className="footerbottom">
        <span>© 2026 Secolix. Security for what's next.</span>
        <span>SEC / 001 · Privacy · Security</span>
      </div>
    </footer>
  );
}
