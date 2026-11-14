# Aurelia Motors France — plan

## Approche
Construire une expérience éditoriale premium en React/TypeScript dans le starter Webdev, avec un catalogue public alimenté par un jeu de données local clairement signalé comme démonstration. Le premier jalon couvre les parcours de découverte, filtrage, détail véhicule, contact et une vue d’administration de démonstration. Le backend et la base restent prêts pour brancher les vraies tables, les coordonnées et les médias après validation de l’identité de l’entreprise.

## Direction artistique retenue
- **Style 1 — Editorial automotive / Swiss luxury** (0,07) : composition asymétrique, typographie nette, grands visuels et rythme magazine.
- **Style 2 — Atelier contemporain** (0,06) : matière, détails techniques et palette plus chaleureuse.
- **Style 3 — Neo-mobility gallery** (0,08) : minimalisme digital, fonds sombres et signalétique lumineuse.

Choix : **Editorial automotive / Swiss luxury**.

### Principes
1. Donner de l’espace aux véhicules et à la lecture des informations.
2. Transformer chaque interaction commerciale en geste simple : consulter, comparer, demander un devis.
3. Utiliser le cuivre comme repère de confiance, jamais comme décoration excessive.
4. Éviter les promesses non vérifiées : tout prix et toute disponibilité de démonstration sont explicitement étiquetés.

### Couleur et typographie
Bleu nuit #101D2B pour les séquences fortes, blanc cassé #F7F6F2 pour les surfaces de lecture, graphite #17191D pour la profondeur et cuivre #B68A62 pour les appels à l’action secondaires. Manrope pour l’interface et DM Sans pour les titres.

### Layout, interactions, animation
Le site alterne une grille catalogue rigoureuse et des sections pleine largeur plus éditoriales. Les cartes véhicules restent sobres, avec un seul accent cuivre. Les animations se limitent à des apparitions douces et à des transitions d’image au survol, respectant prefers-reduced-motion.

### Marque
Positionnement : une passerelle française exigeante entre les meilleurs véhicules chinois et les automobilistes qui veulent être accompagnés. Personnalité : précise, humaine, curieuse. Motif signature : un monogramme A formé par deux lignes de route, intégré au wordmark Aurelia.

## Structure
- `client/src/pages/Home.tsx` : landing page, catalogue filtrable, sections importation, FAQ, contact.
- `client/src/pages/Vehicle.tsx` : fiche dynamique `/vehicules/:slug`, galerie, spécifications et CTAs.
- `client/src/pages/Admin.tsx` : aperçu admin local pour gérer le catalogue et le calcul déterministe des coûts.
- `client/src/data/vehicles.ts` : dataset de démonstration, statuts, médias et fonctions de calcul.
- `client/src/index.css` : système visuel premium, responsive et états d’interaction.
- `public/manus-routes.json` : manifeste des routes publiques et de démonstration.
- `server/routers.ts` et `drizzle/schema.ts` : points d’extension pour demandes de devis, véhicules, marques et réglages.

## Contraintes de contenu
Les prix, coordonnées, adresses et droits des images réelles ne sont pas inventés. Les fiches incluses pour démonstration sont présentées comme telles et doivent être remplacées/validées dans l’administration avant publication commerciale. Aucune fonctionnalité d’IA n’est intégrée.
