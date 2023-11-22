import HeaderTitle from "../components/HeaderTitle"
import Project from "../assets/images/Project.png"
import POS from "../assets/images/POS.png"
import Button from "./../components/Button"

const Portfolio = () => {
  return (
    <section className="w-full text-black" id="portfolio">
      <div className="flex py-16 gap-4 bg-mountain bg-no-repeat bg-[center_-7rem]">
        <div className="mx-auto">
          <HeaderTitle label="Portfolio" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative w-full text-center">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white flex gap-6 flex-col justify-center items-center">
            <h3 className="font-montserrat text-2xl font-bold tracking-[5.134px]">
              eatsome.
            </h3>
            <p className="font-montserrat text-xs font-normal tracking-[-0.15px] text-white">
              Restaurant browsing in React.js (Using Yelp API)
            </p>
            <div className="flex gap-3">
              <Button label="Demo" white={true} />
              <Button label="Code" white={true} />
            </div>
          </div>
          <img src={Project} alt="my project" className="w-full object-cover h-full" />
        </div>
        <div className="relative w-full text-center">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white flex gap-6 flex-col justify-center items-center">
            <h3 className="font-montserrat text-2xl font-bold tracking-[5.134px]">
              point of sale.
            </h3>
            <p className="font-montserrat text-xs font-normal tracking-[-0.15px] text-white">
              Pos app for cashier digitalization
            </p>
            <div className="flex gap-3">
              <Button label="Demo" white={true} />
              <Button label="Code" white={true} />
            </div>
          </div>
          <img src={POS} alt="my project" className="w-full object-cover h-full" />
        </div>
      </div>
      <div className="bg-[##1A1A1A] py-4">
        <p className="font-montserrat text-base font-semibold text-white text-center">
          And many more to come!
        </p>
      </div>
    </section>
  )
}

export default Portfolio
