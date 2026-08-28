import { roadmap } from '../data.js';

const numbers = [
  ['EVENTS / 24H', '18,492', '+12.8%'],
  ['RISK INDEX', '027', 'LOW'],
  ['ACTIVE HUNTS', '064', 'RUNNING'],
];

const alerts = [
  ['HIGH', 'Suspicious PowerShell behavior', '2m ago'],
  ['MED', 'Unusual authentication pattern', '6m ago'],
  ['INFO', 'Threat intelligence updated', '11m ago'],
];

export default function Platform() {
  return (
    <section className="platform" id="platform">
      <div>
        <div className="kicker">● 06 / Product Vision</div>
        <h2>Building the future of<br /><em>MDR + SOC.</em></h2>
        <p>Secolix is developing an AI-assisted security operations platform to bring
        telemetry, detection, threat intelligence, investigation and response into one
        operational layer.</p>
        <div className="status">● PLATFORM IN DEVELOPMENT &nbsp;<b>ROADMAP ACTIVE</b></div>
        <div className="roadmap">
          {roadmap.map((x) => (
            <div className={'road ' + x.status} key={x.n}>
              <b>{x.n}</b>
              <span><strong>{x.t}</strong>{x.d}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="soc">
        <div className="sochead">SECOLIX // MDR COMMAND <b>BUILD PREVIEW</b></div>
        <div className="numbers">
          {numbers.map((x) => (
            <div key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><i>{x[2]}</i></div>
          ))}
        </div>
        <div className="graph">
          <span>AI CORRELATION ENGINE</span>
          <div className="beam" />
          <i /><i /><i /><i /><i />
        </div>
        <div className="alerts">
          {alerts.map((x) => (
            <div key={x[1]}>
              <b className={x[0].toLowerCase()}>{x[0]}</b>
              <strong>{x[1]}</strong>
              <small>{x[2]}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
