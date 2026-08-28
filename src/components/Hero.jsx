import { useEffect, useRef } from 'react';

function DefenseCore() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf, t = 0;
    const pts = Array.from({ length: 60 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 60 + Math.random() * 130,
      s: 0.0004 + Math.random() * 0.0008,
      z: Math.random(),
    }));

    function size() {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      c.width = c.clientWidth * d;
      c.height = c.clientHeight * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    }

    function draw() {
      const w = c.clientWidth, h = c.clientHeight, x = w / 2, y = h / 2;
      t++;
      ctx.clearRect(0, 0, w, h);
      const g = ctx.createRadialGradient(x, y, 10, x, y, Math.min(w, h) * 0.5);
      g.addColorStop(0, 'rgba(8,174,180,.10)');
      g.addColorStop(1, 'rgba(8,174,180,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      pts.forEach((p) => {
        const q = p.a + t * p.s;
        const X = x + Math.cos(q) * p.r;
        const Y = y + Math.sin(q) * p.r * 0.42;
        ctx.beginPath();
        ctx.arc(X, Y, 1 + p.z * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(8,174,180,${0.22 + p.z * 0.55})`;
        ctx.fill();
      });

      ctx.strokeStyle = 'rgba(8,174,180,.18)';
      for (let r = 60; r < 210; r += 36) {
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * 0.42, (t / 900) % Math.PI, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    size();
    draw();
    window.addEventListener('resize', size);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); };
  }, []);
  return <canvas ref={ref} />;
}

const metrics = [
  ['01', 'ATTACK SURFACE', 'DISCOVER'],
  ['02', 'EXPOSURE', 'VALIDATE'],
  ['03', 'THREAT', 'HUNT'],
  ['04', 'RESPONSE', 'DEFEND'],
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <div className="kicker">● Cyber Defense, Engineered</div>
        <h1>See the threat.<br /><em>Own the response.</em></h1>
        <p className="lead">
          Secolix brings offensive security, digital forensics and proactive threat
          operations together — so you understand where you can be attacked, what is
          happening right now, and how to respond.
        </p>
        <div className="actions">
          <a className="btn primary" href="#contact">Request a security assessment →</a>
          <a className="btn" href="#capabilities">Explore capabilities ↓</a>
        </div>
        <div className="metrics">
          {metrics.map((x) => (
            <div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><small>{x[2]}</small></div>
          ))}
        </div>
      </div>

      <div className="corebox">
        <DefenseCore />
        <i className="live">LIVE</i>
        <i className="code">SEC / 001</i>
        <div className="core">
          <img src="/secolix-logo.png" alt="" width="52" height="52" />
          <strong>SECOLIX</strong>
          <small>DEFENSE CORE</small>
          <span>● System Ready</span>
        </div>
        <div className="float f1">THREAT LEVEL<strong>LOW</strong></div>
        <div className="float f2">ACTIVE HUNTS<strong>24</strong></div>
        <div className="float f3">TELEMETRY<strong>99.98%</strong></div>
      </div>
    </section>
  );
}
