import React from "react";
import { FaStar } from "react-icons/fa";

const Feature = () => {
    return (
        <>
                    <h1 className="ml-10 text-2xl font-bold transform translate-y-10">Features </h1>


        <div className="flex w-full h-[60vh] gap-6 mt-10 justify-center items-center px-4">

            {/* box 1 */}
            <div className="w-[30%] h-[47vh] bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col transition-all duration-300 hover:scale-105">

                <div className="w-full h-[27vh] rounded-xl overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFRDjWs78OK2fg0Rn38mg7WR-pDy6RAT8BQ&s"
                        alt=""
                        />
                </div>

                <div className="flex items-center justify-between px-2 mt-3">
                    <h2 className="text-lg font-bold">Business Landing</h2>
                    <span className="text-lg font-bold text-blue-600">$40</span>
                </div>

                <div className="flex items-center justify-between px-2 mt-auto mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-xl text-yellow-500" />
                        <span className="font-semibold">4.8</span>
                    </div>
                </div>

            </div>

            {/* box 2 */}
            <div className="w-[30%] h-[47vh] bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col transition-all duration-300 hover:scale-105">

                <div className="w-full h-[27vh] rounded-xl overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3nuAkuhi_j7z0aJfGkd8HuYKrSW5y7tz7w&s"
                        alt=""
                        />
                </div>

                <div className="flex items-center justify-between px-2 mt-3">
                    <h2 className="text-lg font-bold">Portfolio</h2>
                    <span className="text-lg font-bold text-blue-600">$30</span>
                </div>

                <div className="flex items-center justify-between px-2 mt-auto mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-xl text-yellow-500" />
                        <span className="font-semibold">4.5</span>
                    </div>
                </div>

            </div>

            {/* box 3 */}
            <div className="w-[30%] h-[47vh] bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col transition-all duration-300 hover:scale-105">

                <div className="w-full h-[27vh] rounded-xl overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEoUyaHItovO6OBlnXfBjlq0HadfT6Pd9ow&s"
                        alt=""
                        />
                </div>

                <div className="flex items-center justify-between px-2 mt-3">
                    <h2 className="text-lg font-bold">Admin Panel</h2>
                    <span className="text-lg font-bold text-blue-600">$79</span>
                </div>

                <div className="flex items-center justify-between px-2 mt-auto mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-xl text-yellow-500" />
                        <span className="font-semibold">4.2</span>
                    </div>
                </div>

            </div>

            {/* box 4 */}
            <div className="w-[30%] h-[47vh] bg-white rounded-2xl overflow-hidden shadow-md p-2 flex flex-col transition-all duration-300 hover:scale-105">

                <div className="w-full h-[27vh] rounded-xl overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikrBIqFQyrwAlZI9d3n-eJWjUhsKwuZzxzA&s"
                        alt=""
                        />
                </div>

                <div className="flex items-center justify-between px-2 mt-3">
                    <h2 className="text-lg font-bold">School Manage</h2>
                    <span className="text-lg font-bold text-blue-600">$80</span>
                </div>

                <div className="flex items-center justify-between px-2 mt-auto mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>

                    <div className="flex items-center gap-1">
                        <FaStar className="text-xl text-yellow-500" />
                        <span className="font-semibold">4.9</span>
                    </div>
                </div>

            </div>

        </div>
                        </>
    );
};

export default Feature;