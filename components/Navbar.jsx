function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [open]);

  const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' }];


  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all .3s ease',
        background: scrolled ? 'rgba(244, 239, 230, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px) saturate(1.2)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(1.2)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(20,19,15,0.08)' : '1px solid transparent'
      }}>
      
      <nav className="wrap" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? 64 : 76, transition: 'height .3s ease'
      }} aria-label="Navegação principal">
        {/* Logotype */}
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, lineHeight: 1 }}>
          <span className="serif" style={{ fontSize: 24, fontWeight: 400, letterSpacing: '-0.01em', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            João Rodrigo
            <span aria-hidden style={{ color: 'var(--accent)', fontSize: 12, transform: 'translateY(-1px)' }}>◆</span>
            <span className="mono" style={{ letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', fontSize: 13, fontWeight: 500 }}>
              IA
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0
        }} className="hide-mobile">
          {links.map((l) =>
          <li key={l.href}>
              <a href={l.href} style={{
              fontSize: 14, color: 'var(--ink-2)', fontWeight: 500,
              transition: 'color .2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-2)'}>
                {l.label}
              </a>
            </li>
          )}
        </ul>

        <div className="hide-mobile">
          <WhatsLink className="btn btn-primary nav-whats" label="Agendar consultoria gratuita">
            Consultoria gratuita
            <span style={{ fontSize: 12 }}>→</span>
          </WhatsLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="show-mobile"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          style={{
            width: 44, height: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid var(--ink)', borderRadius: 999
          }}>
          
          <span style={{ fontSize: 18 }}>{open ? '×' : '≡'}</span>
        </button>
      </nav>

      {open &&
      <div className="show-mobile" style={{
        background: 'var(--paper)', borderTop: '1px solid rgba(20,19,15,0.1)',
        padding: '20px 28px 28px'
      }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map((l) =>
          <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '14px 0', fontSize: 22,
              fontFamily: 'var(--serif)', borderBottom: '1px solid rgba(20,19,15,0.08)'
            }}>
                  {l.label}
                </a>
              </li>
          )}
          </ul>
          <div style={{ marginTop: 18 }}>
            <WhatsLink className="btn btn-primary" label="Falar no WhatsApp">
              Consultoria gratuita →
            </WhatsLink>
          </div>
        </div>
      }

      <style>{`
        @media (max-width: 880px) { .hide-mobile { display: none !important; } }
        @media (min-width: 881px) { .show-mobile { display: none !important; } }

        .nav-whats {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          animation: navWhatsBreath 2.8s ease-in-out infinite;
        }
        .nav-whats::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 35%,
            rgba(255, 255, 255, 0.28) 50%,
            transparent 65%,
            transparent 100%
          );
          transform: translateX(-120%);
          animation: navWhatsShine 3.2s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }
        .nav-whats > * { position: relative; z-index: 1; }
        .nav-whats:hover { animation-play-state: paused; }

        @keyframes navWhatsBreath {
          0%, 100% { box-shadow: 0 0 0 0 rgba(199, 62, 29, 0); }
          50% { box-shadow: 0 0 0 6px rgba(199, 62, 29, 0.14); }
        }
        @keyframes navWhatsShine {
          0% { transform: translateX(-120%); }
          60%, 100% { transform: translateX(220%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-whats, .nav-whats::before { animation: none; }
        }
      `}</style>
    </header>);

}

window.Navbar = Navbar;