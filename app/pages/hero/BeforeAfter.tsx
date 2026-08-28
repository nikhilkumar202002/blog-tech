import {
  FiBarChart2,
  FiBriefcase,
  FiEye,
  FiFileText,
  FiGitBranch,
  FiLink,
  FiLayers,
  FiMove,
  FiPackage,
} from "react-icons/fi";

type ComparisonItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const beforeItems: ComparisonItem[] = [
  {
    icon: FiLink,
    title: "Disconnected Systems",
    description: "Information spread across multiple applications and spreadsheets.",
  },
  {
    icon: FiMove,
    title: "Manual Processes",
    description: "Teams spend unnecessary time entering and checking information.",
  },
  {
    icon: FiEye,
    title: "Limited Visibility",
    description: "Management struggles to get a complete view of the business.",
  },
  {
    icon: FiGitBranch,
    title: "Branch-by-Branch Data",
    description: "Important information remains difficult to compare and consolidate.",
  },
  {
    icon: FiFileText,
    title: "Manual Reports",
    description: "Business insights take time to prepare.",
  },
];

const afterItems: ComparisonItem[] = [
  {
    icon: FiLayers,
    title: "One Connected Platform",
    description: "Bring critical business operations together.",
  },
  {
    icon: FiPackage,
    title: "Connected Workflows",
    description: "Let information move with your business.",
  },
  {
    icon: FiEye,
    title: "Real-Time Visibility",
    description: "See what's happening across your operations.",
  },
  {
    icon: FiBriefcase,
    title: "Centralized Management",
    description: "Manage multiple branches with greater control.",
  },
  {
    icon: FiBarChart2,
    title: "Smarter Insights",
    description: "Turn business information into useful decisions.",
  },
];

function ComparisonCard({
  eyebrow,
  title,
  items,
  variant,
}: {
  eyebrow: string;
  title: string;
  items: ComparisonItem[];
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";
  const cardClasses = isBefore
    ? "border-[#E5E5E5] bg-white/95 shadow-[0_18px_50px_rgba(17,17,17,0.05)]"
    : "border-[#D98A45] bg-[#FFF8F1] shadow-[0_18px_50px_rgba(211,136,63,0.09)]";
  const tagClasses = isBefore
    ? "bg-[#A1A1A1] text-white shadow-[0_10px_24px_rgba(0,0,0,0.09)]"
    : "bg-[#BA5A00] text-white shadow-[0_12px_26px_rgba(186,90,0,0.18)]";
  const iconWrapClasses = isBefore
    ? "border-[#E0E0E0] bg-[#F7F7F7] text-[#787878]"
    : "border-[#F2B580] bg-[#FFF1E3] text-[#C96A11]";
  const itemTitleClasses = isBefore ? "text-[#111111]" : "text-[#1A1A1A]";
  const itemDescriptionClasses = "text-[#5A5A5A]";

  return (
    <div
      className={`relative rounded-[26px] border p-5 pt-9 sm:p-6 sm:pt-10 lg:p-7 lg:pt-11 ${cardClasses}`}
    >
      <div
        className={`absolute -top-4 left-5 rounded-[8px] px-4 py-2 text-[14px] font-semibold leading-none tracking-[-0.02em] sm:left-6 ${tagClasses}`}
      >
        {eyebrow}
      </div>

      <h3 className="text-[24px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#111111] sm:text-[27px]">
        {title}
      </h3>

      <div className="mt-5 divide-y divide-black/8">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${iconWrapClasses}`}
              >
                <Icon className="text-[18px]" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h4 className={`text-[16px] font-semibold leading-tight ${itemTitleClasses}`}>
                  {item.title}
                </h4>

                <p className={`mt-1 max-w-[260px] text-[14px] leading-5 ${itemDescriptionClasses}`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const BeforeAfter = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="bg-gradient-to-r from-[#A44C03] via-[#C96A11] to-[#D39504] bg-clip-text text-[13px] font-medium uppercase tracking-[0.05em] text-transparent sm:text-[16px]">
            A smarter way to operate
          </p>

          <h2 className="mx-auto mt-1 max-w-[700px] text-[28px] font-semibold leading-[1.16] tracking-[-0.06em] text-[#111111] sm:text-[34px] lg:text-[42px]">
            From Operational Complexity to Business Clarity.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:mx-auto lg:mt-14 lg:max-w-[1440px] lg:grid-cols-2 lg:gap-6">
          <ComparisonCard
            eyebrow="Before Blogtec"
            title="What slows businesses down"
            items={beforeItems}
            variant="before"
          />

          <ComparisonCard
            eyebrow="With Blogtec"
            title="What changes with one platform"
            items={afterItems}
            variant="after"
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
