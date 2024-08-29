import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";

SwiperCore.use([Autoplay, Pagination]);

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1st Step",
      title: "Gather Required Documents",
      description:
        "Collect necessary documents such as identification (passport or driver's license), proof of address (utility bill or lease agreement), and Social Security Number (or equivalent for your country).",
    },
    {
      step: "2nd Step",
      title: "Submit Your Application",
      description:
        "Fill out the application form with your personal details and submit the collected documents.",
    },
    {
      step: "3rd Step",
      title: "Verification Process",
      description:
        "Your documents and application will be verified. You may be contacted for further details if needed.",
    },
    {
      step: "4th Step",
      title: "Account Activation",
      description:
        "Once verified, your account will be activated and you'll receive confirmation.",
    },
  ];

  return (
    <Container>
      <section id="how" className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-3 flex">
              <span className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
                How It Works
              </span>
              <h2 className="w-full text-center text-indigo-700 text-4xl font-bold leading-normal">
                Steps to Open Your Account
              </h2>
            </div>
            <div className="w-full justify-start lg:items-end items-center lg:gap-16 gap-8 flex lg:flex-row flex-col">
              <img
                className=""
                src="https://pagedone.io/asset/uploads/1720589731.png"
                alt="How It Works image"
              />
              <div className="swiper mySwiper flex flex-col lg:gap-32 gap-16 w-full">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={32}
                  loop={true}
                  centeredSlides={true}
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: (index, className) =>
                      `<span class="${className}">${index + 1}</span>`,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                  {steps.map((step, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full flex-col justify-center items-start gap-4 flex">
                        <span className="w-full text-blue-700 text-base font-medium leading-relaxed lg:text-start text-center">
                          {step.step}
                        </span>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-1.5 flex">
                          <h4 className="text-gray-900 text-xl font-semibold leading-8 lg:text-start text-center">
                            {step.title}
                          </h4>
                          <p className="lg:max-w-3xl w-full text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination lg:justify-start justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HowItWorksSection;
