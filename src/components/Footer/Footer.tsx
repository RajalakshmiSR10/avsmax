"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Business Support", href: "/#business-support" },
  { name: "Services", href: "/#services" },
  { name: "Certifications", href: "/#certifications" },
  { name: "News & Updates", href: "/#news" },
  { name: "Contact Us", href: "/#contact" },
];

const services = [
  { name: "GST Registration & Filing", href: "/#services" },
  { name: "Income Tax Returns", href: "/#services" },
  { name: "Tax Planning & Consultation", href: "/#services" },
  { name: "Audit & Compliance", href: "/#services" },
  { name: "Business Registration", href: "/#services" },
  { name: "Accounting Services", href: "/#services" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "Twitter", href: "#", icon: FaXTwitter },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "Instagram", href: "#", icon: FaInstagram },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : itemVariants;

  return (
    <footer className="relative isolate overflow-hidden bg-[#142950] text-white">
      {/* Decorative background lighting */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#F39A32]/10 blur-[100px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        {/* Main footer columns */}
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.08,
          }}
        >
          {/* Company information */}
          <motion.div variants={variants}>
            <Link href="/" className="inline-flex items-center gap-3">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow-md"
              >
                <img
                  src="/AVS-logo.png"
                  alt="AVS Max Logo"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  AVS <span className="text-[#F39A32]">Max</span>
                </h2>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                  Tax & Business Advisors
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-300 sm:text-base">
              Your trusted partner for tax consultation, GST,
              business compliance, and professional advisory
              services. Helping individuals and businesses move
              forward with confidence.
            </p>

            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.03, x: 3 }
              }
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5"
            >
              <ShieldCheck size={18} className="text-[#59B83F]" />

              <span className="text-sm font-semibold text-slate-100">
                25+ Years of Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={variants}>
            <h3 className="text-xl font-bold text-[#F39A32]">
              Quick Links
            </h3>

            <div className="mb-6 mt-3 h-1 w-12 rounded-full bg-[#F39A32]" />

            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, x: -12 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 hover:text-white sm:text-base"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F39A32] opacity-70 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />

                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={variants}>
            <h3 className="text-xl font-bold text-[#F39A32]">
              Our Services
            </h3>

            <div className="mb-6 mt-3 h-1 w-12 rounded-full bg-[#F39A32]" />

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 hover:text-white sm:text-base"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F39A32] opacity-70 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />

                    <span>{service.name}</span>

                    <ArrowUpRight
                      size={14}
                      className="shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact and social links */}
          <motion.div variants={variants}>
            <h3 className="text-xl font-bold text-[#F39A32]">
              Get in Touch
            </h3>

            <div className="mb-6 mt-3 h-1 w-12 rounded-full bg-[#F39A32]" />

            <p className="mb-6 text-sm leading-7 text-slate-300 sm:text-base">
              Need help with taxes or business compliance? Get in
              touch with our team for professional guidance.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:info@avsmax.com"
                className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-white sm:text-base"
              >
                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-[#F39A32]"
                />
                <span>info@avsmax.com</span>
              </a>

              <a
                href="tel:+919942160024"
                className="flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-white sm:text-base"
              >
                <Phone
                  size={19}
                  className="mt-0.5 shrink-0 text-[#F39A32]"
                />
                <span>+91 99421 60024</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-[#F39A32]"
                />

                <span className="leading-7">
                  12A, Chitthu Balakrishnaiyer Street, Kamarajar Salai,
                  Madurai - 625 009
                </span>
              </div>
            </div>

            <h4 className="mb-4 mt-8 text-sm font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h4>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon: Icon }, index) => (
                <motion.a
                  key={name}
                  href={href}
                  aria-label={name}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, scale: 0.8 }
                  }
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -5, scale: 1.08 }
                  }
                  whileTap={
                    shouldReduceMotion ? undefined : { scale: 0.94 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors duration-300 hover:border-[#F39A32] hover:bg-[#F39A32] hover:text-[#17324D]"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom footer */}
        <motion.div
          className="mt-16 border-t border-white/15 pt-7 sm:mt-20"
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.1,
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-sm leading-6 text-slate-400">
              © {new Date().getFullYear()} AVS Max. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <Link
                href="/#privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/#terms"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

              <a
                href="https://avsmax.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                avsmax.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}