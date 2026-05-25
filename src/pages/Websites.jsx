import React, { useEffect, useState } from "react";
import Navbar from "../components/Navabr/Navabr.jsx";

import { FaStar, FaSearch } from "react-icons/fa";

const Websites = () => {
  // states
  const [websites, setWebsites] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // range state
  const [maxPrice, setMaxPrice] = useState(1000);

  // fake api data
  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Restaurant",
        category: "Restaurant",
        price: 50,
        rating: "4.3",
        image:
          "https://cdn.dribbble.com/userupload/6114574/file/original-756ecfdb92d80fd58db5f02dc15d59ae.jpg?format=webp&resize=400x300&vertical=center",
      },

      {
        id: 2,
        title: "Business Landing",
        category: "Business",
        price: 80,
        rating: "3.9",
        image:
          "https://img.freepik.com/free-vector/flat-business-landing-page-template_23-2148250198.jpg",
      },

      {
        id: 3,
        title: "Portfolio",
        category: "Portfolio",
        price: 30,
        rating: "4.7",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3nuAkuhi_j7z0aJfGkd8HuYKrSW5y7tz7w&s",
      },

      {
        id: 4,
        title: "Admin Panel",
        category: "Admin",
        price: 110,
        rating: "4.8",
        image:
          "https://themefisher.com/images/blog/niceadmin.webp",
      },

      {
        id: 5,
        title: "School Manage",
        category: "School",
        price: 150,
        rating: "2.9",
        image:
          "https://www.itformula1.com/wp-content/uploads/school-software-online-demo.png",
      },

      {
        id: 6,
        title: "Landing Page",
        category: "Landing",
        price: 30,
        rating: "4.9",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnRW5fxP5rskIFcH2iHAVnrXoS5TVq-sZFg&s",
      },
    ];

    setWebsites(data);
    setFilteredData(data);
  }, []);

  // filter
  useEffect(() => {
    let result = websites;

    // search
    result = result.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    // category
    if (category !== "All") {
      result = result.filter((item) => item.category === category);
    }

    // range filter
    result = result.filter((item) => item.price <= maxPrice);

    setFilteredData(result);
  }, [search, category, maxPrice, websites]);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />

      {/* Top */}
      <div className="flex items-center justify-center w-full py-16">
        <div className="w-[90%]">
          <h1 className="text-4xl font-bold">All Websites</h1>

          <p className="mt-4 text-xl text-gray-600">
            Browse our collection of ready-made websites
          </p>

          {/* Search */}
          <div className="flex items-center gap-5 mt-10">
            {/* Search Input */}
            <div className="w-[55%] bg-white border rounded-xl flex items-center px-4 shadow-sm">
              <FaSearch className="text-gray-400 text-[15px]" />

              <input
                type="search"
                placeholder="Search websites..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-4 bg-transparent outline-none"
              />
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-[20%] p-4 bg-white border rounded-xl outline-none shadow-sm"
            >
              <option value="All">All Categories</option>

              <option value="Business">Business</option>

              <option value="Portfolio">Portfolio</option>

              <option value="Restaurant">Restaurant</option>

              <option value="Admin">Admin Panel</option>

              <option value="Landing">Landing</option>
            </select>

            {/* Sort */}
            <select className="w-[20%] p-4 bg-white border rounded-xl outline-none shadow-sm">
              <option>Sort by Latest</option>

              <option>Newest</option>

              <option>Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex justify-center gap-8 pb-12">
        {/* Sidebar */}
        <div className="w-[20%] bg-white rounded-2xl p-8 shadow-sm h-fit">
          <h2 className="mb-6 text-2xl font-bold">Category</h2>

          <ul className="space-y-5 text-lg text-gray-700">
            <li
              onClick={() => setCategory("All")}
              className="px-4 py-3 text-white duration-300 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
            >
              All Categories
            </li>

            <li
              onClick={() => setCategory("Business")}
              className="cursor-pointer hover:text-blue-600"
            >
              Business
            </li>

            <li
              onClick={() => setCategory("Portfolio")}
              className="cursor-pointer hover:text-blue-600"
            >
              Portfolio
            </li>

            <li
              onClick={() => setCategory("Restaurant")}
              className="cursor-pointer hover:text-blue-600"
            >
              Restaurant
            </li>

            <li
              onClick={() => setCategory("Admin")}
              className="cursor-pointer hover:text-blue-600"
            >
              Admin Panel
            </li>

            <li
              onClick={() => setCategory("Landing")}
              className="cursor-pointer hover:text-blue-600"
            >
              Landing
            </li>
          </ul>

          {/* Price */}
          <div className="mt-10">
            <h2 className="mb-5 text-2xl font-bold">Price Range</h2>

            <div className="flex justify-between text-lg font-semibold">
              <span>$0</span>

              <span>${maxPrice}</span>
            </div>

            {/* range */}
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full mt-4 cursor-pointer"
            />

            <button className="w-full py-4 mt-8 font-semibold text-white duration-300 bg-blue-600 rounded-xl hover:bg-blue-700">
              Apply Filter
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="w-[70%]">
          <div className="grid grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden duration-300 bg-white shadow-sm rounded-2xl hover:shadow-lg"
              >
                {/* image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-[220px]"
                />

                {/* content */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">{item.title}</h2>

                    <span className="font-semibold">
                      ${item.price}
                    </span>
                  </div>

                  {/* bottom */}
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-blue-600 text-[12px]">●</span>

                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar size={14} />

                      <span className="text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-14">
            <button className="w-12 h-12 font-semibold text-white bg-blue-600 rounded-lg">
              1
            </button>

            <button className="w-12 h-12 font-semibold border rounded-lg hover:bg-gray-100">
              2
            </button>

            <button className="w-12 h-12 font-semibold border rounded-lg hover:bg-gray-100">
              3
            </button>

            <button className="w-12 h-12 font-semibold border rounded-lg hover:bg-gray-100">
              ...
            </button>

            <button className="w-12 h-12 font-semibold border rounded-lg hover:bg-gray-100">
              10
            </button>

            <button className="w-12 h-12 font-semibold border rounded-lg hover:bg-gray-100">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websites;