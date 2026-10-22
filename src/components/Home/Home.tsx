
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Background3D from "@/components/Background/Background3D";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const features = [
  "Experience-led guidance",
  "Solutions focused on your needs",
  "A long-term partnership mindset",
];

export default function Home() {
  return (
    <main className="avs-home relative min-h-screen overflow-hidden bg-[#071329] text-white">
      <Background3D />

      <section
        id="home"
        className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 xl:mt-10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT HERO CONTENT */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.15,
            }}
          >
            {/* Trust badge */}

            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300 backdrop-blur-md"
            >
              <motion.span
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Sparkles size={16} />
              </motion.span>

              <span>Trusted Expertise for Over 25 Years</span>
            </motion.div>

            {/* Welcome */}

            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400"
            >
              Welcome to AVS Max
            </motion.p>

            {/* Main heading */}

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
            >
              Beyond Business.

              <span className="mt-2 block bg-gradient-to-r from-green-300 via-white to-orange-300 bg-clip-text text-transparent">
                Towards Growth.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Your trusted partner for professional consultancy, business
              guidance, and practical solutions. We simplify complexities,
              help you make confident decisions, and support your next step
              towards success.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="#about"
                  className="group inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-green-400"
                >
                  Discover AVS Max

                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition-colors hover:border-orange-400/60 hover:bg-white/10"
                >
                  Talk to Our Team

                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 3, y: -3 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust points */}

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-slate-300"
            >
              <motion.span
                whileHover={{ x: 4 }}
                className="flex items-center gap-2"
              >
                <ShieldCheck size={18} className="text-green-400" />
                Trusted Guidance
              </motion.span>

              <motion.span
                whileHover={{ x: 4 }}
                className="flex items-center gap-2"
              >
                <BadgeCheck size={18} className="text-orange-400" />
                Professional Support
              </motion.span>
            </motion.div>
          </motion.div>

          {/* RIGHT EXPERIENCE CARD */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Animated background glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.8, 0.45],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-green-400/10 to-orange-400/20 blur-2xl"
            />

            {/* Main card */}

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1930]/65 p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9"
            >
              <motion.div
                animate={{
                  x: [0, -12, 0],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-400/10 blur-3xl"
              />

              <div className="relative">
                {/* Icon */}

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/25 bg-green-400/10 text-green-300"
                >
                  <BriefcaseBusiness size={28} />
                </motion.div>

                <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-slate-200">
                  Experience That Matters
                </p>

                {/* Experience number */}

                <div className="mt-2 flex items-end gap-3">
                  <span className="text-7xl font-bold tracking-tight text-white">
                    25+
                  </span>

                  <span className="pb-2 text-lg font-medium text-green-300">
                    Years
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  Decades of experience, a practical approach, and a
                  commitment to helping individuals and businesses move
                  forward with confidence.
                </p>

                {/* Divider */}

                <div className="my-7 h-px bg-gradient-to-r from-green-400/50 via-white/10 to-transparent" />

                {/* Feature list */}

                <div className="space-y-4">
                  {features.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: false,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.12,
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-400/15 text-green-300">
                        <ShieldCheck size={15} />
                      </span>

                      <span className="text-sm text-slate-200">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Services link */}

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-8 inline-block"
                >
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
                  >
                    Explore our services
                    <ArrowRight size={17} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating badge */}

           
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{
    once: false,
    amount: 0.2,
  }}
  transition={{ duration: 0.6 }}
  className="absolute -bottom-8 -left-4 hidden sm:flex"
>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#101d38]/95 px-4 py-3 shadow-xl backdrop-blur-lg"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/15 text-orange-300">
      <Sparkles size={21} />
    </div>

    <div>
      <p className="text-sm font-semibold text-white">
        Your Growth
      </p>
      <p className="text-xs text-slate-400">
        Our Commitment
      </p>
    </div>
  </motion.div>
</motion.div>

          </motion.div>
        </div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <Link
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-white"
          >
            <span className="text-[10px] uppercase tracking-[0.25em]">
              Scroll to explore
            </span>

            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
