import { useState } from 'react';
import { services } from '../data.js';

export default function Contact() {
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);
  const fields = [
    ['name', 'NAME', 'text'],
    ['email', 'WORK EMAIL', 'email'],
    ['company', 'COMPANY', 'text'],
  ];

  return (
    <section className="contact" id="contact">
      <div>
        <div className="kicker">12 / Start a Conversation</div>
        <h2>Ready to strengthen<br /><em>your security?</em></h2>
        <p>Tell us what you need to assess, investigate or protect. We'll help shape
        the right engagement — request an assessment or talk to an expert directly.</p>
        <div className="contactdetails">
          <a href="mailto:contact.secolix@gmail.com">contact.secolix@gmail.com</a>
          <a href="mailto:info.secolix@gmail.com">info.secolix@gmail.com</a>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>

      {sent ? (
        <div className="formsent">
          <strong>Request received.</strong>
          <p>A member of the Secolix team will follow up shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {fields.map((x) => (
            <label key={x[0]}>
              {x[1]}
              <input
                required={x[0] !== 'company'}
                type={x[2]}
                placeholder={x[0] === 'email' ? 'you@company.com' : 'Your ' + x[0]}
                value={form[x[0]] || ''}
                onChange={(e) => setForm({ ...form, [x[0]]: e.target.value })}
              />
            </label>
          ))}
          <label>
            WHAT DO YOU NEED?
            <select value={form.need || ''} onChange={(e) => setForm({ ...form, need: e.target.value })}>
              <option value="">Select a capability</option>
              {services.map((x) => <option key={x.id}>{x.title}</option>)}
            </select>
          </label>
          <button className="btn primary">Request a security review ↗</button>
        </form>
      )}
    </section>
  );
}
