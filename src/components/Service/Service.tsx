"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  FileText,
  ReceiptText,
  Building2,
  Calculator,
  ClipboardCheck,
  ShieldCheck,
  Search,
  BriefcaseBusiness,
  Landmark,
  ChartNoAxesCombined,
  HandCoins,
  Scale,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    code: "SV001",
    title: "Filing & Returns",
    description:
      "End-to-end statutory filing services for businesses and individuals.",
    icon: FileText,
  },
  {
    code: "SV002",
    title: "ITR Filing",
    description:
      "Accurate and timely filing of Income Tax Returns for all taxpayer categories.",
    icon: ReceiptText,
  },
  {
    code: "SV003",
    title: "GST Return",
    description:
      "Monthly/quarterly GSTR-1, GSTR-3B, and annual return filing.",
    icon: Calculator,
  },
  {
    code: "SV004",
    title: "ROC Filing",
    description:
      "Annual compliance filings with Registrar of Companies.",
    icon: Building2,
  },
  {
    code: "SV005",
    title: "TDS Return",
    description:
      "Quarterly filing of TDS statements under Income Tax Act.",
    icon: ClipboardCheck,
  },
  {
    code: "SV006",
    title: "XBRL Filing",
    description:
      "Digital financial reporting in XBRL format as per MCA guidelines.",
    icon: FileText,
  },
  {
    code: "SV007",
    title: "Audit Assurance",
    description:
      "Independent review to enhance reliability of financial information.",
    icon: ShieldCheck,
  },
  {
    code: "SV008",
    title: "GST Audit",
    description:
      "GST audit support, verification, and compliance review for businesses.",
    icon: Search,
  },
  {
    code: "SV010",
    title: "Tax Audit",
    description:
      "Tax audit support under Section 44AB for applicable taxpayers.",
    icon: Calculator,
  },
  {
    code: "SV011",
    title: "Stock Audit",
    description:
      "Physical verification and reconciliation of inventory records.",
    icon: ClipboardCheck,
  },
  {
    code: "SV012",
    title: "Statutory Audit",
    description:
      "Statutory audit support for companies under applicable company law.",
    icon: BriefcaseBusiness,
  },
  {
    code: "SV014",
    title: "Advisory Consultancy",
    description:
      "Strategic guidance on tax, compliance, and business structuring.",
    icon: Lightbulb,
  },
  {
    code: "SV015",
    title: "GST Advisory",
    description:
      "Practical GST guidance, compliance assistance, and tax-related support.",
    icon: ReceiptText,
  },
  {
    code: "SV016",
    title: "Tax Planning",
    description:
      "Proactive strategies to manage tax liability within applicable laws.",
    icon: ChartNoAxesCombined,
  },
  {
    code: "SV017",
    title: "Legal Secretarial",
    description:
      "Board meetings, ROC compliance, and corporate governance support.",
    icon: Scale,
  },
  {
    code: "SV018",
    title: "Project Financing",
    description:
      "Advisory on funding, loan structuring, and investor pitching.",
    icon: HandCoins,
  },
];

