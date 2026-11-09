"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { families, products, newProducts, getFamily, type Product } from "@/lib/catalog";
import { Arrow, Plus, Spark, HeroArt, ProductArt, CapabilityArt } from "./artwork";

type Page = "home" | "products" | "product" | "brand" | "news" | "contact" | "privacy";
const storageKey = "pp-inquiry-products-v1";
const nav = [{ name: "Home", href: "/", page: "home" }, { name: "Products", href: "/products", page: "products" }, { name: "Brand", href: "/brand", page: "brand" }, { name: "News", href: "/news", page: "news" }, { name: "Contact", href: "/contact", page: "contact" }];
const capabilities = [
  { title: "Lighting R&D", description: "Start with the light. Bring spectrum, growing environments and practical needs into the same conversation.", label: "Explore possibilities" },
  { title: "Lighting Engineering", description: "Connect the idea to the application. Consider the fixture, the layout and the way a growing space works.", label: "Design with purpose" },
  { title: "Production", description: "Bring design into physical form. Keep product development connected to the realities of manufacturing.", label: "Bring it to life" },
];

export function Site({ page, productId }: { page: Page; productId?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [toast, setToast] = useState("");
  useEffect(() => {
    const fromAddress = new URLSearchParams(window.location.search).get("products")?.split(",") ?? [];
    let saved: unknown[] = [];
    try { const value: unknown = JSON.parse(localStorage.getItem(storageKey) || "[]"); if (Array.isArray(value)) saved = value; } catch { /* URL state keeps inquiry links useful where storage is unavailable. */ }
    const valid = [...new Set([...saved, ...fromAddress].filter((id): id is string => typeof id === "string" && products.some(p => p.id === id)))];
    if (valid.length) setSelected(valid);
  }, []);
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(""), 3500); return () => clearTimeout(timer); }, [toast]);
  useEffect(() => { const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); }; window.addEventListener("keydown", escape); return () => window.removeEventListener("keydown", escape); }, []);
  function toggleProduct(id: string) {
    const exists = selected.includes(id);
    const next = exists ? selected.filter(item => item !== id) : [...selected, id];
    setSelected(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* Selection still works for this page. */ }
    setToast(exists ? "Product removed from your inquiry." : "Added to your inquiry. Continue on the Contact page.");
  }
  const item = products.find(p => p.id === productId);
  const inquiryHref = selected.length ? `/contact?products=${encodeURIComponent(selected.join(","))}` : "/contact";
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="announcement"><span>LIGHTING THE WAY FORWARD.</span><span>HORTICULTURAL LIGHTING & TECHNOLOGY <span className="gold-dot" /></span></div>
    <header className="header">
      <div className="header-inner wrap">
        <a href="/" className="logo" aria-label="Performance Photon home"><img src="/logo.svg" alt="Performance Photon" width="224" height="58" /></a>
        <nav className={menuOpen ? "navigation is-open" : "navigation"} aria-label="Main navigation">
          {nav.map(n => <a key={n.page} className={page === n.page || page === "product" && n.page === "products" ? "active" : ""} aria-current={page === n.page || page === "product" && n.page === "products" ? "page" : undefined} href={n.href}>{n.name}</a>)}
        </nav>
        <a href={inquiryHref} className="header-cta">Let’s talk {selected.length > 0 && <span className="count-badge" aria-label={`${selected.length} selected products`}>{selected.length}</span>}<Arrow diagonal /></a>
        <button className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <span>✕</span> : <span>☰</span>}</button>
      </div>
    </header>
    <main id="main">
      {page === "home" && <Home />}
      {page === "products" && <Catalog />}
      {page === "product" && item && <ProductDetail product={item} selected={selected.includes(item.id)} inquiryHref={inquiryHref} onToggle={() => toggleProduct(item.id)} />}
      {page === "brand" && <Brand />}
      {page === "news" && <News />}
      {page === "contact" && <Contact selected={selected} toggleProduct={toggleProduct} />}
      {page === "privacy" && <Privacy />}
    </main>
    <Footer />
    <div className={`toast ${toast ? "visible" : ""}`} role="status">{toast}</div>
  </>;
}

