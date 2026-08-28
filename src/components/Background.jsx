import { useEffect, useRef } from 'react';

// A quiet, slow-moving node/line network that sits fixed behind the entire
// page. Reacts very slightly to pointer position. Fully skipped when the
// user prefers reduced motion — a single static frame is drawn instead.
export default function Background() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf, w, h, t = 0;
    let mouse = { x: -9999, y: -9999 };
    let nodes = [];

    function resize() {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * d;
      canvas.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const count = Math.min(70, Math.max(30, Math.floor(w / 24)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.09,
        r: 0.8 + Math.random() * 1.6,
      }));
    }

    function move(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function frame() {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = w + 10;
        if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10;
        if (n.y > h + 10) n.y = -10;
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          n.x += (dx / dist) * 0.1;
          n.y += (dy / dist) * 0.1;
        }
        ctx.beginPath();
        ctx.fillStyle = 'rgba(8,120,128,.34)';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(8,120,128,${0.09 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      const sweep = (Math.sin(t * 0.3) * 0.5 + 0.5) * w;
      const g = ctx.createLinearGradient(sweep - 200, 0, sweep + 200, 0);
      g.addColorStop(0, 'rgba(8,174,180,0)');
      g.addColorStop(0.5, 'rgba(8,174,180,.035)');
      g.addColorStop(1, 'rgba(8,174,180,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      if (!reduce) raf = requestAnimationFrame(frame);
    }

    resize();
    frame();
    window.addEventListener('resize', resize);
    if (!reduce) window.addEventListener('pointermove', move);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return <canvas className="ambient" ref={ref} aria-hidden="true" />;
}
