import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    
    <div  className=" Home  flex flex-col items-center justify-center min-h-screen " >
      <div className=" text-center p-4">
        <h1  className="text-4xl font-bold text-gray-800 md:text-5xl mt-5">
          Building Excellence in Digital
        </h1>
        
        <p className="cntnt text-gray-600 md:text-lg max-w-xl mx-auto mt-4">
          We Partner with Clients to Build digital products, prioritizing excellence at every stage.
        </p>
        <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
          Explore our services
        </button>
      </div>
    </div>
  );
};

export default Home;
