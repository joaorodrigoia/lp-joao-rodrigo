function Process() {
  const steps = [
    { title: 'Entender seu negócio', text: 'Você me conta o que vende, quem quer alcançar e como estão seus anúncios hoje.' },
    { title: 'Definir a proposta', text: 'Alinhamos o escopo, o valor da gestão e a verba disponível para anunciar.' },
    { title: 'Começar e acompanhar', text: 'Com tudo combinado, organizo as campanhas e acompanhamos o desempenho para fazer os ajustes.' },
  ];
  return <section id="processo" className="section"><div className="wrap">
    <p className="eyebrow">Como começamos</p><h2>O primeiro passo é <em>uma conversa.</em></h2>
    <ol className="process-list">{steps.map((step, i) => <li key={step.title}>
      <span className="step-number" aria-hidden="true">0{i + 1}</span>
      <div><h3>{step.title}</h3><p>{step.text}</p></div>
    </li>)}</ol>
  </div></section>;
}
window.Process = Process;
