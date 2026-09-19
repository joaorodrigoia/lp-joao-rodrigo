function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { label: 'A gestão', href: '#servicos' }, { label: 'Sobre mim', href: '#sobre' },
    { label: 'Como funciona', href: '#processo' }, { label: 'Dúvidas', href: '#faq' },
  ];
  React.useEffect(() => {
    const close = event => { if (event.key === 'Escape') setOpen(false); };
    const wide = window.matchMedia('(min-width: 881px)');
    const resize = () => { if (wide.matches) setOpen(false); };
    window.addEventListener('keydown', close);
    wide.addEventListener('change', resize);
    return () => { window.removeEventListener('keydown', close); wide.removeEventListener('change', resize); };
  }, []);
  return <header className="site-header">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <nav className="wrap nav-row" aria-label="Navegação principal">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>João Rodrigo <span aria-hidden="true">◆</span></a>
      <div className="desktop-nav">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
      <div className="desktop-nav"><WhatsLink>Vamos conversar ↗</WhatsLink></div>
      <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
        <span aria-hidden="true">{open ? '×' : '≡'}</span>
      </button>
    </nav>
    {open && <nav id="mobile-menu" className="mobile-menu wrap" aria-label="Navegação móvel">
      {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
    </nav>}
  </header>;
}
window.Navbar = Navbar;
