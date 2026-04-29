import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle, ShieldCheck, FileWarning, UserX, CheckCircle2, Trophy,
  Sparkles, Users, FileText, Phone, MessageCircle, Star, ArrowRight, Play,
  ClipboardList, Search, FileCheck, RefreshCw, Building2, MapPin, Mail
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";
import founder from "@/assets/founder.png";
import founder_1 from "@/assets/founder_1.png";
import LeadForm from "@/components/LeadForm";
import StickyCTA from "@/components/StickyCTA";
import ExitPopup from "@/components/ExitPopup";
import UrgencyTicker from "@/components/UrgencyTicker";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <UrgencyTicker />

      {/* Top Bar */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-30">
        <div className="container flex items-center justify-between py-3">
          <img src={logo} alt="Praveen J & Associates Chartered Accountants" className="h-10 md:h-12 object-contain" />
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+918169887643" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
              <Phone className="w-4 h-4" /> +91 81698 87643
            </a>
            <Button onClick={scrollToForm} className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold">
              Check Eligibility
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
        <div className="container relative grid lg:grid-cols-2 gap-8 py-10 lg:py-16 items-center">
          {/* LEFT - Video / Founder */}
          <div className="space-y-6 animate-fade-up">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent border-0 font-bold text-sm">
              ⚠️ MCA AMNESTY SCHEME 2026
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              ROC Amnesty Scheme 2026 –<br />
              <span className="text-accent">Penalty Maaf</span> Karne Ka Mauka ⚠️
            </h1>
            <p className="text-lg opacity-95">
              Late filings? Non-compliance?<br />
              👉 Abhi MCA Amnesty Scheme ka benefit lein
            </p>

            <ul className="space-y-2 text-base">
              {["Late ROC filing", "Penalty reduction / waiver", "Company compliance update"].map(t => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>

            {/* Video card */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white/20 bg-black aspect-video group cursor-pointer" onClick={() => setIsPlaying(true)}>
              {isPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/ZiDKPFht8mI?autoplay=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img src={founder_1} alt="CA Praveen Jain explains MCA ROC Amnesty Scheme" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-elevated animate-pulse-urgent">
                      <Play className="w-9 h-9 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-bold">CA Praveen Jain</p>
                    <p className="text-white/80 text-sm">Watch: Amnesty Scheme Explained in 2 mins</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                <span className="ml-1 font-semibold">4.8 Rating</span>
              </div>
              <div className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 1000+ Clients</div>
              <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Mumbai · Pune · Thane</div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div id="hero-form" className="lg:pl-6">
            <Card className="p-6 md:p-7 shadow-elevated border-2 border-accent/40 bg-card text-card-foreground">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold tracking-wider text-primary uppercase">Free Eligibility Check</span>
              </div>
              <h2 className="text-2xl font-extrabold mb-1">Check Amnesty Eligibility</h2>
              <p className="text-sm text-muted-foreground mb-5">Company compliance check karwayein</p>
              <LeadForm variant="hero" />
            </Card>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="border-primary text-primary mb-3">⚠️ ALERT</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Yeh Problems Ignore Karna<br />
              <span className="text-primary">Mehenga Pad Sakta Hai 😟</span>
            </h2>
            <p className="text-muted-foreground">Delay = bigger penalties + legal issues</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: FileWarning, text: "ROC filings pending hai?" },
              { icon: AlertTriangle, text: "Heavy penalty lag chuki hai?" },
              { icon: Building2, text: "Company non-compliant ho gayi hai?" },
              { icon: UserX, text: "Director disqualification ka risk?" },
            ].map(({ icon: Icon, text }) => (
              <Card key={text} className="p-5 border-l-4 border-l-primary bg-card hover:shadow-card transition">
                <Icon className="w-8 h-8 text-primary mb-3" />
                <p className="font-semibold">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-14 md:py-20">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="bg-success text-success-foreground mb-3">✅ SOLUTION</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Amnesty Scheme Se<br />
              <span className="text-primary">Compliance Reset Karein</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              CA Praveen Jain aur team aapki company ka complete ROC compliance clean-up karti hai.
            </p>
            <ul className="space-y-3">
              {[
                "Pending filings complete",
                "Penalty reduction guidance",
                "MCA compliance restore",
                "Future risk avoid",
              ].map(t => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-lg">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-bold">👉 Ek baar correct karein, future safe banayein</p>
            <Button onClick={scrollToForm} size="lg" className="mt-6 bg-primary hover:bg-primary-dark text-primary-foreground font-bold h-12">
              Check My Eligibility <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated bg-secondary">
              <img src={founder} alt="CA Praveen Jain — Chartered Accountant" className="w-full h-full object-cover object-top" />
            </div>
            <Card className="absolute -bottom-6 -left-4 md:-left-8 p-4 shadow-elevated bg-card max-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-success" />
                <p className="font-bold text-sm">CA Praveen Jain</p>
              </div>
              <p className="text-xs text-muted-foreground">Chartered Accountant · ROC Compliance Expert</p>
            </Card>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3">💰 SERVICES</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">What We Solve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-primary bg-card relative shadow-card">
              <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">🥇 PRIMARY</Badge>
              <Trophy className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold mb-2">ROC Amnesty</h3>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />AOC-4, MGT-7 filings</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Pending ROC forms</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Compliance correction</li>
              </ul>
              <p className="text-sm font-bold text-primary">👉 Penalty relief opportunity</p>
            </Card>

            <Card className="p-6 bg-card hover:shadow-card transition">
              <Badge variant="secondary" className="mb-3">🥈 Clean-up</Badge>
              <h3 className="text-xl font-bold mb-2">Compliance Clean-up</h3>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Strike-off risk handling</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Director status correction</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Filing backlog resolution</li>
              </ul>
              <p className="text-sm font-bold text-primary">👉 Old companies ke liye best</p>
            </Card>

            <Card className="p-6 bg-card hover:shadow-card transition">
              <Badge variant="secondary" className="mb-3">🥉 Consult</Badge>
              <h3 className="text-xl font-bold mb-2">CA Consultation</h3>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Case analysis</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Penalty estimation</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />Compliance strategy</li>
              </ul>
              <p className="text-sm font-bold text-primary">👉 Complex cases handled</p>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3">🛠 PROCESS</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">Step-by-Step Compliance Recovery</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Search, title: "Case Review", desc: "Deep analysis of company status" },
              { icon: ClipboardList, title: "Identify Filings", desc: "Pending forms & penalties listed" },
              { icon: FileCheck, title: "Filing & Correction", desc: "Forms filed via amnesty route" },
              { icon: RefreshCw, title: "Compliance Restore", desc: "Company status fully restored" },
            ].map((s, i) => (
              <Card key={s.title} className="p-5 text-center hover:shadow-card transition relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <s.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-3">📑 DOCUMENTS</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">What You Need to Share</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Company details (CIN, PAN)", "Director details (DIN, KYC)", "Previous filings (if available)"].map(d => (
              <Card key={d} className="p-5 text-center bg-card">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">{d}</p>
              </Card>
            ))}
          </div>
          <p className="text-center mt-6 text-lg font-semibold">👉 Missing? Hum guide karenge</p>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-3">⭐ TRUSTED</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Business Owners Trust Us</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
              <span className="ml-2 text-xl font-bold">5/5</span>
              <span className="text-muted-foreground ml-1">(1000+ clients)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote: "Excellent experience in tax services with Mr. Praveen Jain...very prompt, knowledgeable, hassle-free, reliable and efficient service.", name: "Sajal Sahu" },
              { quote: "Hi, I was referred to CA Praveen Jain by a friend and I must say I am extremely happy with his services.", name: "Anita M."},
              { quote: "Amazing services by Praveen Jain and associates are always available for any queries. Had a quick service over the phone by itself to file my tax returns.", name: "Ankur Bhalla"},
            ].map(t => (
              <Card key={t.name} className="p-6 hover:shadow-card transition">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="italic mb-4">"{t.quote}"</p>
                <div className="border-t border-border pt-3">
                  <p className="font-bold text-sm">{t.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 md:py-20 bg-gradient-hero text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <Badge className="bg-accent text-accent-foreground mb-4 text-sm">⏳ TIME-SENSITIVE</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Limited Time Opportunity –<br />Miss Mat Karein ⏳
          </h2>
          <p className="text-lg opacity-95 mb-8">
            👉 Amnesty scheme limited time ke liye hota hai<br />
            👉 Delay se benefit miss ho sakta hai
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={scrollToForm} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-14 px-8 text-base">
              🔴 Check Eligibility Now
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-whatsapp hover:bg-whatsapp/90 border-0 text-white font-bold h-14 px-8 text-base">
              <a href="https://wa.me/918169887643?text=Hi,%20I%20need%20help%20with%20ROC%20Amnesty%20Scheme">
                <MessageCircle className="w-5 h-5 mr-2" /> Talk to CA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3">❓ FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "ROC Amnesty Scheme kya hota hai?", a: "Late filings par penalty relief dene ka special MCA scheme hai. Companies apni pending ROC compliance bina heavy penalty ke complete kar sakti hai." },
              { q: "Kaun eligible hai?", a: "Sabhi companies (Pvt Ltd, LLP, OPC) jinke ROC filings pending hai aur jinhe penalty lag chuki hai ya lagne wali hai. Strike-off risk wali companies bhi eligible hain." },
              { q: "Kya penalty completely maaf hoti hai?", a: "Case to case depend karta hai. Kuch cases mein significant waiver milta hai, kuch mein partial relief. Hum aapka case analyze karke exact estimation denge." },
              { q: "Kitna time lagta hai filing complete karne mein?", a: "Documents milne ke 7-15 working days ke andar zyada filings complete ho jati hai. Complex cases mein zyada time lag sakta hai." },
              { q: "Director disqualification revive ho sakti hai?", a: "Haan, certain conditions ke under Director status correction possible hai. Hum complete strategy banakar process karte hain." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-5 bg-card">
                <AccordionTrigger className="text-left font-bold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER FORM */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container max-w-2xl">
          <Card className="p-7 md:p-10 shadow-elevated border-2 border-primary/30">
            <div className="text-center mb-6">
              <Badge className="bg-primary text-primary-foreground mb-3">🚀 GET STARTED</Badge>
              <h2 className="text-3xl font-extrabold mb-2">Fix Your ROC Compliance Today</h2>
              <p className="text-muted-foreground">Details share karein — CA guide karega</p>
            </div>
            <LeadForm variant="footer" />
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <img src={logo} alt="Praveen J & Associates" className="h-12 bg-white rounded p-1 mb-3" />
              <p className="text-sm opacity-80">Chartered Accountants specializing in ROC compliance, MCA filings, and tax advisory across Mumbai, Navi Mumbai, Thane & Pune.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 81698 87643</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@praveenjca.com</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mumbai · Navi Mumbai · Thane · Pune</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="space-y-1 text-sm opacity-80">
                <li>ROC Amnesty Scheme</li>
                <li>Compliance Clean-up</li>
                <li>CA Consultation</li>
                <li>Income Tax Filing</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-5 text-center text-xs opacity-70">
            © {new Date().getFullYear()} Praveen J & Associates · All Rights Reserved · This is an advisory service. Outcomes vary case-to-case.
          </div>
        </div>
      </footer>

      <StickyCTA />
      <ExitPopup />
    </div>
  );
};

export default Index;
