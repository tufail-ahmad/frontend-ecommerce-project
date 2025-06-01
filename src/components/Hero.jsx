import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="mt-2 w-full mx-auto gap-5 bg-black text-white flex flex-col md:flex-row justify-between items-center h-[350px]">
      <div className="w-full md:[50%]">
        {" "}
        <h1 className="text-yellow-500 leading-10 font-semibold text-4xl text-center  md:leading-16 md:text-6xl md:font-bold">
          Welcome to
        </h1>
        <h2 className=" font-semibold text-3xl text-center md:text-5xl md:font-bold text-white">
          Up to 10%
        </h2>
        <h2 className="leading-10 font-semibold text-3xl text-center md:leading-20 md:text-5xl md:font-bold text-white">
          Off Voucher
        </h2>
        <div className="flex justify-center items-center gap-3 cursor-pointer">
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-md cursor-pointer hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
          <img src={assets.right_arrow} alt="" />
        </div>
      </div>
      <div className="w-full md:[50%]">
        <img src={assets.hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
