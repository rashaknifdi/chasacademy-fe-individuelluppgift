# Individuell inlämningsuppgift – Tillgänglighet & LCP

**Kurs:** Frontend & Tillgänglighet  
**Student:** Rasha Knifdi  
**Datum:** 1 mars 2026

Detta repo innehåller min lösning på den individuella inlämningsuppgiften där målet är att förbättra en befintlig produktlista‑sida med fokus på **tillgänglighet**, **LCP‑prestanda** och **automatiserad testning med axe**.  
Alla ändringar är gjorda i befintliga filer och dokumenterade med **atomära commits**.

---

## 🚀 Kom igång

### Klona projektet ```bash 
git clone https://github.com/rashaknifdi/chasacademy-fe-individuelluppgift.git

## 🚀 Starta lokalt
- Öppna projektet i IntelliJ eller VS Code
- Starta Live Server eller annan lokal server
- Öppna sidan i webbläsaren

---

## 🧭 Projektstruktur
- **index.html** – semantik, struktur, ARIA, formulär, bilder
- **styles.css** – kontrast, fokusmarkering, layout, kritisk CSS
- **script.js** – axe-testning, LCP-mätning, optimeringar

---

## ♿ Tillgänglighetsförbättringar
Jag identifierade och åtgärdade fem allvarliga tillgänglighetsproblem i originalversionen:

### 1. Semantisk struktur
- Infört `<header>`, `<main>`, `<section>`, `<footer>`
- Rätt rubrikhierarki (`h1`, `h2`, `h3`)
- Navigationsmeny omgjord till semantisk lista

### 2. Formulär utan labels
- Alla inputs har nu korrekta `<label for="">`
- `aria-label` används där visuella labels inte passar

### 3. Bilder utan alt‑texter
- Alla produktbilder har beskrivande alt‑texter
- Dekorativa bilder har `alt=""`

### 4. Bristande tangentbordsnavigering
- Klickbara `<div>` ersatta med `<button>` eller `<a>`
- Synlig fokusmarkering återställd och förbättrad
- Logisk tabbordning säkerställd

### 5. Kontrast & ARIA
- Färger justerade för WCAG AA‑kontrast
- ARIA‑attribut tillagt, t.ex. `aria-live="polite"`

Alla förbättringar finns dokumenterade i git‑loggen.

---

## 🧪 axe – automatiserad testning
Axe-core integrerades via script och körs automatiskt på sidan.

### Resultat

| Typ       | Före | Efter |
|-----------|------|-------|
| Fel       | 5    | 0     |
| Varningar | 2    | 2     |

Alla kritiska tillgänglighetsproblem är åtgärdade.

---

## ⚡ LCP – mätning & optimering
LCP mättes med en `PerformanceObserver` och visades både i konsolen och på sidan.

### LCP före optimering

| Webbläsare | LCP     |
|------------|---------|
| Chrome     | 1336 ms |
| Firefox    | 109 ms  |

### LCP efter optimering

| Webbläsare | LCP     |
|------------|---------|
| Chrome     | 124 ms  |
| Firefox    | 63 ms   |

### Förbättring
- Chrome: ~90% snabbare
- Firefox: ~42% snabbare

---

## 🔧 Genomförda prestandaoptimeringar

### Bildoptimering
- Minskat filstorlek
- Lagt till `width`/`height`
- `loading="lazy"` på bilder under folden

### Script-optimering
- Script flyttat till slutet av `<body>` + `defer`
- Onödiga blockeringar borttagna

### CSS-optimering
- Kritisk CSS säkerställd tidigt
- Rensat onödig CSS

### Perceived performance
- Hero-elementet visas direkt
- Sidan känns snabbare och mer responsiv

---
## 📝 Sammanfattning
Uppgiften har gett mig en tydlig och praktisk förståelse för hur tillgänglighet och prestanda påverkar en webbsidas kvalitet. Genom att arbeta iterativt, mäta förändringar och dokumentera varje steg har jag kunnat förbättra både användbarhet och LCP‑prestanda på ett konkret sätt. Arbetet har stärkt min förmåga att identifiera problem, motivera tekniska val och arbeta metodiskt med WCAG‑anpassningar, optimeringar och testning.




 



