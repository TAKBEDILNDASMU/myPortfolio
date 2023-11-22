import HeaderTitle from "../components/HeaderTitle"
import seperator from "../assets/images/seperator.png"
import Input from "../components/Input"
import Button from "./../components/Button"

const Contact = () => {
  return (
    <section
      className="flex flex-col gap-4 container mx-auto px-14 pt-16 pb-14 justify-center"
      id="contact">
      <div className="mb-9 flex flex-col">
        <div className="mx-auto">
          <HeaderTitle label="Contact" />
        </div>
        <p className="font-open-sans text-base lg:text-lg font-light text-center mt-10 max-w-3xl mx-auto">
          My name is Titan Apriliyan Nadine Ananta. I&apos;m a second year Computer
          Science student at University of Muhammadiyah in Ponorogo, Indonesia
        </p>
      </div>
      <div className="mx-auto">
        <img src={seperator} alt="seperator" />
      </div>
      <form action="" className="mt-16 flex flex-col gap-10 justify-center w-full">
        <Input label="Enter your name*" />
        <Input label="Enter your email*" />
        <Input label="Phone number" />
        <Input label="Your Message*" type="textarea" />
      </form>
      <div className="mt-14 flex justify-center">
        <Button label="Submit" />
      </div>
    </section>
  )
}

export default Contact
