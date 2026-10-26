import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Aperture, Clapperboard, Film, Menu, Play, X } from 'lucide-react'
import christyImage from "./images/CHRISTY.png";
import coverOne from "./images/1NEW.png";
import coverTwo from "./images/2NEW.png";
import coverThree from "./images/3NEW.png";
import coverFour from "./images/4NEW.png";
import coverFive from "./images/5NEW.png";
import coverSeven from "./images/7NEW.png";
import videoOne from "./videos/1.mp4";
import videoTwo from "./videos/2.mp4";
import videoThree from "./videos/3.mp4";
import videoFour from "./videos/4.mp4";
import videoFive from "./videos/5.mp4";
// import videoSix from "./videos/6.mp4";
import videoSeven from "./videos/7.mp4";
// import videoEight from "./videos/8.mp4";
// import videoNine from "./videos/9.mp4";

type Project = {
  title: string
  category: string
  year: string
  image: string
  description: string
  videoUrl: string
}

const projects: Project[] = [
  {
    title: 'Creatine Kidney Damage',
    category: 'Information',
    year: '2026',
    image: coverFive,
    description: 'Creatine supplementation at recommended doses does not cause kidney damage in healthy individuals, though it can harmlessly elevate blood creatinine levels and cause misleading lab results that mimic kidney issues.',
    videoUrl: videoFive,
  },
  {
    title: 'Body Weight and Hormonal chanegs',
    category: 'Information',
    year: '2026',
    image: coverSeven,
    description: 'Increasing body weight can sometimes be associated with hormonal changes, as hormones influence metabolism, appetite, and how the body stores fat.',
    videoUrl: videoSeven,
  },
  {
    title: 'Engagement',
    category: 'Celebration',
    year: '2025',
    image: coverTwo ,
    description: 'Engagement, weight gain, and hormonal changes can all be part of a new phase of life, bringing changes to both the body and emotions.',
    videoUrl: videoTwo ,
  },
  {
    title: 'Engagement Fixation',
    category: 'Celebration',
    year: '2024',
    image: coverThree ,
    description: 'Engagement fixation can bring intense excitement and emotional attachment, sometimes accompanied by stress-related changes in appetite, weight, and hormones.',
    videoUrl:  videoThree ,
  },
  {
    title: 'Architectural Frame',
    category: 'Interior',
    year: '2024',
    image:  coverOne ,
    description: 'An architectural frame captures the beauty of structure, symmetry, and design, turning a building into a timeless visual story.',
    videoUrl: videoOne,
  },
  {
    title: 'Love at first sight',
    category: 'Love',
    year: '2023',
    image: coverFour,
    description: 'Love at first sight is when two eyes meet, and the heart feels a connection that words cannot explain.',
    videoUrl: videoFour ,
  },
]

