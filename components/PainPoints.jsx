function PainPoints() {
  const ref = useReveal();
  const items = [
    {
      n: '01',
      title: 'Você responde lead às 22h em vez de tocar o negócio.',
      sub: 'Sem agente cuidando do WhatsApp, todo cliente passa pelo seu celular.',
    },
    {
      n: '02',
      title: 'Cada nova venda multiplica processo manual no time.',
      sub: 'Planilha, copia e cola, anotação no caderno. O gargalo virou você mesmo.',
    },
    {
      n: '03',
      title: 'Você paga ferramenta cara que ninguém integrou.',
      sub: 'CRM, Meta, WhatsApp, planilha. Cada um num canto, falando línguas diferentes.',
    },
    {
      n: '04',
      title: 'Site bonito que não vende. Ou pior: nenhum site.',
      sub: 'Página fraca derruba a melhor campanha. E sem ela, não tem pra onde mandar tráfego.',
    },
  ];

  return (
    <section id="dores" ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <h2 className="h1">
            Você reconhece <em style={{ color: 'var(--accent)' }}>essas cenas?</em>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Quatro sintomas de que falta sistema. Não falta esforço.
          </p>
        </div>

        <div className="pain-grid">
          {items.map((p, i) => (
            <div key={p.n} className="pain-card">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
                <span className="serif" style={{
                  fontSize: 'clamp(56px, 7vw, 88px)',
                  lineHeight: 1, color: 'var(--accent)', fontStyle: 'italic',
                }}>
                  {p.n}
                </span>
                <span className="mono" style={{
                  fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  Sintoma
                </span>
              </div>

              <h3 className="serif" style={{
                fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.2,
                marginTop: 18, fontWeight: 400,
              }}>
                {p.title}
              </h3>

              <p style={{ marginTop: 14, color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.6 }}>
                {p.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border-top: 1px solid rgba(20,19,15,0.18);
        }
        .pain-card {
          padding: 36px 36px 36px 0;
          border-bottom: 1px solid rgba(20,19,15,0.18);
        }
        .pain-card:nth-child(odd) { padding-right: 48px; border-right: 1px solid rgba(20,19,15,0.18); }
        .pain-card:nth-child(even) { padding-left: 48px; }
        .pain-card:nth-last-child(-n+2) { border-bottom: none; }

        @media (max-width: 880px) {
          .pain-grid { grid-template-columns: 1fr; }
          .pain-card { padding: 28px 0 !important; border-right: none !important; }
          .pain-card:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
window.PainPoints = PainPoints;
