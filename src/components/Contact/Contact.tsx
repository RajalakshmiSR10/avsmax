"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  MessagesCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: "info@avsmax.com",
    href: "mailto:info@avsmax.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 9942160024",
    href: "tel:+919942160024",
  },
  {
    icon: Clock3,
    label: "Business hours",
    value: "Monday – Saturday ( 9:00 AM - 7:00 PM )",
  },
  {
    icon: MapPin,
    label: "Our office",
    value:
      "12A, Chitthu Balakrishnaiyer Street, Kamarajar Salai, Madurai - 625 009",
  },
];

const services = [
  { value: "Tax Consultancy", label: "Tax Consultancy" },
  { value: "GST Advisory", label: "GST Advisory" },
  { value: "Income Tax Filing", label: "Income Tax Filing" },
  { value: "Audit and Compliance", label: "Audit & Compliance" },
  { value: "Business Advisory", label: "Business Advisory" },
  { value: "Legal Secretarial", label: "Legal Secretarial" },
  { value: "Project Financing", label: "Project Financing" },
  { value: "Other Services", label: "Other Services" },
];

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut" as const,
    },
  },
};

const staggerChildren = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const fieldReveal = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  // Initialize AOS animations.
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 65,
      once: false,
      mirror: false,
    });

    AOS.refresh();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    // Uses the WhatsApp number from your existing contact section.
    const whatsappNumber = "9942160024";

    const whatsappMessage = [
      "Hello AVS Max!",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
    form.reset();
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#1E356B] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-22 top-20 -z-10 h-80 w-80 rounded-full bg-white/50 blur-[80px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-white/50 blur-[80px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading — Framer Motion */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.35,
          }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.span
            variants={sectionReveal}
            className="inline-flex items-center gap-2 rounded-full border border-[#1E356B]/10 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#27852C] shadow-sm"
          >
            <span  />
            <MessagesCircle size={17}/>
            LET'S CONNECT
          </motion.span>

          <motion.h2
            variants={sectionReveal}
            className="mt-6 text-3xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-4xl md:text-5xl"
          >
            Let's Talk About
            <span className="mt-2 block text-[#27852C]">
              Your Business
            </span>
          </motion.h2>

          <motion.p
            variants={sectionReveal}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base"
          >
            Have questions about taxation, compliance, or business
            advisory? Connect with AVS Max and let&apos;s find the right
            solution for you.
          </motion.p>
        </motion.div>

        {/* Main contact card */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_25px_80px_-35px_rgba(30,53,107,0.25)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT PANEL */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -45,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: "easeOut",
            }}
            className="relative overflow-hidden bg-[#142950] p-7 text-white sm:p-10 lg:p-12"
          >
            {/* Decorative rings */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
            />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#59B83F]/10 blur-3xl"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.5, 0.9, 0.5],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative">
              <motion.span
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="inline-block text-xs font-bold tracking-[0.2em] text-[#9BDF83]"
              >
                GET IN TOUCH
              </motion.span>

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="mt-5 text-2xl font-bold leading-snug sm:text-3xl"
              >
                Your business deserves
                <span className="block text-[#9BDF83]">
                  the right guidance.
                </span>
              </motion.h3>

              <p className="mt-5 text-sm leading-7 text-blue-100/75">
                Get professional assistance for your tax, financial,
                and corporate compliance requirements.
              </p>

              {/* Contact details — AOS stagger */}
              <div className="mt-10 space-y-6">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      data-aos="fade-up"
                      data-aos-delay={String(index * 100)}
                      data-aos-duration="700"
                      className="group flex items-center gap-4"
                    >
                      <motion.span
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                rotate: -6,
                                scale: 1.08,
                              }
                        }
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#9BDF83] transition-colors duration-300 group-hover:bg-[#59B83F] group-hover:text-white"
                      >
                        <Icon size={21} />
                      </motion.span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-blue-100/60">
                          {item.label}
                        </span>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block break-words text-sm font-semibold transition-colors hover:text-[#9BDF83]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="mt-1 block text-sm font-semibold leading-6">
                            {item.value}
                          </span>
                        )}
                      </span>

                      {item.href && (
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9BDF83]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="mt-10 border-t border-white/10 pt-6"
              >
                <motion.a
                  href="https://wa.me/9942160024"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.02,
                        }
                  }
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#59B83F] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-950/10 transition-colors hover:bg-[#4AA332]"
                >
                  <MessageCircle size={19} />
                  Chat on WhatsApp
                  <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL — Contact form */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 45,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="p-7 sm:p-10 lg:p-12"
          >
            <div className="mb-8">
              <span
                data-aos="fade-right"
                className="text-xs font-bold tracking-[0.18em] text-[#27852C]"
              >
                SEND AN ENQUIRY
              </span>

              <h3 className="mt-3 text-2xl font-bold text-[#1E356B]">
                How can we help you?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in your details and tell us what you need.
              </p>
            </div>

            {/* Success message */}
            <AnimatePresence initial={false}>
              {submitted && (
                <motion.div
                  key="success-message"
                  role="status"
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    <CheckCircle2 size={20} className="shrink-0" />
                    <span>
                      Your enquiry details are ready in WhatsApp.
                      Send the message there to complete your enquiry.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              onSubmit={handleSubmit}
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.1,
              }}
              className="space-y-5"
            >
              {/* Name and email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div variants={fieldReveal}>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full name <span className="text-orange-500">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                  />
                </motion.div>

                <motion.div variants={fieldReveal}>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address{" "}
                    <span className="text-orange-500">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                  />
                </motion.div>
              </div>

              {/* Phone and service */}
              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div variants={fieldReveal}>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                  />
                </motion.div>

                <motion.div variants={fieldReveal}>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Service required{" "}
                    <span className="text-orange-500">*</span>
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-700 outline-none transition duration-300 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.value}
                        value={service.value}
                      >
                        {service.label}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div variants={fieldReveal}>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your message{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us briefly how we can help..."
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm leading-6 text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div variants={fieldReveal}>
                <motion.button
                  type="submit"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.015,
                        }
                  }
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#F39A32] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/15 transition-colors duration-300 hover:bg-[#E88B20] hover:shadow-orange-500/25 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:w-auto sm:min-w-56"
                >
                  Send Enquiry

                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </motion.div>

              <motion.p
                variants={fieldReveal}
                className="text-xs leading-5 text-slate-400"
              >
                Your details will be included in the WhatsApp message
                you prepare when you submit this form.
              </motion.p>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-300"
        >
          <CheckCircle2 size={17} className="text-[#74ce79]" />
          Professional support for your business and compliance needs
        </motion.div>
      </div>
      {/* Google Maps */}

 <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        whileHover={{ y: -3 }}
        className=" xl:mt-20 lg:mt-20 sm:mt-15 group relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-[#EAF3FA]  p-2 shadow-[0_15px_50px_rgba(0,0,0,0.25)] md:w-[85%]"
      >
        {/* Top accent */}
       

        <iframe
          title="AVS Max Office Location"
          src="https://maps.google.com/maps?q=9.9184906,78.1339787&z=17&output=embed"
          width="100%"
          height="380"
          style={{ border: 0 }}
          className="mt-1 rounded-xl"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      {/* Animated Directions Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mx-auto mt-5 flex justify-center md:w-[85%] md:justify-end"
      >
        <motion.a
          href="https://www.google.com/maps/place/AVS+Max/@9.9184906,78.1339787,17z"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.04,
            y: -3,
            boxShadow: "0px 10px 25px rgba(89,184,63,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-3 rounded-xl hover:bg-[#59B83F]/80 px-6 py-3.5 font-medium text-white transition-colors duration-300 bg-[#59B83F]"
        >
          Get Directions

          <motion.span
            className="inline-flex"
            animate={{ x: [0, 3, 0], y: [0, -2, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUpRight size={19} />
          </motion.span>
        </motion.a>
      </motion.div>

    </section>
  );
}