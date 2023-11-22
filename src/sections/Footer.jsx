import { RiArrowUpDoubleFill } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 container mx-auto px-14 pt-16 pb-14 justify-center">
      <div className="flex justify-center text-3xl">
        <a href="#home">
          <RiArrowUpDoubleFill />
        </a>
      </div>
      <p className="text-base text-center font-montserrat font-bold tracking-[2.781px] uppercase">
        <a href="#home">Back to top</a>
      </p>
      <div className="mt-8 flex gap-7 justify-center text-3xl">
        <a
          href="https://www.linkedin.com/in/titan-apriliyan-73046623b/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
          <AiOutlineMail />
        </a>
        <a
          href="https://www.instagram.com/titanapriliyan/"
          target="_blank"
          rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="text-center mt-6 font-nunito text-xm font-normal text-slate-300">
        Designed By{" "}
        <a
          className="hover:text-slate-500"
          href="https://www.figma.com/@nerooc"
          target="_blank"
          rel="noreferrer">
          Tomasz Gajda
        </a>
      </p>
      <p className="text-center mt-6 font-nunito text-lg font-normal">
        <span className="font-bold">@2023 Titan Apriliyan</span> All Right Reserved
      </p>
    </footer>
  )
}

export default Footer
