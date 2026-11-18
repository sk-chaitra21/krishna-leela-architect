import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X, MapPin, MoveUpRight, Leaf, House, PanelsTopLeft, Trees, Compass, DraftingCompass, Sun, Users, Layers3, Phone, Mail, Instagram } from 'lucide-react'
import logo from './assets/brand-logo.jpg'

const navItems = [
  ['About', 'about'], ['Philosophy', 'philosophy'], ['Services', 'services'], ['Process', 'process'], ['Contact', 'contact'],
]

const services = [
  { number: '01', title: 'Architectural Design', detail: 'Site analysis, consultation, concept development, space planning, plans, elevations, sections, 3D development and material studies.', icon: House },
  { number: '02', title: 'Residential Design', detail: 'Individual residences, villas, weekend homes, urban houses, family residences and renovation projects.', icon: PanelsTopLeft },
  { number: '03', title: 'Interior Design', detail: 'Space planning, furniture layouts, material selection, colour schemes, ceiling design, lighting coordination and built-in furniture.', icon: Layers3 },
  { number: '04', title: 'Landscape Design', detail: 'Gardens, courtyards, terraces, entry areas, outdoor seating and private green spaces.', icon: Trees },
  { number: '05', title: 'Design Development', detail: 'Detailed planning, elevations, sections, material development and coordination with structural and services consultants.', icon: DraftingCompass },
  { number: '06', title: 'Consultancy & Coordination', detail: 'Coordination among client, architect, structural consultant, MEP consultants and contractor.', icon: Compass },
]

const principles = [
  { title: 'Human-centred', text: 'Comfort, movement, privacy, accessibility and lifestyle form the foundation of each design.', icon: Users },
  { title: 'Contextual', text: 'Every response begins by understanding the site and its surroundings, culture and character.', icon: Compass },
  { title: 'Climate-responsive', text: 'Orientation, natural ventilation, daylight, shading, landscape and appropriate materials are considered.', icon: Sun },
  { title: 'Connection to nature', text: 'Courtyards, gardens, natural light, views and indoor–outdoor transitions are integrated where appropriate.', icon: Leaf },
]

