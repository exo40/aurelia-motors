import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, Filter, Menu, MessageCircle, Phone, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import { brandNotes, vehicles, whatsappUrl } from "../data/vehicles";

const money = (price?: number) => price ? new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price) : "Sur devis";

export default function Home() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("Toutes les marques");
  const [category, setCategory] = useState("Toutes les catégories");
  const [fuel, setFuel] = useState("Toutes les motorisations");
  const [maxPrice, setMaxPrice] = useState("");
  const [availability, setAvailability] = useState("Toutes les disponibilités");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const filtered = useMemo(() => vehicles.filter(v => {
    const matchesQuery = `${v.brand} ${v.model}`.toLowerCase().includes(query.toLowerCase());
    const matchesBrand = brand === "Toutes les marques" || v.brand === brand;
    const matchesCategory = category === "Toutes les catégories" || v.category === category;
    const matchesFuel = fuel === "Toutes les motorisations" || v.fuel === fuel;
    const matchesPrice = !maxPrice || !v.price || v.price <= Number(maxPrice);
    const matchesAvailability = availability === "Toutes les disponibilités" || v.availability === availability;
    return matchesQuery && matchesBrand && matchesCategory && matchesFuel && matchesPrice && matchesAvailability;
  }), [query, brand, category, fuel, maxPrice, availability]);

  return <main className="site-shell">
    <div className="demo-ribbon">VERSION DE DÉMONSTRATION · COORDONNÉES, PRIX ET DROITS MÉDIAS À VALIDER</div>
    <header className="nav-wrap">
      <a className="brand-mark" href="#accueil" aria-label="Aurelia Motors France"><span className="brand-symbol">A</span><span>Aurelia <em>Motors</em></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"}>
        <a href="#catalogue" onClick={() => setMenuOpen(false)}>Nos véhicules</a><a href="#marques" onClick={() => setMenuOpen(false)}>Marques</a><a href="#processus" onClick={() => setMenuOpen(false)}>Notre méthode</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a className="nav-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={15}/> WhatsApp</a>
      </nav>
    </header>

    <section id="accueil" className="hero">
      <div className="hero-copy"><p className="eyebrow">IMPORTATION AUTOMOBILE · CHINE → FRANCE</p><h1>Une autre idée de<br/><i>l’automobile.</i></h1><p className="hero-lead">Des véhicules sélectionnés en Chine, proposés en France avec un accompagnement humain, précis et transparent.</p><div className="hero-actions"><a className="btn btn-copper" href="#catalogue">Découvrir la sélection <ArrowRight size={16}/></a><a className="btn btn-ghost-light" href="#contact">Parler à un conseiller</a></div><div className="hero-meta"><span><strong>01</strong> Sélection sur mesure</span><span><strong>02</strong> Vérification documentée</span><span><strong>03</strong> Suivi jusqu'à la livraison</span></div></div>
      <div className="hero-visual"><img src="https://www.datocms-assets.com/128969/1791289381-7x_facelift-3.jpg?auto=format%2Ccompress%2Cenhance&q=65&w=1440" alt="SUV électrique Zeekr de référence constructeur"/><div className="hero-caption"><span>01 / 10</span><span>Visuel constructeur · droits à confirmer</span></div></div>
    </section>

    <section className="trust-strip"><span>UNE APPROCHE SANS PROMESSE FACILE</span><div><ShieldCheck size={17}/> Documentation & transparence</div><div><Sparkles size={17}/> Sélection contemporaine</div><div><Phone size={17}/> Conseil humain</div></section>

    <section id="catalogue" className="section catalogue-section"><div className="section-heading"><div><p className="eyebrow dark">LA SÉLECTION AURELIA</p><h2>Des modèles qui<br/><i>changent la perspective.</i></h2></div><p>Une première sélection de véhicules électriques et hybrides. Chaque fiche doit être confirmée selon la version, les taxes applicables et la disponibilité réelle.</p></div>
      <div className="filter-panel"><div className="search-field"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Rechercher un modèle ou une marque"/></div><select value={brand} onChange={e => setBrand(e.target.value)}><option>Toutes les marques</option>{Array.from(new Set(vehicles.map(v => v.brand))).map(b => <option key={b}>{b}</option>)}</select><select value={category} onChange={e => setCategory(e.target.value)}><option>Toutes les catégories</option><option>SUV</option><option>Berline</option><option>Citadine</option><option>Break</option></select><select value={fuel} onChange={e => setFuel(e.target.value)}><option>Toutes les motorisations</option><option>Électrique</option><option>Hybride rechargeable</option></select><select value={availability} onChange={e => setAvailability(e.target.value)}><option>Toutes les disponibilités</option><option>Disponible en France</option><option>Sur commande</option></select><select value={maxPrice} onChange={e => setMaxPrice(e.target.value)}><option value="">Prix maximum</option><option value="35000">35 000 €</option><option value="45000">45 000 €</option><option value="60000">60 000 €</option></select></div>
      <div className="catalogue-result"><span><Filter size={15}/> {filtered.length} modèle{filtered.length > 1 ? "s" : ""} présenté{filtered.length > 1 ? "s" : ""}</span><span>Tri éditorial · mis à jour à titre de démonstration</span></div>
      <div className="vehicle-grid">{filtered.map(vehicle => <article className="vehicle-card" key={vehicle.slug}><div className="vehicle-image"><img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model} — visuel de référence`}/><span className="image-note">{vehicle.sourceLabel}</span><span className="status-pill">{vehicle.availability === "Disponible en France" ? "Disponible" : "Sur commande"}</span></div><div className="vehicle-body"><div className="vehicle-top"><div><p className="vehicle-brand">{vehicle.brand}</p><h3>{vehicle.model}</h3></div><span className="vehicle-year">{vehicle.year}</span></div><div className="vehicle-specs"><span>{vehicle.fuel}</span><span>{vehicle.range ?? "À confirmer"}</span><span>{vehicle.power}</span></div><div className="vehicle-bottom"><div><small>{vehicle.priceStatus}</small><strong>{money(vehicle.price)}</strong></div><Link className="card-arrow" href={`/vehicules/${vehicle.slug}`} aria-label={`Voir ${vehicle.brand} ${vehicle.model}`}><ArrowRight size={18}/></Link></div></div></article>)}</div>
    </section>

    <section id="marques" className="section brands-section"><div className="section-heading light"><div><p className="eyebrow">LES MARQUES QUE NOUS EXPLORONS</p><h2>Un regard ouvert<br/><i>sur la Chine automobile.</i></h2></div><p>Nous suivons les gammes disponibles en Europe et les projets à l'import, avec une attention portée à l'homologation, aux pièces et à l'accompagnement local.</p></div><div className="brand-list">{brandNotes.map((b, i) => <div className="brand-row" key={b.name}><span className="brand-index">0{i+1}</span><strong>{b.name}</strong><span>{b.detail}</span><em>{b.count}</em><ArrowRight size={17}/></div>)}</div></section>

    <section id="processus" className="section process-section"><div className="process-intro"><p className="eyebrow dark">NOTRE MÉTHODE</p><h2>De la première<br/><i>question à la clé.</i></h2><p>Un accompagnement étape par étape. Les frais, taxes, délais et besoins d'homologation sont détaillés dans le devis final, après vérification du véhicule.</p><a className="text-link" href="#contact">Comprendre le parcours <ArrowRight size={16}/></a></div><div className="steps">{["Choisir le véhicule", "Vérifier la configuration", "Recevoir un devis documenté", "Valider la commande", "Organiser transport & formalités", "Livrer en France"].map((s, i) => <div className="step" key={s}><span>0{i + 1}</span><div><h3>{s}</h3><p>{i < 2 ? "Échange avec un conseiller et vérification de la version souhaitée." : i < 4 ? "Prix indicatif ou confirmé, frais détaillés et validation manuelle." : "Formalités selon le véhicule, la réglementation et les pièces disponibles."}</p></div></div>)}</div></section>

    <section className="quote-band"><p className="eyebrow">L'IMPORTATION, SANS ANGLE MORT</p><h2>Vous cherchez un modèle<br/><i>qui n'est pas encore ici ?</i></h2><a className="btn btn-light" href="#contact">Décrire votre projet <ArrowRight size={16}/></a></section>

    <section id="contact" className="section contact-section"><div className="contact-copy"><p className="eyebrow dark">PARLONS DE VOTRE PROJET</p><h2>Une question simple<br/><i>pour commencer.</i></h2><p>Les informations de contact finales seront configurées depuis l'administration. En attendant, ce formulaire permet de tester le parcours de demande de devis.</p><div className="contact-lines"><a href="tel:+33000000000"><Phone size={18}/> +33 (0) 00 00 00 00 <small>Numéro de démonstration</small></a><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Écrire sur WhatsApp <small>Numéro à remplacer</small></a></div><div className="map-placeholder"><div><span>ADRESSE À CONFIGURER</span><strong>France · emplacement de l'entreprise</strong><small>La carte Google Maps sera activée après renseignement de l'adresse réelle.</small></div><ArrowRight size={20}/></div></div><form className="contact-form" onSubmit={e => {e.preventDefault(); setFormSent(true)}}><label>Votre nom<input required placeholder="Prénom et nom"/></label><label>Votre email<input type="email" required placeholder="nom@exemple.fr"/></label><label>Votre projet<select><option>Je cherche un véhicule</option><option>Je souhaite importer un modèle précis</option><option>Je veux devenir partenaire</option></select></label><label>Votre message<textarea rows={5} placeholder="Parlez-nous du véhicule ou du projet qui vous intéresse."/></label><button className="btn btn-dark" type="submit">{formSent ? <><Check size={16}/> Demande enregistrée (démo)</> : <>Envoyer ma demande <ArrowRight size={16}/></>}</button><small>En démonstration, aucune donnée n'est envoyée. Les mentions légales, CGV et politique de confidentialité seront ajoutées avec les informations de l'entreprise.</small></form></section>

    <footer className="footer"><div className="footer-top"><a className="brand-mark light-mark" href="#accueil"><span className="brand-symbol">A</span><span>Aurelia <em>Motors</em></span></a><p>La nouvelle mobilité, choisie avec discernement.</p><div className="footer-actions"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a><a href="#contact">Contact</a><Link href="/admin">Administration</Link></div></div><div className="footer-bottom"><span>© 2026 Aurelia Motors France · Démonstration</span><span>Mentions légales · Confidentialité · Cookies</span></div></footer><a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={21}/><span>WhatsApp</span></a>
  </main>;
}
