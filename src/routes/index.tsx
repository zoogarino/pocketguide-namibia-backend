import { createFileRoute } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { MetricCard } from "@/components/metric-card";
import { Users, Smartphone, Building2, Car, Route as RouteIcon, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const metrics = [
  {
    label: "Total users",
    value: "12,847",
    breakdown: "Premium 3,241 · Standard 9,606",
    icon: Users,
    iconBgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
  {
    label: "App users by type",
    value: "9,118",
    breakdown: "Client users 7,205 · Travel parties 1,913",
    icon: Smartphone,
    iconBgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
  {
    label: "Agencies",
    value: "186",
    breakdown: "Active 142 · Pending 31 · Expired 13",
    icon: Building2,
    iconBgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
  {
    label: "Pending car inquiries",
    value: "24",
    icon: Car,
    iconBgClass: "bg-amber/10",
    iconClass: "text-amber-foreground",
  },
  {
    label: "Pending trip inquiries",
    value: "18",
    icon: RouteIcon,
    iconBgClass: "bg-amber/10",
    iconClass: "text-amber-foreground",
  },
  {
    label: "Pending other inquiries",
    value: "56",
    icon: HelpCircle,
    iconBgClass: "bg-amber/10",
    iconClass: "text-amber-foreground",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="ml-[240px] min-h-screen p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of users, agencies, and open inquiries.
          </p>
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