const visibleCount = 4;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] =
    useState<(typeof services)[number] | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = services.length - visibleCount;

  const nextSlide = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  useEffect(() => {
    if (isPaused || selectedService) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isPaused, selectedService, maxIndex]);

  useEffect(() => {
    if (!selectedService) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedService(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FFFFFF] px-5 py-20 text-slate-800 sm:px-8 sm:py-24 lg:px-16"
    >
      {/* Soft decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#59B83F]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F39A32]/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1E356B]/10 bg-white px-4 py-2 text-sm font-semibold text-[#1E356B] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#59B83F]" />
            What We Do
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#1E356B] sm:text-4xl lg:text-5xl">
            Our Professional Services
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Comprehensive tax, audit, compliance, and business advisory
            solutions designed around your needs.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F39A32]" />
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous services"
            className="absolute -left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1E356B] shadow-lg transition hover:border-[#F39A32] hover:bg-[#F39A32] hover:text-white sm:-left-5 sm:h-12 sm:w-12"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Sliding cards */}
          <div className="overflow-hidden px-1 py-3">
            <div
              className="flex items-stretch transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
              }}
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.code}
                    className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/4"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="group flex h-full min-h-[205px] w-full flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 py-7 text-center shadow-[0_4px_18px_rgba(30,53,107,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[#59B83F]/50 hover:shadow-[0_14px_35px_rgba(30,53,107,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B]"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E356B]/[0.06] text-[#1E356B] transition duration-300 group-hover:bg-[#59B83F]/15 group-hover:text-[#27852C]">
                        <Icon size={28} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-base font-bold text-[#1E356B] sm:text-lg">
                        {service.title}
                      </h3>

                      <span className="mt-2 text-xs font-medium tracking-wide text-slate-400">
                        {service.code}
                      </span>

                      <span className="mt-4 text-xs font-semibold text-[#1E356B] opacity-0 transition group-hover:opacity-100">
                        View Details →
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next services"
            className="absolute -right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1E356B] shadow-lg transition hover:border-[#F39A32] hover:bg-[#F39A32] hover:text-white sm:-right-5 sm:h-12 sm:w-12"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to service slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#1E356B]"
                  : "w-2 bg-slate-300 hover:bg-[#59B83F]"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Explore our services to learn how we can help your business.
        </p>
      </div>

      {/* Service details popup */}
     
{selectedService && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        setSelectedService(null);
      }
    }}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="relative my-auto w-full max-w-lg animate-[servicePop_250ms_ease-out] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl"
    >
      {/* Brand accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#1E356B] via-[#59B83F] to-[#F39A32]" />

      {/* Close button */}
      <button
        type="button"
        onClick={() => setSelectedService(null)}
        aria-label="Close service details"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <X size={19} />
      </button>

      <div className="p-6 sm:p-8">

        {/* Icon and service name in one row */}
        <div className="flex items-center gap-4 pr-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E356B]/[0.07] text-[#1E356B]">
            {(() => {
              const Icon = selectedService.icon;
              return <Icon size={25} strokeWidth={1.8} />;
            })()}
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#27852C]">
              AVS Max · {selectedService.code}
            </p>

            <h3
              id="service-modal-title"
              className="mt-1 text-xl font-bold leading-snug text-[#1E356B] sm:text-2xl"
            >
              {selectedService.title}
            </h3>
          </div>
        </div>

        {/* Service description */}
        <p className="mt-4 text-sm leading-6 text-slate-600">
          {selectedService.description}
        </p>

        {/* Enquiry form */}
        <form
          className="mt-5 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();

            const form = event.currentTarget;
            const formData = new FormData(form);

            const name = String(formData.get("name") || "");
            const email = String(formData.get("email") || "");
            const phone = String(formData.get("phone") || "");

            const message = [
              "Hello AVS Max, I am interested in your service.",
              `Service: ${selectedService.title}`,
              `Name: ${name}`,
              `Email: ${email}`,
              `Phone: ${phone || "Not provided"}`,
            ].join("\n");

            window.open(
              `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(message)}`,
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            aria-label="Your name"
            autoComplete="name"
            required
            className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#1E356B] focus:ring-2 focus:ring-[#1E356B]/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            aria-label="Email address"
            autoComplete="email"
            required
            className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#1E356B] focus:ring-2 focus:ring-[#1E356B]/10"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (Optional)"
            aria-label="Phone number"
            autoComplete="tel"
            className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#1E356B] focus:ring-2 focus:ring-[#1E356B]/10"
          />

          <button
            type="submit"
           
           className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E356B] px-5 py-3.5 font-semibold text-white transition hover:bg-[#59B83F] hover:text-slate-950"
           >
           Submit Interest
            <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </div>
  </div>
)}

      <style jsx>{`
        @keyframes servicePop {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1023px) {
          .services-track {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}