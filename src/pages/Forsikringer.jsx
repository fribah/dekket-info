import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BLUE, BL, BM, FF } from "../constants";

const I = {
  car:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 01-2-2v-4l2.5-5h13L21 11v4a2 2 0 01-2 2M5 17a2 2 0 002 2h1a2 2 0 002-2M14 17a2 2 0 002 2h1a2 2 0 002-2"/></svg>,
  home:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v10a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V10"/></svg>,
  key:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11.3 11.7L15 8l2 2"/><path d="M15 8l2-2"/></svg>,
  baby:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 15c.8.8 1.9 1 3 1s2.2-.2 3-1"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>,
  people:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="17" cy="9" r="2.5"/><path d="M21 21v-1.5a3 3 0 00-2-2.8"/></svg>,
  doc:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>,
  plane:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C20.3 6.7 21 5 20 4s-2.7-.3-3.5.5L13 8l-8.2-1.8a.5.5 0 00-.5.2l-1.1 1.1a.5.5 0 00.1.7L9 12l-2 2-3-.5-.5.5 2.5 2 2 2.5.5-.5-.5-3 2-2 3.7 5.7a.5.5 0 00.7.1l1.1-1.1a.5.5 0 00.2-.5z"/></svg>,
  brief:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  paw:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="8" cy="6" rx="2" ry="2.5"/><ellipse cx="16" cy="6" rx="2" ry="2.5"/><ellipse cx="5" cy="11" rx="2" ry="2.5"/><ellipse cx="19" cy="11" rx="2" ry="2.5"/><path d="M12 18c-3 0-5-2.5-5-4.5S9.5 10 12 10s5 1.5 5 3.5S15 18 12 18z"/></svg>,
  cabin:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20l10-14 10 14"/><path d="M6 20v-7l6-8.5L18 13v7"/></svg>,
  boat:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c2-1 4-1 6 0s4 1 6 0 4-1 6 0"/><path d="M4 18l-1-5h18l-1 5"/><path d="M12 13V3l-4 4"/></svg>,
  mc:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M12 17h4l3-8-4-2-3 5H7l-2 5"/></svg>,
  bike:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/><path d="M12 17.5V14l-3-3 4-3 2 3h3"/></svg>,
  phone:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>,
  loan:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  chev:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  ext:<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  check:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  dash:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  xI:<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>,
  down:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>,
};

const SITS=[
  {id:"bil",label:"Har bil",icon:I.car},{id:"bolig",label:"Eier bolig",icon:I.home},{id:"leier",label:"Leier bolig",icon:I.key},
  {id:"barn",label:"Har barn",icon:I.baby},{id:"forsorger",label:"Noen er avhengig av inntekten min",icon:I.people},
  {id:"gjeld",label:"Boliglån eller stor gjeld",icon:I.doc},{id:"reise_jobb",label:"Reiseforsikring via jobb",icon:I.plane},
  {id:"selvstendig",label:"Selvstendig næringsdrivende",icon:I.brief},{id:"hund",label:"Har hund eller katt",icon:I.paw},
  {id:"hytte",label:"Eier hytte",icon:I.cabin},{id:"bat",label:"Har båt",icon:I.boat},{id:"mc",label:"Har MC eller moped",icon:I.mc},
  {id:"dyrsykkel",label:"Dyr sykkel (over 15 000 kr)",icon:I.bike},{id:"dyrtelefon",label:"Dyr telefon uten dekning via abo",icon:I.phone},
  {id:"lan",label:"Lån/kredittkort jeg vil sikre",icon:I.loan},
];

