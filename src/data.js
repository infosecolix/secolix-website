export const services = [
  {
    id: '01',
    glyph: '⌁',
    tag: 'OFFENSIVE SECURITY',
    title: 'Web & Application VAPT',
    desc: 'Deep manual and automated testing of web applications, APIs, authentication and business logic — the same paths an attacker would use.',
    scope: ['OWASP Top 10 & beyond', 'API & mobile app testing', 'Authentication & session logic', 'Retesting after remediation'],
    featured: true,
  },
  {
    id: '02',
    glyph: '⌘',
    tag: 'INFRASTRUCTURE',
    title: 'Network VAPT',
    desc: 'External and internal assessments that surface exposed services, misconfigurations and realistic attack paths across your network.',
    scope: ['External perimeter testing', 'Internal & segmentation testing', 'Cloud infrastructure review', 'Prioritized remediation plan'],
  },
  {
    id: '03',
    glyph: '◉',
    tag: 'INVESTIGATION',
    title: 'Digital Forensics',
    desc: 'Evidence-led investigation for security incidents — reconstructing what happened, when, and how, to support root-cause and response decisions.',
    scope: ['Disk & memory forensics', 'Timeline reconstruction', 'Compromise assessment', 'Incident response support'],
  },
  {
    id: '04',
    glyph: '⌬',
    tag: 'PROACTIVE DEFENSE',
    title: 'Threat Hunting',
    desc: 'Hypothesis-driven hunts across telemetry to uncover attacker behavior that signature-based alerting is built to miss.',
    scope: ['TTP-based hunting', 'Behavioral analytics', 'Detection gap analysis', 'Hunt playbooks'],
  },
  {
    id: '05',
    glyph: '◎',
    tag: 'CONTEXT',
    title: 'Threat Intelligence',
    desc: 'Actionable intelligence that connects indicators, adversary behavior and emerging threats to what actually matters in your environment.',
    scope: ['IOC & TTP tracking', 'Adversary profiling', 'Risk-weighted context', 'Intelligence briefings'],
  },
  {
    id: '06',
    glyph: '✦',
    tag: 'ADVISORY',
    title: 'Security Consulting',
    desc: 'Security architecture, hardening and readiness guidance grounded in practical priorities rather than checklist compliance.',
    scope: ['Architecture review', 'Security hardening', 'Program & readiness assessment', 'Executive advisory'],
  },
];

export const pipeline = [
  { k: 'Internet', d: 'Traffic, users and exposed assets' },
  { k: 'Threat Intelligence', d: 'Indicators, adversary context, risk signal' },
  { k: 'Detection', d: 'Telemetry correlated across endpoint & network' },
  { k: 'AI Analysis', d: 'Behavioral triage and anomaly scoring' },
  { k: 'Security Operations', d: 'Analyst validation and investigation' },
  { k: 'Automated Response', d: 'Containment and remediation actions' },
  { k: 'Protected Infrastructure', d: 'Verified, monitored, resilient' },
];

export const aiCapabilities = [
  { t: 'Behavioral Analysis', d: 'Modeling normal activity to flag deviation instead of relying on static rules alone.' },
  { t: 'Anomaly Detection', d: 'Surfacing statistically unusual activity across identity, endpoint and network telemetry.' },
  { t: 'Automated Investigation', d: 'Pulling related events and context together so analysts start from a case, not raw logs.' },
  { t: 'Predictive Threat Context', d: 'Weighing intelligence and asset exposure to prioritize what needs attention first.' },
  { t: 'Automated Response', d: 'Executing pre-approved containment actions the moment confidence crosses a threshold.' },
];

export const process = [
  { n: '01', t: 'Discover', d: 'Map assets, exposure and attack surface across your environment.' },
  { n: '02', t: 'Assess', d: 'Validate weaknesses through real testing, not scanner output alone.' },
  { n: '03', t: 'Detect', d: 'Instrument telemetry and tune detection to your actual risk.' },
  { n: '04', t: 'Respond', d: 'Investigate and contain confirmed threats with clear ownership.' },
  { n: '05', t: 'Secure', d: 'Close gaps and harden the environment against recurrence.' },
  { n: '06', t: 'Continuously Monitor', d: 'Keep watch as the environment and threat landscape change.' },
];

