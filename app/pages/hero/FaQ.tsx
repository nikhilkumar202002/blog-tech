"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type FaqItem = {
  number: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    number: "01",
    question: "What is Blogtec Jewellery ERP?",
    answer:
      "Blogtec Jewellery ERP is a business management platform designed specifically for jewellery businesses. It brings essential operations such as inventory, billing, purchasing, customer management, accounting, gold schemes, branch management and reporting into one connected system.",
  },
  {
    number: "02",
    question: "Is Blogtec ERP designed specifically for jewellery businesses?",
    answer:
      "Yes. Blogtec is built around the workflows, terminology and operational needs of jewellery businesses, so the platform feels practical for day-to-day use.",
  },
  {
    number: "03",
    question: "What can I manage with Blogtec Jewellery ERP?",
    answer:
      "You can manage billing, inventory, sales, purchases, customer records, accounting, schemes, reporting and branch-level operations from one system.",
  },
  {
    number: "04",
    question: "Can Blogtec manage multiple jewellery branches?",
    answer:
      "Yes. Blogtec is designed to support branch-wise operations, central visibility and consistent reporting across multiple locations.",
  },
  {
    number: "05",
    question: "Can Blogtec handle jewellery inventory and product tracking?",
    answer:
      "Yes. Blogtec helps track jewellery inventory, product movement and stock-related updates more clearly across your operations.",
  },
  {
    number: "05",
    question: "Can Blogtec handle jewellery inventory and product tracking?",
    answer:
      "Yes. Blogtec helps track jewellery inventory, product movement and stock-related updates more clearly across your operations.",
  },
  {
    number: "06",
    question: "Can I manage gold schemes through Blogtec?",
    answer:
      "Yes. Blogtec includes support for gold schemes so your team can manage customer plans and related records with greater clarity.",
  },
  {
    number: "07",
    question: "Can Blogtec integrate accounting with business operations?",
    answer:
      "Yes. Blogtec connects accounting with core business workflows, helping you keep financial information aligned with daily operations.",
  },
  {
    number: "08",
    question: "Can we migrate our existing data to Blogtec?",
    answer:
      "In most cases, yes. We can guide the migration process based on your existing data structure and implementation needs.",
  },
  {
    number: "09",
    question: "How long does implementation take?",
    answer:
      "Implementation time depends on your setup, requirements and data migration needs, but we work closely with your team to make the transition smooth.",
  },
  {
    number: "10",
    question: "Do you provide training for our staff?",
    answer:
      "Yes. We provide practical training so your staff can adopt the system confidently and use it effectively in day-to-day work.",
  },
];

const FaQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="container">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B65A0F] sm:text-[14px]">
            FAQ
          </p>

          <h2 className="mx-auto mt-2 max-w-[640px] text-[29px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#111111] sm:text-[36px] lg:text-[40px]">
            Everything You Need to Know
            <br />
            Before Getting Started.
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[13px] leading-5 text-[#5A5A5A] sm:text-[15px] sm:leading-6">
            Have questions about Blogtec Jewellery ERP, implementation or how
            it fits your business?
            <br className="hidden sm:block" />
            Here are some of the questions jewellery businesses ask us most
            often.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[780px] space-y-3 sm:mt-12">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={`${item.number}-${item.question}-${index}`}
                className={`rounded-[18px] border border-l-[4px] bg-white transition-colors duration-200 ${
                  isOpen
                    ? "border-[#E9C4A6] border-l-[#B65A0F]"
                    : "border-[#E5E5E5] border-l-[#D9D9D9]"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) => (current === index ? null : index))
                  }
                  className="flex w-full items-start justify-between gap-4 rounded-[18px] px-4 py-3.5 text-left sm:px-5 sm:py-4"
                  aria-expanded={isOpen}
                >
                  <span className="pt-0.5 text-[14px] font-medium leading-6 tracking-[-0.02em] text-[#111111] sm:text-[18px]">
                    {item.number}. {item.question}
                  </span>

                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 sm:h-7 sm:w-7 ${
                      isOpen
                        ? "border-[#8E4900] bg-[#8E4900] text-white"
                        : "border-[#D3D3D3] bg-[#F3F3F3] text-[#111111]"
                    }`}
                    aria-hidden="true"
                  >
                    <FiChevronDown
                      className={`text-[14px] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
                    <p className="text-[13px] leading-6 text-[#666666] sm:text-[16px]">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaQ;
