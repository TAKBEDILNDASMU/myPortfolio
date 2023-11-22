import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => {
    setNavbar((prevNavbar) => !prevNavbar)
  }

  return (
    <header className="fixed bg-black w-full z-50">
      <nav className="flex justify-between items-center font-montserrat font-semibold container mx-auto px-10 py-5">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Titanic</h1>
        </div>
        <ul
          className={`absolute -top-52 md:static flex flex-col md:flex-row md:space-x-2 z-20 bg-[#D7D7D7] md:bg-black right-0 left-0 items-center bg-opacity-90 text-black md:text-white duration-200 ${
            navbar && "translate-y-[280px]"
          }`}>
          <li className="p-3 md:p-0 hover:bg-black hover:text-white duration-100 w-full text-center md:w-auto">
            <a
              className="text-lg w-full md:w-auto inline-block md:hover:bg-white md:hover:text-black md:rounded-full md:px-6 md:py-2 duration-200"
              href="#home">
              Home
            </a>
          </li>
          <li className="p-3 md:p-0 hover:bg-black hover:text-white duration-100 w-full text-center md:w-auto">
            <a
              className="text-lg w-full md:w-auto inline-block md:hover:bg-white md:hover:text-black md:rounded-full md:px-6 md:py-2 duration-200"
              href="#about">
              About Me
            </a>
          </li>
          <li className="p-3 md:p-0 hover:bg-black hover:text-white duration-100 w-full text-center md:w-auto">
            <a
              className="text-lg w-full md:w-auto inline-block md:hover:bg-white md:hover:text-black md:rounded-full md:px-6 md:py-2 duration-200"
              href="#portfolio">
              Project
            </a>
          </li>
          <li className="p-3 md:p-0 hover:bg-black hover:text-white duration-100 w-full text-center md:w-auto">
            <a
              className="text-lg w-full md:w-auto inline-block md:hover:bg-white md:hover:text-black md:rounded-full md:px-6 md:py-2 duration-200"
              href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="md:hidden text-4xl" onClick={handleNavbar}>
          {navbar ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
