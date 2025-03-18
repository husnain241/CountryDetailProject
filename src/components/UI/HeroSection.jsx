import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main>
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, dolorum!
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            corporis illo modi eos dolore? Eum voluptas, veniam recusandae nihil
            doloremque ullam dolore quas placeat ipsum similique perferendis
            numquam impedit distinctio corporis cum optio accusantium!
          </p>
          <button className="btn btn-dark btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="/download.png" alt="world" className="banner-image" />
        </div>
      </div>
    </main>
  );
};
