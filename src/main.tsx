import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChevronDown } from 'lucide-react';
import manifest from './manifest.json';
import './style.css';

const appUrl = 'https://paver-ashy.vercel.app';
type Artifact = { size: string; sha256: string };
const artifacts = manifest as Record<string, Artifact>;
const downloads = [
  { platform: 'Windows', file: 'Paver-win-x64.zip', detail: 'Windows 10 or later, x64, portable ZIP' },
  { platform: 'Linux', file: 'Paver-x86_64.AppImage', detail: 'Linux, x86_64 AppImage' },
];
const features = [
  ['Projects and sites', 'Keep project details, milestones, progress and field records together.'],
  ['Materials and purchasing', 'Follow requests, inventory, equipment and supplier records.'],
  ['People and workforce', 'Keep teams, responsibilities and work activity in view.'],
  ['Budgets and records', 'Bring expenses, bills, reports and day-to-day records into the same workspace.'],
];
const faqs = [
  ['What is Paver?', 'A construction operations workspace for projects, sites, materials, purchasing, workforce, budgets and reporting.'],
  ['What does the desktop app do?', 'It is a secure desktop wrapper that opens the hosted Paver web app. It does not include the private application source.'],
  ['Why does Windows show a warning?', 'The desktop builds are unsigned. Windows SmartScreen may show a warning when you launch the downloaded app.'],
  ['Is there a macOS download?', 'Not yet. A macOS build is coming later and requires a Mac to build and sign.'],
  ['Can I use Paver offline?', 'The desktop wrapper has an offline screen with a retry option. The hosted workspace requires an internet connection.'],
];
function App() {
  return <main id="top">
    <header className="nav wrap">
      <a className="brand" href="#top" aria-label="Paver home"><span className="mark">P</span><span>Paver</span></a>
      <nav aria-label="Main navigation"><a href="#features">Features</a><a href="#download">Download</a><a href="https://github.com/MaeenAlganimi/paver" target="_blank" rel="noreferrer">GitHub</a></nav>
      <a className="button primary nav-cta" href="#download">Download</a>
    </header>

    <section className="hero wrap">
      <div className="hero-copy">
        <h1>Keep construction work in view.</h1>
        <p>Paver brings projects, sites, materials, people and budgets into one workspace. It gives teams a shared place to keep the practical details moving.</p>
        <div className="hero-actions"><a className="button primary" href="#download">Download Paver</a><a className="text-link" href={appUrl} target="_blank" rel="noreferrer">Open the web app</a></div>
      </div>
      <ProductPreview />
    </section>

    <section className="section wrap who" aria-labelledby="who-title">
      <div><h2 id="who-title">A workspace for the work around the build.</h2></div>
      <p>Paver is for construction teams coordinating jobs across the office and site. Keep plans, purchasing, workforce updates and costs close enough to make the next decision with context.</p>
    </section>

    <section id="features" className="section features">
      <div className="wrap"><h2>What Paver brings together</h2><dl className="feature-list">{features.map(([name, copy]) => <div key={name}><dt>{name}</dt><dd>{copy}</dd></div>)}</dl></div>
    </section>

    <section className="section wrap how"><h2>How it works</h2><div className="how-copy"><p>Start by organizing the projects, sites and teams you need to coordinate.</p><p>Then keep progress, purchasing and costs current as the work moves forward.</p><p>After that, use the shared view to see what needs attention and make the next call.</p></div></section>

    <section className="section wrap download" id="download">
      <div className="download-intro"><h2>Get Paver for desktop</h2><p>The desktop app securely opens the hosted Paver workspace. Downloads are unsigned and may prompt an operating system warning.</p></div>
      <div className="download-list">
        {downloads.map(({ platform, file, detail }) => <div className="download-row" key={file}>
          <div><h3>{platform}</h3><p>{detail}</p><p className="integrity">{artifacts[file]?.size ?? 'Size unavailable'} <span>SHA256</span> <code>{artifacts[file]?.sha256 ?? 'Unavailable'}</code></p></div>
          <a className="button primary download-button" href={`https://github.com/MaeenAlganimi/paver/releases/latest/download/${file}`}>Download</a>
        </div>)}
        <div className="download-row coming"><div><h3>macOS</h3><p>Coming later. A Mac build is required</p></div><span>Coming later</span></div>
      </div>
      <p className="download-note">Windows is distributed as a portable ZIP, not an installer. SmartScreen may warn because the app is unsigned.</p>
    </section>

    <section className="section faq"><div className="wrap faq-layout"><h2>Questions</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={17} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="mark">P</span><span>Paver</span></a><p>Public product site and secure desktop wrapper.</p><a href="https://github.com/MaeenAlganimi/paver" target="_blank" rel="noreferrer">GitHub</a><small>Built with AI assistance. The hosted application is maintained separately.</small></footer>
  </main>;
}

function ProductPreview() {
  return <div className="product-frame" aria-label="Illustrative Paver interface preview">
    <div className="frame-head"><span className="mark">P</span><strong>Paver</strong><span>Sample workspace</span></div>
    <div className="frame-body"><aside><b>Workspace</b><span>Overview</span><span>Projects</span><span>Sites</span><span>Materials</span><span>Purchasing</span><span>Workforce</span></aside>
      <div className="preview-content"><p className="preview-label">WORKSPACE / OVERVIEW</p><h3>Project overview</h3><p>Illustrative interface, fictional sample content</p>
        <div className="preview-lines"><div><b>North Yard</b><span>Project, in progress</span></div><div><b>Delivery window</b><span>Materials, ready to review</span></div><div><b>Site allocation</b><span>Budget, tracking</span></div></div>
      </div>
    </div>
  </div>;
}

createRoot(document.getElementById('root')!).render(<App />);
