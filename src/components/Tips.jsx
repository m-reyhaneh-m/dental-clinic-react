import { useState } from "react";
import { FaShieldAlt, FaSmile, FaTooth } from "react-icons/fa";
import { GiToothbrush, GiWaterDrop } from "react-icons/gi";

const Tips = () => {
  const [activeTip, setActiveTip] = useState(0);
  const tips = [
    {
      title: "Proper Brushing Technique",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam",
      icon: <GiToothbrush className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "Cavity Prevention",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam",
      icon: <FaTooth className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Gum Care",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam",
      icon: <GiWaterDrop className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Tooth Prevention",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam",
      icon: <FaShieldAlt className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Regular Checkups",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, beatae error quam",
      icon: <FaSmile className="w-8 h-8 text-emerald-500" />,
    },
  ];
  return (
    <section id="tips" className=" scroll-mt-20 max-w-6xl mx-auto px-4 py-12">
      <div className=" text-center mb-12">
        <h2 className=" text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Dental Care Tips
        </h2>
        <p className=" text-lg text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          minima
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {tips.map((tip, index) => (
          <button
            key={index}
            onClick={() => setActiveTip(index)}
            className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center hover:cursor-pointer ${
              activeTip === index
                ? "bg-white shadow-lg border-b-4 border-sky-400"
                : "bg-gray-100 hover:bg-blue-200"
            }`}>
            <div className="mb-2">{tip.icon}</div>
            <h3 className=" font-medium text-gray-800 text-sm md:text-base">
              {tip.title}
            </h3>
          </button>
        ))}
      </div>
      <div className="bg-linear-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 bg-white p-6 rounded-xl shadow-lg">
            {tips[activeTip].icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {tips[activeTip].title}
            </h3>
            <p className="tex-lg text-gray-600 leading-relaxed">
              {tips[activeTip].content}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTip === index ? "bg-sky-500 w-5" : "bg-gray-300"
              }`}
              aria-label={`Go to tip ${index + 1}`}></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
