import HeroSection from "./pages/hero/HeroSection";
import ClientLogoSlider from "./pages/hero/ClientLogoSlider";
// import AboutTimeline from "./pages/hero/AboutTimeline";
import JewelleryBusiness from "./pages/hero/JewelleryBusiness";
import BeforeAfter from "./pages/hero/BeforeAfter";
import MeetBlogtech from "./pages/hero/MeetBlogtech";
import PlatformBanner from "./pages/hero/PlatformBanner";
import Module from "./pages/hero/Module";

const Page = () => {
  return (
    <>
      <HeroSection />
      <ClientLogoSlider />  
    {/* <AboutTimeline /> */}
      <JewelleryBusiness />
      <BeforeAfter />
      <MeetBlogtech />
      <PlatformBanner />
      <Module />
    </>
  );
};

export default Page;
