import {
  BsBarChartLine,
  BsBuilding,
  BsCalculator,
  BsCartCheck,
  BsGem,
  BsBoxes,
  BsPhone,
  BsPersonVcard,
  BsReceipt,
  BsUpcScan,
} from "react-icons/bs";

type ModuleItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const modules: ModuleItem[] = [
  {
    icon: BsBoxes,
    title: "Inventory Management",
    description: "Know your stock, movement, valuation and availability with greater accuracy.",
  },
  {
    icon: BsReceipt,
    title: "POS & Jewellery Billing",
    description: "Create faster, smarter and more accurate jewellery bills with transaction control.",
  },
  {
    icon: BsCartCheck,
    title: "Purchase Management",
    description: "Manage suppliers, purchases, receipts and cost flow from one centralized system.",
  },
  {
    icon: BsPersonVcard,
    title: "Customer Management",
    description: "Build stronger customer relationships with complete purchase history and insights.",
  },
  {
    icon: BsCalculator,
    title: "Accounting",
    description: "Keep your financial operations organized with integrated accounting and reporting.",
  },
  {
    icon: BsGem,
    title: "Gold Scheme",
    description: "Manage customer schemes, collections, maturity and transactions with ease.",
  },
  {
    icon: BsBuilding,
    title: "Branch Management",
    description: "Connect multiple branches and gain centralized visibility into your entire business.",
  },
  {
    icon: BsBarChartLine,
    title: "Reports & Analytics",
    description: "Turn your business data into meaningful insights for faster, better decisions.",
  },
  {
    icon: BsUpcScan,
    title: "Barcode & Tagging",
    description: "Simplify product identification, tracking and movement across your jewellery inventory.",
  },
  {
    icon: BsPhone,
    title: "Mobile Access",
    description: "Stay connected to your business wherever you are.",
  },
];

const Module = () => {
  return (
    <section className="bg-[#FBFBFB] py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="bg-gradient-to-r from-[#A44C03] via-[#C96A11] to-[#D39504] bg-clip-text text-[13px] font-medium uppercase tracking-[0.08em] text-transparent sm:text-[15px]">
            Product Modules
          </p>

          <h2 className="text-[26px] font-semibold leading-[1.06] tracking-[-0.06em] text-[#111111] sm:text-[34px] lg:text-[40px]">
            Every Operation, One Intelligent System.
          </h2>

          <p className="mx-auto mt-1 max-w-[680px] text-[14px] leading-6 text-[#5B5B5B] sm:text-[17px] sm:leading-6">
            From the first purchase to the final sale, Blogtec connects the
            critical operations that keep your jewellery business moving.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article
                key={module.title}
                className="flex flex-col items-center rounded-[24px] border border-[#EAEAEA] bg-white px-7 py-10 text-center shadow-[0_12px_28px_rgba(17,17,17,0.04)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5B61C] text-white shadow-[0_10px_20px_rgba(245,182,28,0.24)]">
                  <Icon className="text-[22px]" aria-hidden="true" />
                </div>

                <h3 className="mt-3 text-[20px] font-semibold leading-tight tracking-[-0.04em] text-[#111111]">
                  {module.title}
                </h3>

                <p className="mt-3  text-[16px] leading-5 text-[#5C5C5C]">
                  {module.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border-0 bg-[linear-gradient(90deg,#A44C03_0%,#EA6C03_100%)] px-6 py-3 text-[14px] font-medium text-white shadow-[0_14px_28px_rgba(164,76,3,0.22)] transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-95"
          >
            Explore All Modules
          </button>
        </div>
      </div>
    </section>
  );
};

export default Module;
