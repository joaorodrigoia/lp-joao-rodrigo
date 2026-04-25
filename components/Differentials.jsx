function Differentials() {
  const ref = useReveal();
  const items = [
    {
      n: '01',
      kicker: 'Eu programo',
      title: 'Construo o sistema na minha mão. Sem terceirizar no meio do caminho.',
      body: 'Quem promete IA hoje em dia normalmente revende ferramenta de outra pessoa. Eu escrevo o código, treino o agente, integro a API e respondo por cada peça. Você fala comigo do começo ao fim.',
    },
    {
      n: '02',
      kicker: 'Visão sistêmica',
      title: 'Não vendo serviço solto. Vendo ecossistema que conversa.',
      body: 'Agente sem CRM responde no escuro. Site sem automação esquenta lead que esfria. Tráfego sem dashboard vira gasto cego. O sistema só funciona quando as peças trocam informação entre elas.',
    },
    {
      n: '03',
      kicker: 'Stack atual',
      title: 'A mesma stack que as big techs usam, aplicada no seu negócio.',
      body: 'Claude, GPT, N8n, Supabase, Meta API. Cada peça escolhida pra resolver problema concreto, não por modinha. E você nunca precisa entender de IA pra colher resultado.',
    },
  ];

  return (
    <section ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      background: 'var(--paper-2)',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <h2 className="h1">
            Três coisas que <em style={{ color: 'var(--accent)' }}>mudam o jogo.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {items.map((d, i) => (
            <article key={d.n} style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr',
              gap: 'clamp(24px, 4vw, 64px)',
              padding: '40px 0',
              borderTop: '1px solid rgba(20,19,15,0.18)',
              alignItems: 'start',
            }} className="diff-row">
              <div>
                <span className="serif" style={{
                  fontSize: 'clamp(56px, 7vw, 92px)', lineHeight: 0.9,
                  fontStyle: 'italic', color: 'var(--accent)',
                }}>
                  {d.n}
                </span>
                <div className="mono" style={{
                  fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--muted)', marginTop: 12,
                }}>
                  {d.kicker}
                </div>
              </div>
              <div>
                <h3 className="serif" style={{
                  fontSize: 'clamp(24px, 3vw, 38px)', lineHeight: 1.15,
                  fontWeight: 400, letterSpacing: '-0.015em',
                }}>
                  {d.title}
                </h3>
                <p style={{
                  marginTop: 18, fontSize: 16.5, lineHeight: 1.65,
                  color: 'var(--ink-2)', maxWidth: 620,
                }}>
                  {d.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .diff-row { grid-template-columns: 1fr !important; gap: 18px !important; }
        }
      `}</style>
    </section>
  );
}
window.Differentials = Differentials;
