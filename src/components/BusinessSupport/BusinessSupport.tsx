
"use client";

import "./BusinessSupport.css";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  X,
} from "lucide-react";

const businessServices = [
  {
    code: "BS001",
    title: "Business Registration",
    description:
      "End-to-end registration for any business entity in India.",
  },
  {
    code: "BS002",
    title: "Company Registration",
    description:
      "Incorporate your company under the Companies Act, 2013 with full compliance support.",
  },
  {
    code: "BS003",
    title: "Private Limited Company Registration",
    description:
      "Ideal for startups and SMEs seeking limited liability and investor funding.",
  },
  {
    code: "BS004",
    title: "Public Limited Company Registration",
    description:
      "For businesses planning to raise capital from the public, subject to applicable requirements.",
  },
  {
    code: "BS005",
    title: "Limited Liability Partnership Registration",
    description:
      "A hybrid structure combining partnership flexibility with limited liability.",
  },
  {
    code: "BS006",
    title: "One Person Company Registration",
    description:
      "Help eligible individual entrepreneurs establish a company with limited liability.",
  },
  {
    code: "BS007",
    title: "Nidhi Company Registration",
    description:
      "Registration assistance for eligible mutual-benefit companies.",
  },
  {
    code: "BS008",
    title: "Producer Company Registration",
    description:
      "Registration support for eligible farmers, artisans, and producers.",
  },
  {
    code: "BS009",
    title: "Foreign Company Registration",
    description:
      "Assistance for foreign entities establishing a business presence in India.",
  },
  {
    code: "BS010",
    title: "Partnership Registration",
    description:
      "Registration assistance for partnership firms under applicable laws.",
  },
  {
    code: "BS011",
    title: "Sole Proprietorship Registration",
    description:
      "Guidance for individual owners setting up a proprietorship and obtaining applicable registrations.",
  },
  {
    code: "BS012",
    title: "GST Registration",
    description:
      "Assistance with GST registration based on applicable eligibility requirements.",
  },
  {
    code: "BS013",
    title: "FSSAI Registration",
    description:
      "Food safety registration or licensing assistance for eligible food businesses.",
  },
  {
    code: "BS014",
    title: "Import Export Code",
    description:
      "Assistance with obtaining an Importer Exporter Code for international trade.",
  },
  {
    code: "BS015",
    title: "ISO Certification",
    description:
      "Guidance on ISO certification requirements and coordination with certification bodies.",
  },
  {
    code: "BS016",
    title: "RERA Registration",
    description:
      "Registration assistance for eligible real estate projects and agents.",
  },
  {
    code: "BS017",
    title: "MSME Udyam Registration",
    description:
      "Government Udyam registration assistance and guidance on applicable MSME benefits.",
  },
  {
    code: "BS018",
    title: "Shop Act Registration",
    description:
      "Assistance with state-specific Shops and Establishments registration.",
  },
  {
    code: "BS019",
    title: "Business Registration Number (BRN)",
    description:
      "Guidance on business identification numbers issued by the relevant authority.",
  },
  {
    code: "BS020",
    title: "Startup Registration",
    description:
      "Assistance with eligible DPIIT startup recognition and related documentation.",
  },
];

type BusinessService = (typeof businessServices)[number];

