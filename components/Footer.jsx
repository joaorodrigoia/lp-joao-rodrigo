function Footer() {
  return (
    <footer style={{
      background: 'var(--paper)',
      padding: 'clamp(60px, 8vh, 100px) 0 clamp(100px, 12vh, 60px)',
      borderTop: '1px solid var(--ink)',
    }}>
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span className="serif" style={{ fontSize: 32, letterSpacing: '-0.01em' }}>
                João Rodrigo
              </span>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--accent)',
              }}>◆ IA</span>
            </div>
            <p className="lede" style={{
              marginTop: 18, maxWidth: 360, fontSize: 18,
            }}>
              Sistemas com IA, sob medida, pra quem quer máquina rodando todo dia.
            </p>
          </div>

          <div className="ftr-cols">
            <div>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--muted)',
              }}>Navegar</span>
              <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><a href="#servicos" style={{ fontSize: 15 }}>Serviços</a></li>
                <li><a href="#processo" style={{ fontSize: 15 }}>Processo</a></li>
                <li><a href="#calculadora" style={{ fontSize: 15 }}>Calculadora</a></li>
                <li><a href="#sobre" style={{ fontSize: 15 }}>Sobre</a></li>
                <li><a href="#faq" style={{ fontSize: 15 }}>FAQ</a></li>
              </ul>
            </div>
            <div>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--muted)',
              }}>Contato</span>
              <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15 }}>
                    WhatsApp · +55 82 98191-9663 ↗
                  </a>
                </li>
                <li>
                  <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15 }}>
                    Instagram · {IG_HANDLE} ↗
                  </a>
                </li>
                <li style={{ color: 'var(--muted)', fontSize: 15 }}>Maceió/AL · Brasil</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 64, paddingTop: 24, borderTop: '1px solid rgba(20,19,15,0.18)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 16, flexWrap: 'wrap',
          fontSize: 12, color: 'var(--muted)',
          fontFamily: 'var(--mono)', letterSpacing: '0.08em',
        }}>
          <span>© 2026 · João Rodrigo · Maceió/AL</span>
          <span>Edição 2026 · Vol. 01, feita à mão e à máquina</span>
        </div>
      </div>

      <style>{`
        .ftr-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(40px, 6vw, 80px); align-items: start; }
        .ftr-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        @media (max-width: 720px) {
          .ftr-grid { grid-template-columns: 1fr; }
          .ftr-cols { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </footer>
  );
}
window.Footer = Footer;
