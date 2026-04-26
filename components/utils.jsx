// Shared utilities and constants
const WHATSAPP_NUMBER = '5582981919663';
const WHATSAPP_MSG = 'Olá João, vim pelo site e quero entender mais sobre seus serviços';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const IG_URL = 'https://www.instagram.com/joaorodrigo.ia/';
const IG_HANDLE = '@joaorodrigo.ia';
const LOCATION = 'Maceió/AL · atende todo o Brasil';

// Hook: reveal-on-scroll (bidirectional) using IntersectionObserver
// Adds .in when entering the viewport, removes it when leaving — so the
// animation replays on scroll up and down.
function useReveal(options = {}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = [];
    if (el.classList.contains('reveal') || el.classList.contains('reveal-stagger')) {
      targets.push(el);
    }
    el.querySelectorAll('.reveal, .reveal-stagger').forEach((d) => targets.push(d));

    const setIn = (on) => {
      targets.forEach((t) => t.classList.toggle('in', on));
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setIn(e.isIntersecting));
      },
      { threshold: options.threshold ?? 0.08, rootMargin: options.margin || '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// Hook: scrollY (for parallax)
function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY);
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
}

// Reusable WhatsApp link
function WhatsLink({ children, className = 'btn btn-primary', label }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className} aria-label={label || 'Abrir WhatsApp'}>
      {children}
    </a>
  );
}

// Section wrapper with eyebrow / kicker
function Section({ id, children, style, className = '' }) {
  return (
    <section id={id} className={className} style={{ position: 'relative', ...style }}>
      {children}
    </section>
  );
}

// Currency BRL
function brl(n) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

Object.assign(window, {
  WHATSAPP_URL, IG_URL, IG_HANDLE, LOCATION,
  useReveal, useScrollY, WhatsLink, Section, brl,
});
