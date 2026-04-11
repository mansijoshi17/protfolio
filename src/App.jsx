import { useEffect, useState } from 'react'
import './App.css'
import speakerImg from './public/assets/speaker.jpeg'
import ipfsImg from './public/assets/ipfs.jpeg'
import gujaratImg from './public/assets/gujarat.jpeg'
import emptyCafeImg from './public/assets/empty-cafe.jpg'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'community', label: 'Community' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

const EXPERIENCE = [
  {
    role: 'Full Stack Blockchain Developer',
    period: 'Jan 2021 - Present',
    location: 'Ahmedabad, Gujarat, India · On-site',
  },
  {
    role: 'Frontend Developer',
    period: 'Jan 2020 - Dec 2020',
    location: 'Ahmedabad, Gujarat, India',
  },
  {
    role: 'Internship Trainee',
    period: 'May 2019 - Dec 2019',
    location: 'Greater Ahmedabad Area',
  },
]

const COMMUNITY_EVENTS = [
  {
    emoji: '🎙️',
    title: 'Solana Builder Stories — Solana Startup Village',
    excerpt:
      "On-the-ground interviews with builders shipping on Solana at Solana Startup Village, what they're building, How they joined web3, Advice they can give it to someone who want to start web3 journey",
    tags: ['Interviews', 'Solana'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6XNMkDfAeBkqLYSZa96lDpz',
  },
  {
    emoji: '🇮🇳',
    title: 'Indian Blockchain Week 2025',
    excerpt:
      "Conversations and highlights from Indian Blockchain Week 2025, founders, builders, and the people shaping India's Web3 scene.",
    tags: ['IBW 2025', 'India Web3'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6UgHPCwICGKJICfvzut-ytY',
  },
]

const TECH_CONTENT = [
  {
    title: 'Blockchain Fundamentals',
    excerpt:
      'The WHY behind blockchain, and how it all fits together. A beginner-friendly starting point in regional language.',
    tags: ['Playlist', 'Blockchain', 'Beginners'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6WmOoJfxVDYBfx-BjlThiJO',
  },
  {
    title: '7 Days of Solidity',
    excerpt:
      '7-day crash course to go from zero to writing and deploying your own Solidity smart contracts.',
    tags: ['Playlist', 'Solidity', 'Smart Contracts'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6WpvjD0xzwQvA9CSS3zLd7S',
  },
  {
    title: 'React JS — Beginners Course',
    excerpt:
      'A complete crash course on React JS for beginners, components, state, hooks, and building real UIs from scratch.',
    tags: ['Playlist', 'React', 'Frontend'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6Wcq7oIxDg_zCH-b67keHJt',
  },
  {
    title: 'Build on Base and Farcaster',
    excerpt:
      'Hands-on series on shipping apps and Frames on Base and Farcaster.',
    tags: ['Playlist', 'Base', 'Farcaster', 'Frames'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6XToqjSFfA3bq-Cwrf3EWAj',
  },
  {
    title: 'X402 — Payment Protocol by Coinbase',
    excerpt:
      'A deep dive into Coinbase\'s X402 payment protocol, what it solves, how it works, and how to integrate it into your app.',
    tags: ['Playlist', 'Coinbase', 'Payments', 'Protocol'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6UYVBr938C9oLv153GOuXVu',
  },
  {
    title: 'Money Streaming with Superfluid Protocol',
    excerpt:
      'Learn how to stream tokens by the second using Superfluid, payroll, subscriptions, and continuous on-chain payments.',
    tags: ['Playlist', 'Superfluid', 'DeFi'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6V7KPmfpirqXrKP5LaN0KgK',
  },
  {
    title: 'Push Protocol',
    excerpt:
      'Add Web3 native notifications to your dApp with Push Protocol, channels, subscribers, and real-time messaging.',
    tags: ['Playlist', 'Push Protocol', 'Notifications'],
    href: 'https://youtube.com/playlist?list=PLk6uZK4Gpq6VHT8PO6JukkCs8Ft7QbjK6',
  },
]

const SPEAKING = [
  {
    title: 'Chainlink SmartCon 2023 Watch Party',
    org: 'Chainlink',
    location: 'Ahmedabad',
    date: '2023',
    image: speakerImg,
  },
  {
    title: 'Filecoin & IPFS (Billion Reasons to Build)',
    org: 'Push Protocol',
    location: 'Ahmedabad University',
    date: '2023',
    image: ipfsImg,
    imagePos: 'center 65%',
  },
  {
    title: 'Perpetual Storage Workshop with Lighthouse',
    org: 'Lighthouse × Filecoin × Phoenix Guild × CodeCrunch',
    location: 'Gujarat University',
    date: '2023',
    image: gujaratImg,
  },
]

const SKILLS = [
  {
    icon: '⛓️',
    title: 'Blockchain',
    tags: [
      'Solidity',
      'Ethers.js',
      'Hardhat',
      'IPFS',
      'Zero Knowledge',
      'Polygon',
      'Ethereum',
      'Solana',
      'Base',
      'Flow',
      'Fantom',
    ],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Material UI'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Supabase'],
  },
]

const PROJECTS = [
  {
    emoji: '📜',
    title: 'Trustified — Truly Certified on Blockchain',
    desc: 'A blockchain-powered certification platform that lets organizations and DAOs issue forgery-proof NFT certificates and badges. Recipients get verifiable, on-chain proof of their achievements that can be checked by anyone, anywhere, no central authority required.',
    tech: ['React', 'Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'Flow'],
    href: 'https://github.com/CodeCrunch-Techlabs/trustified-v4',
    links: [
      { label: 'Visit Site', href: 'https://www.trustified.xyz/' },
    ],
  },
  {
    emoji: '🛡️',
    title: 'ScamBuzzer — Your Shield Against Digital Scams',
    desc: "In the digital era, most people realize they've been scammed only after it happens. ScamBuzzer detects, alerts, and protects you before it's too late.",
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: 'https://github.com/mansijoshi17/scambzzer_aptos',
    links: [
      { label: 'Visit Site', href: 'https://scambzzer-aptos.vercel.app/' },
      {
        label: 'Get Extension',
        href: 'https://chromewebstore.google.com/detail/scambuzzer/gdaphenpldlcgghlekhhbdilgmblcmlh',
      },
    ],
  },
  {
    emoji: '🚀',
    title: 'BlockchainHQ — Home for Blockchain Builders',
    desc: 'A central platform for blockchain developers — bringing together learning resources, job opportunities, and tools to help builders grow in the Web3 space. Built and led end-to-end, from product direction to shipping.',
    tech: ['Web3', 'Next.js', 'React', 'Platform Development', 'Leadership'],
    href: 'https://github.com/blockchain-hq',
    links: [
      { label: 'Visit Site', href: 'https://www.blockchainhq.xyz/' },
    ],
  },
  {
    emoji: '🔐',
    title: 'CrypticVault — Your Decentralized Digital Vault',
    desc: 'CrypticVault is a platform to store your data and give NFT membership-based access to your vault for your near and dear ones.',
    tech: ['Solidity', 'React', 'IPFS', 'Polygon', 'XMTP', 'Filecoin'],
    href: 'https://github.com/mansijoshi17/CrypticVault-live-/tree/1a6147c071583573f621b65efd7fd26fd76c107a',
    links: [
      { label: 'Visit Site', href: 'https://crypticvault.vercel.app/' },
    ],
  },
  {
    emoji: '🪙',
    title: 'CoinTopper × Farcaster — Predictions as Frames',
    desc: "A web app where anyone can spin up a crypto (or anything!) prediction in seconds. Each prediction turns into a Farcaster Frame that opens natively inside Warpcast, so users can vote on the options without ever leaving their feed, turning every cast into an interactive poll.",
    tech: ['Next.js', 'TypeScript', 'Farcaster Frames', 'Warpcast', 'Tailwind CSS'],
    href: 'https://github.com/mansijoshi17/cointopper-farcaster/tree/47dad56b5cc5631abaa9f7ac7e1dabe877f0192e',
    links: [
      { label: 'Visit Site', href: 'https://cointopper-farcaster.vercel.app/' },
    ],
  },
]

const POSTS = [
  {
    title: 'Everyone is building. Nobody is using.',
    date: 'April 8, 2026',
    excerpt:
      'AI can write your code, design your pages, and ship your product in a weekend. But it has never been a confused stranger visiting your site for the first time.',
    href: 'https://x.com/imansi_joshi/status/2041429185340887354',
    tag: 'AI',
    image: emptyCafeImg,
  },
]

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}


export default function App() {
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page">
      {/* Floating Nav */}
      <nav className="nav">
        <a href="#home" onClick={(e) => handleNav(e, 'home')} className="nav-logo">
          <span className="nav-logo-mark">↗</span>
          <span className="nav-logo-text">Mansi Joshi</span>
        </a>
        <div className="nav-links">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => handleNav(e, n.id)}
              className={active === n.id ? 'is-active' : ''}
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-left">
          <h1 className="display">
            Hi, I'm <br />
            Mansi <span className="sparkle">✨</span>
          </h1>
          <p className="lede">
            Web3 developer at <strong>CodeCrunch Techlabs</strong>, building
          &nbsp;<strong>BugBuzzer</strong> and creating
            content in regional language at <strong>BlockchainHQ</strong> YouTube channel.
          </p>
          <div className="cta-row">
            <a className="btn btn-dark" href="#projects" onClick={(e) => handleNav(e, 'projects')}>
              See my work
            </a>
            <a className="btn btn-outline" href="#contact" onClick={(e) => handleNav(e, 'contact')}>
              Say hello
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-frame">
            <div className="photo-deco photo-deco-1">✦</div>
            <div className="photo-deco photo-deco-2">★</div>
            <div className="photo-deco photo-deco-3">✺</div>
            <div className="photo-wrap">
              <img src={speakerImg} alt="Mansi Joshi" />
            </div>
            <div className="photo-badge">
              <span className="photo-badge-dot" /> Available for work
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <h2 className="display-md">About</h2>
        <p className="section-sub">A little bit about me.</p>
        <div className="about-card">
          <p>
            I'm a <strong>Web3 developer with 5 years of experience</strong> shipping
            decentralized apps, plus <strong>2 years in Web2</strong> building
            full-stack applications.
          </p>
          <p>
            I'm a <strong>quick learner</strong>, Whether it's new languages, new chains, new
            frameworks, I'll figure it out. Hackathon enthusiast, multi-chain builder,
            and someone who genuinely believes the best way to learn anything is to
            just start building it.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <h2 className="display-md">Work Experience</h2>
        <p className="section-sub">Where I've worked.</p>
        <div className="experience-list">
          <div className="exp-company-header">
            <h3 className="exp-company">CodeCrunch Techlabs</h3>
            <span className="exp-tenure">Full-time · 7 yrs</span>
          </div>
          <div className="exp-timeline">
            {EXPERIENCE.map((exp, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-dot" />
                <div className="exp-content">
                  <h4 className="exp-role">{exp.role}</h4>
                  <p className="exp-period">{exp.period}</p>
                  <p className="exp-location">{exp.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h2 className="display-md">Skills</h2>
        <p className="section-sub">What I work with.</p>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2 className="display-md">Projects</h2>
        <p className="section-sub">Things I've built.</p>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-top">
                <span className="project-emoji">{p.emoji}</span>
                <a
                  className="project-gh"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} on GitHub`}
                >
                  <GitHubIcon />
                </a>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chip-row">
                {p.tech.map((t) => (
                  <span className="chip chip-sm" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.links && (
                <div className="project-actions">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      className="btn btn-sm btn-dark"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education & Community */}
      <section className="section community-section" id="community">
        <div className="community-label">COMMUNITY</div>
        <h2 className="community-title">Education &amp; Community</h2>

        <div className="community-grid">
          <div className="community-col">
            <h3 className="community-col-title">Technical Content</h3>
            <div className="community-list">
              {TECH_CONTENT.map((item) => (
                <a
                  className="community-card"
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{item.title}</h4>
                  <p>{item.excerpt}</p>
                  <div className="card-bottom-row">
                    <div className="chip-row">
                      {item.tags.map((t) => (
                        <span className="chip chip-sm" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="yt-link-hint">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
                      </svg>
                      Watch
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="community-col">
            <h3 className="community-col-title">Speaking</h3>
            <div className="community-list">
              {SPEAKING.map((talk) => (
                <div className="community-card speaking-card" key={talk.title}>
                  <h4>{talk.title}</h4>
                  <div className="speaking-meta">
                    <div className="speaking-org">{talk.org}</div>
                    <div className="speaking-loc">{talk.location}</div>
                    <div className="speaking-date">{talk.date}</div>
                  </div>
                  {talk.blurb && <p className="speaking-blurb">{talk.blurb}</p>}
                  <div className="speaking-thumb">
                    <img
                      src={talk.image}
                      alt={talk.title}
                      style={talk.imagePos ? { objectPosition: talk.imagePos } : undefined}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Events row */}
        <div className="community-events-row">
          <h3 className="community-col-title">Community Events &amp; Interviews</h3>
          <div className="events-grid">
            {COMMUNITY_EVENTS.map((ev) => (
              <a
                key={ev.title}
                className="event-card"
                href={ev.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="event-emoji">{ev.emoji}</div>
                <div className="event-body">
                  <h4>{ev.title}</h4>
                  <p>{ev.excerpt}</p>
                  <div className="card-bottom-row">
                    <div className="chip-row">
                      {ev.tags.map((t) => (
                        <span className="chip chip-sm" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="yt-link-hint">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
                      </svg>
                      Watch
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section" id="blog">
        <h2 className="display-md">Blog</h2>
        <p className="section-sub">
          Read about my Web3 journey, builds and the things I'm learning.
        </p>
        <div className="blog-list">
          {POSTS.map((post) => (
            <a className="blog-card" key={post.title} href={post.href} target="_blank" rel="noopener noreferrer">
              <div className="blog-thumb">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="blog-thumb-img" />
                ) : (
                  <div className="blog-thumb-inner">
                    <span className="blog-thumb-emoji">📝</span>
                  </div>
                )}
                <span className="blog-thumb-tag">{post.tag}</span>
              </div>
              <div className="blog-meta">
                <h3>{post.title}</h3>
                <div className="blog-date">{post.date}</div>
                <p>{post.excerpt}</p>
                <span className="blog-read">Read on X →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-minimal" id="contact">
        <h2 className="contact-minimal-title">Contact</h2>
        <hr className="contact-divider" />
        <div className="contact-footer-row">
          <p className="contact-copyright">&copy; 2026 Mansi Joshi. All rights reserved.</p>
          <div className="contact-links">
            <a href="mailto:mansijoshi1777@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/mansi-joshi-657521187/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/imansi_joshi" target="_blank" rel="noopener noreferrer">X/Twitter</a>
            <a href="https://github.com/mansijoshi17" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <span className="theme-toggle-knob">
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </span>
      </button>
    </div>
  )
}
