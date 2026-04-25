function Process() {
  const ref = useReveal();
  const steps = [
    {
      n: '01', title: 'Diagnóstico',
      time: '15 min',
      body: 'Conversa rápida no WhatsApp. Entendo onde você está, pra onde quer ir e o que está travando. Saio com a foto do cenário.',
    },
    {
      n: '02', title: 'Estratégia',
      time: '3 a 5 dias',
      body: 'Desenho o sistema sob medida: agente, automação, página, dashboard, mídia quando faz sentido. Você recebe um documento curto, com escopo, prazo e investimento na mesa.',
    },
    {
      n: '03', title: 'Execução',
      time: '2 a 6 semanas',
      body: 'Coloco em pé: campanhas no ar, agente treinado, dashboards conectados. Você acompanha tudo em reuniões semanais.',
    },
    {
      n: '04', title: 'Otimização',
      time: 'contínuo',
      body: 'Sistema rodando, eu monitoro, ajusto e escalo. Você recebe relatório semanal e sabe exatamente o que está acontecendo.',
    },
  ];

  return (
    <section id="processo" ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <h2 className="h1">
            Do primeiro <em style={{ color: 'var(--accent)' }}>oi</em> até a máquina rodando, em quatro passos.
          </h2>
        </div>

        <ol style={{
          listStyle: 'none', margin: 0, padding: 0,
          borderTop: '1px solid var(--ink)',
        }}>
          {steps.map((s, i) => (
            <li key={s.n} className="proc-row">
              <div className="proc-num">
                <span className="serif" style={{
                  fontSize: 'clamp(64px, 9vw, 132px)',
                  fontStyle: 'italic', lineHeight: 0.9,
                  color: 'var(--accent)',
                }}>
                  {s.n}
                </span>
              </div>

              <div className="proc-meta">
                <span className="mono" style={{
                  fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  Passo · {s.time}
                </span>
              </div>

              <div className="proc-body">
                <h3 className="serif" style={{
                  fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1, fontWeight: 400,
                  letterSpacing: '-0.015em',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  marginTop: 12, fontSize: 16, lineHeight: 1.6,
                  color: 'var(--ink-2)', maxWidth: 540,
                }}>
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 18 }}>
            Tudo começa com uma conversa de 15 minutos.
          </p>
          <WhatsLink className="btn btn-primary" label="Começar agora">
            Começar agora →
          </WhatsLink>
        </div>
      </div>

      <style>{`
        .proc-row {
          display: grid;
          grid-template-columns: 200px 180px 1fr;
          gap: 28px;
          padding: 32px 0;
          border-bottom: 1px solid rgba(20,19,15,0.18);
          align-items: start;
        }
        .proc-num { padding-top: 0; }
        .proc-meta { padding-top: 18px; }
        .proc-body { padding-top: 14px; }

        @media (max-width: 880px) {
          .proc-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .proc-meta, .proc-body { padding-top: 0; }
        }
      `}</style>
    </section>
  );
}

window.Process = Process;
