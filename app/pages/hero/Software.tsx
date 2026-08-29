import Image from "next/image";
import {
  FiBarChart2,
  FiDatabase,
  FiRefreshCw,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import threeMobiles from "../../assets/ui/3-mobiles.png";

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: FiSettings,
    title: "Simplify Daily Operations",
    description: "Bring important business processes into a more organized workflow.",
  },
  {
    icon: FiRefreshCw,
    title: "Reduce Manual Effort",
    description: "Spend less time managing repetitive information and updates.",
  },
  {
    icon: FiDatabase,
    title: "Improve Information Access",
    description: "Make important business information easier to access when required.",
  },
  {
    icon: FiShield,
    title: "Strengthen Business Control",
    description: "Gain better visibility across the operations that matter.",
  },
  {
    icon: FiBarChart2,
    title: "Make Better-Informed Decisions",
    description: "Use organized business information to understand your business better.",
  },
];

const Software = () => {
  return (
    <section className=" py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="w-full max-w-none">
            <p className="bg-gradient-to-r from-[#A44C03] via-[#C96A11] to-[#D39504] bg-clip-text text-[13px] font-medium uppercase tracking-[0.08em] text-transparent sm:text-[14px]">
              More Than Software
            </p>

            <h2 className="mt-2 text-[34px] font-semibold leading-[1.02] tracking-[-0.06em] text-[#111111] sm:text-[48px] lg:text-[58px]">
              Simpler Operations. Better Control. More Informed Decisions.
            </h2>

            <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-[#4F4F4F] sm:text-[17px]">
              The purpose of good software isn&apos;t to add complexity. It&apos;s to
              simplify the way your business operates.
            </p>

            <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-[#4F4F4F] sm:text-[17px]">
              Blogtec solutions are designed to help jewellery businesses
              streamline daily operations, improve access to information, reduce
              manual effort and maintain better control over their processes.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[100%] lg:mx-0 lg:justify-self-end">
            <Image
              src={threeMobiles}
              alt="Three Blogtec mobile app screens"
              className="h-auto w-full"
              sizes="(max-width: 100%) 100vw, 560px"
              priority
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className=" rounded-[20px] border border-[#C2C2C2] bg-[#F9F9F9] px-7 py-7 shadow-none"
              >
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#C86404] text-white">
                  <Icon className="text-[28px]" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-[20px] font-semibold leading-tight tracking-[-0.04em] text-[#C86404]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[17px] leading-6 text-[#555555] sm:text-[17px]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Software;
