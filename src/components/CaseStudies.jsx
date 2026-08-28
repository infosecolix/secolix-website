import { caseStudies } from '../data.js';

export default function CaseStudies() {
  return (
    <section className="section caseSection" id="case-studies">
      <div className="intro">
        <div>
          <div className="kicker">10 / Engagement Examples</div>
          <h2>How engagements<br /><em>typically unfold.</em></h2>
        </div>
        <p>Illustrative examples of the type of work Secolix does, generalized to
        protect client confidentiality.</p>
      </div>

      <div className="casegrid">
        {caseStudies.map((c) => (
          <article className="casecard" key={c.sector}>
            <span className="casetag">{c.tag}</span>
            <h3>{c.sector}</h3>
            <dl>
              <dt>Challenge</dt><dd>{c.challenge}</dd>
              <dt>Approach</dt><dd>{c.solution}</dd>
              <dt>Outcome</dt><dd>{c.outcome}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
