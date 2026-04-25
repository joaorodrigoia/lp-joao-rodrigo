function StickyCTA() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="show-mobile-sticky" style={{
      position: 'fixed', bottom: 16, left: 16, right: 16,
      zIndex: 80,
    }}>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
         className="btn btn-primary" style={{
           width: '100%', justifyContent: 'center',
           padding: '16px 22px', fontSize: 15.5,
         }}>
        <span style={{
          display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
          background: '#5fdd6e',
        }} />
        Falar no WhatsApp
        <span aria-hidden>→</span>
      </a>
      <style>{`
        @media (min-width: 881px) { .show-mobile-sticky { display: none; } }
      `}</style>
    </div>
  );
}
window.StickyCTA = StickyCTA;
