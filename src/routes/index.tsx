import { createFileRoute } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { MetricCard } from "@/components/metric-card";

export const Route = createFileRoute("/")({
  component: Index,
});

const metrics: Array<{
  label: string;
  value: string;
  breakdown?: string;
  accent: "ochre" | "terracotta";
}> = [
  {
    label: "Total users",
    value: "12,847",
    breakdown: "Premium 3,241 · Standard 9,606",
    accent: "ochre",
  },
  {
    label: "AGENCY USERS BY TYPE",
    value: "9,118",
    breakdown: "Client users 7,205 · Travel parties 1,913",
    accent: "ochre",
  },
  {
    label: "Agencies",
    value: "186",
    breakdown: "Active 142 · Pending 31 · Expired 13",
    accent: "ochre",
  },
  {
    label: "Pending car inquiries",
    value: "24",
    accent: "terracotta",
  },
  {
    label: "Pending trip inquiries",
    value: "18",
    accent: "terracotta",
  },
  {
    label: "Pending other inquiries",
    value: "56",
    accent: "terracotta",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="ml-[240px] min-h-screen p-8">
        <header className="mb-10">
          <h1 className="font-display text-[21px] font-semibold tracking-[-0.01em] text-foreground">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of users, agencies, and open inquiries.
          </p>
          <div className="mt-4 h-[2px] w-9 bg-ochre" />
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>
      </main>
    </div>
  );
}
