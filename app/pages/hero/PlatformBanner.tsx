import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import bannerImage from "../../assets/ui/laptop-mockup-3.jpg";

const PlatformBanner = () => {
  return (
    <section className="relative bg-[#FBFBFB]">
      <div
        className="relative bg-cover bg-no-repeat py-[80px] sm:py-[150px]"
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundPosition: "68% center",
          backgroundAttachment: "fixed",
        }}
      >
      

        <div className="relative z-10 flex items-center">
          <div className="container">
            <div className="max-w-[680px] text-left text-white">
              <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-white/92 sm:text-[15px]">
                See your business clearly
              </p>

              <h2 className="mt-3 max-w-[680px] text-[40px] font-semibold leading-[1.04] tracking-[-0.06em] text-white sm:text-[52px] lg:text-[58px]">
                One Platform. A Better View of Your Business.
              </h2>

              <p className="mt-5 max-w-[680px] text-[15px] leading-6 text-white/88 sm:text-[17px] sm:leading-6">
                Bring important business information together and access it
                through an organized platform designed for jewellery operations.
                Monitor the information that matters across inventory, sales,
                customers, accounts and reporting.
              </p>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-[#B35B12] shadow-[0_14px_30px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7EF]"
                >
                  <span>Explore the Platform</span>
                  <FiArrowRight className="text-[18px]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformBanner;
