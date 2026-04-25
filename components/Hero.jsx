function Hero() {
  const ref = useReveal();
  const y = useScrollY();
  const heroRef = React.useRef(null);

  // Animated counter for live stats
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 4200);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="top" ref={heroRef} style={{
      position: 'relative',
      paddingTop: 'clamp(72px, 9vh, 96px)',
      paddingBottom: 'clamp(40px, 6vh, 72px)',
      borderBottom: '1px solid rgba(20,19,15,0.12)'
    }}>
      {/* Main hero */}
      <div className="wrap" ref={ref}>
        <div className="hero-grid">
          {/* Left — text */}
          <div className="hero-text reveal-stagger reveal">
            <div>
              <h1 className="display">
                Programo{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>sistemas com IA</span>{' '}
                que <mark className="h">vendem, atendem e organizam</mark> o seu negócio sozinhos.
              </h1>

              <p className="lede" style={{ marginTop: 28, maxWidth: 540 }}>
                Agentes que respondem no WhatsApp, dashboards que substituem planilha, sites que convertem de verdade. Tudo construído por mim, do zero, pra rodar todo dia. Tráfego entra na conta quando faz sentido, nunca como produto solto.
              </p>

              <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <WhatsLink className="btn btn-primary" label="Agendar consultoria gratuita">
                  Agendar consultoria gratuita
                  <span aria-hidden style={{ fontSize: 14 }}>→</span>
                </WhatsLink>
                <a href="#servicos" className="btn btn-ghost">
                  Ver o que eu construo
                </a>
              </div>

              {/* Footnote / social proof line */}
              <p className="mono" style={{
                marginTop: 36, fontSize: 12, color: 'var(--muted)',
                letterSpacing: '0.04em', maxWidth: 460
              }}>
                15 minutos no WhatsApp · Sem pitch · Você sai com 3 caminhos possíveis
              </p>
            </div>
          </div>

          {/* spacer for grid */}
          {/* Right — portrait + meta card */}
          <div className="hero-portrait">
            <div style={{
              position: 'relative',
              aspectRatio: '4 / 5',
              background: 'var(--paper-2)',
              border: '1px solid rgba(20,19,15,0.15)',
              overflow: 'hidden'
            }}>
              {/* Real photo — duotone treatment */}
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
              <div style={{
                position: 'absolute', inset: 0,
                boxShadow: 'inset 0 0 0 1px rgba(20,19,15,0.18)', pointerEvents: 'none'
              }} />

            </div>

            {/* Caption */}
            <p style={{
              marginTop: 14, fontFamily: 'var(--mono)', fontSize: 11,
              color: 'var(--muted)', letterSpacing: '0.06em', lineHeight: 1.6
            }}>
              Desenvolvedor com foco em IA aplicada.<br />
              Mídia paga entra como peça do conjunto.
            </p>
          </div>
        </div>

        {/* Bottom dossier strip */}
        <div className="rule" style={{ marginTop: 56, marginBottom: 22 }} />

        <div className="dossier">
          <Stat n="06" label="frentes integradas" sub="IA · sistemas · sites · automações · dashboards · tráfego" />
          <Stat n="24/7" label="sistemas rodando" sub="agentes que respondem enquanto você dorme" />
          <Stat n="15min" label="diagnóstico gratuito" sub="sem compromisso, direto no WhatsApp" />
          <Stat n="01" label="seu próximo projeto" sub="construído junto, do zero ou em cima do que existe" highlight />
        </div>

        {/* Meta footer — location + availability */}
        <div style={{ marginTop: 32 }}>
          <div className="rule" style={{ marginBottom: 16 }} />
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            gap: 16, flexWrap: 'wrap'
          }}>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--muted)'
            }}>
              IA para negócios · {LOCATION}
            </span>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 8
            }}>
              <span style={{
                display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
                background: 'var(--accent)', animation: 'pulse 2s ease-in-out infinite'
              }} />
              Disponível pra novos projetos
            </span>
          </div>
        </div>
      </div>

      <style>{`
        /* Mobile-first: portrait on top, then text */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }
        .hero-text { padding-top: 0; order: 2; }
        .hero-portrait { position: relative; order: 1; max-width: 240px; margin: 0 auto; }

        @media (min-width: 881px) {
          .hero-grid {
            grid-template-columns: 1.6fr 1fr;
            gap: clamp(40px, 6vw, 96px);
          }
          .hero-text { order: 1; }
          .hero-portrait { order: 2; max-width: 340px; margin: 0; }
        }

        .dossier {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .dossier > * + * { border-left: 1px solid rgba(20,19,15,0.12); padding-left: 22px; }
        .dossier > * { padding-right: 22px; }

        @media (max-width: 880px) {
          .dossier { grid-template-columns: repeat(2, 1fr); gap: 28px 0; }
          .dossier > * { padding: 0 16px; }
          .dossier > *:nth-child(odd) { border-left: none; padding-left: 0; }
          .dossier > *:nth-child(2) { border-left: 1px solid rgba(20,19,15,0.12); }
          .dossier > *:nth-child(4) { border-left: 1px solid rgba(20,19,15,0.12); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </section>);

}

function Stat({ n, label, sub, highlight }) {
  return (
    <div>
      <div className="serif" style={{
        fontSize: 'clamp(38px, 5vw, 64px)',
        lineHeight: 1, letterSpacing: '-0.02em',
        color: highlight ? 'var(--accent)' : 'var(--ink)',
        fontStyle: highlight ? 'italic' : 'normal'
      }}>
        {n}
      </div>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'var(--ink-2)', marginTop: 10, fontWeight: 500
      }}>
        {label}
      </div>
      <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 6, lineHeight: 1.5 }}>
        {sub}
      </div>
    </div>);

}

window.Hero = Hero;