const tools = [
  { name: 'Adobe Premiere Pro', type: 'Professional editing', level: 'EDIT' },
  { name: 'CapCut', type: 'Short-form & social video', level: 'CREATE' },
  { name: 'DaVinci Resolve', type: 'Colour grading & finishing', level: 'COLOUR' },
  { name: 'Adobe After Effects', type: 'Motion graphics & titles', level: 'MOTION' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [introVisible, setIntroVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIntroVisible(false), 1500)
    return () => window.clearTimeout(timeout)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className={introVisible ? 'portfolio portfolio-intro' : 'portfolio portfolio-ready'}>
      {introVisible && <div className="cinematic-intro" aria-hidden="true">
        <span className="intro-mark"><Aperture size={34} /></span>
        <span className="intro-word">ZacFrames<span>.</span></span><span className="intro-caption">EVERY FRAME TELLS A STORY</span><span className="intro-progress"><i /></span></div>}
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Frame home">
          <span className="brand-mark"><Aperture size={19} strokeWidth={1.7} /></span>
          <span>ZacFrames<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About me</a>
          <a href="#tools" onClick={closeMenu}>Tools</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-reveal reveal-1"><span className="live-dot" /> VIDEOGRAPHER&nbsp; / &nbsp;VIDEO EDITOR</p>
          <h1 className="hero-reveal reveal-2">Stories in<br /><span>every frame.</span></h1>
          <p className="hero-copy hero-reveal reveal-3">I capture the feeling, find the rhythm, and shape raw moments into films that stay with you.</p>
          <div className="hero-actions hero-reveal reveal-4">
            <a className="button button-light" href="#work">Explore my work <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#about">Get to know me <ArrowRight size={16} /></a>
          </div>
        </div>
        <aside className="hero-portrait hero-reveal reveal-3">
          <div className="portrait-frame">
           <img
    src={christyImage}
    alt="Christy — portrait"
  />
            <span className="portrait-corner portrait-corner-tl" /><span className="portrait-corner portrait-corner-br" />
            <span className="portrait-index">ME THE CREATIVE</span>
          </div>
          <div className="portrait-caption"><span className="portrait-caption-dot" /><div><strong>CHRISTY SAINT</strong><small>VIDEOGRAPHER · EDITOR</small></div><Aperture size={22} /></div>
        </aside>
        <div className="hero-bottom">
          <span>INDEPENDENT CREATIVE / AVAILABLE FOR PROJECTS</span>
          <span className="scroll-label">SCROLL TO EXPLORE <span className="scroll-line" /></span>
        </div>
        <div className="hero-index">01 — 03</div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-kicker"><span>01</span><span className="kicker-line" /> ABOUT ME</div>
        <div className="about-grid">
          <div>
            <h2>I make videos<br />feel <em>like something.</em></h2>
          </div>
          <div className="about-copy">
            <p className="lead">Hey, I’m <strong>Christy Saint</strong> — a videographer and editor drawn to real moments, bold visuals and stories with a pulse.</p>
            <p>From the first idea to the final colour grade, I love every part of the creative process. I work across events, weddings, travel and short-form content, bringing a creative eye and attention to detail to every project.</p>
            <a href="#contact" className="inline-link">Have a project in mind? <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat"><span className="stat-number">01</span><span className="stat-label">One frame at a time</span></div>
          <div className="stat"><span className="stat-number">∞</span><span className="stat-label">Ideas to explore</span></div>
          <div className="stat"><span className="stat-number">100%</span><span className="stat-label">Care in every cut</span></div>
        </div>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-wrap">
          <div className="section-kicker section-kicker-light"><span>02</span><span className="kicker-line" /> MY TOOLKIT</div>
          <div className="tools-heading">
            <h2>Crafted with<br /><em>the right tools.</em></h2>
            <p>Good stories come first. These are the tools I use to bring each idea to life, from the first cut to the final frame.</p>
          </div>
          <div className="tool-list">
            {tools.map((tool, index) => (
              <div className="tool-row" key={tool.name}>
                <span className="tool-number">0{index + 1}</span>
                <div className="tool-icon">{index === 0 ? <Film /> : index === 1 ? <Play /> : index === 2 ? <Aperture /> : <Clapperboard />}</div>
                <div className="tool-name-wrap"><h3>{tool.name}</h3><p>{tool.type}</p></div>
                <span className="tool-tag">{tool.level}</span>
                <ArrowUpRight className="tool-arrow" size={20} />
              </div>
            ))}
          </div>
          <p className="tools-note">MY WORKFLOW ALSO INCLUDES STORYBOARDING, SOUND DESIGN, COLOUR CORRECTION & EXPORT OPTIMISATION.</p>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-kicker"><span>03</span><span className="kicker-line" /> SELECTED WORK</div>
        <div className="work-heading">
          <h2>A few things<br /><em>I’ve brought to life.</em></h2>
          <p>A selection of visual stories, each with its own mood, movement and point of view.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <button className={`project-card project-${index + 1}`} key={project.title} onClick={() => setActiveProject(project)}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="project-play"><Play size={18} fill="currentColor" /></span>
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-meta">
                <div><h3>{project.title}</h3><p>{project.category}</p></div>
                <span>{project.year} <ArrowUpRight size={16} /></span>
              </div>
            </button>
          ))}
        </div>
        <p className="work-disclaimer">DEMO PORTFOLIO — REPLACE THESE SAMPLE PROJECTS WITH YOUR OWN VIDEOS AND PHOTOGRAPHY.</p>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-bg" />
        <div className="contact-content section-wrap">
          <div className="section-kicker section-kicker-light"><span>04</span><span className="kicker-line" /> YOUR NEXT PROJECT</div>
          <h2>Have a story<br />to <em>tell?</em></h2>
          <p>Let’s make something worth watching.</p>
          <a className="button button-light" href="mailto:christysaint1616@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
        </div>
        <footer className="footer section-wrap">
          <a className="brand footer-brand" href="#home"><span className="brand-mark"><Aperture size={18} /></span><span>FRAME<span className="brand-dot">.</span></span></a>
          <span>© {new Date().getFullYear()} [YOUR NAME] — MADE WITH INTENTION.</span>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </footer>
      </section>

      {activeProject && (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={22} /></button>
            <div className="modal-video-wrap">
              <video key={activeProject.videoUrl} className="modal-video" src={activeProject.videoUrl} poster={activeProject.image} controls autoPlay playsInline preload="metadata">
                Your browser does not support HTML video. Please try a modern browser.
              </video>
            </div>
            <div className="modal-copy">
              <span className="eyebrow">{activeProject.category} / {activeProject.year}</span>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              {/* <p className="modal-hint">Sample demo video. To showcase your own work, replace this project’s videoUrl in src/App.tsx with your MP4 video URL.</p> */}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
