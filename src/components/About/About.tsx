
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  Compass,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  CheckCircle2,
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
      "We understand your needs and provide guidance that supports your personal and business goals.",
    color: "text-[#1E356B]",
    background: "bg-[#1E356B]/[0.07]",
    border: "border-[#1E356B]/15",
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  // Re-trigger entrance animations when this route mounts.
  useEffect(() => {
    // Allows browser scroll restoration and route navigation to settle.
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("scroll"));
    });
  }, []);

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.65,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#1E356B] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24"
    >
      {/* Animated navy background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E356B] via-[#1A2F60] to-[#122448]" />

        {/* Moving green light */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-[20%] h-96 w-96 rounded-full bg-[#59B83F]/30 blur-[85px]"
        />

        {/* Moving orange light */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -30, 0],
                  y: [0, 35, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-[25%] h-80 w-80 rounded-full bg-[#F39A32]/25 blur-[85px]"
        />

        {/* 3D-style floating rings */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotateX: [55, 65, 55],
                  rotateY: [-15, 15, -15],
                  rotateZ: [0, 35, 0],
                  y: [0, -18, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute right-[7%] top-24 hidden h-64 w-64 rounded-full border border-[#59B83F]/40 lg:block"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotateX: [65, 45, 65],
                  rotateY: [15, -20, 15],
                  rotateZ: [0, -40, 0],
                  y: [0, 16, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute right-[10%] top-32 hidden h-48 w-48 rounded-full border border-[#F39A32]/35 lg:block"
        />

        {/* Subtle perspective grid */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 3px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 3px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#59B83F]/70 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div {...reveal()} className="relative mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            <Compass size={16} className="text-[#A8E39A]" />
            Get to Know AVS Max
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Experience You Can Trust.
            <span className="mt-2 block text-[#A8E39A]">
              Guidance You Can Rely On.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#D5DEEF] sm:text-lg">
            We make professional guidance easier to understand, helping
            individuals and businesses move forward with clarity,
            confidence, and dependable support.
          </p>
        </motion.div>

        {/* About image and content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-[3px] border-t-[3px] border-[#59B83F] sm:-left-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white p-2 shadow-[0_20px_55px_rgba(0,0,0,0.2)]">
              <Image
                src={aboutImage}
                alt="AVS Max professional consultancy"
                width={700}
                height={800}
                priority
                className="h-[330px] w-full rounded-2xl object-cover sm:h-[430px] lg:h-[490px]"
              />

              <div className="absolute bottom-5 left-5 rounded-xl border border-white/80 bg-white px-5 py-4 shadow-lg sm:bottom-7 sm:left-7">
                <p className="text-3xl font-extrabold text-[#1E356B]">
                  29+
                </p>
                <p className="mt-1 text-sm font-semibold text-[#5F6B7C]">
                  Years of Experience
                </p>
                <div className="mt-2 h-1 w-12 rounded-full bg-[#59B83F]" />
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-br-3xl border-b-[3px] border-r-[3px] border-[#F39A32] sm:-bottom-5 sm:-right-5" />
          </motion.div>

          <motion.div {...reveal(0.08)}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8E39A]">
              Who We Are
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
              A professional partner for your next step.
            </h3>

            <p className="mt-5 leading-8 text-[#D5DEEF]">
              AVS Max is built around a simple idea: professional guidance
              should be clear, reliable, and focused on helping people
              and businesses move forward.
            </p>

            <p className="mt-4 leading-8 text-[#D5DEEF]">
              With over 29 years of experience, we bring knowledge and
              a practical perspective to every professional relationship.
              We take time to understand your requirements and help you
              identify a clear way forward.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Clear and practical professional guidance",
                "Solutions tailored to individual requirements",
                "A commitment to dependable client relationships",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#A8E39A]"
                  />
                  <p className="text-sm leading-6 text-white/90 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#59B83F] px-5 py-3.5 text-sm font-bold text-[#142D19] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#F39A32] hover:text-[#1E356B]"
            >
              Connect with AVS Max
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <motion.div
            {...reveal()}
            className="group rounded-2xl border border-white/70 bg-white p-7 text-[#26354D] shadow-lg shadow-black/5 transition duration-200 hover:-translate-y-1 hover:border-[#F39A32]/60 hover:shadow-xl sm:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F39A32]/10 text-[#B9680B] transition-transform duration-200 group-hover:scale-105">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1E356B]">
                Our Mission
              </h3>
            </div>

            <p className="mt-5 leading-7 text-[#5F6B7C]">
              To provide clear, reliable, and professional guidance that
              helps our clients understand their options and make
              informed decisions.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="group rounded-2xl border border-white/70 bg-white p-7 text-[#26354D] shadow-lg shadow-black/5 transition duration-200 hover:-translate-y-1 hover:border-[#59B83F]/60 hover:shadow-xl sm:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#59B83F]/10 text-[#39852A] transition-transform duration-200 group-hover:scale-105">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1E356B]">
                Our Vision
              </h3>
            </div>

            <p className="mt-5 leading-7 text-[#5F6B7C]">
              To build lasting client relationships by making professional
              services more approachable and supporting sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <motion.div {...reveal()} className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8E39A]">
              What Matters to Us
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              The Values Behind Our Work
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-[#D5DEEF]">
              The principles that guide our approach and shape the way
              we work with individuals and businesses.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  {...reveal(index * 0.08)}
                  className={`rounded-2xl border ${value.border} bg-white p-6 text-[#26354D] shadow-lg shadow-black/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-7`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.background} ${value.color}`}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#1E356B]">
                    {value.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#5F6B7C] sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          {...reveal()}
          className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#14264B] px-7 py-9 shadow-xl shadow-black/10 sm:px-10 sm:py-12 lg:px-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#59B83F]/30"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#F39A32]/30"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-1 w-32 bg-[#59B83F]"
          />

          <div className="relative z-10 flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A8E39A]">
                Your Growth, Our Commitment
              </p>

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Let&apos;s Move Forward Together.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-[#D5DEEF] sm:text-lg">
                Tell us what you need. Let&apos;s explore how AVS Max can
                help you move forward with clarity and confidence.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#59B83F] px-6 py-4 font-bold text-[#142D19] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F39A32] md:self-center"
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
