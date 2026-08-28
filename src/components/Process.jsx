import { process } from '../data.js';

export default function Process() {
  return (
    <section className="section processSection" id="process">
      <div className="intro">
        <div>
          <div className="kicker">08 / Security Process</div>
          <h2>A repeatable path<br /><em>from risk to resilience.</em></h2>
        </div>
        <p>Every engagement follows the same disciplined sequence, whether it's a single
        assessment or an ongoing security operations relationship.</p>
      </div>

      <ol className="processlist">
        {process.map((p) => (
          <li key={p.n}>
            <span className="pnum">{p.n}</span>
            <div>
              <strong>{p.t}</strong>
              <p>{p.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
