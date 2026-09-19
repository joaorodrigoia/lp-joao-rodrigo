function Hero() {
  return <section id="top" className="hero section">
    <div className="wrap hero-grid"><div className="hero-copy">
      <p className="eyebrow">Tráfego pago para negócios de serviços</p>
      <h1>Coloque seu serviço na frente de quem <em>pode virar cliente.</em></h1>
      <p className="hero-description">Gestão de campanhas no Instagram e Facebook, com planejamento, acompanhamento e ajustes feitos por mim. Google Ads quando fizer sentido para sua estratégia.</p>
      <WhatsLink className="btn btn-primary hero-cta">Conversar sobre minhas campanhas <span aria-hidden="true">↗</span></WhatsLink>
      <p className="cta-note">Atendimento direto com João Rodrigo.</p>
      <div className="experience-line"><strong>Quase 2 anos de experiência</strong><span>Atuação nos segmentos médico e de fotografia.</span></div>
    </div><figure className="hero-photo">
      <img src="assets/joao.png" alt="João Rodrigo, gestor de tráfego pago" width="480" height="600" fetchpriority="high" />
      <figcaption><span>João Rodrigo</span><span>Maceió · Atendimento Brasil</span></figcaption>
    </figure></div>
  </section>;
}
window.Hero = Hero;
