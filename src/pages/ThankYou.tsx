import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MessageCircle, Phone, ClipboardList, FileCheck, Rocket, ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import founder from "@/assets/founder.png";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container flex items-center justify-between py-3">
          <img src={logo} alt="Praveen J & Associates" className="h-10 md:h-12 object-contain" />
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-primary flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="container py-10 md:py-16 max-w-4xl">
        {/* Success Hero */}
        <Card className="p-8 md:p-12 text-center shadow-elevated border-2 border-success/30 bg-card animate-fade-up">
          <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-5">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          <Badge className="bg-success text-success-foreground mb-4">✅ REQUEST RECEIVED</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
            Your Request is Received ✅
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            CA team aapse jaldi connect karegi — usually within <span className="font-bold text-foreground">30 minutes</span> on WhatsApp & call.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white font-bold h-14 px-8 animate-pulse-urgent">
              <a href="https://wa.me/918169887643?text=Hi,%20I%20just%20submitted%20a%20request%20for%20ROC%20Amnesty%20help">
                <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold h-14 px-8">
              <a href="tel:+918169887643">
                <Phone className="w-5 h-5 mr-2" /> Call CA Directly
              </a>
            </Button>
          </div>
        </Card>

        {/* Next Steps */}
        <div className="mt-10">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3">📌 NEXT STEPS</Badge>
            <h2 className="text-2xl md:text-3xl font-extrabold">What Happens Next?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ClipboardList, title: "Compliance Review", desc: "CA reviews your company status, pending filings & penalty exposure" },
              { icon: FileCheck, title: "Filing Plan", desc: "Customised amnesty filing plan with timeline & exact cost estimate" },
              { icon: Rocket, title: "Execution", desc: "End-to-end ROC filing, penalty mitigation & compliance restoration" },
            ].map((s, i) => (
              <Card key={s.title} className="p-6 relative hover:shadow-card transition">
                <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <s.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Founder reassurance */}
        <Card className="mt-10 p-6 md:p-8 bg-gradient-hero text-primary-foreground border-0 shadow-elevated">
          <div className="grid md:grid-cols-[140px_1fr] gap-5 items-center">
            <img src={founder} alt="CA Praveen Jain" className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover object-top border-4 border-white/30 mx-auto" />
            <div className="text-center md:text-left">
              <div className="flex gap-1 justify-center md:justify-start mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-lg italic mb-2">
                "Aap sahi jagah pe aaye hain. Hum 1000+ companies ki ROC compliance handle kar chuke hain. Tension mat lijiye — hum sab manage karenge."
              </p>
              <p className="font-bold">— CA Praveen Jain</p>
              <p className="text-sm opacity-80">Founder · Praveen J & Associates</p>
            </div>
          </div>
        </Card>

        {/* Trust line */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          📞 Urgent? Call <a href="tel:+918169887643" className="font-bold text-primary">+91 81698 87643</a> · ✉️ <a href="mailto:contact@praveenjca.com" className="font-bold text-primary">contact@praveenjca.com</a>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;