function ROICalculator() {
  const ref = useReveal();
  const [investimento, setInvestimento] = React.useState(3000);
  const [ticket, setTicket] = React.useState(500);
  const [taxaConversao, setTaxaConversao] = React.useState(8);
  const [tempoAtendimento, setTempoAtendimento] = React.useState(15);

  // Cálculos: simulação realista
  // CPL médio com tráfego otimizado: ~R$25
  const cpl = 25;
  const leads = Math.round(investimento / cpl);
  const vendas = Math.round((leads * taxaConversao) / 100);
  const receita = vendas * ticket;
  const lucroBruto = receita - investimento;

  // Ganho de tempo: agente responde em segundos
  const horasMensaisEconomizadas = Math.round((leads * tempoAtendimento) / 60);

  // ROAS
  const roas = (receita / investimento).toFixed(1);

  return (
    <section id="calculadora" ref={ref} className="reveal" style={{
      padding: 'clamp(40px, 6vh, 72px) 0',
      background: 'var(--ink)',
      color: 'var(--paper)',
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
    }}>
      <div className="wrap">
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <span style={{ display: 'none' }}>
            <span style={{ background: 'var(--paper)' }} />
            Ferramenta · 05
          </span>
          <h2 className="h1" style={{ marginTop: 18 }}>
            Calcule o que <em style={{ color: 'var(--accent)' }}>um sistema</em> faria pelo seu mês.
          </h2>
          <p className="lede" style={{ marginTop: 18, color: 'rgba(244,239,230,0.75)' }}>
            Mexa nos sliders. Os números atualizam ao vivo. É uma estimativa conservadora, baseada em médias de mercado.
          </p>
        </div>

        <div className="roi-grid">
          {/* Inputs */}
          <div className="roi-inputs">
            <Slider
              label="Investimento mensal em tráfego"
              value={investimento}
              onChange={setInvestimento}
              min={500} max={30000} step={250}
              format={(v) => brl(v)}
            />
            <Slider
              label="Ticket médio por venda"
              value={ticket}
              onChange={setTicket}
              min={50} max={10000} step={50}
              format={(v) => brl(v)}
            />
            <Slider
              label="Taxa de conversão (lead → venda)"
              value={taxaConversao}
              onChange={setTaxaConversao}
              min={1} max={30} step={0.5}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Tempo médio de atendimento por lead"
              value={tempoAtendimento}
              onChange={setTempoAtendimento}
              min={2} max={60} step={1}
              format={(v) => `${v} min`}
            />
          </div>

          {/* Outputs */}
          <div className="roi-outputs">
            <div style={{
              border: '1px solid rgba(244,239,230,0.18)',
              padding: 'clamp(28px, 4vw, 44px)',
              background: 'rgba(244,239,230,0.03)',
            }}>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(244,239,230,0.5)',
              }}>
                Estimativa mensal
              </span>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28,
                marginTop: 28,
              }}>
                <Output big label="Receita projetada" value={brl(receita)} accent />
                <Output big label="Lucro bruto" value={brl(lucroBruto)} good={lucroBruto > 0} />
                <Output label="Leads gerados" value={String(leads)} sub="≈ R$ 25 por lead" />
                <Output label="Vendas" value={String(vendas)} sub={`${taxaConversao}% de conversão`} />
                <Output label="ROAS" value={`${roas}×`} sub="retorno sobre o anúncio" />
                <Output label="Horas devolvidas" value={`${horasMensaisEconomizadas}h`} sub="agente atende por você" />
              </div>

              <div style={{
                marginTop: 32, padding: 20,
                background: 'rgba(199,62,29,0.12)',
                border: '1px solid rgba(199,62,29,0.4)',
              }}>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(244,239,230,0.9)' }}>
                  Com sistema, esses números viram <strong style={{ color: 'var(--accent)' }}>baseline</strong>, não teto. O que muda é a previsibilidade: você passa a saber quanto entra antes do mês começar.
                </p>
              </div>

              <div style={{ marginTop: 24 }}>
                <WhatsLink className="btn btn-primary" label="Conversar sobre meu cenário">
                  Conversar sobre meu cenário →
                </WhatsLink>
              </div>
            </div>

            <p className="mono" style={{
              marginTop: 14, fontSize: 11, color: 'rgba(244,239,230,0.4)',
              letterSpacing: '0.06em', lineHeight: 1.6,
            }}>
              * Estimativas conservadoras baseadas em CPL médio de R$ 25 em<br/>
              campanhas operadas com método. Não é garantia de resultado.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .roi-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
        }
        .roi-inputs {
          display: flex; flex-direction: column; gap: 28px;
          padding-top: 8px;
        }
        @media (max-width: 980px) {
          .roi-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  );
}

function Slider({ label, value, onChange, min, max, step, format }) {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 10,
      }}>
        <label style={{ fontSize: 13, color: 'rgba(244,239,230,0.7)' }}>{label}</label>
        <span className="serif" style={{
          fontSize: 22, fontStyle: 'italic', color: 'var(--paper)',
        }}>
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: '100%' }}
        className="roi-slider"
      />
      <style>{`
        .roi-slider {
          -webkit-appearance: none; appearance: none;
          height: 2px;
          background: rgba(244,239,230,0.2);
          outline: none;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--accent);
          cursor: ew-resize;
          box-shadow: 0 0 0 4px rgba(199,62,29,0.2);
          transition: box-shadow .2s;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 6px rgba(199,62,29,0.3);
        }
        .roi-slider::-moz-range-thumb {
          width: 18px; height: 18px; border-radius: 50%; border: none;
          background: var(--accent); cursor: ew-resize;
        }
      `}</style>
    </div>
  );
}

function Output({ label, value, sub, big, accent, good }) {
  return (
    <div>
      <div className="mono" style={{
        fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(244,239,230,0.5)', marginBottom: 8,
      }}>
        {label}
      </div>
      <div className="serif" style={{
        fontSize: big ? 'clamp(34px, 4.5vw, 54px)' : 'clamp(24px, 2.5vw, 32px)',
        lineHeight: 1, letterSpacing: '-0.02em',
        color: accent ? 'var(--accent)' : (good ? '#7DA67A' : 'var(--paper)'),
        fontStyle: accent ? 'italic' : 'normal',
      }}>
        {value}
      </div>
      {sub && (
        <div style={{
          marginTop: 6, fontSize: 12, color: 'rgba(244,239,230,0.5)',
        }}>
          {sub}
        </div>
      )}
    </div>
  );
}

window.ROICalculator = ROICalculator;
