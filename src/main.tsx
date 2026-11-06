import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ChevronDown } from 'lucide-react';
import manifest from './manifest.json';
import './style.css';

type Language = 'en' | 'ar';
type Artifact = { size: string; sha256: string };
const appUrl = 'https://paver-ashy.vercel.app';
const artifacts = manifest as Record<string, Artifact>;
const downloads = [
  { platform: 'Windows', file: 'Paver-Setup-x64.exe', detail: { en: 'Windows 10 or later, x64, setup installer', ar: 'مثبّت لنظام Windows 10 أو أحدث بمعمارية x64' } },
  { platform: 'Linux', file: 'Paver-x86_64.AppImage', detail: { en: 'Linux, x86_64 AppImage', ar: 'AppImage لنظام Linux بمعمارية x86_64' } },
];
const copy = {
  en: {
    nav: 'Main navigation', featuresNav: 'Features', downloadNav: 'Download', home: 'Paver home', switchLanguage: 'Switch language to Arabic',
    heroTitle: 'Keep construction work in view.', heroBody: 'Paver brings projects, sites, materials, people and budgets into one workspace. It gives teams a shared place to keep the practical details moving.', downloadPaver: 'Download Paver', webApp: 'Open the web app',
    whoTitle: 'A workspace for the work around the build.', whoBody: 'Paver is for construction teams coordinating jobs across the office and site. Keep plans, purchasing, workforce updates and costs close enough to make the next decision with context.',
    featuresTitle: 'What Paver brings together', features: [['Projects and sites', 'Keep project details, milestones, progress and field records together.'], ['Materials and purchasing', 'Follow requests, inventory, equipment and supplier records.'], ['People and workforce', 'Keep teams, responsibilities and work activity in view.'], ['Budgets and records', 'Bring expenses, bills, reports and day-to-day records into the same workspace.']],
    how: 'How it works', steps: ['Start by organizing the projects, sites and teams you need to coordinate.', 'Then keep progress, purchasing and costs current as the work moves forward.', 'After that, use the shared view to see what needs attention and make the next call.'],
    screensTitle: 'A closer look at Paver', actualScreens: 'Actual product screens from the Paver workspace.', screens: [['Projects and progress', 'Paver workspace showing construction projects and their progress'], ['Project finance', 'Paver workspace showing project finance and costs'], ['Materials and inventory', 'Paver workspace showing materials and inventory']],
    videoTitle: 'See how it works', videoBody: 'A prerecorded walkthrough of the Paver workspace, with synthetic narration.', videoFallback: 'Your browser does not support HTML video.', videoLink: 'Open the video directly',
    downloadTitle: 'Get Paver for desktop', downloadBody: 'The desktop app securely opens the hosted Paver workspace. Downloads are unsigned and may prompt an operating system warning.', download: 'Download', coming: 'Coming later', macDetail: 'A Mac build is required.', note: 'Windows is a one-click setup .exe that installs for your user and adds Start Menu and desktop shortcuts. Builds are not code-signed, so SmartScreen may warn. Choose More info → Run anyway. Button labels may differ with your Windows language.',
    questions: 'Questions', faqs: [['What is Paver?', 'A construction operations workspace for projects, sites, materials, purchasing, workforce, budgets and reporting.'], ['What does the desktop app do?', 'It is a secure desktop wrapper that opens the hosted Paver web app. It does not include the private application source.'], ['Why does Windows show a warning?', 'The desktop builds are unsigned. Windows SmartScreen may show a warning when you run the installer.'], ['Is there a macOS download?', 'Not yet. A macOS build is coming later and requires a Mac to build and sign.'], ['Can I use Paver offline?', 'The desktop wrapper has an offline screen with a retry option. The hosted workspace requires an internet connection.']],
    footer: 'Construction operations workspace.', footerNote: 'Built with AI assistance. The hosted application is maintained separately.', frame: 'The Paver workspace', language: 'العربية'
  },
  ar: {
    nav: 'التنقل الرئيسي', featuresNav: 'المزايا', downloadNav: 'التنزيل', home: 'الصفحة الرئيسية لبيفر', switchLanguage: 'غيّر اللغة إلى الإنجليزية',
    heroTitle: 'تابع أعمال الإنشاءات من مكان واحد.', heroBody: 'يجمع بيفر المشاريع والمواقع والمواد والفرق والميزانيات في مساحة عمل واحدة، لتتمكن الفرق من متابعة تفاصيل العمل اليومي.', downloadPaver: 'نزّل بيفر', webApp: 'افتح تطبيق الويب',
    whoTitle: 'مساحة عمل لكل ما يتطلبه تنفيذ المشروع.', whoBody: 'صُمم بيفر لفرق الإنشاءات التي تنسق العمل بين المكتب والموقع. اجمع الخطط والمشتريات وتحديثات القوى العاملة والتكاليف، لتتخذ قراراتك ومعك الصورة كاملة.',
    featuresTitle: 'كل ما يحتاجه العمل في مكان واحد', features: [['المشاريع والمواقع', 'اجمع تفاصيل المشاريع ومراحلها ونسبة تقدمها وسجلات الموقع.'], ['المواد والمشتريات', 'تابع الطلبات والمخزون والمعدات وسجلات الموردين.'], ['الأفراد والقوى العاملة', 'تابع الفرق والمسؤوليات وأنشطة العمل.'], ['الميزانيات والسجلات', 'اجمع المصروفات والفواتير والتقارير وسجلات العمل اليومية في مساحة واحدة.']],
    how: 'كيف يعمل', steps: ['ابدأ بتنظيم المشاريع والمواقع والفرق التي تحتاج إلى تنسيقها.', 'حدّث تقدم العمل والمشتريات والتكاليف مع سير المشروع.', 'ثم استخدم العرض المشترك لمعرفة ما يحتاج إلى متابعة وتحديد الخطوة التالية.'],
    screensTitle: 'ألقِ نظرة على بيفر', actualScreens: 'لقطات فعلية من مساحة عمل بيفر.', screens: [['المشاريع والتقدم', 'مساحة عمل بيفر تعرض مشاريع الإنشاءات وتقدمها'], ['التمويل والتكاليف', 'مساحة عمل بيفر تعرض تمويل المشاريع وتكاليفها'], ['المواد والمخزون', 'مساحة عمل بيفر تعرض المواد والمخزون']],
    videoTitle: 'شاهد طريقة العمل', videoBody: 'جولة مسجلة مسبقًا في مساحة عمل بيفر، بتعليق صوتي مولّد اصطناعيًا.', videoFallback: 'متصفحك لا يدعم تشغيل الفيديو.', videoLink: 'افتح الفيديو مباشرة',
    downloadTitle: 'نزّل بيفر لسطح المكتب', downloadBody: 'يفتح تطبيق سطح المكتب مساحة عمل بيفر المستضافة بأمان. الملفات غير موقعة رقميًا، وقد يعرض نظام التشغيل تحذيرًا.', download: 'تنزيل', coming: 'قريبًا', macDetail: 'يتطلب إصدار macOS إعداد نسخة على جهاز Mac.', note: 'ملف Windows هو مثبّت سريع (.exe) يثبّت التطبيق لحسابك ويضيف اختصارات إلى قائمة Start وسطح المكتب. التطبيقات غير موقّعة رقميًا، لذلك قد يعرض SmartScreen تحذيرًا. اختر More info ثم Run anyway. قد تختلف أسماء الأزرار حسب لغة Windows.',
    questions: 'الأسئلة الشائعة', faqs: [['ما هو بيفر؟', 'مساحة عمل لإدارة عمليات الإنشاءات، تشمل المشاريع والمواقع والمواد والمشتريات والقوى العاملة والميزانيات والتقارير.'], ['ما وظيفة تطبيق سطح المكتب؟', 'إنه غلاف آمن يفتح تطبيق بيفر المستضاف، ولا يتضمن الشيفرة المصدرية للتطبيق الخاص.'], ['لماذا يعرض Windows تحذيرًا؟', 'إصدارات سطح المكتب غير موقّعة، لذلك قد يعرض Windows SmartScreen تحذيرًا عند تشغيل المثبّت.'], ['هل يتوفر تنزيل لنظام macOS؟', 'ليس بعد. سيصدر إصدار macOS لاحقًا، ويتطلب جهاز Mac لإعداده وتوقيعه.'], ['هل يعمل بيفر دون اتصال؟', 'يعرض غلاف سطح المكتب شاشة انقطاع مع خيار إعادة المحاولة. أما مساحة العمل المستضافة فتتطلب اتصالًا بالإنترنت.']],
    footer: 'مساحة عمل لإدارة عمليات الإنشاءات.', footerNote: 'أُعد بمساعدة الذكاء الاصطناعي. ويُطوّر التطبيق المستضاف بشكل منفصل.', frame: 'مساحة عمل بيفر', language: 'English'
  }
} as const;
function getInitialLanguage(): Language {
  try { const saved = localStorage.getItem('site-language'); if (saved === 'en' || saved === 'ar') return saved; } catch { /* Storage may be disabled. */ }
  return navigator.language.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}
