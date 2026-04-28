import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, Zap } from "lucide-react";

interface LeadFormProps {
  variant?: "hero" | "footer" | "popup";
  onSuccess?: () => void;
}

const LeadForm = ({ variant = "hero", onSuccess }: LeadFormProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [issue, setIssue] = useState("ROC Pending Filing");
  const [companyType, setCompanyType] = useState("Pvt Ltd");
  const [issueType, setIssueType] = useState("Late Filing");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Request received! Our CA team will call you shortly.", {
        description: "We'll connect on WhatsApp within 30 minutes.",
      });
      (e.target as HTMLFormElement).reset();
      onSuccess?.();
      navigate("/thank-you");
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <Label htmlFor={`name-${variant}`} className="text-sm font-semibold">Name *</Label>
        <Input id={`name-${variant}`} required placeholder="Your full name" className="mt-1 h-11" />
      </div>
      <div>
        <Label htmlFor={`mobile-${variant}`} className="text-sm font-semibold">Mobile *</Label>
        <Input
          id={`mobile-${variant}`}
          required
          type="tel"
          pattern="[0-9]{10}"
          maxLength={10}
          placeholder="10-digit mobile number"
          className="mt-1 h-11"
        />
      </div>

      {variant === "footer" && (
        <div>
          <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
          <Input id="email" required type="email" placeholder="you@example.com" className="mt-1 h-11" />
        </div>
      )}

      {variant !== "popup" && variant !== "footer" && (
        <div>
          <Label className="text-sm font-semibold">Issue Type *</Label>
          <Select value={issue} onValueChange={setIssue}>
            <SelectTrigger className="mt-1 h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ROC Pending Filing">ROC Pending Filing ✅</SelectItem>
              <SelectItem value="Penalty Issue">Penalty Issue</SelectItem>
              <SelectItem value="Compliance Issue">Compliance Issue</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {variant === "footer" && (
        <>
          <div>
            <Label className="text-sm font-semibold">Company Type *</Label>
            <Select value={companyType} onValueChange={setCompanyType}>
              <SelectTrigger className="mt-1 h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Pvt Ltd">Pvt Ltd</SelectItem>
                <SelectItem value="LLP">LLP</SelectItem>
                <SelectItem value="OPC">OPC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm font-semibold">Issue *</Label>
            <Select value={issueType} onValueChange={setIssueType}>
              <SelectTrigger className="mt-1 h-11"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Late Filing">Late Filing</SelectItem>
                <SelectItem value="Penalty">Penalty</SelectItem>
                <SelectItem value="Strike-off Risk">Strike-off Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 text-base font-bold bg-primary hover:bg-primary-dark text-primary-foreground shadow-card animate-pulse-urgent"
      >
        {loading ? "Submitting..." : variant === "footer" ? "👉 Get Expert Help" : variant === "popup" ? "👉 Save My Company" : "👉 Check Now"}
      </Button>

      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
        <Zap className="w-3.5 h-3.5 text-success" />
        <span>Quick CA response within 30 mins</span>
        <CheckCircle2 className="w-3.5 h-3.5 text-success" />
        <span>100% Confidential</span>
      </div>
    </form>
  );
};

export default LeadForm;