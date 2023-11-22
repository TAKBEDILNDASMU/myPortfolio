import HeaderTitle from "../components/HeaderTitle"
import Tailwind from "../assets/images/tailwind.svg"
import React from "../assets/images/react.svg"
import Laravel from "../assets/images/laravel.svg"
import MongoDB from "../assets/images/mongodb.svg"
import MySQL from "../assets/images/mysql.svg"

const Skills = () => {
  return (
    <section
      className="flex flex-col gap-4 mt-16 container mx-auto px-14 pb-16"
      id="skills">
      <div className="mx-auto">
        <HeaderTitle label="Skills" />
      </div>
      <div className="mt-[70px] flex flex-col gap-12 items-center sm:items-start">
        <h1 className="font-montserrat text-center text-3xl tracking-[5.561px] leading-normal font-bold text-black sm:text-left">
          USING NOW:
        </h1>
        <div className="flex flex-col gap-12 items-center sm:grid grid-cols-3 w-full">
          <div className="flex flex-col gap-4 items-center">
            <img src={Tailwind} width={104} alt="tailwind" />
            <p className="font-montserrat text-2xl tracking[3.429px] font-normal">
              Tailwind
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src={React} width={74} alt="React" />
            <p className="font-montserrat text-2xl tracking[3.429px] font-normal">
              React
            </p>
          </div>
          <div className="flex-col gap-4 items-center flex">
            <img src={Laravel} width={70} alt="Laravel" />
            <p className="font-montserrat text-2xl tracking[3.429px] font-normal">
              Laravel
            </p>
          </div>
          <div className="hidden sm:flex flex-col gap-4 items-center">
            <img src={MongoDB} width={38} alt="Laravel" />
            <p className="font-montserrat text-2xl tracking[3.429px] font-normal">
              MongoDB
            </p>
          </div>
          <div className="hidden sm:flex flex-col gap-4 items-center">
            <img src={MySQL} width={74} alt="Laravel" />
            <p className="font-montserrat text-2xl tracking[3.429px] font-normal">
              MySQL
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
