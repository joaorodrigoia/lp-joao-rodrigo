function StickyCTA() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const heroButton = document.querySelector('.hero-cta');
    const contact = document.getElementById('contato');
    if (!heroButton || !contact) return;
    let passedHero = false;
    let contactVisible = false;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === heroButton) passedHero = entry.boundingClientRect.bottom < 0;
        if (entry.target === contact) contactVisible = entry.isIntersecting;
      });
      setShow(passedHero && !contactVisible);
    });
    observer.observe(heroButton); observer.observe(contact);
    return () => observer.disconnect();
  }, []);
  return show ? <div className="sticky-cta"><WhatsLink>Conversar sobre meus anúncios <span aria-hidden="true">↗</span></WhatsLink></div> : null;
}
window.StickyCTA = StickyCTA;
