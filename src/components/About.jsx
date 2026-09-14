import { FaUserMd } from "react-icons/fa";
import aboutImg from "../assets/About.png";
const About = () => {
  return (
    <section id="about" className="py-20 scroll-mt-20 bg-sky-50">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About"
            className="w-80 lg:w-[420px] rounded-full shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className=" flex items-center justify-center lg:justify-start space-x-2">
            <FaUserMd className="text-sky-700 w-7 h-7" />
            <h2 className="text-3xl font-bold text-sky-900">
              About Our Clinic
            </h2>
          </div>
          <p className=" text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minima, beatae error quam ipsum quos dolorem doloribus nisi
            blanditiis praesentium ducimus. Ratione incidunt a est suscipit,
            quam illo perferendis quaerat.
          </p>
          <p className=" text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minima, beatae error quam ipsum quos dolorem doloribus nisi
            blanditiis praesentium ducimus. Ratione incidunt a est suscipit,
            quam illo perferendis quaerat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
