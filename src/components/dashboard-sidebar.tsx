"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  LayoutDashboard,
  MapPin,
  Car,
  Route,
  Building2,
  HelpCircle,
  Users,
  Settings,
  ChevronDown,
} from "lucide-react";

interface NavGroup {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: string[];
}

const navGroups: NavGroup[] = [
  {
    title: "Pin management",
    icon: MapPin,
    children: [
      "Accommodation",
      "Sights",
      "Activities",
      "Emergency",
      "Support",
      "Support Namibia",
      "City / Town",
      "Sub-Categories",
      "Legend of the Pins",
    ],
  },
  {
    title: "Car Rentals",
    icon: Car,
    children: ["Car Types", "Car Banners"],
  },
  {
    title: "Trip management",
    icon: Route,
    children: ["Trips"],
  },
  {
    title: "Agency management",
    icon: Building2,
    children: [
      "Agencies",
      "Subscriptions",
      "PIN Requests",
      "Payment Gateway",
    ],
  },
  {
    title: "Inquiries",
    icon: HelpCircle,
    children: [
      "Car Rental Inquiries",
      "Trip Inquiries",
      "Activity / Accommodation Inquiries",
    ],
  },
  {
    title: "User management",
    icon: Users,
    children: ["App Users", "Admin Users"],
  },
  {
    title: "Configuration",
    icon: Settings,
    children: [
      "App Settings",
      "Website Manager",
      "Notifications & Promotion Email",
      "App Update",
      "Feedback",
    ],
  },
];

export function DashboardSidebar() {
  const [openGroup, setOpenGroup] = useState<string | null>("Pin management");

  const toggleGroup = (title: string) => {
    setOpenGroup((current) => (current === title ? null : title));
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-[240px] border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <span className="font-semibold tracking-tight text-foreground">
          Pocketguide Namibia
        </span>
      </div>

      <nav className="flex flex-col gap-1 p-3">
        <a
          href="/"
          className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
        >
          <LayoutDashboard className="h-4 w-4 shrink-0" />
          Dashboard
        </a>

        {navGroups.map((group) => {
          const Icon = group.icon;
          const isOpen = openGroup === group.title;

          return (
            <Collapsible
              key={group.title}
              open={isOpen}
              onOpenChange={() => toggleGroup(group.title)}
            >
              <CollapsibleTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
                    isOpen && "bg-muted",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0" />
                    {group.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <ul className="ml-4 mt-1 flex flex-col gap-0.5 border-l pl-3">
                  {group.children.map((child) => (
                    <li key={child}>
                      <a
                        href="#"
                        className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </nav>
    </aside>
  );
}
