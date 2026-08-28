type IndustryStep = {
  title: string;
  description: string;
};

const steps: IndustryStep[] = [
  {
    title: "Traditional Operations",
    description: "Desktop-based business management",
  },
  {
    title: "Connected Software",
    description: "Integrated business operations",
  },
  {
    title: "Digital Access",
    description: "Mobile & digital solutions",
  },
  {
    title: "Modern Jewellery ERP",
    description: "Connected, accessible and continuously evolving",
  },
];

const Industry = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B65A0F] sm:text-[14px]">
            Evolving with the industry
          </p>

          <h2 className="mx-auto mt-2 max-w-[720px] text-[28px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#111111] sm:text-[36px] lg:text-[42px]">
            From Traditional Business Management to Modern Digital Solutions.
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-6 text-[#4D4D4D] sm:text-[16px] sm:leading-7">
            The jewellery industry continues to evolve with changing customer
            expectations, increasing competition and growing reliance on
            technology.
          </p>

          <p className="mx-auto mt-2 max-w-[760px] text-[14px] leading-6 text-[#4D4D4D] sm:text-[16px] sm:leading-7">
            Blogtec continues to enhance its products and introduce modern
            solutions that help jewellery businesses adopt new technology
            without losing the simplicity and practicality they need.
          </p>
        </div>

        <div className="relative mt-14 lg:mx-auto lg:mt-16 lg:w-[70%]">
          <div className="absolute left-[4%] right-[4%] top-[14px] hidden h-[4px] rounded-full bg-[#B65A0F] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.title}
                className="relative rounded-[18px] border border-[#E0E0E0] bg-white px-5 pb-5 pt-9 text-left shadow-none sm:px-6 sm:pb-6 sm:pt-10"
              >
                <div className="absolute left-1/2 top-[-24px] hidden h-5 w-5 -translate-x-1/2 rounded-full bg-[#B65A0F] lg:block" />

                <div className="absolute left-5 top-[18px] h-3 w-3 rounded-full bg-[#B65A0F] lg:hidden" />

                <h3 className="text-[18px] font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-[19px]">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[220px] text-[14px] leading-5 text-[#4A4A4A] sm:text-[15px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
