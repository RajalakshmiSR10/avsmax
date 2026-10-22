
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Compass,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

import aboutImage from "./About.png";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    description:
      "We believe in transparent communication, responsible guidance, and building lasting professional relationships.",
    color: "text-[#39852A]",
    background: "bg-[#59B83F]/10",
    border: "border-[#59B83F]/25",
  },
  {
    icon: Lightbulb,
    title: "Practical Thinking",
    description:
      "We focus on clear explanations and practical solutions that help you approach challenges with confidence.",
    color: "text-[#B9680B]",
    background: "bg-[#F39A32]/10",
    border: "border-[#F39A32]/25",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We aim to understand your needs and provide guidance that supports your individual or business goals.",
    color: "text-[#2876A5]",
    background: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
];

export default function AboutPage() {
  const ctaRef = useRef<HTMLDivElement>(null);




  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#F4F7FB] px-5 py-20 text-[#17324D] sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#F39A32]/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#59B83F]/10 blur-[100px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* About image and content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left image */}
          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-3xl border-l-4 border-t-4 border-[#59B83F] sm:-left-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-xl shadow-slate-900/10">
              <Image
                src={aboutImage}
                alt="AVS Max professional team and consultancy"
                width={700}
                height={800}
                priority
                className="h-[340px] w-full rounded-2xl object-cover sm:h-[440px] lg:h-[520px]"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8">
                <p className="text-3xl font-extrabold text-[#39852A]">
                  25+
                </p>
                <p className="mt-1 text-sm font-semibold text-[#17324D]">
                  Years of Experience
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-br-3xl border-b-4 border-r-4 border-[#F39A32] sm:-bottom-5 sm:-right-5" />
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F39A32]/25 bg-[#F39A32]/[0.08] px-4 py-2 text-sm font-medium text-[#B9680B]">
              <Compass size={16} />
              <span>Get to Know Us</span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#17324D] sm:text-4xl lg:text-5xl">
              Experience You Can Trust.
              <span className="mt-2 block text-[#39852A]">
                Guidance You Can Rely On.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              AVS Max is built around a simple idea: professional
              guidance should be clear, reliable, and focused on
              helping people and businesses move forward. With over
              25 years of experience, we bring knowledge and a
              practical perspective to every professional relationship.
            </p>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B9680B]">
                Who We Are
              </p>

              <h3 className="mt-3 text-xl font-bold leading-snug text-[#17324D] sm:text-2xl">
                A professional partner for your next step.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We understand that every person and business has
                different priorities. Our approach begins with
                listening, understanding your requirements, and
                helping you identify a clear way forward.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Our aim is to make complex matters easier to understand
                and provide dependable professional support, helping
                you focus on what matters most.
              </p>

              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#39852A] transition-all duration-300 hover:gap-3 hover:text-[#B9680B]"
              >
                Connect with AVS Max
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F39A32]/40 hover:shadow-lg hover:shadow-slate-900/5 sm:p-8"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F39A32]/20 bg-[#F39A32]/10 text-[#B9680B] transition duration-300 group-hover:scale-105">
                <Target size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#17324D]">
                Our Mission
              </h3>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              To provide clear, reliable, and professional guidance
              that helps our clients understand their options and
              make informed decisions.
            </p>
          </motion.div>

          <motion.div
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#59B83F]/40 hover:shadow-lg hover:shadow-slate-900/5 sm:p-8"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#59B83F]/20 bg-[#59B83F]/10 text-[#39852A] transition duration-300 group-hover:scale-105">
                <Compass size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#17324D]">
                Our Vision
              </h3>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              To build lasting client relationships by making
              professional services more approachable and supporting
              sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <motion.div
            className="mb-9"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#39852A]">
              What Matters to Us
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#17324D] sm:text-3xl">
              The Values Behind Our Work
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              The principles that guide our approach and shape the
              way we work with individuals and businesses.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  className={`rounded-2xl border ${value.border} bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.background} ${value.color}`}
                  >
                    <Icon size={24} />
                  </div>

                  <h4 className="mt-6 text-lg font-bold text-[#17324D]">
                    {value.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll-animated CTA: content left, button right */}
        <motion.div
          ref={ctaRef}
          className="relative mt-16 overflow-hidden rounded-3xl border p-7 shadow-xl shadow-slate-900/10 sm:p-10 lg:p-12"
          style={{
            // borderColor: ctaBorderColor,
            background:
              "linear-gradient(90deg, #071326 0%, #142C4B 32%, #DCE8F4 72%, #FFFFFF 100%)",
          }}
        >
          {/* White layer fades in as the user scrolls */}
        

          {/* Decorative green light */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-[#59B83F]/20 blur-[90px]"
            
          />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            {/* Left content */}
            <div className="max-w-2xl">
              <motion.p
                // style={{ color: ctaEyebrowColor }}
                className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#F39A32]"
              >
                Your Growth, Our Commitment
              </motion.p>

              <motion.h3
                // style={{ color: ctaHeadingColor }}
                className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl text-[#FFFFFF]"
              >
                Let’s Move Forward Together.
              </motion.h3>

              <motion.p
                // style={{ color: ctaTextColor }}
                className="mt-4 max-w-xl leading-7 sm:text-lg text-gray-300"
              >
                Tell us what you need. Let’s explore how AVS Max can
                help you move forward with clarity and confidence.
              </motion.p>
            </div>

            {/* Right-side button */}
            <Link
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#59B83F] px-6 py-4 font-bold text-[#102719] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F39A32] md:self-center"
            >
              Get in Touch
              <ArrowRight size={19} />
            </Link>
          </div>  
        </motion.div>
      </div>
    </section>
  );
}
