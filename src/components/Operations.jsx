import { useEffect, useState } from 'react';

const lines = [
  '> initializing secolix defense core',
  '> loading threat intelligence feeds...',
  '> correlating telemetry / identity / endpoint',
  '> hunting suspicious behavior...',
  '> AI investigation recommendation ready',
  '> system state: MONITORING',
];

const opcards = [
  ['THREAT HUNTING', 'Find the behavior before the alert.', 'Hypotheses, telemetry and attacker TTPs connected into repeatable hunts.'],
  ['THREAT INTELLIGENCE', 'Context over noise.', 'Translate indicators and adversary activity into prioritized defensive action.'],
  ['DIGITAL FORENSICS', 'Evidence tells the story.', 'Build timelines, establish root cause and support incident decisions.'],
];

export default function Operations() {
  const [log, setLog] = useState([]);
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setLog((x) => [...x, lines[i]].slice(-6));
      if (++i === lines.length) clearInterval(t);
    }, 520);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="operations" id="operations">
      <div className="intro">
        <div>
          <div className="kicker">03 / Security Operations</div>
          <h2>Think like an attacker.<br /><em>Operate like a defender.</em></h2>
        </div>
        <p>Security teams need more than alerts. Secolix combines hunting, intelligence
        and investigation to turn security data into decisions.</p>
      </div>

      <div className="opgrid">
        <div className="terminal" aria-label="Live threat hunting console preview">
          <div className="bar">SECOLIX / HUNT-CONSOLE <b>● CONNECTED</b></div>
          <div className="terminalbody">
            {log.map((x, i) => (
              <div key={x} className={i === log.length - 1 ? 'current' : ''}>{x}</div>
            ))}
            <span aria-hidden="true">▋</span>
          </div>
          <div className="bar foot">HUNT ID: SX-67A &nbsp; LATENCY 18ms &nbsp; ENCRYPTED</div>
        </div>

        <div className="opcards">
          {opcards.map((x) => (
            <div key={x[0]}>
              <small>{x[0]}</small>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
