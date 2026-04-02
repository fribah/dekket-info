import { useState, useEffect } from "react";
import { FF } from "../constants";

const Logo = ({ size = 28, color = "#111" }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 24 28" fill="none">
    <path d="M2 3C2 2 2.5 1 4 1h8c7 0 11 5 11 12.5S19 26 12 26H4c-1.5 0-2-1-2-2V3z" fill={color} />
    <path d="M7 6h5c4.5 0 7.5 3.2 7.5 8S16.5 22 12 22H7V6z" fill="white" />
    <path d="M10 9.5h2c2.8 0 4.5 2.2 4.5 4.8S14.8 19 12 19h-2V9.5z" fill={color} />
  </svg>
);

const NAV_ITEMS = [
  { l: "Innboforsikring", id: "innbo" },
  { l: "Bilforsikring", id: "bil_f" },
  { l: "Reiseforsikring", id: "reise" },
  { l: "Husforsikring", id: "hus" },
  { l: "Livsforsikring", id: "liv_m" },
  { l: "Uføreforsikring", id: "ufore" },
  { l: "Barneforsikring", id: "barne" },
  { l: "Ulykkesforsikring", id: "ulykke" },
  { l: "Kritisk sykdom", id: "kritisk" },
  { l: "Behandlingsforsikring", id: "behandling" },
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const c = () => setIsMobile(window.innerWidth < 640);
    c();
    window.addEventListener("resize", c);
    return () => window.removeEventListener("resize", c);
  }, []);

  const goToCard = (id) => {
    setShowNav(false);
    setTimeout(() => {
      document.getElementById(`card-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", maxWidth: 920, margin: "0 auto", position: "relative" }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
        <Logo size={26} />
        <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em", color: "#111", fontFamily: FF }}>dekket.info</span>
      </a>

      <div style={{ position: "relative" }}>
        {isMobile ? (
          <button onClick={() => setShowNav(!showNav)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#555", display: "flex", padding: 4 }}>
            {showNav ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        ) : (
          <button onClick={() => setShowNav(!showNav)} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: "#555", background: "transparent", border: "none", padding: "7px 0", cursor: "pointer", fontFamily: FF }}>
            Forsikringer
            <span style={{ display: "flex", transform: showNav ? "rotate(180deg)" : "", transition: "0.15s" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </button>
        )}

        {showNav && (<>
          {isMobile && <div onClick={() => setShowNav(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 99 }} />}
          <div style={{ position: isMobile ? "fixed" : "absolute", ...(isMobile ? { top: 0, right: 0, bottom: 0, width: 260, background: "white", zIndex: 100, padding: "60px 0 20px", boxShadow: "-4px 0 20px rgba(0,0,0,0.1)", overflowY: "auto" } : { right: 0, top: "calc(100% + 4px)", background: "white", border: "1px solid #E5E5E5", borderRadius: 10, padding: "6px 0", minWidth: 220, boxShadow: "0 8px 30px rgba(0,0,0,0.08)", zIndex: 100 }) }}>
            {isMobile && (
              <button onClick={() => setShowNav(false)} style={{ position: "absolute", top: 14, right: 14, background: "none", border: "none", cursor: "pointer", color: "#999" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
              </button>
            )}
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => goToCard(item.id)} style={{ display: "block", width: "100%", textAlign: "left", padding: isMobile ? "12px 24px" : "8px 16px", fontSize: isMobile ? 15 : 13, fontWeight: 500, color: "#444", background: "transparent", border: "none", cursor: "pointer", fontFamily: FF }}>
                {item.l}
              </button>
            ))}
            <div style={{ borderTop: "1px solid #EEEEEE", margin: "6px 0" }} />
            <a href="/forsikring" style={{ display: "block", padding: isMobile ? "12px 24px" : "8px 16px", fontSize: isMobile ? 15 : 13, fontWeight: 700, color: "#1D4ED8", textDecoration: "none", fontFamily: FF }}>
              Finn mine forsikringer →
            </a>
          </div>
        </>)}
      </div>
    </nav>
  );
}