function Home() {
  return <>
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="small-line" /> A BRIGHTER WAY TO GROW</div>
        <h1>Better light.<br />Stronger <span className="growth">growth<Spark /></span></h1>
        <p>Horticultural lighting with a purpose.<br />Built around your plants, your space,<br className="desktop-break" /> and what comes next.</p>
        <div className="hero-actions"><a className="button" href="/products">Explore our products <Arrow diagonal /></a><a className="text-link" href="/brand">Meet Performance Photon <Arrow /></a></div>
        <div className="hero-bottom"><span>FROM THE FIRST PHOTON.<br /><strong>TO THE NEXT POSSIBILITY.</strong></span><a href="#collection" className="scroll-link" aria-label="Scroll to new products">SCROLL TO EXPLORE <span>↓</span></a></div>
      </div>
      <div className="hero-visual"><HeroArt /><div className="hero-visual-top"><span>PERFORMANCE / BY DESIGN</span><span>01 — 06</span></div><div className="hero-caption"><span className="caption-cross">+</span><div>Light, thoughtfully applied.<small>INDOOR · UNDER CANOPY · GREENHOUSE</small></div><span className="visual-tag">CONCEPT VISUAL</span></div></div>
    </section>
    <section className="family-strip" aria-label="Browse product families"><div className="wrap family-strip-inner"><span className="strip-label">FIND YOUR LIGHT <Arrow /></span>{families.map(f => <a href={`/products?category=${f.id}`} key={f.id}>{f.name}<sup>{String(f.count).padStart(2,"0")}</sup></a>)}</div></section>
    <section className="section wrap" id="collection">
      <div className="section-heading"><div><div className="eyebrow">01 / THE COLLECTION</div><h2>New light.<br />New possibilities.</h2></div><div className="section-heading-right"><span className="collection-year">2026 COLLECTION PREVIEW</span><a href="/products?new=true" className="text-link">Discover the collection <Arrow diagonal /></a></div></div>
      <div className="product-grid featured-grid">{newProducts.map(p => <ProductCard product={p} key={p.id} />)}</div>
      <p className="catalog-note">Concept illustrations and catalogue positions are shown. Final photography, model names and specifications will follow.</p>
    </section>
    <section className="brand-intro wrap">
      <div className="brand-visual"><HeroArt compact /><span className="image-label">GROWING ENVIRONMENTS / VISUAL PLACEHOLDER</span><div className="visual-square"><Spark /><span>GROW WITH<br />PURPOSE.</span></div></div>
      <div className="brand-intro-copy"><div className="eyebrow">02 / MEET PERFORMANCE PHOTON</div><h2>Light is the beginning.<br /><em>Performance</em><br />is the purpose.</h2><p>Modern agriculture starts with a growing environment that works. Performance Photon brings lighting research, engineering and production together around that idea.</p><p>From indoor spaces to greenhouses, we focus on the connection between light and the way you grow.</p><a href="/brand" className="text-link">Get to know our brand <Arrow diagonal /></a></div>
    </section>
    <CapabilitySection />
    <Conversation />
  </>;
}

function ProductCard({ product }: { product: Product }) {
  return <article className="product-card"><a href={`/products/${product.id}`} aria-label={`View ${product.title}`}><div className="product-image"><div className="product-image-top"><span>{product.isNew ? "2026 PREVIEW" : "PRODUCT PREVIEW"}</span><span>{product.number}</span></div><ProductArt family={product.family} variant={Number(product.number)} /><span className="product-hover">Explore product <Arrow diagonal /></span><span className="product-concept">CONCEPT ILLUSTRATION</span></div><div className="product-card-text"><div><span className="product-category">{getFamily(product.family).name}</span><h3>{product.title}</h3></div><span className="card-arrow"><Arrow diagonal /></span></div></a></article>;
}

function Breadcrumb({ current, parent }: { current: string; parent?: string }) {
  return <div className="breadcrumb wrap"><a href="/">Home</a><span>/</span>{parent && <><a href="/products">Products</a><span>/</span></>}<span>{current}</span></div>;
}

