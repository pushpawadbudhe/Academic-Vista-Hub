import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section
    id="product"
    className={`bg-primary pt-20 ${styles.paddingX} ${styles.flexCenter}`}
  >
    <div className={`${styles.boxWidth}`}>
      <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse} style={{ pointerEvents: "none" }}>
          <img
            src={bill}
            alt="Domains"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Internship Domains <br className="sm:block hidden" />
            We Offer -
          </h2>
          <li className={`${styles.heading4} `}>Data Science</li>
          <li className={`${styles.heading4} `}>Python Development</li>
          <li className={`${styles.heading4} `}>Java Development</li>
          <li className={`${styles.heading4} `}>Web Development</li>
          <li className={`${styles.heading4} `}>Android Development</li>

          <Button styles={`mt-10 ml-10`} />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
