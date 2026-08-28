import { services } from '../data.js';

export default function Services({ onOpen }) {
  return (
    <section className="section" id="capabilities">
      <div className="intro">
        <div>
          <div className="kicker">01 / Capabilities</div>
          <h2>One security partner.<br /><em>Multiple layers of defense.</em></h2>
        </div>
        <p>From a single application assessment to continuous detection and response,
        our capabilities connect exposure, evidence and active threats into one picture.</p>
      </div>

      <div className="grid">
        {services.map((s) => (
          <article
            key={s.id}
            className={s.featured ? 'featured' : ''}
            onClick={() => onOpen(s)}
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(s); }}
          >
            <div className="serviceTop">
              <span>{s.id}</span>
              <label>{s.tag}</label>
              <b aria-hidden="true">↗</b>
            </div>
            <div className="glyph" aria-hidden="true">{s.glyph}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="tags">
              {s.scope.slice(0, 3).map((x) => <span key={x}>{x}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
