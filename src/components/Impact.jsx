const stats = [
  { value: '25+', label: 'Completed Projects', detail: 'Security projects successfully delivered across assessments, defense and investigations.' },
  { value: '10+', label: 'Customers Served', detail: 'Trusted by organizations for practical cybersecurity solutions and services.' },
  { value: '5+', label: 'Future Products', detail: 'New cybersecurity products currently in development for upcoming releases.' },
];

export default function Impact() {
  return (
    <section className="impact section" id="impact" aria-label="Secolix impact">
      <div className="intro">
        <div>
          <div className="kicker">● Our Impact</div>
          <h2>Built, <em>delivered</em> and still growing.</h2>
        </div>
        <p>
          A growing track record of cybersecurity delivery — with more projects completed,
          more customers served and new products being built for the future.
        </p>
      </div>
      <div className="impactgrid">
        {stats.map((s) => (
          <article className="impactcard" key={s.label}>
            <span className="impactvalue">{s.value}</span>
            <strong>{s.label}</strong>
            <p>{s.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
