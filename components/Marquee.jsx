function Marquee() {
  // Editorial marquee — words, no shiny icons
  const words = [
    'Agentes de IA',
    'Sistemas sob medida',
    'Sites & Landing Pages',
    'Dashboards',
    'Automações N8n',
    'Integrações de API',
    'Mentoria aplicada',
    'Consultoria 1×1',
    'Meta Ads',
    'Google Ads',
  ];
  const doubled = [...words, ...words];

  return (
    <section style={{
      borderTop: '1px solid rgba(20,19,15,0.12)',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
      background: 'var(--paper-2)',
      overflow: 'hidden',
      padding: '22px 0',
    }} aria-label="Especialidades">
      <div className="marquee">
        {doubled.map((w, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 28,
            paddingRight: 28,
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontStyle: 'italic',
            color: i % 5 === 2 ? 'var(--accent)' : 'var(--ink)',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}>
            {w}
            <span style={{
              fontFamily: 'var(--sans)', fontSize: 14, fontStyle: 'normal',
              color: 'var(--muted)', letterSpacing: '0.18em',
            }}>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
window.Marquee = Marquee;