const INS=[
  {id:"innbo",n:"Innboforsikring",p:"must",pr:"800 til 1 500 kr/år",b:true,c:()=>true,w:"Dekker alt du eier i boligen. Sofaen, PCen, klærne, sykkelen. Brenner det eller noen stjeler noe? Du får pengene tilbake.",y:"Uten denne må du kjøpe alt på nytt selv. Det blir fort dyrt.",d:"Innbo = tingene dine. Hus = bygningen. Ikke det samme.",t:"Sjekk at summen faktisk dekker det du eier. Veldig mange er underforsikret.",l:[{n:"Sammenlign priser",u:"https://www.finansportalen.no/forsikring/innboforsikring/"}]},
  {id:"hus",n:"Husforsikring",p:"must",pr:"6 000 til 25 000 kr/år",b:true,c:s=>s.has("bolig"),w:"Dekker selve huset ditt. Tak, vegger, rør, det elektriske.",y:"En vannlekkasje uten forsikring? Ikke gøy.",d:"Hus = bygningen. Innbo = greiene inni. Du trenger begge.",t:"Naturskadedekning er alltid med, det er lovpålagt.",l:[{n:"Sammenlign priser",u:"https://www.finansportalen.no/forsikring/husforsikring/"}]},
  {id:"bil_f",n:"Bilforsikring",p:"must",pr:"5 000 til 16 000 kr/år",b:true,c:s=>s.has("bil"),w:"Ansvar er lovpålagt, dekker skader du gjør på andre. Kasko dekker bilen din i tillegg.",y:"Ingen ansvarsforsikring = ingen lovlig kjøring.",d:"Ansvar = andres greier. Delkasko = tyveri og glass. Kasko = krasj. Toppkasko = alt.",t:"Ny bil? Kasko. Gammel bil? Delkasko holder.",l:[{n:"Sammenlign priser",u:"https://www.finansportalen.no/forsikring/bilforsikring/"}]},
  {id:"reise",n:"Reiseforsikring",p:"must",pr:"1 000 til 2 500 kr/år",b:true,c:s=>!s.has("reise_jobb"),w:"Dekker deg hvis du blir syk eller skadet på reise. I Norge og utlandet.",y:"Sykehus i USA? Det kan koste mer enn bilen din.",d:"Helsetrygdkortet dekker bare deler. Ikke hjemtransport.",t:"Helårsforsikring er billigere enn per reise.",l:[{n:"Helsetrygdkort",u:"https://www.helsenorge.no/europeisk-helsetrygdkort/"},{n:"Sammenlign",u:"https://www.finansportalen.no/forsikring/reiseforsikring/"}]},
  {id:"ufore",n:"Uføreforsikring",p:"must",pr:"3 000 til 10 000 kr/år",b:true,c:()=>true,w:"Gir deg penger hvis du blir for syk til å jobbe. Det skjer oftere enn folk tror.",y:"NAV gir maks 66% av lønna di. For de fleste er det et skikkelig kutt.",d:"Uføre = langsiktig, gjelder sykdom OG ulykke. Ulykkesforsikring = bare ulykker.",t:"Sjekk hva du allerede har via jobben.",l:[{n:"NAV om uføretrygd",u:"https://www.nav.no/uforetrygd"}]},
  {id:"liv_m",n:"Livsforsikring",p:"must",pr:"2 000 til 8 000 kr/år",b:true,c:s=>s.has("gjeld")&&s.has("forsorger"),w:"Utbetaler penger til familien din hvis du dør.",y:"Felles boliglån og du dør? Partneren sitter igjen med hele regninga.",d:"Livsforsikring = ved død. Uføre = du lever men kan ikke jobbe.",t:"Summen bør dekke din del av gjelden.",l:[]},
  {id:"mc_f",n:"MC/mopedforsikring",p:"must",pr:"2 000 til 10 000 kr/år",b:true,c:s=>s.has("mc"),w:"Ansvarsforsikring er lovpålagt, som for bil.",y:"Uten = ulovlig å kjøre.",d:"",t:"Moped er mye billigere å forsikre enn en sportssykkel.",l:[]},
  {id:"hytte_f",n:"Hytteforsikring",p:"must",pr:"4 000 til 15 000 kr/år",b:true,c:s=>s.has("hytte"),w:"Som husforsikring, men for hytta. Brann, vann, tyveri, naturskader.",y:"Hytta står tom store deler av året. Ekstra utsatt.",d:"Innbo hjemme dekker ofte IKKE tingene på hytta.",t:"Sjekk om innbo har hytteutvidelse.",l:[]},
  {id:"yrkes",n:"Yrkesskadeforsikring",p:"must",pr:"Varierer",b:false,c:s=>s.has("selvstendig"),w:"Lovpålagt med ansatte. Dekker skader og sykdom på jobb.",y:"Selv uten ansatte bør du ha noe.",d:"",t:"Enkeltpersonforetak bør også ha dekning.",l:[]},
  {id:"reise_s",n:"Reiseforsikring (sjekk jobben)",p:"consider",pr:"Via jobb",b:false,c:s=>s.has("reise_jobb"),w:"Du har via jobb, men mange dekker bare jobbreiser. Ikke ferie.",y:"Familien din er kanskje ikke dekket heller.",d:"",t:"Spør HR: gjelder den på fritid? Er familien med?",l:[]},
  {id:"liv_v",n:"Livsforsikring",p:"consider",pr:"2 000 til 8 000 kr/år",b:true,c:s=>s.has("forsorger")&&!(s.has("gjeld")&&s.has("forsorger")),w:"Penger til de etterlatte hvis du dør.",y:"Viktig hvis noen er avhengig av lønna di.",d:"",t:"Ingen avhengig av deg? Sannsynligvis ikke nødvendig.",l:[]},
  {id:"ulykke",n:"Ulykkesforsikring",p:"consider",pr:"500 til 2 000 kr/år",b:true,c:()=>true,w:"Engangsutbetaling hvis du blir varig skadet i en ulykke.",y:"Greit tillegg, men uføreforsikring er viktigere.",d:"Ulykke = bare ulykker. Uføre = sykdom OG ulykke.",t:"Mange har dette via jobb eller fagforening. Sjekk!",l:[]},
  {id:"kritisk",n:"Kritisk sykdom",p:"consider",pr:"1 500 til 5 000 kr/år",b:true,c:()=>true,w:"Skattefri engangssum hvis du får kreft, hjerteinfarkt, hjerneslag eller lignende.",y:"Pengene kan brukes på hva du vil. En buffer i en tøff tid.",d:"Ikke det samme som uføre eller behandling.",t:"Mest aktuelt med familie, gjeld eller lite sparepenger.",l:[]},
  {id:"barne",n:"Barneforsikring",p:"consider",pr:"1 700 til 5 500 kr/år per barn",b:true,c:s=>s.has("barn"),w:"Pakkeforsikring for ungen. Alvorlig sykdom, ulykker og uførepensjon som voksen.",y:"Staten dekker behandling, men ikke inntektstapet barnet kan få som voksen.",d:"Ikke det samme som ulykkesforsikring. Barne dekker sykdom OG ulykke.",t:"Tegn tidlig! Helst rett etter fødsel.",l:[{n:"Forbrukerrådet",u:"https://www.forbrukerradet.no/forside/okonomi/forsikring/barneforsikring/"}]},
  {id:"sykeavb",n:"Sykeavbruddsforsikring",p:"consider",pr:"3 000 til 15 000 kr/år",b:false,c:s=>s.has("selvstendig"),w:"Gir deg inntekt når du er syk og driver eget firma.",y:"Ingen jobb = ingen inntekt som selvstendig.",d:"",t:"Har du sparepenger til 3 mnd? Kanskje du klarer deg.",l:[]},
  {id:"dyr",n:"Dyreforsikring",p:"consider",pr:"2 000 til 6 000 kr/år",b:false,c:s=>s.has("hund"),w:"Dekker dyrlegen når katten eller hunden blir syk. En operasjon koster fort 20 000 til 50 000.",y:"Regningen kommer uansett.",d:"",t:"Mest verdt for unge, friske dyr.",l:[]},
  {id:"bat_f",n:"Båtforsikring",p:"consider",pr:"3 000 til 15 000 kr/år",b:true,c:s=>s.has("bat"),w:"Skader på båten og ansvar. Ikke lovpålagt, men lurt.",y:"Treffer du en brygge kan det koste hundretusenvis.",d:"",t:"Minst ansvarsforsikring.",l:[]},
  {id:"sykkel",n:"Sykkelforsikring",p:"consider",pr:"500 til 2 500 kr/år",b:false,c:s=>s.has("dyrsykkel"),w:"Tyveri, hærverk og uhell. Viktig for elsykler og dyre sykler.",y:"Innbo dekker ofte ikke uhell ute.",d:"Innbo dekker tyveri hjemme. Sykkelforsikring dekker overalt.",t:"Sjekk innbo først.",l:[]},
  {id:"betaling",n:"Betalingsforsikring",p:"consider",pr:"Varierer",b:false,c:s=>s.has("lan"),w:"Betaler lånene dine hvis du mister jobben eller blir syk.",y:"Unngår inkasso.",d:"Ikke livsforsikring (ved død).",t:"Ofte dyrt. Uføre pluss sparepenger kan være smartere.",l:[]},
  {id:"behandling",n:"Behandlingsforsikring",p:"skip",pr:"2 000 til 15 000 kr/år",b:false,c:()=>true,w:"Raskere time hos spesialist. Slipper den offentlige køen.",y:"Du har rett til gratis behandling i Norge.",d:"Ikke det samme som uføre eller kritisk sykdom.",t:"Unødvendig for de aller fleste.",l:[]},
  {id:"mobil",n:"Mobilforsikring",p:"skip",pr:"600 til 1 500 kr/år",b:false,c:s=>s.has("dyrtelefon"),w:"Dekker uhell, tyveri og skader på mobilen.",y:"Pris pluss egenandel gjør det ofte ulønnsomt.",d:"",t:"Regn på det: forsikring pluss egenandel vs. ny skjerm.",l:[]},
  {id:"id",n:"ID-tyveriforsikring",p:"skip",pr:"300 til 800 kr/år",b:false,c:()=>true,w:"Hjelper hvis noen tar opp lån i ditt navn.",y:"Skjer sjelden. Banken dekker tapet.",d:"",t:"Hjelper mest med papirarbeidet.",l:[]},
  {id:"verdi",n:"Verdisakforsikring",p:"skip",pr:"500 til 3 000 kr/år",b:false,c:()=>true,w:"Ekstra dekning for dyre smykker, klokker, kamera.",y:"Innbo har en grense per ting.",d:"",t:"Eier du ingenting over grensen? Trenger den ikke.",l:[]},
  {id:"bunad",n:"Bunadsforsikring",p:"skip",pr:"200 til 600 kr/år",b:false,c:()=>true,w:"Dekker skader, tyveri og tap av bunad.",y:"Vanskelig å erstatte.",d:"Innbo dekker hjemme, ofte ikke ute.",t:"Sjekk innbo først.",l:[]},
  {id:"klokke",n:"Klokkeforsikring",p:"skip",pr:"500 til 2 000 kr/år",b:false,c:()=>true,w:"For dyre klokker. Tap, tyveri, uhell.",y:"Relevant over 50 000.",d:"",t:"Kun aktuelt over innbogrensen.",l:[]},
  {id:"brille",n:"Brilleforsikring",p:"skip",pr:"300 til 800 kr/år",b:false,c:()=>true,w:"Uhell, tap og tyveri av briller.",y:"Progressive glass kan koste 5 000 til 15 000.",d:"",t:"Lønner seg sjelden.",l:[]},
  {id:"hore",n:"Høreapparatforsikring",p:"skip",pr:"500 til 1 500 kr/år",b:false,c:()=>true,w:"Uhell, tap og tyveri av høreapparat.",y:"Koster 10 000 til 40 000.",d:"",t:"Sjekk NAV først.",l:[]},
];

