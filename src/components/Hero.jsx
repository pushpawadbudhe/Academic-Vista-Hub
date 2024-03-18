import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { Clients } from "./index";
import Header from "./Header";

const Hero = () => {
  return (
    <div id="home">
      <div className={`bg-primary pt-20 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <section style={{ pointerEvents: "none" }} ><Header /></section>
          <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div
              className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2" style={{ pointerEvents: "none" }} >
                <img
                  src={discount}
                  alt="discount"
                  className="w-[32px] h-[32px]" 
                />
                <p className={`${styles.paragraph} ml-2`}>
                  <span className="text-white">Get 90%</span> Scholarship by{" "}
                  <span className="text-white">giving</span> technical test
                </p>
              </div>

              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[52px] text-white ss:leading-[50px] leading-[75px]">
                  Find the Perfect <br className="sm:block hidden" />{" "}
                  <span className="text-gradient">Internship Opportunity</span>{" "}
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                  <GetStarted />
                </div>
              </div>

              <h1 className="font-poppins font-semibold ss:text-[36px] text-[52px] text-white ss:leading-[50px] leading-[75px] w-full">
                with Us
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                We provide the most comprehensive range of internship programs
                to help talented students enhance their skills and build
                meaningful careers. Browse our selection of opportunities now
                and take the first step towards your dream career.
              </p>
            </div>

            <div
              className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
              <img
                src={robot}
                alt="billing"
                className="w-[100%] h-[100%] relative z-[5]"
              />

              {/* gradient start */}
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              {/* gradient end */}
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
        </div>
      </section>
    </div>
  );
};

export default Hero;
