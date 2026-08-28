const pillars = [
  { t: 'Zero Trust Principles', d: 'Access verified continuously, never assumed by default.' },
  { t: '24/7 Monitoring Mindset', d: 'Detection and response built for around-the-clock coverage.' },
  { t: 'AI-Assisted Detection', d: 'Behavioral analysis layered on top of established detection logic.' },
  { t: 'Evidence-Based Response', d: 'Decisions grounded in forensics and validated findings.' },
  { t: 'Compliance-Aware Delivery', d: 'Engagements scoped with governance and audit needs in mind.' },
  { t: 'Global Threat Context', d: 'Intelligence connected to real adversary behavior, not just IOC feeds.' },
];

export default function Trust() {
  return (
    <section className="trust" aria-label="Security capabilities">
      <div className="trustgrid">
        {pillars.map((p) => (
          <div key={p.t}>
            <span className="dot" aria-hidden="true" />
            <strong>{p.t}</strong>
            <p>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
