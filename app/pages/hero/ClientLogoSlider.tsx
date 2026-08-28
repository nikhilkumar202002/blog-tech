import Image, { StaticImageData } from "next/image";
import akkara from "../../assets/client-logos/Akkara.jpeg";
import arhan from "../../assets/client-logos/Arhan.png";
import bright from "../../assets/client-logos/Bright.jpg";
import chungath from "../../assets/client-logos/Chungath.jpg";
import kairali from "../../assets/client-logos/Kairali.png";
import queens from "../../assets/client-logos/Queens.jpg";
import zayraa from "../../assets/client-logos/Zayraa.jpg";

type ClientLogo = {
  src: StaticImageData;
  alt: string;
};

const clientLogos: ClientLogo[] = [
  { src: zayraa, alt: "Zayraa Gold & Diamonds" },
  { src: akkara, alt: "Akkara Jewellery" },
  { src: arhan, alt: "Arhan Jewellery" },
  { src: bright, alt: "Bright Jewellery" },
  { src: chungath, alt: "Chungath Jewellery" },
  { src: kairali, alt: "Kairali Jewellery" },
  { src: queens, alt: "Queens Jewellery" },
];

const ClientLogoSlider = () => {
  return (
    <section className=" bg-white pt-10 sm:pt-12">
      <div className="container">
        <div className="mx-auto max-w-[1040px] text-center">
          <h2 className="text-[14px] font-medium leading-tight tracking-[-0.03em] text-[#787878] sm:text-[16px] lg:text-[17px]">
            Trusted by Businesses That Build Their Success on Precision.
          </h2>
        </div>

        <div className="mt-3 overflow-hidden rounded-[28px] bg-white px-2 py-3 sm:mt-3 sm:px-4 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="logo-marquee-track flex w-max items-center gap-10 sm:gap-14 lg:gap-16">
            {[clientLogos, clientLogos].map((logoGroup, groupIndex) => (
              <div key={groupIndex} className="flex items-center gap-10 sm:gap-14 lg:gap-16">
                {logoGroup.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${groupIndex}-${index}`}
                    className="flex min-h-[64px] min-w-[120px] items-center justify-center sm:min-h-[76px] sm:min-w-[138px] lg:min-w-[150px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 w-auto max-w-full object-contain sm:h-12 lg:h-14"
                      sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 150px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
