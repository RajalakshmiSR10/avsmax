
"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Quote,
  Pause,
  Play,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "AVS Max helped our business navigate complex GST regulations. Their expertise saved us both time and money. Highly recommended!",
    name: "Rajesh Sharma",
    role: "CEO, Sharma Enterprises",
    initials: "RS",
    accent: "#59B83F",
  },
  {
    quote:
      "The tax planning strategies suggested by AVS Max helped me save over 30% on my tax liability. Professional and reliable service.",
    name: "Priya Kumar",
    role: "Small Business Owner",
    initials: "PK",
    accent: "#F39A32",
  },
  {
    quote:
      "Outstanding service! They handled our company's tax filing seamlessly. Will definitely continue using their services.",
    name: "Anil Gupta",
    role: "Finance Director, TechSolutions Inc.",
    initials: "AG",
    accent: "#59B83F",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  const reduceMotion = useReducedMotion();
  const activeTestimonial = testimonials[activeIndex];

  const autoplayEnabled =
    !isHovering && !isManuallyPaused && !reduceMotion;

  useEffect(() => {
    if (!autoplayEnabled) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [autoplayEnabled]);

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#F4F7FB] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-[#59B83F]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#1E356B]/10 blur-[100px]"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#59B83F]/25 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#39852A] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#59B83F]" />
              CLIENT EXPERIENCES
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#1E356B] sm:text-4xl lg:text-[2.65rem]">
              Trust built through
              <span className="block text-[#39852A]">
                every relationship.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Every client has a different journey. We value the
              relationships we build and the confidence our clients
              place in AVS Max.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#1E356B]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E356B] text-white">
                <ArrowDownRight size={19} />
              </span>
              <span>Hear it from our clients</span>
            </div>

            <div className="mt-8 flex gap-2">
              <span className="h-1.5 w-12 rounded-full bg-[#1E356B]" />
              <span className="h-1.5 w-7 rounded-full bg-[#59B83F]" />
              <span className="h-1.5 w-4 rounded-full bg-[#F39A32]" />
            </div>
          </motion.div>

          {/* RIGHT TESTIMONIAL CAROUSEL */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.1,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onFocusCapture={() => setIsHovering(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsHovering(false);
              }
            }}
            className="relative min-w-0"
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_55px_-30px_rgba(30,53,107,0.24)] sm:p-7 lg:p-8">

              {/* Brand colour strip */}
              <div className="absolute left-0 right-0 top-0 flex h-1">
                <span className="w-[55%] bg-[#1E356B]" />
                <span className="w-[30%] bg-[#59B83F]" />
                <span className="flex-1 bg-[#F39A32]" />
              </div>

              {/* Decorative quote */}
              {/* <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-2 text-[#1E356B]/[0.04]"
              >
                <Quote size={115} strokeWidth={1.2} />
              </div> */}

              <div className="relative">
                {/* Card label */}
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-[#39852A] sm:text-xs">
                    WHAT CLIENTS SAY
                  </span>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#59B83F]/10 text-[#39852A]">
                    <Quote size={17} />
                  </div>
                </div>

                {/* One testimonial at a time */}
                <div
                  className="min-h-[220px] sm:min-h-[200px]"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.article
                      key={activeTestimonial.name}
                      initial={
                        reduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: 20, y: 5 }
                      }
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={
                        reduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: -20, y: -4 }
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        ease: "easeOut",
                      }}
                      className="flex min-h-[220px] flex-col sm:min-h-[200px]"
                    >
                      <p className="text-lg font-medium leading-8 tracking-tight text-[#17324D] sm:text-xl sm:leading-8">
                        “{activeTestimonial.quote}”
                      </p>

                      {/* Client details */}
                      <div className="mt-auto flex items-center gap-3 pt-7">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white shadow-sm"
                          style={{
                            background: `linear-gradient(135deg, #1E356B 0%, ${activeTestimonial.accent} 100%)`,
                          }}
                        >
                          {activeTestimonial.initials}
                        </div>

                        <div className="min-w-0">
                          <h3 className="break-words text-sm font-extrabold text-[#1E356B] sm:text-base">
                            {activeTestimonial.name}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                            {activeTestimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-200" />

                {/* Carousel controls */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Dots, without numbering */}
                  <div
                    className="flex items-center gap-2"
                    role="group"
                    aria-label="Choose testimonial"
                  >
                    {testimonials.map((testimonial, index) => (
                      <button
                        key={testimonial.name}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show testimonial from ${testimonial.name}`}
                        aria-current={
                          activeIndex === index ? "true" : undefined
                        }
                        className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B] focus-visible:ring-offset-4 ${
                          activeIndex === index
                            ? "w-8 bg-[#59B83F]"
                            : "w-2.5 bg-slate-300 hover:bg-[#1E356B]/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Pause and navigation */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setIsManuallyPaused((paused) => !paused)
                      }
                      aria-label={
                        isManuallyPaused
                          ? "Resume automatic testimonials"
                          : "Pause automatic testimonials"
                      }
                      title={
                        isManuallyPaused ? "Resume autoplay" : "Pause autoplay"
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1E356B] transition hover:border-[#59B83F] hover:bg-[#59B83F]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B]"
                    >
                      {isManuallyPaused ? (
                        <Play size={14} />
                      ) : (
                        <Pause size={14} />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Previous testimonial"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1E356B] transition duration-300 hover:border-[#1E356B] hover:bg-[#1E356B] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B]"
                    >
                      <ArrowLeft size={17} />
                    </button>

                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next testimonial"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E356B] text-white shadow-sm transition duration-300 hover:bg-[#59B83F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B] focus-visible:ring-offset-2"
                    >
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle card shadow accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 left-6 right-6 -z-10 h-6 rounded-b-3xl bg-[#1E356B]/10 blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
