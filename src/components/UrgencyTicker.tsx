import { Clock } from "lucide-react";

const UrgencyTicker = () => (
  <div className="bg-primary text-primary-foreground py-2 overflow-hidden text-sm font-semibold">
    <div className="flex items-center justify-center gap-2 px-3 text-center">
      <Clock className="w-4 h-4 animate-pulse hidden sm:block" />
      <span>⚠️ MCA/ROC Amnesty Scheme 2026 — Limited Window | Penalty Waiver Available — Act Now!</span>
    </div>
  </div>
);

export default UrgencyTicker;