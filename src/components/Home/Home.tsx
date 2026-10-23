
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  BriefcaseBusiness,
  FileCheck2,
  TrendingUp,
  Calculator,
  Building2,
  ClipboardCheck,
  Handshake,
  CheckCircle2,
  Compass,
} from "lucide-react";

import Background3D from "@/components/Background/Background3D";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const highlights = [
  {
    icon: FileCheck2,
    title: "Tax & Compliance",
    description:
      "Support with tax filing, returns and essential compliance requirements.",
    color: "green",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Advisory",
    description:
      "Practical guidance to help businesses make informed decisions.",
    color: "orange",
  },
  {
    icon: TrendingUp,
    title: "Growth & Planning",
    description:
      "Structured support for planning, financial clarity and business growth.",
    color: "blue",
  },
];

const services = [
  {
    icon: Calculator,
    title: "Tax Consultation",
    description:
      "Income tax, tax planning and guidance to help simplify tax-related decisions.",
    number: "01",
    color: "green",
  },
  {
    icon: ClipboardCheck,
    title: "GST & Returns",
    description:
      "Assistance with GST registration, GST returns and related compliance.",
    number: "02",
    color: "orange",
  },
  {
    icon: Building2,
    title: "Business Support",
    description:
      "Business registration and support with important statutory requirements.",
    number: "03",
    color: "blue",
  },
  {
    icon: Handshake,
    title: "Advisory Services",
    description:
      "Professional guidance to help you understand your options and next steps.",
    number: "04",
    color: "green",
  },
];

const reasons = [
  "Professional and practical guidance",
  "Solutions shaped around your requirements",
  "Support across tax and business compliance",
  "A focus on clarity and long-term relationships",
];

