import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";
import { AlertTriangle } from "lucide-react";

const ExitPopup = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) {
        setOpen(true);
        setShown(true);
      }
    };
    const timer = setTimeout(() => {
      if (!shown) {
        setOpen(true);
        setShown(true);
      }
    }, 45000);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [shown]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-2 border-primary">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Penalty Bachane Ka Last Chance ⚠️
          </DialogTitle>
          <DialogDescription className="text-center">
            Amnesty scheme miss mat karein — abhi details share karein
          </DialogDescription>
        </DialogHeader>
        <LeadForm variant="popup" onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ExitPopup;