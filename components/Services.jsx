function Services() {
  const items = [
    { title: 'Planejamento', text: 'Definimos o objetivo, o público e a verba das campanhas a partir do seu serviço e do momento do negócio.' },
    { title: 'Gestão dos anúncios', text: 'Configuro e acompanho suas campanhas, com foco em Meta Ads e ajustes de públicos, anúncios e orçamento.' },
    { title: 'Acompanhamento', text: 'Conversamos sobre o desempenho e a qualidade dos contatos para orientar os próximos ajustes.' },
  ];
  return <section id="servicos" className="section"><div className="wrap">
    <p className="eyebrow">O que você contrata</p><h2>Uma gestão próxima, <em>do plano aos ajustes.</em></h2>
    <div className="service-grid">{items.map((item, i) => <article className="service-card" key={item.title}>
      <span className="step-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
    </article>)}</div>
    <p className="service-note">O escopo é combinado antes do início. A verba dos anúncios é separada do valor da gestão.</p>
  </div></section>;
}
window.Services = Services;