export const industries = [
  { t: 'Banking & Financial Services', d: 'Regulatory-aware testing and monitoring for transaction and customer data systems.' },
  { t: 'Healthcare', d: 'Protecting patient data and clinical systems without disrupting care delivery.' },
  { t: 'Government', d: 'Assessments aligned to public-sector risk, resilience and compliance expectations.' },
  { t: 'Technology & SaaS', d: 'Security built into fast-moving product and infrastructure environments.' },
  { t: 'Manufacturing', d: 'Coverage across IT and operational technology boundaries.' },
  { t: 'Retail & E-commerce', d: 'Defending payment flows, customer data and seasonal traffic surges.' },
  { t: 'Education', d: 'Practical security for distributed users, devices and research data.' },
  { t: 'Energy & Utilities', d: 'Risk-aware security for critical and highly regulated infrastructure.' },
  { t: 'Telecommunications', d: 'Network-scale visibility across complex, high-throughput environments.' },
];

export const caseStudies = [
  {
    tag: 'Representative engagement',
    sector: 'Regional Financial Services Provider',
    challenge: 'Fragmented visibility across cloud and on-premise systems left exposure unclear ahead of a regulatory review.',
    solution: 'Combined external and internal VAPT with a targeted threat hunt across identity and endpoint telemetry.',
    outcome: 'Produced a prioritized remediation roadmap and closed the highest-risk findings before the review deadline.',
  },
  {
    tag: 'Representative engagement',
    sector: 'Healthcare Technology Company',
    challenge: 'A suspected compromise required rapid, evidence-backed answers on scope and impact.',
    solution: 'Digital forensics and incident response established a timeline and confirmed the extent of access.',
    outcome: 'Contained the incident, supported breach-notification decisions, and hardened the affected access paths.',
  },
  {
    tag: 'Representative engagement',
    sector: 'B2B SaaS Platform',
    challenge: 'Rapid product growth had outpaced the security review process for new features and APIs.',
    solution: 'Ongoing application VAPT integrated into release cycles, paired with security architecture advisory.',
    outcome: 'Established a repeatable testing cadence and reduced critical findings per release over time.',
  },
];

export const resources = [
  { cat: 'Threat Report', t: 'Emerging Attack Patterns We\u2019re Tracking', d: 'A running view of the tactics and techniques showing up most in current engagements.' },
  { cat: 'Guide', t: 'Building a Practical Vulnerability Management Program', d: 'A field-tested approach to prioritizing and closing exposure without alert fatigue.' },
  { cat: 'Research', t: 'Notes From Recent Threat Hunts', d: 'Patterns and behaviors surfaced through hypothesis-driven hunting engagements.' },
  { cat: 'Blog', t: 'Security Perspectives', d: 'Commentary and lessons from offensive security and incident response work.' },
  { cat: 'Guide', t: 'Preparing for a Security Assessment', d: 'What to scope, document and align internally before an engagement starts.' },
  { cat: 'Glossary', t: 'Security Terms, Explained Plainly', d: 'Clear definitions for the terminology used across modern security operations.' },
];

export const roadmap = [
  { n: '01', t: 'Collect', d: 'Telemetry & security data', status: 'done' },
  { n: '02', t: 'Correlate', d: 'Threat intel + behavioral signals', status: 'done' },
  { n: '03', t: 'Reason', d: 'AI-assisted investigation', status: 'active' },
  { n: '04', t: 'Respond', d: 'MDR workflows & automation', status: 'future' },
];

export const navLinks = [
  { href: '#capabilities', label: 'Solutions', mega: true },
  { href: '#operations', label: 'Operations' },
  { href: '#industries', label: 'Industries' },
  { href: '#platform', label: 'Platform' },
  { href: '#resources', label: 'Resources' },
  { href: '#why', label: 'Company' },
];
