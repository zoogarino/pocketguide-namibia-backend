import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  breakdown?: string;
  accent: "ochre" | "terracotta";
}

export function MetricCard({ label, value, breakdown, accent }: MetricCardProps) {
  const ruleColor = accent === "ochre" ? "bg-ochre" : "bg-terracotta";
  const numberColor = accent === "ochre" ? "text-foreground" : "text-terracotta";
  return (
    <div className="bg-card p-6">
      <div className={cn("h-[2px] w-[18px]", ruleColor)} />
      <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 font-display text-4xl font-semibold tracking-tight tabular-nums",
          numberColor,
        )}
      >
        {value}
      </p>
      {breakdown && <p className="mt-2 text-sm text-sub-muted">{breakdown}</p>}
    </div>
  );
}
