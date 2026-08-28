import { resources } from '../data.js';

export default function Resources() {
  return (
    <section className="section resourcesSection" id="resources">
      <div className="intro">
        <div>
          <div className="kicker">11 / Resources</div>
          <h2>Security thinking,<br /><em>shared openly.</em></h2>
        </div>
        <p>Reports, guides and notes from the work — written to be useful, not to sell.</p>
      </div>

      <div className="resgrid">
        {resources.map((r) => (
          <article className="rescard" key={r.t}>
            <span className="rescat">{r.cat}</span>
            <h3>{r.t}</h3>
            <p>{r.d}</p>
            <span className="reslink">Read more →</span>
          </article>
        ))}
      </div>
    </section>
  );
}
