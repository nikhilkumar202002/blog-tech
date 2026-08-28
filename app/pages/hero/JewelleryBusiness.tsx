"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { FiChevronDown } from "react-icons/fi";
import businessUi from "../../assets/ui/hero-third-section.png";

type AccordionItem = {
  id: string;
  title: string;
  description: string;
};

const accordionItems: AccordionItem[] = [
  {
    id: "complex-inventory",
    title: "Complex Inventory",
    description: "Manage designs, variations, quantities, weights, rates and stock movement.",
  },
  {
    id: "detailed-billing",
    title: "Detailed Billing",
    description: "Handle billing workflows with the detail jewellery operations require.",
  },
  {
    id: "barcode-management",
    title: "Barcode Management",
    description: "Track items quickly across sales, stock and internal movement.",
  },
  {
    id: "customer-transactions",
    title: "Customer Transactions",
    description: "Keep customer activity organized across every branch and touchpoint.",
  },
  {
    id: "accounts-schemes",
    title: "Accounts & Schemes",
    description: "Connect accounting, schemes and outstanding balances in one system.",
  },
  {
    id: "business-reporting",
    title: "Business Reporting",
    description: "See the numbers that matter with practical reporting for daily decisions.",
  },
];

const JewelleryBusiness = () => {
  const [openItem, setOpenItem] = useState(accordionItems[0].id);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="w-full">
            <p className="bg-gradient-to-r from-[#A44C03] to-[#D39504] bg-clip-text text-[13px] font-medium uppercase tracking-[0.08em] text-transparent sm:text-[16px]">
              The reality of running a jewellery business
            </p>

            <h2 className="mt-1 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[#111111] sm:text-[40px] lg:text-[48px]">
              Jewellery Businesses Have Unique Things to Manage.
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-[#4b4b4b] sm:text-[17px]">
              Jewellery businesses are different from conventional retail.
              Multiple designs, product variations, barcodes, stock quantities,
              weights, rates, making charges, customer transactions, accounts
              and schemes all need to work together.
            </p>

            <div className="mt-8 space-y-3">
              {accordionItems.map((item) => {
                const isOpen = openItem === item.id;

                return (
                  <div
                    key={item.id}
                    className={`overflow-hidden rounded-[18px] border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-[#f3d8af] shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
                        : "border-[#e9e9e9]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenItem(isOpen ? "" : item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <div>
                        <h3
                          className={`text-[16px] font-medium leading-tight tracking-[-0.03em] sm:text-[17px] ${
                            isOpen ? "text-[#c86a14]" : "text-[#111111]"
                          }`}
                        >
                          {item.title}
                        </h3>

                        {isOpen ? (
                          <p className="mt-2 max-w-[430px] text-[14px] leading-6 text-[#5c5c5c] sm:text-[15px]">
                            {item.description}
                          </p>
                        ) : null}
                      </div>

                      <span
                        className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#c86a14]" : "text-[#111111]"
                        }`}
                        aria-hidden="true"
                      >
                        <FiChevronDown className="text-[18px]" />
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[30px] bg-gradient-to-br from-[#f5e0ac] via-[#f9edc9] to-[#fffdf7] shadow-[0_20px_50px_rgba(178,135,33,0.12)]" />

            <div className="relative overflow-hidden rounded-[30px] p-4 sm:p-5">
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px] bg-[#fffdf8]">
                <Image
                  src={businessUi as StaticImageData}
                  alt="Jewellery business software interface preview"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelleryBusiness;