function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = copy[language];
  useEffect(() => {
    const rtl = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.title = rtl ? 'بيفر — مساحة عمل لإدارة الإنشاءات' : 'Paver — Construction workspace';
    document.querySelector('meta[name="description"]')?.setAttribute('content', rtl ? 'يجمع بيفر المشاريع والمواقع والمواد والمشتريات والقوى العاملة والميزانيات في مساحة عمل واحدة.' : 'Paver brings construction projects, sites, materials, purchasing, workforce and budgets into one clear workspace.');
    try { localStorage.setItem('site-language', language); } catch { /* Storage may be disabled. */ }
  }, [language]);
  const videoBase = language === 'ar' ? '/demo/paver-explainer-ar' : '/demo/paver-explainer';
  return <main id="top">
    <header className="nav wrap"><a className="brand" href="#top" aria-label={t.home}><span className="mark">P</span><span>{language === 'en' ? 'Paver' : 'بيفر'}</span></a><nav aria-label={t.nav}><a href="#features">{t.featuresNav}</a><a href="#download">{t.downloadNav}</a><a href="https://github.com/MaeenAlganimi/paver" target="_blank" rel="noreferrer">GitHub</a></nav><div className="nav-actions"><button className="language-toggle" type="button" onClick={() => setLanguage((current) => current === 'en' ? 'ar' : 'en')} aria-pressed={language === 'ar'} aria-label={t.switchLanguage}>EN | عر</button><a className="button primary nav-cta" href="#download">{t.downloadNav}</a></div></header>
    <section className="hero wrap"><div className="hero-copy"><h1>{t.heroTitle}</h1><p>{t.heroBody}</p><div className="hero-actions"><a className="button primary" href="#download">{t.downloadPaver}</a><a className="text-link" href={appUrl} target="_blank" rel="noreferrer">{t.webApp}</a></div></div><ProductPreview frame={t.frame} alt={t.screensTitle} language={language}/></section>
    <section className="section wrap who"><div><h2>{t.whoTitle}</h2></div><p>{t.whoBody}</p></section>
    <section id="features" className="section features"><div className="wrap"><h2>{t.featuresTitle}</h2><dl className="feature-list">{t.features.map(([name, body]) => <div key={name}><dt>{name}</dt><dd>{body}</dd></div>)}</dl></div></section>
    <section className="section wrap how"><h2>{t.how}</h2><div className="how-copy">{t.steps.map((step) => <p key={step}>{step}</p>)}</div></section>
    <section className="section product-tour" aria-labelledby="screens-title"><div className="wrap"><h2 id="screens-title">{t.screensTitle}</h2><p className="tour-intro">{t.actualScreens}</p><div className="screens-gallery">{t.screens.map(([caption, alt], i) => { const image = ['/demo/projects.webp', '/demo/finance.webp', '/demo/inventory.webp'][i]; return <figure key={caption}><a className="screen-link" href={image} target="_blank" rel="noreferrer" aria-label={language === 'ar' ? `افتح لقطة ${caption} بالحجم الكامل في علامة تبويب جديدة` : `Open full-size ${caption.toLowerCase()} screenshot in a new tab`}><img src={image} alt={alt} loading="lazy"/></a><figcaption>{caption}</figcaption></figure>; })}</div></div></section>
    <section className="section wrap video-section" aria-labelledby="video-title"><div className="video-copy"><h2 id="video-title">{t.videoTitle}</h2><p>{t.videoBody}</p></div><video key={language} className="explainer-video" controls playsInline preload="metadata" poster={language === 'ar' ? '/demo/video-poster-ar.jpg' : '/demo/video-poster.jpg'}><source src={`${videoBase}.mp4`} type="video/mp4"/><track kind="captions" src={`${videoBase}.vtt`} srcLang={language} label={language === 'ar' ? 'العربية' : 'English'} default/>{t.videoFallback} <a href={`${videoBase}.mp4`}>{t.videoLink}</a></video></section>
    <section className="section wrap download" id="download"><div className="download-intro"><h2>{t.downloadTitle}</h2><p>{t.downloadBody}</p></div><div className="download-list">{downloads.map(({ platform, file, detail }) => <div className="download-row" key={file}><div><h3 dir="ltr">{platform}</h3><p>{detail[language]}</p><p className="integrity"><bdi dir={language === 'ar' && !artifacts[file]?.size ? 'rtl' : 'ltr'}>{artifacts[file]?.size ?? (language === 'ar' ? 'الحجم غير متاح' : 'Size unavailable')}</bdi> <span>SHA256</span> <code dir={language === 'ar' && !artifacts[file]?.sha256 ? 'rtl' : 'ltr'}>{artifacts[file]?.sha256 ?? (language === 'ar' ? 'غير متاح' : 'Unavailable')}</code></p></div><a className="button primary download-button" href={`https://github.com/MaeenAlganimi/paver/releases/latest/download/${file}`}>{t.download}</a></div>)}<div className="download-row coming"><div><h3 dir="ltr">macOS</h3><p>{t.macDetail}</p></div><span>{t.coming}</span></div></div><p className="download-note">{t.note}</p></section>
    <section className="section faq"><div className="wrap faq-layout"><h2>{t.questions}</h2><div className="faq-list">{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={17} aria-hidden="true"/></summary><p>{answer}</p></details>)}</div></div></section>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="mark">P</span><span>{language === 'en' ? 'Paver' : 'بيفر'}</span></a><p>{t.footer}</p><a href="https://github.com/MaeenAlganimi/paver" target="_blank" rel="noreferrer">GitHub</a><small>{t.footerNote}</small></footer>
  </main>;
}
function ProductPreview({ frame, alt, language }: { frame: string; alt: string; language: Language }) { return <figure className="product-frame hero-screen"><figcaption className="frame-head"><span className="mark">P</span><strong>{language === 'en' ? 'Paver' : 'بيفر'}</strong><span>{frame}</span></figcaption><img src="/demo/dashboard.webp" alt={alt} fetchPriority="high"/></figure>; }
createRoot(document.getElementById('root')!).render(<App />);
