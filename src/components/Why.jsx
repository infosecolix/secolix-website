const points = [
  ['01', 'Offense-first thinking', 'We validate security from the perspective of how systems can actually be attacked.'],
  ['02', 'Investigation depth', 'When something goes wrong, evidence and context matter. We go beyond surface-level findings.'],
  ['03', 'Continuous evolution', 'Our roadmap connects testing, hunting, intelligence and MDR into a continuous security loop.'],
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="kicker">07 / Why Secolix</div>
      <h2>Built around the<br /><em>real attack surface.</em></h2>
      <div className="whygrid">
        {points.map((x) => (
          <div key={x[0]}>
            <b>{x[0]}</b>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
