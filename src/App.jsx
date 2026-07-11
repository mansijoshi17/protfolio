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
    href: 'https://x.com/imansi_joshi/status/1711228025462034554',
  },
  {
    title: 'Filecoin & IPFS (Billion Reasons to Build)',
    org: 'Push Protocol',
    location: 'Ahmedabad University',
    date: '2023',
    image: ipfsImg,
    imagePos: 'center 65%',
    href: 'https://x.com/imansi_joshi/status/1709039549408829719',
  },
  {
    title: 'Perpetual Storage Workshop with Lighthouse',
    org: 'Lighthouse × Filecoin × Phoenix Guild × CodeCrunch',
    location: 'Gujarat University',
    date: '2023',
    image: gujaratImg,
    href: 'https://x.com/imansi_joshi/status/1629756216963637249',
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

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.7c0-3.84-2.05-5.63-4.78-5.63-2.2 0-3.19 1.21-3.74 2.06V8.25H9V21h3.48v-6.31c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.3Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.26-8.3L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.44 4.05H6.6L17.8 19.84Z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

function ExtensionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v6M9 5h6M5 9h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
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
      <nav className="nav">
        <a href="#home" onClick={(e) => handleNav(e, 'home')} className="nav-logo">
          Mansi Joshi
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

      <section className="hero" id="home">
        <div>
          <p className="eyebrow">Web3 developer · educator · builder</p>
          <p className="lede">
            I’m a full-stack blockchain developer at <strong>CodeCrunch Techlabs</strong> with
            five years in Web3 and two years in Web2. I build products, teach blockchain in
            regional languages, and document the people shaping the ecosystem.
          </p>
          <div className="text-links">
            <a href="https://www.linkedin.com/in/mansi-joshi-657521187/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
            <a href="https://x.com/imansi_joshi" target="_blank" rel="noreferrer" aria-label="Twitter / X" title="Twitter / X"><XIcon /></a>
            <a href="https://github.com/mansijoshi17" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHubIcon /></a>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading"><span>01</span><h2>Selected projects</h2></div>
        <div className="project-list">
          {PROJECTS.map((p, index) => (
            <article className="project" key={p.title}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="project-tech">{p.tech.join(' · ')}</p>
                <div className="project-links">
                  {p.links?.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
                      {link.label === 'Get Extension' ? <ExtensionIcon /> : <ExternalLinkIcon />}
                    </a>
                  ))}
                  <a href={p.href} target="_blank" rel="noreferrer" aria-label="Source code" title="Source code"><GitHubIcon /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading"><span>02</span><h2>Experience &amp; toolkit</h2></div>
        <div className="split">
          <div><h3>CodeCrunch Techlabs</h3>{EXPERIENCE.map((exp) => <div className="line-item" key={exp.role}><strong>{exp.role}</strong><span>{exp.period}</span><small>{exp.location}</small></div>)}</div>
          <div>{SKILLS.map((skill) => <div className="skill-line" key={skill.title}><h3>{skill.title}</h3><p>{skill.tags.join(', ')}</p></div>)}</div>
        </div>
      </section>

      <section className="section" id="community">
        <div className="section-heading"><span>03</span><h2>Education &amp; community</h2></div>
        <p className="section-intro">I make technical learning approachable in regional languages and share stories from builders across the Web3 ecosystem.</p>
        <div className="content-grid">
          <div>
            <h3 className="subheading">Technical content</h3>
            {TECH_CONTENT.map((item) => <a className="content-row" key={item.title} href={item.href} target="_blank" rel="noreferrer" aria-label={`Watch ${item.title}`}><span><strong>{item.title}</strong><small>{item.excerpt}</small></span><span className="action-icon" title="Watch"><PlayIcon /></span></a>)}
          </div>
          <div>
            <h3 className="subheading">Speaking</h3>
            {SPEAKING.map((talk) => (
              <article className="talk" key={talk.title}>
                {talk.href ? (
                  <a className="talk-link" href={talk.href} target="_blank" rel="noreferrer" aria-label={`View ${talk.title} on X`}>
                    <img src={talk.image} alt="" style={talk.imagePos ? { objectPosition: talk.imagePos } : undefined}/>
                    <div><strong>{talk.title}</strong><small>{talk.org}<br/>{talk.location} · {talk.date}</small></div>
                  </a>
                ) : (
                  <>
                    <img src={talk.image} alt="" style={talk.imagePos ? { objectPosition: talk.imagePos } : undefined}/>
                    <div><strong>{talk.title}</strong><small>{talk.org}<br/>{talk.location} · {talk.date}</small></div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
        <h3 className="subheading event-heading">Events &amp; interviews</h3>
        {COMMUNITY_EVENTS.map((event) => <a className="event-row" key={event.title} href={event.href} target="_blank" rel="noreferrer" aria-label={`Watch ${event.title}`}><strong>{event.title}</strong><span>{event.excerpt}</span><span className="action-icon" title="Watch"><PlayIcon /></span></a>)}
      </section>

      <section className="section" id="blog">
        <div className="section-heading"><span>04</span><h2>Writing</h2></div>
        {POSTS.map((post) => <a className="post" key={post.title} href={post.href} target="_blank" rel="noreferrer" aria-label={`Read ${post.title} on X`}><img src={post.image} alt=""/><div><time>{post.date}</time><h3>{post.title}</h3><p>{post.excerpt}</p><span className="action-icon" title="Read on X"><XIcon /></span></div></a>)}
      </section>

      <section className="contact-minimal" id="contact">
        <p className="eyebrow">Have a project or conversation in mind?</p>
        <h2>Let’s build something useful.</h2>
        <a className="email-link action-icon" href="mailto:mansijoshi1777@gmail.com" aria-label="Email Mansi Joshi" title="Email Mansi Joshi"><MailIcon /></a>
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
