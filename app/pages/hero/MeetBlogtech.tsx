import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import heroDevices from "../../assets/ui/laptop-tab-mobile-mockups.png";

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "One Platform",
    description: "Multiple business operations connected in one place.",
  },
  {
    title: "Real-Time Visibility",
    description: "Understand what's happening across your business.",
  },
  {
    title: "Smarter Workflows",
    description: "Reduce repetitive work and improve operational efficiency.",
  },
  {
    title: "Better Decisions",
    description: "Use connected information to make more confident decisions.",
  },
];

const MeetBlogtech = () => {
  return (
    <section className="overflow-hidden bg-[#FBFBFB] py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 xl:gap-12">
          <div className="relative">
            <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#E8A65A]/20 blur-3xl sm:-left-6 sm:top-6" />
            <div className="absolute -bottom-8 left-1/3 h-40 w-40 rounded-full bg-[#1C2D53]/8 blur-3xl" />

            <div className="relative mx-auto max-w-[760px] lg:mx-0 lg:max-w-none lg:-translate-x-[6%] xl:-translate-x-[10%]">
              <div className="relative aspect-[1.28/1] w-full">
                <Image
                  src={heroDevices}
                  alt="Blogtec ERP dashboard on laptop, tablet and phone"
                  fill
                  priority
                  className="object-contain object-center drop-shadow-[0_28px_70px_rgba(17,24,39,0.16)]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>

          <div className="max-w-[560px] lg:ml-auto lg:pt-8">
            <p className="bg-gradient-to-r from-[#A44C03] via-[#C96A11] to-[#D39504] bg-clip-text text-[14px] font-medium tracking-[0.04em] text-transparent sm:text-[16px]">
              Meet Blogtec ERP
            </p>

            <h2 className="mt-2 max-w-[470px] text-[34px] font-semibold leading-[1.02] tracking-[-0.06em] text-[#111111] sm:text-[44px] lg:text-[48px]">
              Everything Your Jewellery Business Needs. Connected.
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-[#4D4D4D] sm:text-[16px]">
              Blogtec is a jewellery-focused ERP platform designed to bring your
              daily operations, people and data into one connected ecosystem.
              Instead of switching between disconnected systems, your team gets
              one reliable source of business information from the showroom
              floor to the management desk.
            </p>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#15254A] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_16px_34px_rgba(21,37,74,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#101c38]"
              >
                <span>Explore the Platform</span>
                <FiArrowRight className="text-[18px]" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-9">
              <h3 className="text-[17px] font-semibold tracking-[-0.04em] text-[#111111]">
                Product Benefits
              </h3>

              <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-3">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-[18px] text-[#F7B52C]" aria-hidden="true" />
                    <div>
                      <h4 className="text-[15px] font-semibold leading-tight text-[#111111]">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 max-w-[220px] text-[13px] leading-5 text-[#5C5C5C]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBlogtech;
