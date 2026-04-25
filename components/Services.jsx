function Services() {
  const ref = useReveal();
  const services = [
    {
      n: '01',
      title: 'Agente de WhatsApp',
      sub: 'Atendente de IA que vende 24 horas',
      body: 'Treinado com seus áudios e suas respostas. Qualifica lead, tira dúvida, agenda reunião e fecha venda. Conectado ao seu CRM, rodando enquanto você dorme.',
      tags: ['IA', 'WhatsApp', '24/7'],
    },
    {
      n: '02',
      title: 'Sistemas internos',
      sub: 'Software sob medida pro seu time parar de perder tempo',
      body: 'Dashboards, automações e ferramentas internas construídas em código. Tudo o que hoje vive em planilha vira sistema que atualiza sozinho.',
      tags: ['Dashboard', 'Código', 'Integração'],
    },
    {
      n: '03',
      title: 'Sites & landing pages',
      sub: 'Páginas feitas pra converter, não pra ganhar prêmio',
      body: 'Programadas do zero por mim. Copy, design e código alinhados num só lugar. Velocidade de carregamento, SEO e conversão pensados desde a primeira linha.',
      tags: ['Copy', 'Design', 'Código'],
    },
    {
      n: '04',
      title: 'Automações N8n',
      sub: 'Tudo o que repete vira fluxo automático',
      body: 'Integro Meta, Google, WhatsApp, planilhas, CRM e ferramentas que você já paga. O lead entra de um lado e sai do outro qualificado, agendado e registrado.',
      tags: ['N8n', 'API', 'Workflow'],
    },
    {
      n: '05',
      title: 'Consultoria & Mentoria',
      sub: 'Pra você que prefere aprender a aplicar',
      body: 'Encontros 1×1 onde eu mostro como usar Claude, N8n, GPT e Meta API no dia a dia da sua operação. Você sai sabendo construir, não só comprar.',
      tags: ['1×1', 'Prático', 'Aplicado'],
    },
    {
      n: '06',
      title: 'Tráfego pago',
      sub: 'Mídia operada como peça do sistema',
      body: 'Meta e Google Ads quando faz sentido pro projeto. Sempre conectados ao agente, à página e ao dashboard. Cliente entra, dado roda, ajuste acontece.',
      tags: ['Meta Ads', 'Google Ads', 'CAC'],
    },
  ];

  return (
    <section id="servicos" ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end',
          gap: 32, marginBottom: 56, flexWrap: 'wrap',
        }} className="srv-head">
          <div style={{ maxWidth: 720 }}>
            <h2 className="h1">
              Seis frentes.{' '}
              <em style={{ color: 'var(--accent)' }}>Um ecossistema só.</em>
            </h2>
          </div>
          <p style={{ color: 'var(--muted)', maxWidth: 360, fontSize: 15.5, lineHeight: 1.6 }}>
            Cada peça resolve um problema. Juntas, viram a máquina que atende, vende, organiza e escala o seu negócio sem você ficar no operacional.
          </p>
        </div>

        <div className="srv-grid">
          {services.map((s) => (
            <article key={s.n} className="srv-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="serif" style={{
                  fontSize: 56, lineHeight: 1, fontStyle: 'italic',
                  color: 'var(--accent)', letterSpacing: '-0.02em',
                }}>{s.n}</span>
                <span className="mono" style={{
                  fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>Serviço</span>
              </div>

              <h3 className="serif" style={{
                fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.1,
                marginTop: 22, fontWeight: 400,
              }}>
                {s.title}
              </h3>
              <p style={{ marginTop: 6, fontSize: 14, color: 'var(--accent-deep)', fontWeight: 500 }}>
                {s.sub}
              </p>

              <p style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>
                {s.body}
              </p>

              <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {s.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: 'var(--mono)', fontSize: 10,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    padding: '5px 10px', border: '1px solid rgba(20,19,15,0.25)',
                    borderRadius: 999, color: 'var(--ink-2)',
                  }}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(20,19,15,0.18);
          border-left: 1px solid rgba(20,19,15,0.18);
        }
        .srv-card {
          padding: 36px 32px;
          border-right: 1px solid rgba(20,19,15,0.18);
          border-bottom: 1px solid rgba(20,19,15,0.18);
          background: var(--paper);
          transition: background .3s ease;
          position: relative;
        }
        .srv-card:hover { background: var(--paper-2); }
        .srv-card:hover .serif { color: var(--accent-deep) !important; }

        @media (max-width: 980px) {
          .srv-grid { grid-template-columns: repeat(2, 1fr); }
          .srv-head { grid-template-columns: 1fr; }
        }
        @media (max-width: 620px) {
          .srv-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
window.Services = Services;
