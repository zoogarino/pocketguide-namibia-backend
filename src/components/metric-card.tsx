import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  breakdown?: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgClass: string;
  iconClass: string;
}

export function MetricCard({
  label,
  value,
  breakdown,
  icon: Icon,
  iconBgClass,
  iconClass,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className={cn("grid h-10 w-10 place-items-center rounded-lg", iconBgClass)}>
        <Icon className={cn("h-5 w-5", iconClass)} />
      </div>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-3xl font-bold tracking-tight text-card-foreground">{value}</p>
        {breakdown && <p className="mt-1 text-sm text-muted-foreground">{breakdown}</p>}
      </div>
    </div>
  );
}
