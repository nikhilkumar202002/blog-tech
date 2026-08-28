import Image, { StaticImageData } from "next/image";
import akkara from "../../assets/client-logos/Akkara.jpeg";
import arhan from "../../assets/client-logos/Arhan.png";
import athira from "../../assets/client-logos/Athira.png";
import bright from "../../assets/client-logos/Bright.jpg";
import chungath from "../../assets/client-logos/Chungath.jpg";
import elista from "../../assets/client-logos/Elista.png";
import enjay from "../../assets/client-logos/Enjay.jpeg";
import kairali from "../../assets/client-logos/Kairali.png";
import kavitha from "../../assets/client-logos/Kavitha Jewellery.jpg";
import lenkara from "../../assets/client-logos/Lenkara.png";
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
  { src: athira, alt: "Athira Jewellery" },
  { src: bright, alt: "Bright Jewellery" },
  { src: chungath, alt: "Chungath Jewellery" },
  { src: elista, alt: "Elista Jewellery" },
  { src: enjay, alt: "Enjay Jewellery" },
  { src: kairali, alt: "Kairali Jewellery" },
  { src: kavitha, alt: "Kavitha Jewellery" },
  { src: lenkara, alt: "Lenkara Jewellery" },
  { src: queens, alt: "Queens Jewellery" },
];

const ClientLogoSlider = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
     
          <h2 className="mt-4 text-[14px] font-medium leading-tight tracking-[-0.04em] text-[#787878] sm:text-[18px] lg:text-[18px]">
            Trusted by Businesses That Build Their Success on Precision.
          </h2>
        </div>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="logo-marquee-track flex w-[200%] items-stretch">
            {[clientLogos, clientLogos].map((logoGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="grid w-1/2 grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
              >
                {logoGroup.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${groupIndex}-${index}`}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 w-auto max-w-full object-contain sm:h-16 lg:h-[72px]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
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
