function FinalCTA() {
  const ref = useReveal();
  return (
    <section id="contato" ref={ref} className="reveal" style={{
      position: 'relative',
      padding: 'clamp(56px, 8vh, 96px) 0',
      background: 'var(--ink)',
      color: 'var(--paper)',
      overflow: 'hidden',
    }}>
      {/* Big italic decorative type behind */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <span className="serif" style={{
          fontSize: 'clamp(160px, 28vw, 480px)', lineHeight: 0.85,
          fontStyle: 'italic',
          color: 'rgba(244,239,230,0.04)',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.04em',
        }}>
          vamos?
        </span>
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 className="display" style={{ maxWidth: 1100, marginInline: 'auto' }}>
          15 minutos. <em style={{ color: 'var(--accent)' }}>Zero compromisso.</em>
        </h2>

        <p className="lede" style={{
          marginTop: 28, color: 'rgba(244,239,230,0.78)',
          maxWidth: 600, marginInline: 'auto',
        }}>
          Uma consultoria gratuita pra entender seu cenário. Você sai da conversa com 3 caminhos possíveis e a clareza do que dá pra fazer com IA no seu negócio.
        </p>

        <div style={{
          marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 14,
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <WhatsLink className="btn btn-primary" label="Agendar consultoria gratuita">
            <span style={{
              display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
              background: '#5fdd6e', marginRight: 4,
            }} />
            Agendar consultoria gratuita
            <span aria-hidden style={{ fontSize: 14 }}>→</span>
          </WhatsLink>
        </div>

        <p className="mono" style={{
          marginTop: 28, fontSize: 11, letterSpacing: '0.06em',
          color: 'rgba(244,239,230,0.5)',
        }}>
          Respondo em minutos · Direto comigo, sem atendente · Sem pitch forçado
        </p>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;