export default function Home() {
  return (
    <main className="avs-home min-h-screen bg-white">

      {/* 1. HERO — DARK 3D NAVY BACKGROUND */}
      <section
        id="home"
        className="relative isolate flex min-h-[calc(100vh-70px)] items-center justify-center overflow-hidden bg-[#071329] px-5 pb-16 pt-24 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:px-12"
      >
        {/* Render Background3D only once, behind hero content */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Background3D />
        </div>

        {/* Dark overlay preserves the original deep navy look */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#071329]/35" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-green-400/30 bg-green-400/[0.08] px-5 py-2.5 text-sm text-green-200 shadow-lg backdrop-blur-xl"
          >
            <HeartHandshake size={18} className="text-green-400" />
            <span>Trusted Business & Tax Consultancy</span>
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-orange-400 sm:text-sm"
          >
            Welcome to AVS Max
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-4xl font-bold leading-[1.13] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[82px]"
          >
            Beyond Business.
            <span className="mt-3 block bg-gradient-to-r from-green-300 via-white to-orange-300 bg-clip-text pb-2 text-transparent">
              Towards Growth.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
          >
            Your trusted partner for professional tax consultancy, business
            guidance and compliance solutions. We simplify complex processes,
            explain your options clearly and help you move forward with
            confidence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about"
                className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-green-950/20 transition-colors hover:bg-green-400"
              >
                Discover AVS Max
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 font-semibold text-white backdrop-blur-xl transition-colors hover:border-orange-400/50 hover:bg-white/10"
              >
                Talk to Our Team
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300 sm:gap-x-8"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-green-400" />
              Trusted Guidance
            </span>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <span className="flex items-center gap-2">
              <BadgeCheck size={17} className="text-orange-400" />
              Professional Support
            </span>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <span className="flex items-center gap-2">
              <HeartHandshake size={17} className="text-sky-300" />
              Client-Focused Approach
            </span>
          </motion.div>

          {/* Hero feature cards */}
          <motion.div
            variants={containerVariants}
            className="mt-14 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              const iconColor =
                item.color === "green"
                  ? "border-green-400/20 bg-green-400/10 text-green-300"
                  : item.color === "orange"
                    ? "border-orange-400/20 bg-orange-400/10 text-orange-300"
                    : "border-sky-400/20 bg-sky-400/10 text-sky-300";

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0b1d35]/80 p-5 text-left shadow-xl shadow-black/20 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-[#102747]/90 sm:p-6"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${iconColor}`}
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* 2. WHY AVS MAX — NAVY BLUE */}
      <section
        id="why-avs-max"
        className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#102747]/90 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/[0.07] blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.08] px-4 py-2 text-sm text-green-200"
            >
              <Compass size={16} />
              Why Choose AVS Max?
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Clarity for Today.
              <span className="mt-2 block bg-gradient-to-r from-green-300 via-sky-200 to-white bg-clip-text text-transparent">
                Confidence for Tomorrow.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-slate-300"
            >
              Managing tax and business requirements can feel complicated.
              AVS Max aims to make the process easier through clear
              communication, practical guidance and support suited to your
              requirements.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold text-green-300 transition-colors hover:text-green-200"
              >
                Learn more about us
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="rounded-3xl border border-white/10 bg-[#0a1b32]/75 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
          >
            <motion.div variants={fadeUp} className="mb-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-green-300">
                <ShieldCheck size={25} />
              </div>

              <h3 className="mt-5 text-xl font-semibold sm:text-2xl">
                Support You Can Understand
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-400">
                Our focus is on making important business and tax processes
                easier to understand and navigate.
              </p>
            </motion.div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4"
                >
                  <CheckCircle2
                    size={20}
                    className={`mt-0.5 shrink-0 ${
                      index % 2 === 0
                        ? "text-green-400"
                        : "text-sky-300"
                    }`}
                  />
                  <p className="text-sm leading-6 text-slate-200">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES — DEEP DARK NAVY */}
      <section
        id="services-overview"
        className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#071329] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[100px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-green-500/[0.06] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.32em] text-orange-400 sm:text-sm"
            >
              What We Can Help With
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
            >
              Professional Support for
              <span className="mt-2 block bg-gradient-to-r from-green-300 via-white to-sky-300 bg-clip-text text-transparent">
                Your Business Journey
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400"
            >
              Explore key areas where AVS Max can support your tax,
              compliance and business consultancy needs.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon;

              const iconColor =
                service.color === "green"
                  ? "bg-green-400/10 text-green-300 border-green-400/20"
                  : service.color === "orange"
                    ? "bg-orange-400/10 text-orange-300 border-orange-400/20"
                    : "bg-sky-400/10 text-sky-300 border-sky-400/20";

              return (
                <motion.article
                  key={service.number}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1b31]/80 p-6 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-[#102440]"
                >
                  <span className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-white/25">
                    {service.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${iconColor}`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/30 via-white/10 to-transparent" />

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors group-hover:text-green-300">
                    Explore services
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-10 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3.5 font-semibold text-white backdrop-blur-lg transition-all hover:border-green-400/40 hover:bg-green-400/10"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA — WHITE BACKGROUND */}
      <section
        id="home-contact"
        className="relative isolate overflow-hidden border-t border-slate-200 bg-[white]/95 px-5 py-20 text-[#102747] sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-green-400/[0.10] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-sky-400/[0.12] blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12 text-center shadow-xl shadow-slate-900/[0.06] sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-green-400/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-sky-400/10 blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-orange-600 sm:text-sm">
              Let’s Move Forward
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#102747] sm:text-4xl lg:text-5xl">
              Have Questions About Your
              <span className="mt-2 block bg-gradient-to-r from-green-700 via-[#1e356b] to-sky-600 bg-clip-text text-transparent">
                Business or Tax Needs?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Connect with our team to discuss your requirements and explore
              the right next steps for you or your business.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-green-400"
              >
                Contact Our Team
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#1e356b]/20 bg-white px-7 py-4 font-semibold text-[#1e356b] transition-colors hover:bg-slate-100"
              >
                About AVS Max
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
