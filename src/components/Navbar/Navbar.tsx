
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  BriefcaseBusiness,
  Info,
  Phone,
  Newspaper,
  FileText,
  BookOpen,
  ReceiptText,
  Calculator,
  ArrowRight,
  ClipboardCheck,
  ShieldCheck,
  Building2,
  HandCoins,
  Award,
  MessageSquareQuote,
  Layers3,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: BriefcaseBusiness },
  { name: "Resources", href: "/certifications", icon: Newspaper },
  { name: "Contact", href: "/contact", icon: Phone },
];

const serviceMenuItems = [
  {
    title: "ITR & Tax Filing",
    description: "Income tax returns and tax compliance.",
    icon: ReceiptText,
    href: "/services",
  },
  {
    title: "GST Services",
    description: "GST registration, returns and advisory.",
    icon: Calculator,
    href: "/services",
  },
  {
    title: "Audit & Assurance",
    description: "Tax audits, GST audits and statutory audits.",
    icon: ShieldCheck,
    href: "/services",
  },
  {
    title: "Business Registration",
    description: "Company, LLP and startup registration.",
    icon: Building2,
    href: "/services",
  },
  {
    title: "Business Compliance",
    description: "ROC, TDS and corporate compliance support.",
    icon: ClipboardCheck,
    href: "/services",
  },
  {
    title: "Advisory & Finance",
    description: "Tax planning and project financing.",
    icon: HandCoins,
    href: "/services",
  },
];