const PM={must:{label:"Du trenger disse",color:BLUE,bg:BL,border:BM,icon:I.check},consider:{label:"Bør vurderes",color:"#92400E",bg:"#FFFBEB",border:"#FDE68A",icon:I.dash},skip:{label:"Kan trolig droppes",color:"#888",bg:"#F9F9F9",border:"#E5E5E5",icon:I.xI}};

function pp(pr){const m=pr.match(/([\d\s]+)\s*til\s*([\d\s]+)/);return m?{lo:parseInt(m[1].replace(/\s/g,"")),hi:parseInt(m[2].replace(/\s/g,""))}:null;}
function fmt(n){return n.toLocaleString("nb-NO");}

export default function Forsikringer(){
  const[sel,setSel]=useState(new Set());
  const[status,setStatus]=useState({});
  const[exp,setExp]=useState(null);
  const[showSkip,setShowSkip]=useState(false);
  const[isMobile,setIsMobile]=useState(false);
  const bundleRef=useRef(null);
  const [searchParams]=useSearchParams();

  useEffect(()=>{const c=()=>setIsMobile(window.innerWidth<640);c();window.addEventListener("resize",c);return()=>window.removeEventListener("resize",c);},[]);

  useEffect(()=>{
    const card=searchParams.get("card");
    if(card){
      setExp(card);
      setTimeout(()=>{document.getElementById(`card-${card}`)?.scrollIntoView({behavior:"smooth",block:"center"});},300);
    }
  },[]);

  const tog=id=>setSel(p=>{const n=new Set(p);n.has(id)?n.delete(id):n.add(id);return n;});
  const mark=(id,s)=>setStatus(p=>{const n={...p};n[id]===s?delete n[id]:n[id]=s;return n;});

  const rel=INS.filter(i=>i.c(sel));
  const need=rel.filter(i=>!status[i.id]);
  const have=rel.filter(i=>status[i.id]==="have");
  const job=rel.filter(i=>status[i.id]==="job");
  const skipped=rel.filter(i=>status[i.id]==="skip");
  const g={must:need.filter(i=>i.p==="must"),consider:need.filter(i=>i.p==="consider"),skip:need.filter(i=>i.p==="skip")};
  const has=sel.size>0;

  const costItems=need.filter(i=>i.p!=="skip");
  const tc=costItems.reduce((a,i)=>{const p=pp(i.pr);if(p){a.lo+=p.lo;a.hi+=p.hi;}return a;},{lo:0,hi:0});

  const bNeed=need.filter(i=>i.b&&i.p!=="skip");
  const bHave=have.filter(i=>i.b);
  const allB=[...bNeed,...bHave];
  const bCost=allB.reduce((a,i)=>{const p=pp(i.pr);if(p){a.lo+=p.lo;a.hi+=p.hi;}return a;},{lo:0,hi:0});
  const savLo=Math.round(bCost.lo*0.15);
  const savHi=Math.round(bCost.hi*0.20);

  const scrollBundle=()=>bundleRef.current?.scrollIntoView({behavior:"smooth"});

  const abtn=(label,active,onClick,activeColor=BLUE)=>(
    <button onClick={e=>{e.stopPropagation();onClick();}} style={{fontSize:11,fontWeight:600,padding:"4px 10px",borderRadius:5,border:`1px solid ${active?activeColor+"55":"#DDD"}`,background:active?(activeColor===BLUE?BL:activeColor==="#16a34a"?"#f0fdf4":"#f5f5f5"):"white",color:active?activeColor:"#AAA",cursor:"pointer",fontFamily:FF}}>{label}</button>
  );

  const schema={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"dekket.info","item":"https://dekket.info/"},{"@type":"ListItem","position":2,"name":"Forsikringer","item":"https://dekket.info/forsikringer"}]};

  return(
    <div style={{fontFamily:FF,minHeight:"100vh",background:"white",color:"#1a1a1a",lineHeight:1.6}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      <Header />

      <div style={{maxWidth:920,margin:"0 auto",padding:"0 24px"}}>
        <div style={{fontSize:12,color:"#BBB",padding:"0 0 6px"}}><span style={{color:"#CCC"}}>/</span> <span style={{color:"#888",fontWeight:600}}>Forsikringer</span></div>

        {/* Hero */}
        <div style={{padding:"10px 0 36px",maxWidth:560}}>
          <h1 style={{fontSize:"clamp(28px,5vw,44px)",fontWeight:500,lineHeight:1.15,letterSpacing:"-0.03em",margin:"0 0 14px",color:"#111"}}>
            Hvilke forsikringer trenger du <span style={{color:BLUE}}>egentlig</span>?
          </h1>
          <p style={{fontSize:17,color:"#888",lineHeight:1.7,margin:0}}>
            Kryss av det som gjelder for deg. Vi gir deg et ærlig svar uten bullshit.
          </p>
        </div>

        {/* Situations */}
        <div style={{paddingBottom:28}}>
          <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#BBB",marginBottom:12}}>Min situasjon</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {SITS.map(s=>{const a=sel.has(s.id);return(
              <button key={s.id} onClick={()=>tog(s.id)} style={{display:"inline-flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:8,border:`2px solid ${a?BLUE:"transparent"}`,outline:a?"none":"1.5px solid #DDD",background:a?BL:"white",color:a?BLUE:"#555",fontSize:13,fontWeight:a?600:450,cursor:"pointer",fontFamily:FF,whiteSpace:"nowrap"}}>
                <span style={{display:"flex",opacity:a?1:0.35}}>{s.icon}</span>{s.label}
              </button>
            );})}
          </div>
        </div>

        {/* Blue bar */}
        {has&&tc.lo>0&&(
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,padding:"14px 20px",borderRadius:12,background:BLUE,color:"white",marginBottom:28}}>
            <div style={{minWidth:0}}>
              <div style={{fontWeight:700,fontSize:isMobile?15:17}}>Estimert kostnad: {fmt(tc.lo)} til {fmt(tc.hi)} kr/år</div>
              <div style={{opacity:0.65,fontSize:12,marginTop:2}}>Basert på {costItems.length} forsikring{costItems.length!==1?"er":""} du sannsynligvis trenger</div>
            </div>
            {allB.length>=2&&savLo>0&&(
              <button onClick={scrollBundle} style={{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:600,color:"white",background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:6,padding:"6px 14px",cursor:"pointer",fontFamily:FF,whiteSpace:"nowrap",flexShrink:0}}>
                Se hvordan du kan spare {fmt(savLo)} til {fmt(savHi)} kr <span style={{display:"flex"}}>{I.down}</span>
              </button>
            )}
          </div>
        )}

        {/* Cards */}
        {has&&["must","consider"].map(pr=>{
          const items=g[pr];if(!items.length)return null;const m=PM[pr];
          return(<div key={pr}>
            <div style={{display:"flex",alignItems:"center",gap:7,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:m.color,margin:"24px 0 10px"}}>
              <span style={{width:22,height:22,borderRadius:6,background:m.bg,border:`1.5px solid ${m.border}`,display:"inline-flex",alignItems:"center",justifyContent:"center",color:m.color}}>{m.icon}</span>
              {m.label} ({items.length})
            </div>
            {items.map(ins=><Card key={ins.id} ins={ins} exp={exp} setExp={setExp} st={status} mark={mark} abtn={abtn} mob={isMobile}/>)}
          </div>);
        })}

        {has&&g.skip.length>0&&(
          <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"24px 0 10px"}}>
              <div style={{display:"flex",alignItems:"center",gap:7,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:PM.skip.color}}>
                <span style={{width:22,height:22,borderRadius:6,background:PM.skip.bg,border:`1.5px solid ${PM.skip.border}`,display:"inline-flex",alignItems:"center",justifyContent:"center",color:PM.skip.color}}>{PM.skip.icon}</span>
                {PM.skip.label} ({g.skip.length})
              </div>
              <button onClick={()=>setShowSkip(!showSkip)} style={{fontSize:12,fontWeight:600,color:BLUE,background:"none",border:"none",cursor:"pointer",fontFamily:FF}}>{showSkip?"Skjul":`Se alle ${g.skip.length}`}</button>
            </div>
            {showSkip&&g.skip.map(ins=><Card key={ins.id} ins={ins} exp={exp} setExp={setExp} st={status} mark={mark} abtn={abtn} mob={isMobile}/>)}
          </div>
        )}

        {has&&(have.length>0||job.length>0||skipped.length>0)&&(
          <div style={{marginTop:20}}>
            {have.length>0&&<SG label="Har allerede" items={have} st={status} mark={mark} color="#16a34a"/>}
            {job.length>0&&<SG label="Dekket via jobb" items={job} st={status} mark={mark} color={BLUE}/>}
            {skipped.length>0&&<SG label="Trenger ikke" items={skipped} st={status} mark={mark} color="#999"/>}
          </div>
        )}

        {/* BUNDLE */}
        <div ref={bundleRef} style={{marginTop:52}}>
          <h2 style={{fontSize:"clamp(24px,3.5vw,32px)",fontWeight:500,letterSpacing:"-0.02em",color:"#111",margin:"0 0 8px"}}>
            Dette kan du spare ved å samle forsikringene dine
          </h2>
          <p style={{fontSize:15,color:"#888",margin:"0 0 20px",maxWidth:520,lineHeight:1.7}}>
            De fleste forsikringsselskaper gir 15 til 20% rabatt når du samler flere forsikringer hos dem. Det kan fort bli noen tusenlapper i året.
          </p>
          {has&&allB.length>=2?(
            <div style={{borderRadius:16,overflow:"hidden",border:`2px solid ${BLUE}`}}>
              <div style={{background:BLUE,padding:"26px 28px 22px",color:"white"}}>
                <div style={{fontSize:isMobile?22:28,fontWeight:600,letterSpacing:"-0.02em",marginBottom:6}}>Spar {fmt(savLo)} til {fmt(savHi)} kr/år</div>
                <p style={{fontSize:15,opacity:0.8,lineHeight:1.5,margin:0}}>ved å samle {allB.length} forsikringer hos samme selskap</p>
              </div>
              <div style={{background:BL,padding:"24px 28px 28px"}}>
                {bNeed.length>0&&(<>
                  <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:BLUE,marginBottom:10}}>Trenger ({bNeed.length})</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:bHave.length?20:0}}>
                    {bNeed.map(i=>{const pr=pp(i.pr);return(
                      <div key={i.id} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:10,background:"white",border:`1px solid ${BM}`,fontSize:13,flexWrap:"wrap"}}>
                        <span style={{fontWeight:600,color:"#222"}}>{i.n}</span>
                        {pr&&<span style={{fontWeight:500,color:"#999",fontSize:12}}>{fmt(pr.lo)} til {fmt(pr.hi)} kr</span>}
                      </div>
                    );})}
                  </div>
                </>)}
                {bHave.length>0&&(<>
                  <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",color:"#16a34a",marginBottom:10}}>Har allerede — flytt til samme selskap ({bHave.length})</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:20}}>
                    {bHave.map(i=>{const pr=pp(i.pr);return(
                      <div key={i.id} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:10,background:"white",border:"1px solid #bbf7d0",fontSize:13,flexWrap:"wrap"}}>
                        <span style={{fontWeight:600,color:"#222"}}>{i.n}</span>
                        {pr&&<span style={{fontWeight:500,color:"#999",fontSize:12}}>{fmt(pr.lo)} til {fmt(pr.hi)} kr</span>}
                        <span style={{fontSize:10,fontWeight:600,color:"#16a34a",background:"#f0fdf4",padding:"2px 6px",borderRadius:4}}>har</span>
                      </div>
                    );})}
                  </div>
                </>)}
                <div style={{background:"white",borderRadius:12,padding:"18px 22px",border:`1px solid ${BM}`}}>
                  <div style={{fontSize:15,fontWeight:600,color:"#111",marginBottom:8}}>Slik gjør du det</div>
                  <div style={{fontSize:14,color:"#555",lineHeight:1.7}}>
                    <p style={{margin:"0 0 6px"}}>1. Velg ett selskap (f.eks. If, Gjensidige, Tryg, Fremtind)</p>
                    <p style={{margin:"0 0 6px"}}>2. Be om tilbud på alle forsikringene samlet</p>
                    <p style={{margin:"0 0 6px"}}>3. Flytt de du allerede har. Du kan si opp med én måneds varsel.</p>
                    <p style={{margin:0}}>4. Sammenlign på <a href="https://www.finansportalen.no/forsikring/" target="_blank" rel="noopener noreferrer" style={{color:BLUE,fontWeight:600}}>Finansportalen</a></p>
                  </div>
                </div>
              </div>
            </div>
          ):(
            <div style={{borderRadius:16,background:BL,border:`1px solid ${BM}`,padding:"40px 28px",textAlign:"center"}}>
              <p style={{fontSize:15,color:"#999",margin:0}}>{has?"Marker forsikringene du har og trenger ovenfor for å se hva du kan spare.":"Velg din situasjon ovenfor, så regner vi ut hva du kan spare."}</p>
            </div>
          )}
        </div>

        {/* TIPS */}
        <div style={{marginTop:52}}>
          <h2 style={{fontSize:"clamp(22px,3vw,28px)",fontWeight:500,letterSpacing:"-0.02em",color:"#111",margin:"0 0 14px"}}>Andre måter å spare på</h2>
          <div style={{background:"#FAFAFA",borderRadius:12,padding:"22px 24px",border:"1px solid #EEEEEE"}}>
            <div style={{fontSize:14,lineHeight:1.75,color:"#555"}}>
              <p style={{margin:"0 0 8px"}}><strong>Sjekk hva jobben dekker.</strong> Mange har reise, ulykke og uføre uten å vite det.</p>
              <p style={{margin:"0 0 8px"}}><strong>Sjekk fagforeningen.</strong> Mange har forsikringsavtaler med bedre priser.</p>
              <p style={{margin:"0 0 8px"}}><strong>Øk egenandelen</strong> hvis du har noe sparepenger. Lavere årspris, men mer ved skade.</p>
              <p style={{margin:0}}><strong>Ikke betal for dobbel dekning.</strong> Mange har ulykkesforsikring både privat og via jobb. Det gir ikke dobbel utbetaling.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Card({ins,exp,setExp,st,mark,abtn,mob}){
  const open=exp===ins.id;const s=st[ins.id];
  return(
    <div id={`card-${ins.id}`} style={{background:"white",borderRadius:12,border:`1px solid ${open?BM:"#ECECEC"}`,marginBottom:8,overflow:"hidden"}}>
      <div onClick={()=>setExp(open?null:ins.id)} style={{padding:"14px 18px",cursor:"pointer",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10}}>
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{fontSize:15,fontWeight:600,color:"#111"}}>{ins.n}</span>
            <span style={{transform:open?"rotate(180deg)":"",transition:"0.15s",display:"flex",color:"#CCC",flexShrink:0}}>{I.chev}</span>
          </div>
          <p style={{fontSize:13.5,color:"#888",margin:"5px 0 0",lineHeight:1.55}}>{ins.w}</p>
        </div>
        <div style={{flexShrink:0,textAlign:"right",maxWidth:mob?"110px":"none"}}>
          <div style={{fontSize:mob?12:13,fontWeight:600,color:"#555",wordBreak:"break-word"}}>{ins.pr}</div>
        </div>
      </div>
      {open&&(
        <div style={{padding:"0 18px 16px",borderTop:"1px solid #F3F3F3",paddingTop:14}}>
          <Box bg={BL} border={BM} label="Hvorfor?" text={ins.y}/>
          {ins.d&&<Box bg="#FFFBEB" border="#FDE68A" label="Ikke forveksle med" text={ins.d}/>}
          <Box bg="#F8F8F8" border="#ECECEC" label="Tips" text={ins.t}/>
          {ins.l.length>0&&(
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12}}>
              {ins.l.map((lk,i)=>(
                <a key={i} href={lk.u} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:4,fontSize:12,color:BLUE,textDecoration:"none",padding:"5px 12px",borderRadius:6,background:BL,border:`1px solid ${BM}`,fontWeight:600,fontFamily:FF}}>{I.ext} {lk.n}</a>
              ))}
            </div>
          )}
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {abtn("Har denne allerede",s==="have",()=>mark(ins.id,"have"),"#16a34a")}
            {abtn("Dekket via jobb",s==="job",()=>mark(ins.id,"job"),BLUE)}
            {abtn("Trenger ikke",s==="skip",()=>mark(ins.id,"skip"),"#999")}
          </div>
        </div>
      )}
    </div>
  );
}

function SG({label,items,st,mark,color}){
  return(
    <div style={{marginBottom:12}}>
      <div style={{fontSize:11,fontWeight:700,color,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:6}}>{label} ({items.length})</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
        {items.map(i=>(
          <button key={i.id} onClick={()=>mark(i.id,st[i.id])} style={{fontSize:12,padding:"5px 12px",borderRadius:6,border:`1px solid ${color}33`,background:`${color}08`,color,cursor:"pointer",fontFamily:FF,fontWeight:500}}>{i.n} ×</button>
        ))}
      </div>
    </div>
  );
}

function Box({bg,border,label,text}){
  return(
    <div style={{background:bg,border:`1px solid ${border}`,borderRadius:10,padding:"12px 14px",marginBottom:10}}>
      <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"#AAA",marginBottom:3}}>{label}</div>
      <p style={{fontSize:13.5,lineHeight:1.55,color:"#444",margin:0}}>{text}</p>
    </div>
  );
}
