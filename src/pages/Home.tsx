import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FeaturesSectionDemo2 } from "@/components/ui/feature2sec";
import HowItWorksSection from "@/components/HowItWorks";
import HeroSection from "@/components/HeroSection";
import OurPartners from "@/components/OurPartners";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Integrations from "@/components/Integrations";
function Home() {
  return (
    <div>
      <HeroSection />
      <OurPartners />

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
              Streamline Your Inbox Experience with <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-indigo-600">
                Maileyo
                </span>
              </h1>
            </>
          }
        >
          <img
            src=""
            alt="hero"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-40">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Unlock the Full Potential of Your Inbox with These Powerful {" "}
                <span className="text-indigo-600">Features</span>{" "}
              </h2>
            </div>
            <div className="relative w-full text-center  lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
              We deliver all the tools you need to simplify and optimize your email management, without any unnecessary complexity.
              </p>
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  ></path>
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  ></path>
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  ></polygon>
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  ></path>
                </svg>
                Continue with Gmail
              </a>
            </div>
          </div>
        </div>
        <FeaturesSectionDemo2  />
        <Pricing />

        <Cta />

        <HowItWorksSection />

        <Integrations />
      </div>
    </div>
  );
}

export default Home;
