import Image from "next/image";
import ceoImage from "../../assets/CEO.jpg";
import signature from "../../assets/signature.png";

const MeetCEO = () => {
  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="bg-[#F8F8F8]">
             <div className="container space-y-0">
        <div className=" lg:py-[120px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B65A0F] sm:text-[14px]">
                The Story Behind Blogtec
              </p>

              <h2 className="mt-3 max-w-[720px] text-[38px] font-semibold leading-[0.95] tracking-[-0.07em] text-[#111111] sm:text-[55px] lg:text-[55px]">
                Built From a Clear Understanding of the Jewellery Business.
              </h2>
            </div>

            <div className="lg:pt-1">
              <p className="text-[15px] leading-7 text-[#4A4A4A] sm:text-[17px]">
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
                  className="h-16 w-auto sm:h-[55px]"
                  priority
                />

                <p className="mt-4 text-[18px] font-semibold tracking-[-0.04em] text-[#B65A0F]">
                  Prajesh Raj CA
                </p>
                <p className="text-[14px] text-[#111111]">Founder &amp; CEO</p>
              </div>
            </div>
          </div>
        </div>
    </div>
        </div>
     

    <div className="container space-y-0 relative top-[-150px]">
 <div >
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
            <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_28px_70px_rgba(65,35,16,0.16)] sm:rounded-[32px]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={ceoImage}
                  alt="Prajesh Raj CA speaking on the phone at his desk"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
            </div>

            <blockquote className="max-w-[520px] text-[28px] font-semibold leading-15 tracking-[-0.05em] text-[#C86408] sm:text-[55px] pb-[100px]">
              &ldquo;Technology Built Around the Jewellery Business.&rdquo;
            </blockquote>
          </div>
        </div>
    </div>
       


    </section>
  );
};

export default MeetCEO;
