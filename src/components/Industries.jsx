import { industries } from '../data.js';

export default function Industries() {
  return (
    <section className="section industriesSection" id="industries">
      <div className="intro">
        <div>
          <div className="kicker">09 / Industries</div>
          <h2>Security shaped by<br /><em>your operating context.</em></h2>
        </div>
        <p>Risk looks different across sectors. Engagements are scoped around the
        systems, data and regulatory pressure specific to your industry.</p>
      </div>

      <div className="indgrid">
        {industries.map((i) => (
          <div className="indcard" key={i.t}>
            <strong>{i.t}</strong>
            <p>{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
