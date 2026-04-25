function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = React.useState(0);

  const items = [
    {
      q: 'Em quanto tempo eu vejo resultado?',
      a: 'O sistema entra no ar em até 7 dias. Resultado consistente leva de 30 a 60 dias, que é o tempo do agente aprender seu tom de voz, das automações estabilizarem e dos dados de campanha calibrarem. Quem promete escala em 7 dias vende expectativa, não sistema.',
    },
    {
      q: 'Eu preciso entender de IA pra contratar?',
      a: 'Não. Quem precisa entender sou eu. Você só precisa saber dois números: quanto custa um cliente entrar e quanto ele vale pra você. O resto eu desenho e te explico em linguagem de gente.',
    },
    {
      q: 'Funciona pro meu nicho?',
      a: 'Funciona pra qualquer negócio que vende serviço, infoproduto ou produto físico pela internet ou WhatsApp. Já construí sistema pra fotógrafo, varejo, mentoria, clínica e infoprodutor. O método não muda. O que muda é o tom de voz e a oferta.',
    },
    {
      q: 'Quanto custa montar tudo isso?',
      a: 'Depende do escopo. Mentoria 1×1 começa baixo. Sistema completo (agente, automações, dashboard e site) é investimento maior, sempre com prazo e entrega clara. Na conversa do diagnóstico eu te mostro 2 ou 3 caminhos diferentes antes de qualquer proposta.',
    },
    {
      q: 'E se eu já tenho gestor de tráfego?',
      a: 'A gente combina. Em muitos casos eu monto só o sistema (agente, página, automação, dashboard) e seu gestor segue tocando a mídia. Em outros, faço a transição completa. O que não faço é entrar pra brigar com ninguém. Entro pra somar.',
    },
    {
      q: 'O agente de IA não soa robótico?',
      a: 'Soa como você. Treino com seus áudios, suas respostas reais e seu vocabulário. O cliente não percebe que é IA na primeira mensagem. Quando percebe, já está qualificado e pronto pra fechar.',
    },
  ];

  return (
    <section id="faq" ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      background: 'var(--paper-2)',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <h2 className="h1">
              Perguntas que <em style={{ color: 'var(--accent)' }}>todo mundo faz.</em>
            </h2>
            <p className="lede" style={{ marginTop: 24, maxWidth: 380 }}>
              Se a sua não está aqui, é só me chamar. Respondo no WhatsApp, sem script.
            </p>
            <div style={{ marginTop: 28 }}>
              <WhatsLink className="btn btn-ghost" label="Tirar dúvida na consultoria gratuita">
                Tirar dúvida no WhatsApp →
              </WhatsLink>
            </div>
          </div>

          <div>
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  borderTop: '1px solid var(--ink)',
                  borderBottom: i === items.length - 1 ? '1px solid var(--ink)' : 'none',
                }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%', textAlign: 'left',
                      display: 'grid', gridTemplateColumns: '32px 1fr 24px',
                      gap: 16, alignItems: 'center',
                      padding: '24px 0',
                    }}
                  >
                    <span className="mono" style={{
                      fontSize: 12, color: 'var(--muted)',
                      letterSpacing: '0.06em',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="serif" style={{
                      fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.25,
                      color: isOpen ? 'var(--accent)' : 'var(--ink)',
                      transition: 'color .25s',
                      letterSpacing: '-0.01em',
                    }}>
                      {item.q}
                    </span>
                    <span style={{
                      width: 24, height: 24, borderRadius: '50%',
                      border: '1px solid var(--ink)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 14, lineHeight: 1,
                      background: isOpen ? 'var(--accent)' : 'transparent',
                      borderColor: isOpen ? 'var(--accent)' : 'var(--ink)',
                      color: isOpen ? 'var(--paper)' : 'var(--ink)',
                      transition: 'all .25s',
                    }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 400 : 0,
                    transition: 'max-height .5s cubic-bezier(.22,1,.36,1)',
                  }}>
                    <p style={{
                      margin: 0, paddingLeft: 48, paddingBottom: 28, paddingRight: 40,
                      fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)',
                      maxWidth: 600,
                    }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .faq-grid { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: clamp(40px, 6vw, 80px); align-items: start; }
        @media (max-width: 880px) {
          .faq-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
window.FAQ = FAQ;
