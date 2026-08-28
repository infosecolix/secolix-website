import { pipeline } from '../data.js';

export default function Pipeline() {
  return (
    <section className="section pipelineSection" id="pipeline">
      <div className="intro">
        <div>
          <div className="kicker">02 / How Protection Happens</div>
          <h2>From raw signal<br /><em>to verified defense.</em></h2>
        </div>
        <p>Every layer of Secolix's approach exists to move information from noisy and
        uncertain to clear and actionable — without slowing the response down.</p>
      </div>

      <div className="pipeline" role="list">
        {pipeline.map((p, i) => (
          <div className="pipenode" role="listitem" key={p.k}>
            <div className="pipecard">
              <span className="pipeindex">{String(i + 1).padStart(2, '0')}</span>
              <strong>{p.k}</strong>
              <p>{p.d}</p>
            </div>
            {i < pipeline.length - 1 && (
              <div className="connector" aria-hidden="true">
                <span className="dot d1" />
                <span className="dot d2" />
                <span className="dot d3" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
