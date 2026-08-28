type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const timelineItems: TimelineItem[] = [
  {
    year: "2007",
    title: "2007",
    description: "Blogtech Software was founded.",
  },
  {
    year: "Industry Experience",
    title: "Industry Experience",
    description: "Understanding real jewellery workflows.",
  },
  {
    year: "Product Development",
    title: "Product Development",
    description: "Building practical business software.",
  },
  {
    year: "Modern Solutions",
    title: "Modern Solutions",
    description: "Mobile and digital capabilities.",
  },
  {
    year: "Today",
    title: "Today",
    description: "Continuing to evolve with the jewellery industry.",
  },
];

const AboutTimeline = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="bg-gradient-to-r from-[#A44C03] to-[#D39504] bg-clip-text text-[16px] font-medium uppercase tracking-[0.06em] text-transparent sm:text-[18px]">
            Experience that understands the industry
          </p>

          <h2 className="mt-1 text-[25px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#111111] sm:text-[30px] lg:text-[35px]">
            Nearly Two Decades of Building for Jewellery Businesses.
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-4 text-[#4a4a4a] sm:text-[17px] sm:leading-6">
            Since its foundation in 2007, Blogtech Software has worked closely
            with jewellery businesses to understand how the industry operates
            in real-world environments. That experience has shaped software
            that is not only technically capable, but also practical,
            dependable and easy to use.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[10px] hidden h-[2px] bg-[#f6c23f] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {timelineItems.map((item) => (
              <div
                key={item.year}
                className="relative rounded-[24px] px-2 pb-2 pt-8 text-center sm:px-3 lg:px-0 lg:pt-12 lg:text-left"
              >
                <div className="absolute left-1/2 top-0 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-[5px] border-[#f6c23f] bg-white lg:left-0 lg:translate-x-0" />

                <h3 className="text-[18px] font-semibold leading-tight tracking-[-0.04em] text-[#111111] sm:text-[19px]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[14px] leading-5 text-[#505050] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
