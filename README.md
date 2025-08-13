# 🎮 Seljak Gaming

En moderne og profesjonell nettbutikk for gaming-PCer, komponenter og tilbehør.

## 📋 Om Prosjektet

Seljak Gaming er en fullstack e-handelsnettside bygget med React, designet for å tilby gaming-entusiaster høykvalitets PCer og komponenter. Nettstedet har en ren, profesjonell design med fokus på brukervennlighet og moderne estetikk.

## ✨ Funksjoner

- 🏠 **Moderne hjemmeside** med hero-seksjon og produktfremhevinger
- 🛍️ **Produktkatalog** med søk, filtrering og kategorisering
- 📄 **Detaljerte produktsider** med bilder og spesifikasjoner
- 🛒 **Handlekurv-funksjonalitet** med React Context
- 📞 **Kontaktside** med kontaktskjema
- ℹ️ **Om oss-side** med bedriftsinformasjon
- 📱 **Fullt responsiv design** for alle enheter
- 🎨 **Profesjonell UI/UX** med moderne designprinsipper

## 🛠️ Teknologier

- **Frontend:** React 18
- **Styling:** CSS3 med moderne layout (Grid, Flexbox)
- **State Management:** React Context API
- **Routing:** React Router
- **Ikoner:** SVG ikoner og emojis
- **Responsiv Design:** Mobile-first tilnærming

## 📁 Prosjektstruktur

```
src/
├── components/           # React komponenter
│   ├── Header.jsx       # Navigasjon og header
│   ├── Footer.jsx       # Footer med kontaktinfo
│   ├── Home.jsx         # Hjemmeside
│   ├── ProductPage.jsx  # Produktkatalog
│   ├── ProductDetail.jsx # Produktdetaljer
│   ├── AboutUs.jsx      # Om oss-side
│   ├── ContactUs.jsx    # Kontaktside
│   └── Checkout.jsx     # Bestillingsprosess
├── context/             # React Context
│   ├── CartContext.jsx  # Handlekurv state management
│   └── Cart.jsx         # Handlekurv komponent
├── data/                # Data og mock-innhold
│   └── Product.js       # Produktdata
├── img/                 # Bilder og ressurser
└── App.js              # Hoved-app komponent
```

## 🚀 Installasjon og Oppsett

### Forutsetninger
- Node.js (versjon 14 eller nyere)
- npm eller yarn

### Steg-for-steg installasjon

1. **Klon repositoryet**
   ```bash
   git clone https://github.com/[ditt-brukernavn]/seljak-gaming.git
   cd seljak-gaming
   ```

2. **Installer avhengigheter**
   ```bash
   npm install
   ```

3. **Start utviklingsserveren**
   ```bash
   npm start
   ```

4. **Åpne nettleseren**
   Gå til `http://localhost:3000` for å se applikasjonen

## 📱 Responsive Design

Nettstedet er optimalisert for:
- 📱 Mobile enheter (320px+)
- 📟 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Store skjermer (1200px+)

## 🎨 Design Prinsipper

- **Profesjonell estetikk:** Ren og moderne design
- **Tilgjengelighet:** God kontrast og lesbarhet
- **Brukervennlighet:** Intuitiv navigasjon og layout
- **Ytelse:** Optimaliserte bilder og rask lasting
- **Konsistens:** Ensartet designsystem hele veien

## 🛒 Hovedfunksjoner

### Produktkatalog
- Visning av alle produkter med bilder
- Kategorisering (Gaming PCs, Komponenter, Tilbehør)
- Søk og filtreringsfunksjoner
- Sortering etter pris og popularitet

### Handlekurv
- Legg til/fjern produkter
- Oppdater antall
- Se totalsum
- Persistent state med Context API

### Kontaktfunksjonalitet
- Kontaktskjema for henvendelser
- Bedriftsinformasjon og lokasjon
- Sosiale medier lenker

## 📈 Fremtidige Forbedringer

- [ ] Backend integrasjon med Node.js/Express
- [ ] Database integrasjon (MongoDB/PostgreSQL)
- [ ] Brukerautentisering og kontoer
- [ ] Betalingsintegrasjon (Stripe/Vipps)
- [ ] Lageradministrasjon
- [ ] Ordre- og leveringssporing
- [ ] Kundeomtaler og vurderinger
- [ ] Søkemotoroptimalisering (SEO)

## 🤝 Bidrag

Bidrag er velkomne! Vennligst:

1. Fork prosjektet
2. Opprett en feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit endringene (`git commit -m 'Add some AmazingFeature'`)
4. Push til branchen (`git push origin feature/AmazingFeature`)
5. Åpne en Pull Request

## 📄 Lisens

Dette prosjektet er lisensiert under MIT-lisensen. Se `LICENSE` filen for detaljer.

## 👨‍💻 Utvikler

**Sanel Pitnjakovic**
- 📧 Email: sani.pitnjakovic@gmail.com
- 📱 Telefon: +47 93 97 18 40
- 📍 Oslo, Norge

## 🙏 Takk til

- React team for det fantastiske rammeverket
- Open source community for inspirasjon og ressurser
- Gaming community for feedback og ideer

---

*Bygget med ❤️ for gaming-entusiaster*
