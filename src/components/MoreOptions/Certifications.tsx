
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  BadgeCheck,
  Award,
  Medal,
  GraduationCap,
} from "lucide-react";

const certifications = [
  {
    title: "GST Practitioner",
    description:
      "Certified GST Practitioner authorized by the Government of India.",
    icon: BadgeCheck,
  },
  {
    title: "Income Tax Expert",
    description:
      "Recognized Income Tax Practitioner with 15+ years of experience.",
    icon: Award,
  },
  {
    title: "Certified Tax Consultant",
    description:
      "Accredited by the Institute of Chartered Accountants of India.",
    icon: Medal,
  },
  {
    title: "International Tax Specialist",
    description:
      "Certified International Tax Analyst with global expertise.",
    icon: GraduationCap,
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 60%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  });

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F7FB] px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-bold text-[#164f72] sm:text-4xl">
            Our Certifications
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#164f72] to-sky-400" />

          <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
            We are proud to be recognized by leading industry bodies
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Main vertical track */}

          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[3px] -translate-x-1/2 rounded-full bg-slate-200 md:block" />

          {/* Main vertical progress */}

          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-1/2 top-0 hidden h-full w-[3px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-400 via-sky-500 to-orange-400 shadow-[0_0_12px_rgba(14,165,233,0.45)] md:block"
          />

          {/* Moving light on center line */}

          <motion.div
            style={{ top: useTransform(progress, [0, 1], ["0%", "100%"]) }}
            className="absolute left-1/2 z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_15px_5px_rgba(14,165,233,0.35)] md:block"
          />

          <div className="space-y-10 md:space-y-16">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              const left = index % 2 === 0;

              // Each connector draws as its card enters the viewport.
              const start = index / certifications.length;
              const end = (index + 0.65) / certifications.length;

              const connectorProgress = useTransform(
                progress,
                [start, Math.min(end, 1)],
                [0, 1]
              );

              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.65 }}
                  className={`relative flex min-h-[245px] items-center ${
                    left ? "md:justify-start" : "md:justify-end"
                  } justify-center`}
                >
                  {/* Horizontal connector: grows from center outward */}

                  <motion.div
                    style={{
                      scaleX: connectorProgress,
                    }}
                    className={`absolute top-1/2 z-[1] hidden h-[3px] w-[calc(50%-12rem)] origin-left bg-gradient-to-r from-sky-400 to-orange-400 shadow-[0_0_10px_rgba(14,165,233,0.55)] md:block ${
                      left
                        ? "right-1/2"
                        : "left-1/2"
                    }`}
                  />

                  {/* Center node */}

                  <motion.div
                    style={{
                      scale: connectorProgress,
                    }}
                    className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.12),0_0_15px_rgba(14,165,233,0.65)] md:block"
                  />

                  {/* Card */}

                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className={`relative z-[2] w-full rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-[0_8px_28px_rgba(15,45,75,0.08)] md:w-[calc(50%-12rem)] ${
                      left
                        ? "md:mr-48"
                        : "md:ml-48"
                    }`}
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                      <Icon size={36} strokeWidth={2.1} />
                    </div>

                    <h3 className="text-lg font-bold leading-7 text-[#164f72]">
                      {cert.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {cert.description}
                    </p>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