const resourceMenuItems = [
  {
    title: "News & Updates",
    description: "Tax news and business updates.",
    icon: Newspaper,
    href: "/certifications",
  },
  {
    title: "Blog & Articles",
    description: "Useful insights for businesses and individuals.",
    icon: BookOpen,
    href: "/certifications",
  },
  {
    title: "Tax Resources",
    description: "Tax and compliance information.",
    icon: FileText,
    href: "/certifications",
  },
  {
    title: "Certifications",
    description: "Professional credentials and certifications.",
    icon: Award,
    href: "/certifications",
  },
  {
    title: "Client Testimonials",
    description: "Client experiences with AVS Max.",
    icon: MessageSquareQuote,
    href: "/testimonials",
  },
  {
    title: "Business Guides",
    description: "Helpful business and compliance guides.",
    icon: Layers3,
    href: "/certifications",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const getMegaMenuItems = (name: string) =>
    name === "Services" ? serviceMenuItems : resourceMenuItems;

  const getViewAllHref = (name: string) =>
    name === "Services" ? "/services" : "/certifications";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E356B]/10 bg-white/95 shadow-[0_4px_24px_rgba(30,53,107,0.06)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <Link
          href="/home"
          onClick={() => {
            closeMobileMenu();
            closeMegaMenu();
          }}
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/AVS-logo.png"
            alt="AVS Max logo"
            width={48}
            height={52}
            priority
            className="h-12 w-auto object-contain"
          />

          <span className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-tight text-[#1E356B]">
              AVS <span className="text-[#F39A32]">Max</span>
            </span>
            <span className="mt-1 text-[8px] font-semibold tracking-[1.2px] text-[#666A70]">
              TAX & BUSINESS CONSULTANCY
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasMegaMenu =
              item.name === "Services" || item.name === "Resources";

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (hasMegaMenu) {
                    setActiveMegaMenu(item.name);
                  } else {
                    closeMegaMenu();
                  }
                }}
              >
                {hasMegaMenu ? (
                  <button
                    type="button"
                    aria-expanded={activeMegaMenu === item.name}
                    aria-haspopup="true"
                    onClick={() =>
                      setActiveMegaMenu((current) =>
                        current === item.name ? null : item.name
                      )
                    }
                    className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold text-[#263858] transition hover:bg-[#E8EEF8] hover:text-[#1E356B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B]"
                  >
                    {item.name}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        activeMegaMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMegaMenu}
                    className="group relative flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-[#263858] transition hover:bg-[#E8EEF8] hover:text-[#1E356B]"
                  >
                    {item.name}
                    <span className="absolute bottom-1.5 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-[#F39A32] transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop contact button */}
        <Link
          href="/contact"
          onClick={closeMegaMenu}
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-[#1E356B] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#F39A32] xl:flex"
        >
          Let&apos;s Talk <ArrowRight size={16} />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((open) => !open);
            closeMegaMenu();
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1E356B]/10 bg-[#F5F7FA] text-[#1E356B] transition hover:bg-[#E8EEF8] xl:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Centered desktop dropdowns */}
      {(["Services", "Resources"] as const).map((menuName) => (
        <div
          key={menuName}
          onMouseEnter={() => setActiveMegaMenu(menuName)}
          onMouseLeave={closeMegaMenu}
          className={`fixed left-1/2 top-[76px] z-50 w-[calc(100%-32px)] max-w-[1000px] -translate-x-1/2 pt-3 transition-all duration-300 ${
            activeMegaMenu === menuName
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          {/* Rounded dropdown box */}
          <div className="overflow-hidden rounded-[28px] border border-[#1E356B]/10 bg-[#F7F8FC] shadow-[0_24px_70px_rgba(7,19,41,0.20)]">
            <div className="px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
              {/* Dropdown heading */}
              <div className="mb-5 flex items-center justify-between border-b border-[#1E356B]/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1E356B]">
                    {menuName}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#666A70]">
                    {menuName === "Services"
                      ? "Explore our professional services"
                      : "Helpful resources for your business"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeMegaMenu}
                  aria-label="Close dropdown"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E356B]/10 bg-white text-[#666A70] transition hover:border-[#F39A32]/40 hover:bg-[#FFF5E9] hover:text-[#1E356B]"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Dropdown links */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
                {getMegaMenuItems(menuName).map((entry, index) => {
                  const EntryIcon = entry.icon;

                  return (
                    <Link
                      key={`${entry.title}-${index}`}
                      href={entry.href}
                      onClick={closeMegaMenu}
                      className="group/entry flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-all duration-200 hover:border-[#1E356B]/10 hover:bg-white hover:shadow-[0_8px_24px_rgba(30,53,107,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E356B]/[0.07] text-[#1E356B] transition group-hover/entry:bg-[#F39A32]/15">
                        <EntryIcon size={19} strokeWidth={1.8} />
                      </span>

                      <span className="min-w-0 pt-0.5">
                        <span className="block text-sm font-bold text-[#1E356B] transition group-hover/entry:text-[#27852C]">
                          {entry.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-[#666A70]">
                          {entry.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Services CTA */}
              {menuName === "Services" && (
                <div className="mt-5 flex justify-end border-t border-[#1E356B]/10 pt-4">
                  <Link
                    href="/services"
                    onClick={closeMegaMenu}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1E356B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#F39A32]"
                  >
                    Explore all services
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-[#1E356B]/10 bg-white transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "max-h-[80vh] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-4 sm:px-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasMegaMenu =
              item.name === "Services" || item.name === "Resources";
            const expanded = mobileDropdown === item.name;

            return (
              <div key={item.name}>
                {hasMegaMenu ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileDropdown(expanded ? null : item.name)
                      }
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-left text-sm font-semibold text-[#263858] transition hover:bg-[#E8EEF8]"
                    >
                      <Icon size={19} className="text-[#1E356B]" />
                      <span className="flex-1">{item.name}</span>
                      <ChevronDown
                        size={17}
                        className={`transition-transform ${
                          expanded ? "rotate-180 text-[#F39A32]" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        expanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-6 border-l-2 border-[#E8EEF8] py-1 pl-3">
                          {getMegaMenuItems(item.name).map((entry, index) => {
                            const EntryIcon = entry.icon;

                            return (
                              <Link
                                key={`${entry.title}-${index}`}
                                href={entry.href}
                                onClick={closeMobileMenu}
                                className="flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-[#666A70] transition hover:bg-[#F5F7FA] hover:text-[#1E356B]"
                              >
                                <EntryIcon
                                  size={17}
                                  className="mt-0.5 shrink-0"
                                />
                                <span>{entry.title}</span>
                              </Link>
                            );
                          })}

                          <Link
                            href={getViewAllHref(item.name)}
                            onClick={closeMobileMenu}
                            className="mt-2 flex items-center gap-2 rounded-xl bg-[#1E356B] px-3 py-3 text-sm font-semibold text-white transition hover:bg-[#F39A32]"
                          >
                            View All {item.name}
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-semibold text-[#263858] transition hover:bg-[#E8EEF8] hover:text-[#1E356B]"
                  >
                    <Icon size={19} className="text-[#1E356B]" />
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#1E356B] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#F39A32]"
          >
            Let&apos;s Talk <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
