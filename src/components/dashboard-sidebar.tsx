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
  Compass,
} from "lucide-react";

interface NavChild {
  title: string;
  children?: string[];
}

interface NavGroup {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: NavChild[];
}

const navGroups: NavGroup[] = [
  {
    title: "Pin management",
    icon: MapPin,
    children: [
      { title: "Accommodation" },
      { title: "Sights" },
      { title: "Activities" },
      { title: "Emergency" },
      { title: "Support" },
      { title: "Support Namibia" },
      { title: "City / Town" },
      { title: "Sub-Categories" },
      { title: "Legend of the Pins" },
    ],
  },
  {
    title: "Car Rentals",
    icon: Car,
    children: [{ title: "Car Types" }, { title: "Car Banners" }],
  },
  {
    title: "Trip management",
    icon: Route,
    children: [{ title: "Trips" }],
  },
  {
    title: "Agency management",
    icon: Building2,
    children: [
      { title: "Agencies" },
      {
        title: "Subscriptions",
        children: ["Plans", "Promo Codes", "Active Subscriptions", "Transaction History"],
      },
      { title: "PIN Requests" },
      { title: "Payment Gateway" },
    ],
  },
  {
    title: "Inquiries",
    icon: HelpCircle,
    children: [
      { title: "Car Rental Inquiries" },
      { title: "Trip Inquiries" },
      { title: "Activity / Accommodation Inquiries" },
    ],
  },
  {
    title: "User management",
    icon: Users,
    children: [{ title: "App Users" }, { title: "Admin Users" }],
  },
  {
    title: "Configuration",
    icon: Settings,
    children: [
      { title: "App Settings" },
      { title: "Website Manager" },
      { title: "Notifications & Promotion Email" },
      { title: "App Update" },
      { title: "Feedback" },
    ],
  },
];

function NestedNavItem({ item }: { item: NavChild }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <a
        href="#"
        className="block px-3 py-1.5 text-sm text-sidebar-sub-foreground transition-colors hover:text-sidebar-active-foreground"
      >
        {item.title}
      </a>
    );
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="flex w-full items-center justify-between px-3 py-1.5 text-sm text-sidebar-sub-foreground transition-colors hover:text-sidebar-active-foreground"
        >
          {item.title}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-white/10 pl-3">
          {item.children.map((child) => (
            <li key={child}>
              <a
                href="#"
                className="block px-3 py-1.5 text-sm text-sidebar-sub-foreground transition-colors hover:text-sidebar-active-foreground"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function DashboardSidebar() {
  const [openGroup, setOpenGroup] = useState<string | null>("Pin management");

  const toggleGroup = (title: string) => {
    setOpenGroup((current) => (current === title ? null : title));
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-[240px] bg-sidebar text-sidebar-foreground">
      <div className="flex h-14 items-center border-b border-white/10 px-4">
        <span className="font-display text-[15px] font-semibold tracking-tight text-sidebar-active-foreground">
          Pocket Guide Namibia
        </span>
        <Compass className="ml-2 h-[18px] w-[18px] text-sidebar-active-foreground" />
      </div>

      <nav className="flex flex-col gap-1 p-3">
        <a
          href="/"
          className="relative flex items-center gap-3 border-l-[3px] border-ochre bg-ochre/12 px-3 py-2 text-sm font-medium text-sidebar-active-foreground"
        >
          <LayoutDashboard className="h-[15px] w-[15px] shrink-0" />
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
                    "flex w-full items-center justify-between border-l-[3px] border-transparent px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:text-sidebar-active-foreground",
                    isOpen && "text-sidebar-active-foreground",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-[15px] w-[15px] shrink-0" />
                    {group.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 opacity-70 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <ul className="ml-[19px] mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-3">
                  {group.children.map((child) => (
                    <li key={child.title}>
                      <NestedNavItem item={child} />
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
