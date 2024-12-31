import img1 from "../assets/images/img1.png";
const Hero = () => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <img
        src={img1}
        className="absolute w-[50%] h-[85%] bottom-0 flex justify-center items-center"
        alt=""
      />
    </div>
  );
};

export default Hero;
