import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/MAIN-LOGO.png";

const footerColumns = [
  {
    title: "Platform",
    links: ["Jewellery ERP", "Features", "Modules", "Integrations", "Security"],
  },
  {
    title: "Solutions",
    links: [
      "Jewellery Retail",
      "Multi-Branch",
      "Wholesale",
      "Gold & Diamond",
      "Manufacturing",
    ],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "ERP Guide", "FAQs", "Product Videos"],
  },
  {
    title: "Company",
    links: ["About Us", "Customers", "Careers", "Contact", "Support"],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-white">
      <div className="container pt-12 pb-[20px] lg:pb-[20px] lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr_0.9fr] lg:gap-10">
          <div className="max-w-[320px]">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logo}
                alt="Blogtec Software"
                className="h-12 w-auto brightness-0 invert sm:h-14"
                priority
              />
            </Link>

            <p className="mt-6 max-w-[250px] text-[16px] leading-5 text-white/90">
              Powering smarter jewellery businesses with connected ERP technology.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[22px] font-semibold leading-7">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-[17px] leading-6 text-white/95">
                {column.links.map((link) => (
                  <li key={link} className="flex items-start gap-2">
                    <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#f4b400]" />
                    <Link
                      href="#"
                      className="transition-colors hover:text-[#f4b400]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 border-y border-[#4E4E4E] py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1 text-[18px] font-medium leading-7">
            <p>
              <span className="font-semibold">Call:</span> +91 XXXXX XXXXX
            </p>
            <p>
              <span className="font-semibold">Email:</span> info@blogtec.co.in
            </p>
          </div>

          <div className="lg:pl-[2px] lg:shrink-0">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[17px] font-medium text-[#c86d05] shadow-[0_10px_28px_rgba(255,255,255,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>

        <div className="mt-[20px] flex flex-col gap-4 text-[15px] text-white/85 lg:mt-[20px] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p>&copy; 2026 Blogtec. All Rights Reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            <div className="flex flex-wrap items-center gap-2 text-right">
              <Link href="#" className="transition-colors hover:text-[#f4b400]">
                Privacy Policy
              </Link>
              <span>&middot;</span>
              <Link href="#" className="transition-colors hover:text-[#f4b400]">
                Terms & Conditions
              </Link>
              <span>&middot;</span>
              <Link href="#" className="transition-colors hover:text-[#f4b400]">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
