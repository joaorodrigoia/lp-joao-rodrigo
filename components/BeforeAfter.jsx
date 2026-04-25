function BeforeAfter() {
  const [pos, setPos] = React.useState(50);
  const ref = useReveal();
  const containerRef = React.useRef(null);
  const dragging = React.useRef(false);

  const updateFromX = React.useCallback((clientX) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(4, Math.min(96, x)));
  }, []);

  React.useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromX(cx);
    };
    const up = () => { dragging.current = false; document.body.style.userSelect = ''; };
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, [updateFromX]);

  const onDown = (e) => {
    dragging.current = true;
    document.body.style.userSelect = 'none';
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    updateFromX(cx);
  };

  return (
    <section ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      background: 'var(--paper-2)',
      borderBottom: '1px solid rgba(20,19,15,0.12)',
    }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <h2 className="h1" style={{ marginTop: 18 }}>
            Antes e depois. <em style={{ color: 'var(--accent)' }}>Arraste pra comparar.</em>
          </h2>
          <p className="lede" style={{ marginTop: 18, maxWidth: 640 }}>
            Mesma operação, dois mundos. À esquerda, o dia de quem ainda toca tudo na unha. À direita, o que muda quando o sistema entra no ar.
          </p>
        </div>

        <div
          ref={containerRef}
          className="ba-stage"
          style={{
            position: 'relative',
            border: '1px solid var(--ink)',
            background: 'var(--paper)',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
          }}
          onMouseDown={onDown}
          onTouchStart={onDown}
        >
          {/* AFTER (back) — automated */}
          <Panel side="after" />

          {/* BEFORE (front, clipped) */}
          <div style={{
            position: 'absolute', inset: 0,
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}>
            <Panel side="before" />
          </div>

          {/* Slider handle */}
          <div className="ba-handle" style={{
            position: 'absolute', top: 0, bottom: 0,
            left: `${pos}%`, transform: 'translateX(-50%)',
            width: 2, background: 'var(--accent)', pointerEvents: 'none',
          }}>
            <div className="ba-handle-knob" style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: 'var(--accent)', color: 'var(--paper)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(20,19,15,0.25)',
              fontFamily: 'var(--mono)',
            }}>
              ⇆
            </div>
          </div>

          {/* Labels */}
          <div style={{
            position: 'absolute', top: 16, left: 16,
            background: 'var(--ink)', color: 'var(--paper)',
            padding: '6px 12px',
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}>Antes</div>
          <div style={{
            position: 'absolute', top: 16, right: 16,
            background: 'var(--accent)', color: 'var(--paper)',
            padding: '6px 12px',
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}>Depois</div>
        </div>

        <p className="mono" style={{
          marginTop: 14, fontSize: 11, color: 'var(--muted)',
          letterSpacing: '0.06em', textAlign: 'center',
        }}>
          ↔ Arraste o controle pra comparar
        </p>
      </div>

      <style>{`
        /* Mobile first: taller stage, bigger knob */
        .ba-stage { aspect-ratio: 3 / 4; }
        .ba-handle-knob { width: 44px; height: 44px; font-size: 16px; }
        @media (min-width: 720px) {
          .ba-stage { aspect-ratio: 16 / 9; }
          .ba-handle-knob { width: 56px; height: 56px; font-size: 18px; }
        }
      `}</style>
    </section>
  );
}

function Panel({ side }) {
  const isBefore = side === 'before';
  const bg = isBefore ? '#E5DCC9' : '#14130F';
  const fg = isBefore ? '#14130F' : '#F4EFE6';
  const accent = isBefore ? '#9C2F12' : '#C73E1D';

  const beforeRows = [
    { time: '08:42', text: 'WhatsApp: 14 mensagens não lidas', late: true },
    { time: '09:05', text: 'Planilha CRM: atualizar na unha', late: true },
    { time: '10:18', text: 'Cliente reclama de não ser respondido', late: true },
    { time: '11:30', text: 'Subir criativo novo (esqueci ontem)', late: false },
    { time: '13:00', text: 'Almoço com celular tocando sem parar', late: true },
    { time: '15:15', text: 'Lead frio: ninguém qualificou', late: true },
    { time: '17:40', text: 'Relatório do mês: ainda sem dados', late: true },
    { time: '21:00', text: 'Responder DM: começa agora', late: true },
  ];

  const afterRows = [
    { time: '08:42', text: 'Agente respondeu 14 conversas. 6 qualificadas.', ok: true },
    { time: '09:05', text: 'Dashboard atualiza sozinho · 47 leads/24h', ok: true },
    { time: '10:18', text: 'Cliente recebeu proposta automática', ok: true },
    { time: '11:30', text: 'Criativos rotacionam por performance', ok: true },
    { time: '13:00', text: 'Almoço tranquilo. Sistema rodando.', ok: true },
    { time: '15:15', text: 'Top lead já está agendado pra 16h', ok: true },
    { time: '17:40', text: 'Relatório enviado por e-mail, automático', ok: true },
    { time: '21:00', text: 'CAC: R$ 18 · Conversão: 12,4%', ok: true },
  ];

  const rows = isBefore ? beforeRows : afterRows;

  return (
    <div style={{
      position: 'absolute', inset: 0, background: bg, color: fg,
      padding: 'clamp(16px, 3vw, 40px)',
      display: 'flex', flexDirection: 'column', gap: 10,
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 className="serif" style={{
          fontSize: 'clamp(22px, 2.6vw, 32px)',
          fontStyle: 'italic',
        }}>
          {isBefore ? 'Quarta-feira no braço' : 'Quarta-feira no automático'}
        </h3>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          opacity: 0.7,
        }}>
          {isBefore ? 'caos' : 'sistema'}
        </span>
      </div>

      <div style={{
        height: 1, background: fg, opacity: 0.18, marginBottom: 4,
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '52px 14px 1fr',
            gap: 10, alignItems: 'baseline',
            paddingBottom: 6,
            borderBottom: `1px dashed ${fg}22`,
            fontSize: 'clamp(12px, 1.4vw, 14px)',
            lineHeight: 1.35,
          }}>
            <span className="mono" style={{ opacity: 0.65, letterSpacing: '0.04em' }}>{r.time}</span>
            <span style={{ color: accent, fontWeight: 700 }}>
              {isBefore ? (r.late ? '✕' : '·') : '✓'}
            </span>
            <span style={{ opacity: isBefore && r.late ? 0.85 : 1, lineHeight: 1.45 }}>
              {r.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.BeforeAfter = BeforeAfter;
