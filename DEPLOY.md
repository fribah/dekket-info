# Slik får du dekket.info ut på nett

## Steg 1: Last ned prosjektet
Last ned filen `dekket-info-project.tar.gz` som ligger vedlagt.

## Steg 2: Lag et nytt GitHub-repo
1. Gå til https://github.com/new
2. Kall det `dekket-info`
3. La det være **Public** (gratis hosting krever det)
4. IKKE huk av noe annet. Trykk **Create repository**.

## Steg 3: Last opp filene til GitHub
1. Pakk ut `dekket-info-project.tar.gz` på PCen din
   - Mac: dobbelklikk filen
   - Windows: bruk 7-Zip eller WinRAR
2. Du får en mappe med disse filene:
   ```
   dekket-info/
   ├── index.html
   ├── netlify.toml
   ├── package.json
   ├── vite.config.js
   └── src/
       ├── main.jsx
       └── App.jsx
   ```
3. På GitHub-repoet du nettopp lagde, trykk **"uploading an existing file"**
4. Dra ALLE filene og mappene inn
5. Trykk **Commit changes**

**Alternativt med terminal (hvis du foretrekker det):**
```bash
cd dekket-info
git init
git add .
git commit -m "first version"
git remote add origin https://github.com/DITT-BRUKERNAVN/dekket-info.git
git push -u origin main
```

## Steg 4: Koble til Netlify
1. Gå til https://app.netlify.com
2. Trykk **Add new site** → **Import an existing project**
3. Velg **GitHub**
4. Finn og velg `dekket-info`-repoet
5. Netlify fyller inn build-innstillinger automatisk. Dobbeltsjekk:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Trykk **Deploy site**
7. Vent ca 1 minutt. Siden er nå live på en tilfeldig netlify-adresse.

## Steg 5: Legg til dekket.info som domene
1. Kjøp domenet `dekket.info` (f.eks. på Namecheap, ca 100-200 kr/år)
2. I Netlify: Gå til **Domain management** → **Add a domain**
3. Skriv inn `dekket.info`
4. Netlify gir deg DNS-innstillinger. Du får noe som:
   - Pek DNS til `dns1.p08.nsone.net` (eller lignende)
5. Gå til domeneregistraren din (Namecheap e.l.) og endre **nameservers** til det Netlify oppgir
6. Vent 10-60 minutter. Ferdig!

## Totalkostnad
- Hosting: **gratis** (Netlify)
- Domene: **ca 100-200 kr/år**
- SSL/HTTPS: **gratis** (Netlify ordner det automatisk)
