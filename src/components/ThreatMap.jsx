const nodes = [
  { x: 18, y: 32 }, { x: 30, y: 55 }, { x: 46, y: 22 }, { x: 52, y: 48 },
  { x: 63, y: 30 }, { x: 71, y: 58 }, { x: 82, y: 40 }, { x: 38, y: 70 },
  { x: 90, y: 62 }, { x: 10, y: 60 },
];

const arcs = [
  [0, 3], [2, 4], [4, 6], [1, 7], [5, 8], [0, 9], [3, 5], [6, 8],
];

function arcPath(a, b) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - 14;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export default function ThreatMap() {
  return (
    <section className="section mapSection" id="intel-map">
      <div className="intro">
        <div>
          <div className="kicker">05 / Threat Intelligence</div>
          <h2>Visibility across a<br /><em>global threat surface.</em></h2>
        </div>
        <p>Indicators, adversary activity and detection events don't stay in one place.
        Our intelligence layer tracks how they connect and move.</p>
      </div>

      <div className="mapbox">
        <svg viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <radialGradient id="mapglow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(8,174,180,.14)" />
              <stop offset="100%" stopColor="rgba(8,174,180,0)" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100" height="80" fill="url(#mapglow)" />
          {[10, 24, 38, 52, 66].map((y) => (
            <ellipse key={y} cx="50" cy="40" rx="46" ry={40 - Math.abs(40 - y) * 0.5} className="gridline" />
          ))}
          {[10, 30, 50, 70, 90].map((x) => (
            <path key={x} d={`M ${x} 4 Q ${50} 40 ${x} 76`} className="gridline" />
          ))}
          {arcs.map(([a, b], i) => (
            <path key={i} d={arcPath(nodes[a], nodes[b])} className="arcline" style={{ animationDelay: `${i * 0.6}s` }} />
          ))}
          {nodes.map((n, i) => (
            <g key={i} transform={`translate(${n.x} ${n.y})`}>
              <circle r="2.6" className="nodepulse" style={{ animationDelay: `${i * 0.35}s` }} />
              <circle r="1" className="nodedot" />
            </g>
          ))}
        </svg>
        <div className="maplabel tl">THREAT DENSITY <b>MODERATE</b></div>
        <div className="maplabel br">ACTIVE FEEDS <b>LIVE</b></div>
      </div>
    </section>
  );
}
