import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navabr/Navabr";

const About = () => {

  const [aboutData, setAboutData] = useState({
    hero_section: {},
    cards: [],
    why_choose_us: {
      points: [],
    },
    statistics: [],
  });

  useEffect(() => {

    api
      .get("/about").then((res) => {

        console.log("API RESPONSE:", res.data);

        setAboutData(res.data.data);

      })
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="w-full overflow-x-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <div className="w-full min-h-[85vh] flex items-center">
        <div className="container flex flex-col items-center gap-12 px-6 mx-auto lg:flex-row">

          {/* LEFT */}
          <div className="w-full lg:w-1/2">

            <h1 className="text-5xl font-bold leading-tight">
              {aboutData.hero_section?.title}
            </h1>

            <p className="max-w-xl mt-6 text-xl leading-9 text-gray-700">
              {aboutData.hero_section?.description}
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center w-full lg:w-1/2">

            <img
              src={aboutData.hero_section?.image}
              alt="about"
              className="w-[90%] max-w-[420px] h-[420px] object-cover rounded-2xl shadow-lg"
            />

          </div>

        </div>
      </div>

      {/* CARDS */}
      <div className="container grid grid-cols-1 gap-6 px-6 py-12 mx-auto md:grid-cols-3">

        {aboutData.cards?.map((card) => (

          <div
            key={card.id}
            className="p-6 border shadow-sm rounded-xl"
          >

            <h1 className="text-2xl font-bold">
              {card.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              {card.description}
            </p>

          </div>

        ))}

      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full py-16 bg-gray-100">

        <div className="container flex flex-col items-center gap-12 px-6 mx-auto lg:flex-row">

          <div className="w-full lg:w-1/2">

            <h1 className="text-3xl font-bold text-blue-600">
              {aboutData.why_choose_us?.title}
            </h1>

            <ul className="pl-5 mt-6 space-y-3 text-lg text-gray-700 list-disc">

              {aboutData.why_choose_us?.points?.map((item, index) => (

                <li key={index}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

      {/* STATISTICS */}
      <div className="w-full py-10 text-white bg-black">

        <div className="container grid grid-cols-2 gap-10 px-6 mx-auto text-center md:grid-cols-4">

          {aboutData.statistics?.map((stat) => (

            <div
              key={stat.id}
              className="space-y-2"
            >

              <h1 className="text-3xl font-bold text-blue-500">
                {stat.value}
              </h1>

              <p className="text-lg text-gray-300">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default About;