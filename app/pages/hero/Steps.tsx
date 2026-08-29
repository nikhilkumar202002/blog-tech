import { FiArrowRight } from "react-icons/fi";

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We take time to understand your workflows, challenges, and business requirements. This helps us shape a solution around how your business actually operates.",
  },
  {
    number: "02",
    title: "Set Up the Solution",
    description:
      "We configure and implement the right tools and workflows for your business. Everything is structured to fit your processes and operational needs.",
  },
  {
    number: "03",
    title: "Help Your Team Adopt It",
    description:
      "We guide your team through the new system and help them get comfortable using it. Clear support and practical guidance make the transition easier.",
  },
  {
    number: "04",
    title: "Support Your Business as It Grows",
    description:
      "We continue supporting your business as your needs and operations evolve. The solution can adapt with you as your business grows and changes.",
  },
];

const Steps = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[14px] font-medium uppercase tracking-[0.02em] text-[#B65A0F] sm:text-[18px]">
            Beyond the Software
          </p>

          <h2 className="mt-2 text-[29px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#111111] sm:text-[36px] lg:text-[41px]">
            We&apos;re Here for the Journey, Not Just
            <br />
            the Installation.
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-6 text-[#4C4C4C] sm:text-[17px]">
            Choosing business software is a long-term decision. Blogtec focuses
            on building dependable relationships with jewellery businesses and
            providing responsive support as their requirements evolve.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <div className="absolute left-[4.5%] right-[4.5%] top-[110px] hidden h-[3px] bg-[#B65A0F] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-[20px] border border-[#E2E2E2] bg-[#F9F9F9] px-5 pb-5 pt-5 text-left shadow-none sm:px-6 sm:pb-6 sm:pt-6"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-[#B65A0F] text-[18px] font-semibold tracking-[-0.04em] text-white sm:h-12 sm:w-12">
                  {step.number}
                </div>

                <h3 className="text-[18px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#B65A0F] sm:text-[22px]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-6 text-[#555555] sm:text-[16px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full bg-[#10224A] px-6 py-3 text-[15px] font-medium text-white shadow-[0_18px_40px_rgba(16,34,74,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0B1733]"
          >
            <span>Talk to Our Team</span>
            <FiArrowRight className="text-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Steps;
