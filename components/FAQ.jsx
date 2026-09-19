function FAQ() {
  const items = [
    { q: 'Quanto custa a gestão e quanto preciso investir em anúncios?', a: 'O valor da gestão depende do escopo. A verba dos anúncios é paga separadamente às plataformas. Na conversa inicial, alinhamos os objetivos e o orçamento disponível antes de montar a proposta.' },
    { q: 'Preciso ter site ou já estar anunciando?', a: 'Não é obrigatório. Podemos avaliar campanhas direcionadas ao WhatsApp ou a uma página, conforme o serviço e o objetivo. Se você já anuncia, o ponto de partida é entender o que está sendo feito.' },
    { q: 'Em quanto tempo posso avaliar os resultados?', a: 'As campanhas precisam de acompanhamento e testes. O desempenho depende da oferta, da verba, do público e do atendimento aos contatos. Combinamos como avaliar a evolução, sem prometer um número de vendas ou um prazo fixo de retorno.' },
  ];
  return <section id="faq" className="section faq-section"><div className="wrap contact-grid">
    <div><p className="eyebrow">Antes de começar</p><h2>Dúvidas <em>frequentes.</em></h2>
      <div className="faq-list">{items.map(item => <details key={item.q}>
        <summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p>
      </details>)}</div>
    </div><FinalCTA />
  </div></section>;
}
window.FAQ = FAQ;
