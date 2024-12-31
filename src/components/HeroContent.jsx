const HeroContent = () => {
  return (
    <div className="absolute px-16 z-20 w-full h-full flex items-center justify-between">
      <div className="w-[30%] text-white">
        <h2 className="font-bold text-3xl">New Modern Research Center</h2>
        <p className="text-sm py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="w-24 h-8 rounded-lg bg-[#F7CB90] drop-shadow-sm mr-4">
          Register
        </button>
        <button className="w-24 h-8 border border-white rounded-md">
          Learn More
        </button>
      </div>
      <div className="w-[30%] text-white">
        <h2 className="font-bold text-5xl">Join as a Researcher </h2>
        <p className="text-sm py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="w-24 h-8 rounded-lg bg-[#F7CB90] drop-shadow-sm mr-4">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
