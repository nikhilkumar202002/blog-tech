"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import desktopShot from "../../assets/ui/hero-ui-screen-web.png";
import mobileShot from "../../assets/ui/hero-ui-screen-mobile.png";
import texture from "../../assets/background/brown-texture.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const mediaGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.95,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative min-h-[100svh] overflow-hidden bg-[#F6F6F6] lg:h-[1020px] lg:min-h-0"
    >
      <div className="container relative flex h-full flex-col pb-8 pt-[150px] lg:pb-0 lg:pt-[200px]">
        <motion.div
          variants={staggerGroup}
          className="mx-auto flex max-w-[980px] flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="hero-kicker bg-gradient-to-r from-[#A44C03] to-[#D39504] bg-clip-text text-[16px] font-semibold uppercase text-transparent sm:text-[16px]"
          >
            Technology built around the jewellery business
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="hero-title max-w-[980px] text-[45px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#111111] sm:text-[45px] md:text-[50px] lg:text-[55px]"
          >
            Run Your Jewellery Business Smarter.
            <span className="block">From One Connected Platform.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="hero-description mt-1 max-w-[760px] text-[14px] leading-7 text-[#313131] sm:text-[18px] sm:leading-6"
          >
            Manage inventory, billing, sales, accounting, schemes and business
            reporting in one organized platform built around the needs of
            jewellery businesses.
          </motion.p>

          <motion.div
            variants={staggerGroup}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#12264f] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_16px_30px_rgba(18,38,79,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0d1d3b]"
              >
                <span>Book a Free Demo</span>
                <FiArrowRight className="text-[18px]" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-[#101010] shadow-[0_16px_30px_rgba(17,17,17,0.08)] ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f7b52c] text-white">
                  <FiPlay className="ml-0.5 text-[12px]" aria-hidden="true" />
                </span>
                <span>Explore Jewellery ERP</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={mediaGroup} className="mt-12 flex flex-1 items-end">
          <div className="grid w-full gap-6 max-sm:-mx-5 max-sm:w-[calc(100%+40px)] sm:mx-0 lg:grid-cols-[7fr_3fr] lg:items-end">
            <motion.div
              variants={fadeUp}
              className="hero-screen-frame relative h-[300px] overflow-hidden rounded-t-[42px] rounded-b-none px-0 pt-0 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:h-[420px] sm:px-5 sm:pt-5 sm:rounded-t-[50px] lg:h-[520px] lg:px-6 lg:pt-6"
              style={{ backgroundImage: `url(${texture.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <Image
                src={desktopShot}
                alt="Desktop dashboard preview for the jewellery ERP platform"
                fill
                className="hero-screen-image object-cover object-top sm:pt-[20px] sm:px-[20px]"
                priority
                sizes="(max-width: 1024px) 100vw, 68vw"
              />
            </motion.div>

            <div className="flex items-stretch">
              <motion.div
                variants={fadeUp}
                className="hero-screen-frame relative h-[300px] w-full overflow-hidden rounded-t-[42px] rounded-b-none px-0 pt-0 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:h-[420px] sm:px-5 sm:pt-5 sm:rounded-t-[50px] lg:h-[520px] lg:px-6 lg:pt-6"
                style={{ backgroundImage: `url(${texture.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <Image
                  src={mobileShot}
                  alt="Mobile sales report preview for the jewellery ERP platform"
                  fill
                  className="hero-screen-image object-cover object-top sm:pt-[20px] sm:px-[20px]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 28vw"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