export default function BusinessSupport() {
  const [selectedService, setSelectedService] =
    useState<BusinessService | null>(null);

  const [submitted, setSubmitted] = useState(false);

  const firstColumn = businessServices.slice(0, 10);
  const secondColumn = businessServices.slice(10, 20);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedService) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");

    const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

    const message = [
      "Hello AVS Max!",
      "",
      `Service: ${selectedService.title}`,
      `Service Code: ${selectedService.code}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
    form.reset();
  }

  function openService(service: BusinessService) {
    setSelectedService(service);
    setSubmitted(false);
  }

  function renderServiceCard(service: BusinessService, index: number) {
    return (
      <button
        key={`${service.code}-${index}`}
        type="button"
        onClick={() => openService(service)}
        className="group flex min-h-[155px] w-full shrink-0 flex-col rounded-2xl border border-[#1E356B]/10 bg-white p-5 text-left shadow-[0_5px_24px_rgba(30,53,107,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#59B83F]/60 hover:shadow-[0_15px_35px_rgba(30,53,107,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E356B]"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1E356B]/[0.07] text-[#1E356B] transition duration-300 group-hover:bg-[#1E356B] group-hover:text-white">
            <Building2 size={21} strokeWidth={1.8} />
          </span>

          <span className="rounded-md bg-[#F39A32]/10 px-2 py-1 text-[10px] font-bold tracking-wider text-[#B96B12]">
            {service.code}
          </span>
        </div>

        <h3 className="mt-3 text-[15px] font-bold leading-5 text-[#1E356B] transition-colors group-hover:text-[#27852C]">
          {service.title}
        </h3>

        <span className="mt-auto flex items-center gap-2 pt-3 text-sm font-semibold text-slate-500 transition-colors group-hover:text-[#27852C]">
          View details
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </button>
    );
  }

  return (
    <section
      id="business-support"
      className="relative overflow-hidden bg-[#F7F9FD] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-green-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1E356B]/10 bg-white px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#27852C] shadow-sm">
            <Building2 size={15} />
            BUSINESS SUPPORT
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1E356B] sm:text-4xl md:text-5xl">
            Business Support
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Complete business registration and compliance solutions
            to help you establish and grow your business.
          </p>
        </div>

        {/* Two auto-scrolling columns */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-6">
          {/* Left: upward */}
          <div className="business-scroll-window relative h-[500px] overflow-hidden rounded-2xl sm:h-[560px]">
            <div className="business-scroll-track business-scroll-up flex flex-col gap-4">
              {[...firstColumn, ...firstColumn].map((service, index) =>
                renderServiceCard(service, index)
              )}
            </div>
          </div>

          {/* Right: downward */}
          <div className="business-scroll-window relative h-[500px] overflow-hidden rounded-2xl sm:h-[560px]">
            <div className="business-scroll-track business-scroll-down flex flex-col gap-4">
              {[...secondColumn, ...secondColumn].map((service, index) =>
                renderServiceCard(service, index)
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-gray-600">
          Pause scrolling and Select any service to enquire.
        </p>
      </div>

      {/* Service details modal */}
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
            aria-labelledby="business-modal-title"
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl"
          >
            <div className="h-1.5 bg-gradient-to-r from-[#1E356B] via-[#59B83F] to-[#F39A32]" />

            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <X size={19} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Icon and service name */}
              <div className="flex items-center gap-4 pr-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E356B]/[0.07] text-[#1E356B]">
                  <Building2 size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#27852C]">
                    AVS Max · {selectedService.code}
                  </p>

                  <h3
                    id="business-modal-title"
                    className="mt-1 text-xl font-bold leading-snug text-[#1E356B] sm:text-2xl"
                  >
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {selectedService.description}
              </p>

              <div className="my-5 h-px bg-slate-100" />

              <h4 className="mb-4 text-lg font-bold text-[#1E356B]">
                Enquire About This Service
              </h4>

              {submitted && (
                <div
                  role="status"
                  className="mb-4 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-800"
                >
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  WhatsApp was opened with your enquiry details. Send the
                  message there to complete your enquiry.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="business-name"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Your Name *
                  </label>
                  <input
                    id="business-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-email"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Email Address *
                  </label>
                  <input
                    id="business-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-phone"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="business-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1E356B] focus:bg-white focus:ring-4 focus:ring-[#1E356B]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F39A32] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#e88b20] focus:outline-none focus:ring-4 focus:ring-orange-200"
                >
                  Submit Interest
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  Your details will be prepared in a WhatsApp message.
                  They are not automatically saved to a database.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