const steps = [
  ['01', 'Listen', 'Understand client requirements, lifestyle, aspirations and concerns.'],
  ['02', 'Analyse', 'Study site, climate, context, regulations and project constraints.'],
  ['03', 'Design', 'Develop concepts responding to client requirements and architectural considerations.'],
  ['04', 'Develop', 'Transform the selected concept into coordinated drawings and detailed design.'],
  ['05', 'Deliver', 'Provide the agreed documentation and professional services required for execution.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="site-shell">
      <div className="announcement"><span>BASED IN BENGALURU, INDIA</span><span>ARCHITECTURE · INTERIORS · LANDSCAPE</span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Krishna Leela Architects home" onClick={closeMenu}>
          <img src={logo} alt="Krishna Leela Architects arch and leaf logo" />
          <span className="brand-name">KRISHNA LEELA <small>ARCHITECTS</small></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A THOUGHTFUL DESIGN PRACTICE</p>
            <h1>Spaces shaped<br />around <em>life.</em></h1>
            <p className="hero-description">We create meaningful places where people, architecture and nature coexist — with sensitivity to context, climate and everyday life.</p>
            <div className="hero-actions"><a className="button button-dark" href="#about">Discover our approach <ArrowUpRight size={16} /></a><a className="text-link" href="#services">Explore services <ArrowDown size={15} /></a></div>
            <div className="hero-index"><span>01 / 05</span><span>PEOPLE · PLACES · POSSIBILITIES</span></div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88" alt="Warm, naturally lit contemporary interior with timber and natural materials" />
            <div className="image-note"><span>01</span><span>LIGHT · MATERIAL · SPACE</span></div>
            <div className="hero-stamp"><span>DESIGNING</span><strong>with<br />intention</strong><span>EST. IN BENGALURU</span></div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-rule" /><span>01 — 05</span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker"><span>01</span><span>THE PRACTICE</span></div>
          <div className="intro-content">
            <p className="eyebrow">KRISHNA LEELA ARCHITECTS</p>
            <h2>Architecture that<br /> <em>belongs to its place.</em></h2>
            <div className="intro-lower">
              <p className="intro-lead">A Bengaluru-based architectural practice led by <strong>Ar. K N Sahitya</strong>, creating thoughtful and contextual spaces that respond to people, place and the environment.</p>
              <div className="intro-body"><p>We believe in architecture that is rooted, sensitive and timeless — spaces that unfold like a story, respecting the land, its people and their way of life.</p><p>Through an integrated approach to architecture, interiors and landscape, we aim to create simple, functional and meaningful spaces.</p><a className="underlined-link" href="#philosophy">Our design philosophy <MoveUpRight size={15} /></a></div>
            </div>
          </div>
          <div className="intro-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" alt="Minimal architecture with a calm material palette and garden connection" /><span>BUILT FORM, IN DIALOGUE WITH NATURE</span></div>
        </section>

        <section className="philosophy section-pad" id="philosophy">
          <div className="section-kicker light"><span>02</span><span>DESIGN PHILOSOPHY</span></div>
          <div className="philosophy-heading"><p className="eyebrow light-text">OUR POINT OF VIEW</p><h2>Understand first.<br /><em>Design with purpose.</em></h2><p className="philosophy-desc">Rather than beginning with a predetermined style, we begin by understanding the client, site, climate, culture, function and project constraints.</p></div>
          <div className="principle-grid">{principles.map(({ title, text, icon: Icon }, i) => <article className="principle" key={title}><div className="principle-top"><span>0{i + 1}</span><Icon size={21} strokeWidth={1.3} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="philosophy-foot"><span>CONTEXT FIRST</span><span>PEOPLE AT THE CENTRE</span><span>IN HARMONY WITH NATURE</span></div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-kicker"><span>03</span><span>WHAT WE DO</span></div>
          <div className="section-heading-row"><div><p className="eyebrow">SERVICES</p><h2>Considered at<br /><em>every scale.</em></h2></div><p className="section-side-copy">From the first reading of a site to the details that shape daily experience, our services bring the parts of a place into conversation.</p></div>
          <div className="service-list">{services.map(({ number, title, detail, icon: Icon }) => <article className="service-item" key={number}><span className="service-number">{number}</span><div className="service-icon"><Icon size={24} strokeWidth={1.25} /></div><h3>{title}</h3><p>{detail}</p><span className="service-arrow"><ArrowUpRight size={19} /></span></article>)}</div>
          <div className="services-image-row"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" alt="Minimal residential interior with natural finishes" /><div><span className="eyebrow">A CONNECTED PRACTICE</span><p>Architecture, interiors and landscape are considered as parts of one experience — not separate layers.</p><span className="small-caption">FORM · FUNCTION · FEELING</span></div><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Contemporary home with indoor outdoor connection" /></div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-kicker"><span>04</span><span>HOW WE WORK</span></div>
          <div className="section-heading-row process-heading"><div><p className="eyebrow">A CLEAR, COLLABORATIVE JOURNEY</p><h2>From listening<br />to <em>making.</em></h2></div><p className="section-side-copy">Each project follows a considered process, shaped by dialogue, careful study and clarity of intent.</p></div>
          <div className="process-list">{steps.map(([number, title, text]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={17} /></article>)}</div>
          <div className="process-quote"><span className="quote-mark">“</span><p>Creating spaces where people, architecture and nature coexist.</p><span>THE LIVING THRESHOLD · OUR LOGO CONCEPT</span></div>
        </section>

        <section className="closing-image"><img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=88" alt="Quiet architectural courtyard with natural light and greenery" /><div className="closing-overlay"><span>PEOPLE · PLACES · POSSIBILITIES</span><p>Thoughtful spaces.<br /><em>Lasting meaning.</em></p></div></section>

        <section className="contact section-pad" id="contact">
          <div className="section-kicker"><span>05</span><span>GET IN TOUCH</span></div>
          <div className="contact-grid"><div className="contact-copy"><p className="eyebrow">LET'S BEGIN WITH A CONVERSATION</p><h2>Have a place<br />in <em>mind?</em></h2><p>Tell us a little about what you're imagining. We would be glad to hear about your project and the possibilities it holds.</p><div className="contact-detail"><MapPin size={18} /><div><strong>Studio location</strong><span>Bengaluru, Karnataka, India</span></div></div><div className="contact-detail"><Compass size={18} /><div><strong>Principal Architect</strong><span>Ar. K N Sahitya</span></div></div><a className="contact-detail contact-link" href="tel:+919019289883"><Phone size={18} /><div><strong>Call / WhatsApp</strong><span>+91 90192 89883</span></div></a><a className="contact-detail contact-link" href="mailto:knsahityanaik2304@gmail.com"><Mail size={18} /><div><strong>Email</strong><span>knsahityanaik2304@gmail.com</span></div></a><a className="contact-detail contact-link" href="https://www.instagram.com/kn_sahitya24/" target="_blank" rel="noreferrer"><Instagram size={18} /><div><strong>Instagram</strong><span>@kn_sahitya24</span></div></a></div>
            <form className="contact-form" onSubmit={handleSubmit}><label>Your name<input name="name" placeholder="How should we address you?" required /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label><label>What are you thinking about?<select name="project" defaultValue=""><option value="" disabled>Select a project type</option><option>Residential design</option><option>Interior design</option><option>Landscape design</option><option>Institutional / commercial</option><option>Other / not sure yet</option></select></label><label>A few words about your project<textarea name="message" rows={3} placeholder="A little about the place, your ideas and what you need…" required /></label><button className="button button-dark form-button" type="submit">Send enquiry <ArrowUpRight size={16} /></button>{sent && <p className="form-note" role="status">Thank you for sharing your enquiry. This is a website demo form; no message has been sent to the studio yet.</p>}</form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="footer-main"><a className="footer-brand" href="#home"><img src={logo} alt="" /><span>KRISHNA LEELA <small>ARCHITECTS</small></span></a><p>People · Places · Possibilities</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KRISHNA LEELA ARCHITECTS</span><span>ARCHITECTURE · INTERIORS · LANDSCAPE</span><span> BENGALURU, INDIA</span></div></footer>
    </div>
  )
}

export default App
