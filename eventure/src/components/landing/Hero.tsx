import React from 'react';
import SearchBar from './Searchbar';
import img from "../../assets/Hero.png"

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">

      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Don't miss out!
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-8">
          Explore the <span className="text-yellow-400">vibrant events</span> happening locally and globally.
        </h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;

