import { aiCapabilities } from '../data.js';

export default function AISection() {
  return (
    <section className="section aiSection" id="ai">
      <div className="intro">
        <div>
          <div className="kicker">04 / AI in the Loop</div>
          <h2>AI narrows the field.<br /><em>Analysts make the call.</em></h2>
        </div>
        <p>Machine analysis handles the volume; trained analysts handle the judgment.
        Secolix uses AI to reduce noise and accelerate investigation, not to replace oversight.</p>
      </div>

      <div className="aiwrap">
        <ul className="ailist">
          {aiCapabilities.map((c, i) => (
            <li key={c.t}>
              <span className="ainum">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{c.t}</strong>
                <p>{c.d}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="pulsebox" aria-hidden="true">
          <div className="pulsering r1" />
          <div className="pulsering r2" />
          <div className="pulsering r3" />
          <div className="pulsecore">
            <span>ANALYSIS</span>
            <strong>ACTIVE</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
