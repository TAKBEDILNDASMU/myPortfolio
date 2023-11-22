import me from "../assets/images/IMG_3931.png"
import me2 from "../assets/images/IMG_3927.png"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Hero = () => {
  return (
    <main
      className="min-h-[calc(100vh-80px)] relative overflow-hidden lg:bg-[#D7D7D7] flex flex-col lg:flex-row justify-between pt-[80px]"
      id="home">
      <div className="trapezoid bg-[#D7D7D7] lg:hidden"></div>
      <div className="hidden lg:flex flex-row container mx-auto w-full relative">
        <div className="py-16 font-raleway text-black lg:container mx-auto px-10 hidden lg:flex items-center">
          <div className="flex flex-col h-[350px] justify-between ">
            <h2 className="font-bold text-4xl">Hi, I am</h2>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-7xl">Titan Apriliyan</h1>
              <p className="font-bold text-2xl text-[#909090]">Fullstack Developer</p>
            </div>
            <div className="flex space-x-7 text-3xl mt-10">
              <a
                href="https://github.com/TAKBEDILNDASMU"
                target="_blank"
                rel="noreferrer"
                className="inline-block p-4 bg-[#C4C4C4] shadow-md cursor-pointer hover:opacity-70">
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/titanapriliyan/"
                target="_blank"
                rel="noreferrer"
                className="inline-block p-4 bg-[#C4C4C4] shadow-md cursor-pointer hover:opacity-70">
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/titan-apriliyan-73046623b/"
                target="_blank"
                rel="noreferrer"
                className="inline-block p-4 bg-[#C4C4C4] shadow-md cursor-pointer hover:opacity-70">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <img
          src={me2}
          width={800}
          alt="my image"
          className="object-cover hidden lg:block relative z-10"
        />
        <div className="bg-black absolute h-screen w-2/3 -right-64 lg-trapezoid"></div>
      </div>
      <div className="relative flex justify-end h-[calc(100vh-80px)] lg:bg-black">
        <img src={me} alt="my image" className="object-cover object-left lg:hidden" />
      </div>
      <div className="trapezoid px-9 py-16 font-raleway bg-black bg-opacity-60 text-white flex justify-between items-center lg:hidden">
        <div className="-mt-20 unskew">
          <h2 className="font-bold text-xl sm:text-2xl">Hi, I am</h2>
          <h1 className="font-bold text-4xl sm:text-5xl">Titan Apriliyan</h1>
          <p className="font-bold text-xs sm:text-lg">Fullstack Developer</p>
        </div>
        <div className="flex flex-col space-y-5 text-2xl unskew">
          <a href="https://github.com/TAKBEDILNDASMU" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/titanapriliyan/"
            target="_blank"
            rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/titan-apriliyan-73046623b/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
