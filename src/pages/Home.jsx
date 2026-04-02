import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BLUE, BL, BM, FF } from "../constants";

const GRID_ITEMS = [
  {
    id: "innbo",
    label: "Innboforsikring",
    desc: "Alt du eier i boligen",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9" /><path d="M5 10v10a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V10" /></svg>,
  },
  {
    id: "bil_f",
    label: "Bilforsikring",
    desc: "Lovpålagt og viktig",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 01-2-2v-4l2.5-5h13L21 11v4a2 2 0 01-2 2M5 17a2 2 0 002 2h1a2 2 0 002-2M14 17a2 2 0 002 2h1a2 2 0 002-2" /></svg>,
  },
  {
    id: "reise",
    label: "Reiseforsikring",
    desc: "Innen- og utenlands",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C20.3 6.7 21 5 20 4s-2.7-.3-3.5.5L13 8l-8.2-1.8a.5.5 0 00-.5.2l-1.1 1.1a.5.5 0 00.1.7L9 12l-2 2-3-.5-.5.5 2.5 2 2 2.5.5-.5-.5-3 2-2 3.7 5.7a.5.5 0 00.7.1l1.1-1.1a.5.5 0 00.2-.5z" /></svg>,
  },
  {
    id: "hus",
    label: "Husforsikring",
    desc: "Dekker selve bygningen",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="4" /><path d="M11.3 11.7L15 8l2 2" /><path d="M15 8l2-2" /></svg>,
  },
  {
    id: "liv_m",
    label: "Livsforsikring",
    desc: "Sikrer familien din",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><circle cx="17" cy="9" r="2.5" /><path d="M21 21v-1.5a3 3 0 00-2-2.8" /></svg>,
  },
  {
    id: "ufore",
    label: "Uføreforsikring",
    desc: "Hvis du ikke kan jobbe",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></svg>,
  },
  {
    id: "barne",
    label: "Barneforsikring",
    desc: "Sykdom og ulykker",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9 15c.8.8 1.9 1 3 1s2.2-.2 3-1" /><circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" /></svg>,
  },
  {
    id: "ulykke",
    label: "Ulykkesforsikring",
    desc: "Varig skade",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
  },
  {
    id: "kritisk",
    label: "Kritisk sykdom",
    desc: "Skattefri engangssum",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: FF, minHeight: "100vh", background: "white", color: "#1a1a1a", lineHeight: 1.6 }}>
      <Header />

      <main style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>

        {/* Hero */}
        <div style={{ padding: "60px 0 52px", maxWidth: 640 }}>
          <div style={{ display: "inline-block", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: BLUE, background: BL, border: `1px solid ${BM}`, borderRadius: 6, padding: "4px 10px", marginBottom: 20 }}>
            Gratis og uavhengig
          </div>
          <h1 style={{ fontSize: "clamp(32px,5.5vw,52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 20px", color: "#111" }}>
            Har du forsikringene du trenger? <span style={{ color: BLUE }}>egentlig</span>?
          </h1>
          <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7, margin: "0 0 32px", maxWidth: 500 }}>
            Kryss av din livssituasjon og få et ærlig svar. Ingen salg, ingen provisjon.
          </p>
          <button
            onClick={() => navigate("/forsikringer")}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: BLUE, color: "white", border: "none", borderRadius: 10, padding: "16px 32px", fontSize: 17, fontWeight: 700, cursor: "pointer", fontFamily: FF, letterSpacing: "-0.01em", boxShadow: `0 4px 20px ${BLUE}44` }}
          >
            Finn mine forsikringer
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <p style={{ fontSize: 13, color: "#BBB", marginTop: 14 }}>Tar under 1 minutt</p>
        </div>

        {/* Grid */}
        <div style={{ paddingBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#111", margin: "0 0 20px" }}>
            Utforsk forsikringstyper
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {GRID_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => navigate(`/forsikringer?card=${item.id}`)}
                style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, padding: "20px", borderRadius: 12, border: "1px solid #EBEBEB", background: "white", cursor: "pointer", textAlign: "left", fontFamily: FF, transition: "border-color 0.15s, box-shadow 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BM; e.currentTarget.style.boxShadow = `0 4px 16px ${BLUE}12`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#EBEBEB"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <span style={{ color: BLUE, display: "flex" }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: "#999", lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
