
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Building2,
  BriefcaseBusiness,
  Award,
  MessageSquareQuote,
  Info,
  Phone,
  Newspaper,
  FileText,
  BookOpen,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About Us",
    href: "#about",
    icon: Info,
  },
  {
    name: "Business Support",
    href: "#business-support",
    icon: Building2,
  },
  {
    name: "Services",
    href: "#services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Resources",
    icon: Newspaper,
    children: [
      { name: "News & Updates", href: "#twitter", icon: Newspaper },
      { name: "Blog / Articles", href: "#blog", icon: BookOpen },
      { name: "Tax Resources", href: "#resources", icon: FileText },
    ],
  },
  {
    name: "More",
    icon: ChevronDown,
    children: [
      { name: "Certifications", href: "#certifications", icon: Award },
      { name: "Testimonials", href: "#testimonials", icon: MessageSquareQuote },
    ],
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Phone,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1E356B]/10 bg-white/75 shadow-[0_4px_24px_rgba(30,53,107,0.06)] backdrop-blur-xl">
    {/* <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#142950]/55 shadow-[0_4px_24px_rgba(10,25,55,0.18)] backdrop-blur-xl">  */}

      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Logo / Brand */}
        <Link
          href="#home"
          className="group flex shrink-0 items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          {/* <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E356B] text-white shadow-md transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
            <Building2 size={25} strokeWidth={1.8} />
          </span> */}
          <Image 
             src="/AVS-logo.png"
    alt="AVS Max - Tax Consultancy and Business Advisors"
    width={55}
    height={65}
    priority
    />

          <span className="flex flex-col leading-tight">
            <span className="text-[25px] font-extrabold tracking-tight text-[#1E356B]">
              AVS <span className="text-[#F39A32]">Max</span>
                       {/* 25+ Years Experience Badge */}
  {/* <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#59B83F]/30 bg-[#59B83F]/10 px-2.5 py-1 text-[11px] font-bold text-[#2d6e1e]">
    <Award size={13} className="text-[#59B83F]" />
    <span>25+ Yrs Exp</span>
  </div> */}
            </span>
            <span className="mt-0.5 text-[9px] font-semibold tracking-[1.5px] text-[#666A70]">
              TAX CONSULTANCY & BUSINESS ADVISORS
            </span>
          </span>
          {/* 25+ Years Experience Badge */}
  {/* <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#59B83F]/30 bg-[#59B83F]/10 px-2.5 py-1 text-[11px] font-bold text-[#2d6e1e]">
    <Award size={13} className="text-[#59B83F]" />
    <span>25+ Yrs Exp</span>
  </div> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.name} className="group relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1.5 rounded-lg px-3 py-3 text-[13px] font-semibold text-[#263858] transition-all duration-200 hover:bg-[#E8EEF8] hover:text-[#1E356B] 2xl:px-4 2xl:text-sm"
                  >
                    {item.name}
                    <span className="absolute bottom-1.5 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-[#F39A32] transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      className="flex items-center gap-1.5 rounded-lg px-3 py-3 text-[13px] font-semibold text-[#263858] transition-all duration-200 hover:bg-[#E8EEF8] hover:text-[#1E356B] 2xl:px-4 2xl:text-sm"
                    >
                      {item.name}
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown */}
                    <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-[#1E356B]/10 bg-white p-2 shadow-[0_18px_45px_rgba(30,53,107,0.15)]">
                        <div className="mb-1 px-3 py-2 text-[10px] font-bold uppercase tracking-[1.8px] text-[#666A70]">
                          Explore {item.name}
                        </div>

                        {item.children?.map((child) => {
                          const ChildIcon = child.icon;

                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="group/link flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#263858] transition-all duration-200 hover:translate-x-1 hover:bg-[#F5F7FA] hover:text-[#1E356B]"
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8EEF8] text-[#1E356B] transition-colors group-hover/link:bg-[#1E356B] group-hover/link:text-white">
                                <ChildIcon size={17} />
                              </span>
                              {child.name}
                            </Link>
                          );
                        })}

                        <div className="mx-3 mt-2 h-[2px] rounded-full bg-gradient-to-r from-[#59B83F] via-[#F39A32] to-transparent" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="ml-3 hidden shrink-0 items-center gap-2 rounded-xl bg-[#1E356B] px-4 py-3 text-sm font-bold text-white shadow-md shadow-[#1E356B]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F39A32] hover:shadow-lg hover:shadow-[#F39A32]/20 xl:flex"
        >
          Let&apos;s Talk
          <span className="text-lg leading-none">↗</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1E356B]/10 bg-[#F5F7FA] text-[#1E356B] transition-colors hover:bg-[#E8EEF8] xl:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
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
            const isDropdown = !!item.children;
            const isExpanded = mobileDropdown === item.name;

            return (
              <div key={item.name}>
                {isDropdown ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setMobileDropdown(isExpanded ? null : item.name)
                      }
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-left text-sm font-semibold text-[#263858] transition-colors hover:bg-[#E8EEF8]"
                    >
                      <Icon size={19} className="text-[#1E356B]" />
                      <span className="flex-1">{item.name}</span>
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-[#F39A32]" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-6 border-l-2 border-[#E8EEF8] py-1 pl-3">
                          {item.children?.map((child) => {
                            const ChildIcon = child.icon;

                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileDropdown(null);
                                }}
                                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#666A70] transition-colors hover:bg-[#F5F7FA] hover:text-[#1E356B]"
                              >
                                <ChildIcon size={17} />
                                {child.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-semibold text-[#263858] transition-colors hover:bg-[#E8EEF8] hover:text-[#1E356B]"
                  >
                    <Icon size={19} className="text-[#1E356B]" />
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}

          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#1E356B] px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#F39A32]"
          >
            Book a Consultation <span className="text-lg">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