function Catalog() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [onlyNew, setOnlyNew] = useState(false);
  useEffect(() => { const params = new URLSearchParams(window.location.search); const c = params.get("category"); if (families.some(f=> f.id === c)) setCategory(c!); setOnlyNew(params.get("new") === "true"); }, []);
  function selectCategory(value: string) { setCategory(value); const params = new URLSearchParams(window.location.search); if (value === "all") params.delete("category"); else params.set("category",value); window.history.replaceState(null,"",`${window.location.pathname}${params.size ? `?${params}` : ""}`); }
  function selectNew(value: boolean) { setOnlyNew(value); const params = new URLSearchParams(window.location.search); if (value) params.set("new","true"); else params.delete("new"); window.history.replaceState(null,"",`${window.location.pathname}${params.size ? `?${params}` : ""}`); }
  const filtered = useMemo(() => products.filter(p => (category === "all" || p.family === category) && (!onlyNew || p.isNew) && `${p.title} ${getFamily(p.family).name}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a,b) => sort === "name" ? a.title.localeCompare(b.title) : Number(b.isNew)-Number(a.isNew)), [category, query, onlyNew, sort]);
  return <><Breadcrumb current="Products" /><section className="page-heading wrap"><div><div className="eyebrow">THE PERFORMANCE PHOTON COLLECTION</div><h1>Find your<br /><em>growing light.</em></h1></div><p>Different spaces. Different approaches.<br />Explore six product families and find<br />a starting point for your next project.</p></section>
    <section className="catalog-layout wrap section-bottom"><aside className="catalog-sidebar"><span className="eyebrow">PRODUCT FAMILIES</span><div className="category-list"><button className={category === "all" ? "selected" : ""} onClick={()=>selectCategory("all")}>All products <span>19</span></button>{families.map(f=><button className={category === f.id ? "selected" : ""} key={f.id} onClick={()=>selectCategory(f.id)}>{f.name}<span>{String(f.count).padStart(2,"0")}</span></button>)}</div><div className="sidebar-help"><Spark /><h3>Not sure where<br />to start?</h3><p>Tell us about your growing space.</p><a href="/contact" className="text-link">Let’s talk <Arrow diagonal /></a></div></aside><div className="catalog-main"><div className="catalog-toolbar"><label className="search-field"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="m15 15 5 5" stroke="currentColor" strokeWidth="1.5"/></svg><input type="search" placeholder="Search the collection" value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search products" /></label><label className="sort-field"><span>Sort by</span><select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="name">Name A–Z</option></select></label></div><div className="catalog-status"><span role="status">{filtered.length} {filtered.length === 1 ? "product" : "products"}{category !== "all" ? ` / ${getFamily(category).name}` : " / All collections"}</span><label className="new-filter"><input type="checkbox" checked={onlyNew} onChange={e=>selectNew(e.target.checked)} />2026 previews</label></div>{filtered.length ? <div className="product-grid catalog-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div> : <div className="empty-state"><Spark /><h2>No matching products.</h2><p>Try another keyword or a different product family.</p><button className="button" onClick={()=>{setQuery("");selectCategory("all");selectNew(false);}}>Reset filters <Arrow /></button></div>}<p className="catalog-note">All product images are conceptual placeholders. Numbered titles identify catalogue positions, not confirmed model names.</p></div></section><Conversation compact /></>;
}

function ProductDetail({ product, selected, inquiryHref, onToggle }: { product: Product; selected: boolean; inquiryHref: string; onToggle: () => void }) {
  const family = getFamily(product.family);
  const fields = product.family === "spectrometer" ? ["Wavelength range", "Measurement range", "Accuracy", "Connectivity", "Dimensions"] : ["Input power", "Photon output (PPF)", "Efficacy (PPE)", "Spectrum", "Dimming", "Input voltage"];
  const siblings = products.filter(p => p.family === product.family && p.id !== product.id);
  const related = (siblings.length ? siblings : products.filter(p => p.isNew && p.id !== product.id)).slice(0,3);
  return <><Breadcrumb parent="Products" current={product.title} /><section className="product-detail wrap"><div className="detail-visual"><span className="eyebrow">PRODUCT PREVIEW / {product.number}</span><ProductArt family={product.family} variant={Number(product.number)}/><div className="detail-visual-label"><span>CONCEPT ILLUSTRATION</span><span>FINAL PHOTOGRAPHY TO FOLLOW</span></div></div><div className="detail-copy"><div className="eyebrow">{family.name}</div><h1>{product.title}</h1><p className="lead">{family.description}</p><div className="application"><span>APPLICATION</span><strong>{family.application}</strong></div><div className="preview-notice"><span className="gold-dot"/><p>This is a catalogue preview. The final model name, appearance and technical specifications are to be confirmed.</p></div><button className={`button ${selected ? "selected-button" : ""}`} onClick={onToggle}>{selected ? "Remove from inquiry" : "Add to inquiry"}<Plus minus={selected}/></button><a href={selected ? inquiryHref : `/contact?products=${encodeURIComponent(product.id)}`} className="text-link">Continue to your inquiry <Arrow diagonal /></a></div></section><section className="spec-section wrap"><div><div className="eyebrow">PRODUCT INFORMATION</div><h2>The details<br />make the difference.</h2><p>Discuss your application with us to identify the product information you need.</p></div><dl className="spec-table">{fields.map(field=><div key={field}><dt>{field}</dt><dd>To be confirmed</dd></div>)}</dl></section><section className="section wrap"><div className="section-heading"><div><div className="eyebrow">KEEP EXPLORING</div><h2>More possibilities.</h2></div><a href="/products" className="text-link">All products <Arrow diagonal /></a></div><div className="product-grid related-grid">{related.map(p=><ProductCard product={p} key={p.id}/>)}</div></section></>;
}

function CapabilitySection() {
  return <section className="capabilities"><div className="wrap"><div className="section-heading"><div><div className="eyebrow">03 / THE THINKING BEHIND THE LIGHT</div><h2>One focus.<br />Every step.</h2></div><p>Research. Engineering. Production.<br />A connected approach to horticultural lighting.</p></div><div className="capability-grid">{capabilities.map((cap,i)=><a key={cap.title} href={`/brand#capability-${i}`} className="capability-card"><div className="capability-top"><span>0{i+1}</span><Arrow diagonal /></div><h3>{cap.title}</h3><p>{cap.description}</p><span className="capability-label">{cap.label}</span></a>)}</div></div></section>;
}

function Brand() {
  return <><Breadcrumb current="Brand"/><section className="page-heading wrap brand-heading"><div><div className="eyebrow">WE ARE PERFORMANCE PHOTON</div><h1>Light with purpose.<br /><em>Growth in mind.</em></h1></div><p>A shared focus on the light<br />that shapes growing environments.</p></section><div className="brand-banner wrap"><div className="brand-banner-art"><HeroArt /></div><div className="brand-banner-word"><Spark /><span>THE NEXT<br />POSSIBILITY<br /><em>STARTS HERE.</em></span><small>GROWING ENVIRONMENTS / CONCEPT VISUAL</small></div></div><section className="brand-story wrap section"><div className="eyebrow">OUR PERSPECTIVE</div><div><h2>More thought in the light.<br />More possibility in the grow.</h2><div className="story-columns"><p>Performance Photon is focused on lighting for modern agriculture. Our approach connects lighting research, engineering and production with the needs of indoor and greenhouse growing environments.</p><p>We believe the starting point is a practical conversation: what you grow, where you grow it, and how you want that environment to work. Those questions give every project a clear direction.</p></div></div></section><section className="brand-capabilities wrap">{capabilities.map((c,i)=><article id={`capability-${i}`} key={c.title} className="brand-capability"><div className="capability-illustration"><CapabilityArt type={i}/><span className="image-label">{c.title.toUpperCase()} / VISUAL PLACEHOLDER</span></div><div className="brand-capability-copy"><div className="eyebrow">0{i+1} / {c.label}</div><h2>{c.title}</h2><p>{c.description}</p><a href="/contact" className="text-link">Start a conversation <Arrow diagonal /></a></div></article>)}</section><Conversation /></>;
}

function News() {
  const [filter,setFilter] = useState("All updates");
  return <><Breadcrumb current="News"/><section className="page-heading wrap"><div><div className="eyebrow">NEWS & PERSPECTIVES</div><h1>Ideas. Insights.<br /><em>What’s next.</em></h1></div><p>A place for product updates,<br />company stories and new perspectives.</p></section><section className="news-section wrap"><div className="news-filters" role="group" aria-label="Filter news">{["All updates","Products","Company","Insights"].map(f=><button key={f} aria-pressed={filter===f} className={filter===f ? "selected" : ""} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="news-empty"><div className="news-symbol"><Spark /><span className="orbit orbit-one"/><span className="orbit orbit-two"/></div><div><div className="eyebrow">A LITTLE MORE LIGHT, SOON.</div><h2>Good things<br />are growing.</h2><p aria-live="polite">{filter === "All updates" ? "Our news collection is taking shape. Product launches, company updates and growing stories will appear here." : `There are no ${filter.toLowerCase()} updates published yet. Check back for the next story.`}</p><a className="text-link" href="/products">Explore the product collection <Arrow diagonal /></a></div></div></section><Conversation compact /></>;
}

function Contact({ selected, toggleProduct }: { selected: string[]; toggleProduct: (id: string) => void }) {
  const [prepared, setPrepared] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const chosen = products.filter(p=>selected.includes(p.id));
  useEffect(()=>{setPrepared("");setCopyStatus("");},[selected]);
  function download(text: string) { const blob = new Blob([text], {type:"text/plain;charset=utf-8"}); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href=url; link.download="performance-photon-inquiry.txt"; document.body.appendChild(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const fields = new FormData(event.currentTarget); const text = ["PERFORMANCE PHOTON — PROJECT INQUIRY", "", `Name: ${fields.get("name")}`, `Work email: ${fields.get("email")}`, `Company: ${fields.get("company")}`, `Country / region: ${fields.get("country") || "Not provided"}`, `Project type: ${fields.get("project")}`, `Growing area: ${fields.get("area") || "Not provided"}`, "", "PRODUCT INTEREST", ...(chosen.length ? chosen.map(p=>`- ${p.title} (${getFamily(p.family).name}; catalogue preview)`): ["General project inquiry"]), "", "PROJECT DETAILS", String(fields.get("message") || ""), "", "Prepared locally on the Performance Photon preview website. No message has been sent.", "Product titles are catalogue positions; final model names and specifications are to be confirmed."].join("\n"); setPrepared(text); setCopyStatus(""); download(text); }
  async function copy() { try { await navigator.clipboard.writeText(prepared); setCopyStatus("Inquiry copied to clipboard."); } catch { setCopyStatus("Clipboard is unavailable. Please download the inquiry instead."); } }
  return <><Breadcrumb current="Contact"/><section className="contact-layout wrap"><div className="contact-intro"><div className="eyebrow">LET’S GROW SOMETHING.</div><h1>Better light<br />starts with<br /><em>a conversation.</em></h1><p>Tell us about your plants, your space and your next project. We’ll start with what matters to you.</p><div className="contact-topics"><span>PRODUCT INQUIRIES</span><span>LIGHTING PROJECTS</span><span>BUSINESS COLLABORATION</span></div><div className="contact-art"><Spark /><span>YOUR NEXT<br />POSSIBILITY.</span></div></div><div className="contact-form-panel"><div className="form-heading"><span className="eyebrow">YOUR PROJECT BRIEF</span><span>* Required fields</span></div><div className="inquiry-selection"><div className="selection-heading"><h2>Your product interests <span>{chosen.length}</span></h2><a href="/products">Browse products <span>↗</span></a></div>{chosen.length ? <ul>{chosen.map(p=><li key={p.id}><span>{p.title}</span><button type="button" aria-label={`Remove ${p.title} from inquiry`} onClick={()=>toggleProduct(p.id)}>×</button></li>)}</ul>: <p>No products selected yet. You can also send a general project brief.</p>}</div><form onSubmit={submit} onChange={()=>{setPrepared("");setCopyStatus("");}}><div className="form-grid"><label>Full name *<input name="name" required maxLength={120} autoComplete="name" placeholder="Your name"/></label><label>Work email *<input name="email" required type="email" maxLength={200} autoComplete="email" placeholder="you@company.com"/></label><label>Company *<input name="company" required maxLength={160} autoComplete="organization" placeholder="Company name"/></label><label>Country / region<input name="country" maxLength={100} autoComplete="country-name" placeholder="Where are you based?"/></label><label>Project type *<select name="project" required defaultValue=""><option value="" disabled>Select your application</option><option>Indoor cultivation</option><option>Greenhouse cultivation</option><option>Under-canopy lighting</option><option>Light measurement</option><option>Distribution / partnership</option><option>Other</option></select></label><label>Growing area<input name="area" maxLength={100} placeholder="e.g. 500 m² / 5,400 sq ft"/></label><label className="full-width">Tell us about your project *<textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="What do you grow? What lighting are you looking for? Share your goals, timeline and any questions."/></label></div><p className="form-privacy">Your information is used only to prepare the file on this device. <a href="/privacy">Privacy information</a></p><div className="form-submit"><button className="button" type="submit">Prepare & download inquiry <Arrow diagonal /></button><small>Preview mode: this form creates a file.<br />It does not send a message.</small></div></form>{prepared && <div className="inquiry-success" role="status"><h3>Your inquiry is ready.</h3><p>A text file has been prepared. Send it to your Performance Photon contact when you’re ready.</p><div><button type="button" onClick={()=>download(prepared)}>Download again ↓</button><button type="button" onClick={copy}>Copy inquiry</button></div>{copyStatus && <p>{copyStatus}</p>}</div>}</div></section></>;
}

function Privacy() {
  return <><Breadcrumb current="Privacy"/><article className="privacy-page wrap"><div className="eyebrow">PREVIEW WEBSITE</div><h1>Your information.</h1><h2>The inquiry form</h2><p>The contact form prepares a downloadable text file in your browser. The information you enter is not submitted to Performance Photon or saved by this website. You decide whether and where to send the downloaded file.</p><h2>Your product selection</h2><p>Product identifiers are stored in this browser’s local storage so your selection stays available when you move between pages. No contact details are saved there. Remove items on the Contact page or clear this website’s browser storage to reset the selection.</p><h2>This preview</h2><p>The website contains no added analytics or marketing trackers. The hosting service may process connection data as part of delivering the site. Contact information and the final business privacy policy will be added before a public commercial launch.</p><a href="/contact" className="text-link">Back to your inquiry <Arrow /></a></article></>;
}

function Conversation({ compact = false }: { compact?: boolean }) {
  return <section className={`conversation ${compact ? "compact" : ""}`}><div className="wrap conversation-inner"><div><div className="eyebrow">THE NEXT CHAPTER STARTS WITH YOU.</div><h2>Let’s put your next<br />project <em>in the right light.</em></h2></div><a className="conversation-button" href="/contact" aria-label="Start a conversation"><Arrow diagonal /><span>LET’S TALK</span></a></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-main"><div className="footer-brand"><a href="/" aria-label="Performance Photon home"><img src="/logo.svg" alt="Performance Photon" width="250" height="64"/></a><p>Light for what’s next.</p></div><div><h3>EXPLORE</h3>{nav.slice(1).map(n=><a href={n.href} key={n.href}>{n.name === "Brand" ? "Our brand" : n.name}</a>)}</div><div><h3>OUR COLLECTION</h3>{families.slice(0,3).map(f=><a key={f.id} href={`/products?category=${f.id}`}>{f.name}</a>)}</div><div className="footer-last"><h3>MORE POSSIBILITIES</h3>{families.slice(3).map(f=><a key={f.id} href={`/products?category=${f.id}`}>{f.name}</a>)}</div></div><div className="footer-bottom"><span>© 2026 Performance Photon. All rights reserved.</span><span className="footer-preview">WEBSITE PREVIEW</span><a href="/privacy">Privacy information <Arrow diagonal /></a></div></div></footer>;
}
