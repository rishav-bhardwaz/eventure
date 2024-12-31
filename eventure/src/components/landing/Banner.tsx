import backgroundImage from '../../assets/Banner.png'

const Banner: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center overflow-hidden rounded-md"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="z-10 text-center px-4 rounded-md p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Events specially curated for you!
        </h2>
        <p className="text-gray-700 mb-4">
          Get event suggestions tailored to your interests! Don’t let your favorite events slip away.
        </p>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
