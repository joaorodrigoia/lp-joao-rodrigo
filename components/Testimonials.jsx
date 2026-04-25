function Testimonials() {
  const ref = useReveal();
  const items = [
    {
      text: 'O João montou um sistema que triplicou minha agenda sem eu precisar responder no WhatsApp. Hoje o agente cuida de tudo enquanto fotografo.',
      name: 'Cliente · Fotografia',
      role: 'Estúdio em Maceió/AL',
      n: '01',
    },
    {
      text: 'Saímos de planilha manual pra dashboard automatizado em duas semanas. O time inteiro ganhou tempo. Eu ganhei previsibilidade.',
      name: 'Cliente · Varejo',
      role: 'E-commerce em Alagoas',
      n: '02',
    },
    {
      text: 'O agente no WhatsApp qualifica lead melhor do que eu fazia manualmente. E ainda roda 24h. Investimento se pagou no primeiro mês.',
      name: 'Cliente · Infoproduto',
      role: 'Mentoria digital',
      n: '03',
    },
  ];

  return (
    <section ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <h2 className="h1">
            Quem já <em style={{ color: 'var(--accent)' }}>roda comigo.</em>
          </h2>
        </div>

        <div className="tst-grid">
          {items.map((t) => (
            <figure key={t.n} className="tst-card">
              <span className="serif" style={{
                fontSize: 88, lineHeight: 0.6, fontStyle: 'italic',
                color: 'var(--accent)', display: 'block',
              }}>“</span>

              <blockquote className="serif" style={{
                margin: 0, fontSize: 'clamp(20px, 2vw, 24px)', lineHeight: 1.45,
                fontWeight: 400, letterSpacing: '-0.005em',
                color: 'var(--ink)',
              }}>
                {t.text}
              </blockquote>

              <figcaption style={{
                marginTop: 28, paddingTop: 16,
                borderTop: '1px solid rgba(20,19,15,0.2)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{t.role}</div>
                </div>
                <span className="mono" style={{
                  fontSize: 11, letterSpacing: '0.18em',
                  color: 'var(--muted)',
                }}>{t.n}/03</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mono" style={{
          marginTop: 32, fontSize: 11, color: 'var(--muted)',
          letterSpacing: '0.06em', textAlign: 'center',
        }}>
          Depoimentos preliminares. Serão substituídos por nomes e marcas reais ao publicar.
        </p>
      </div>

      <style>{`
        .tst-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .tst-card {
          padding: 32px;
          background: var(--paper-2);
          border: 1px solid rgba(20,19,15,0.18);
          margin: 0;
        }
        @media (max-width: 980px) { .tst-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
window.Testimonials = Testimonials;
