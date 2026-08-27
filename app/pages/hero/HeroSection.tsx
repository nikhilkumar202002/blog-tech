import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import desktopShot from "../../assets/ui/hero-ui-screen-web.png";
import mobileShot from "../../assets/ui/hero-ui-screen-mobile.png";
import texture from "../../assets/background/brown-texture.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6F6F6] py-14 sm:py-16 lg:py-20">
    

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <p className="bg-gradient-to-r from-[#A44C03] to-[#D39504] bg-clip-text text-[16px] font-semibold uppercase text-transparent sm:text-[16px]">
            Technology built around the jewellery business
          </p>

          <h1 className=" max-w-[980px] text-[45px] font-medium leading-[1.01] tracking-[-0.06em] text-[#111111] sm:text-[45px] md:text-[50px] lg:text-[55px]">
            Run Your Jewellery Business Smarter.
            <span className="block">From One Connected Platform.</span>
          </h1>

          <p className="mt-1 max-w-[760px] text-[14px] leading-7 text-[#313131] sm:text-[18px] sm:leading-6">
            Manage inventory, billing, sales, accounting, schemes and business
            reporting in one organized platform built around the needs of
            jewellery businesses.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-[#12264f] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_16px_30px_rgba(18,38,79,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0d1d3b]"
            >
              <span>Book a Free Demo</span>
              <FiArrowRight className="text-[18px]" aria-hidden="true" />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-[#101010] shadow-[0_16px_30px_rgba(17,17,17,0.08)] ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f7b52c] text-white">
                <FiPlay className="ml-0.5 text-[12px]" aria-hidden="true" />
              </span>
              <span>Explore Jewellery ERP</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(340px,0.95fr)]">
          <div
            className="relative overflow-hidden rounded-[50px] border border-[#d1863a]/45 bg-cover bg-center p-4 shadow-[0_32px_90px_rgba(101,53,8,0.18)] sm:p-5 lg:p-6"
            style={{ backgroundImage: `url(${texture.src})` }}
          >
            <div className="overflow-hidden">
              <Image
                src={desktopShot}
                alt="Desktop dashboard preview for the jewellery ERP platform"
                className="h-auto w-full"
                priority
                sizes="(max-width: 1024px) 100vw, 68vw"
              />
            </div>
          </div>

          <div className="flex items-stretch">
            <div
              className="relative flex w-full items-center justify-center overflow-hidden rounded-[50px] border border-[#d1863a]/45 bg-cover bg-center p-4 shadow-[0_32px_90px_rgba(101,53,8,0.18)] sm:p-5 lg:p-6"
              style={{ backgroundImage: `url(${texture.src})` }}
            >
              <div className="flex w-full items-center justify-center overflow-hidden ">
                <Image
                  src={mobileShot}
                  alt="Mobile sales report preview for the jewellery ERP platform"
                  className="h-auto w-full "
                  priority
                  sizes="(max-width: 1024px) 100vw, 28vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
