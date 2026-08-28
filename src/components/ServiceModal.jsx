import { useEffect, useRef } from 'react';

export default function ServiceModal({ service, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="modalback" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} onClick={onClose} aria-label="Close">×</button>
        <div className="kicker">{service.id} / {service.tag}</div>
        <h2 id="modal-title">{service.title}</h2>
        <p>{service.desc}</p>
        <h4>TYPICAL SCOPE</h4>
        <ul>
          {service.scope.map((x) => <li key={x}>{x}</li>)}
        </ul>
        <a className="btn primary" href="#contact" onClick={onClose}>Discuss this service →</a>
      </div>
    </div>
  );
}
