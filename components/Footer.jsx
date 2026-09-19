function Footer() {
  return <footer className="site-footer"><div className="wrap footer-row">
    <div><a href="#top" className="brand">João Rodrigo <span aria-hidden="true">◆</span></a><p>Gestão de tráfego · Maceió/AL · Atendimento Brasil</p></div>
    <a className="instagram-link" href={IG_URL} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
    <small>© {new Date().getFullYear()} João Rodrigo</small>
  </div></footer>;
}
window.Footer = Footer;
