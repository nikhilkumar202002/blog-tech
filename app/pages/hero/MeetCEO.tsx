import Image from "next/image";
import signature from "../../assets/signature.png";
import brownTexture from "../../assets/background/brown-texture.jpg";

const MeetCEO = () => {
  return (
    <section className="overflow-hidden bg-[#F7F4EF] py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B65A0F] sm:text-[14px]">
              The Story Behind Blogtec
            </p>

            <h2 className="mt-3 max-w-[620px] text-[38px] font-semibold leading-[0.95] tracking-[-0.07em] text-[#111111] sm:text-[52px] lg:text-[64px]">
              Built From a Clear Understanding of the Jewellery Business.
            </h2>

            <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[#1E120B] shadow-[0_28px_70px_rgba(65,35,16,0.16)] sm:rounded-[32px]">
              <div className="absolute inset-0">
                <Image
                  src={brownTexture}
                  alt=""
                  fill
                  priority
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,248,240,0.24),_transparent_42%),linear-gradient(135deg,_rgba(17,17,17,0.18),_rgba(17,17,17,0.46))]" />
              </div>

              <div className="relative flex min-h-[420px] flex-col gap-6 p-6 sm:p-8 lg:min-h-[520px] lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm sm:text-[12px]">
                    Founder&apos;s message
                  </div>

                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm sm:text-[12px]">
                    Since 2007
                  </div>
                </div>

                <div className="mt-auto grid gap-5 sm:max-w-[440px]">
                  <div className="h-px w-16 bg-[#D39504]/80" />

                  <p className="text-[18px] leading-8 text-white/92 sm:text-[20px]">
                    We built Blogtec to solve the everyday realities of jewellery
                    businesses: stock accuracy, billing, accounting, reporting
                    and the need for a system that feels reliable in real use.
                  </p>

                  <div className="rounded-[24px] border border-white/20 bg-[#FFF7EF]/94 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                    <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#B65A0F]">
                      Leadership note
                    </p>
                    <p className="mt-3 text-[15px] leading-6 text-[#2A1A12]">
                      Practical software, shaped by industry understanding and
                      built to support growth with clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[560px] text-[15px] leading-7 text-[#4A4A4A] sm:text-[17px]">
              Blogtec Software was founded in 2007 by Prajesh Raj CA with a
              clear vision: to develop reliable, efficient and industry-focused
              software solutions specifically for the jewellery business. Over
              the years, our close association with jewellery businesses has
              helped us understand the challenges they face every day - from
              managing stock and billing to accounting, schemes and business
              reporting.
            </p>

            <div className="mt-10">
              <Image
                src={signature}
                alt="Prajesh Raj CA signature"
                className="h-16 w-auto sm:h-18"
                priority
              />

              <p className="mt-4 text-[18px] font-semibold tracking-[-0.04em] text-[#B65A0F]">
                Prajesh Raj CA
              </p>
              <p className="text-[14px] text-[#111111]">Founder &amp; CEO</p>
            </div>

            <blockquote className="mt-14 max-w-[520px] text-[28px] font-semibold leading-tight tracking-[-0.05em] text-[#C86408] sm:text-[38px]">
              “Technology Built Around the Jewellery Business.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCEO;
