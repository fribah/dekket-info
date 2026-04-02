import { FF } from "../constants";

const ExtIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const SOURCES = [
  { n: "Forbrukerrådet", u: "https://www.forbrukerradet.no/forside/okonomi/forsikring/" },
]
export default function Footer() {
  return (
    <footer style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #EEEEEE", paddingBottom: 50 }}>
        <div style={{ fontSize: 11, color: "#BBB", marginBottom: 10 }}>Kilder — prisene er veiledende.</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SOURCES.map((s, i) => (
            <a key={i} href={s.u} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: "#888", textDecoration: "none", padding: "4px 10px", borderRadius: 6, background: "#F5F5F5", border: "1px solid #EEE", fontFamily: FF }}>
              <ExtIcon /> {s.n}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 11, color: "#CCC", marginTop: 14 }}>dekket.info er uavhengig og gratis. Generell veiledning, ikke finansiell rådgivning.</p>
        <p style={{ fontSize: 11, color: "#CCC", marginTop: 6 }}>© 2026 dekket.info. All rights reserved.</p>
      </div>
    </footer>
  );
}
