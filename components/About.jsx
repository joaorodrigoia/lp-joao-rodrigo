function About() {
  const ref = useReveal();
  return (
    <section id="sobre" ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div className="about-grid">
          <div className="about-photo">
            <div style={{
              position: 'relative',
              aspectRatio: '3/4',
              background: 'var(--paper-2)',
              border: '1px solid var(--ink)',
              overflow: 'hidden',
            }}>
              <img
                src="assets/joao.png"
                alt="João Rodrigo"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 18%',
                  filter: 'grayscale(0.18) contrast(1.04) brightness(0.96)'
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(199,62,29,0.06) 0%, rgba(20,19,15,0.18) 100%)',
                mixBlendMode: 'multiply', pointerEvents: 'none'
              }} />
            </div>

            <p className="mono" style={{
              marginTop: 14, fontSize: 11, color: 'var(--muted)',
              letterSpacing: '0.06em',
            }}>
              João Rodrigo, 21 · Maceió/AL
            </p>
          </div>

          <div>
            <h2 className="h1">
              Sou desenvolvedor.<br />
              <em style={{ color: 'var(--accent)' }}>Aplico IA pra resolver o que sua operação não escala.</em>
            </h2>

            <div style={{ marginTop: 28, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-2)' }}>
              <p>
                21 anos, alagoano. Hoje passo a maior parte do tempo escrevendo código, treinando agentes e desenhando fluxos de automação pra empresas que decidiram parar de depender de planilha e celular pessoal.
              </p>
              <p style={{ marginTop: 16 }}>
                A história começou na mídia paga. Subindo campanha eu via a mesma cena se repetir: lead chegando, ninguém respondendo, cliente perdendo venda. Aprendi a programar pra consertar isso. Aprendi IA pra escalar a solução. Tráfego virou peça do conjunto, deixou de ser o produto principal.
              </p>
              <p style={{ marginTop: 16 }}>
                Trabalho com poucos clientes por vez. Cada projeto vira caso pra estudar, refinar e documentar. Você sempre fala diretamente comigo, do diagnóstico à entrega.
              </p>
            </div>

            <div style={{
              marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 18, paddingTop: 24, borderTop: '1px solid rgba(20,19,15,0.18)',
            }}>
              {[
                { n: '21', l: 'anos' },
                { n: '06', l: 'frentes' },
                { n: '24/7', l: 'rodando' },
              ].map(s => (
                <div key={s.l}>
                  <div className="serif" style={{
                    fontSize: 38, lineHeight: 1, fontStyle: 'italic',
                    color: 'var(--accent)', letterSpacing: '-0.02em',
                  }}>{s.n}</div>
                  <div className="mono" style={{
                    fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: 'var(--muted)', marginTop: 8,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <WhatsLink className="btn btn-primary" label="Quero conversar">
                Quero conversar →
              </WhatsLink>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(40px, 6vw, 80px); align-items: start; }
        .about-photo { max-width: 320px; }
        @media (max-width: 880px) { .about-photo { max-width: 240px; margin: 0 auto; } }
        @media (max-width: 880px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
window.About = About;
