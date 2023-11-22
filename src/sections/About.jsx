import HeaderTitle from "../components/HeaderTitle"
import Button from "./../components/Button"

const About = () => {
  return (
    <section className="bg-black text-white" id="about">
      <div className="flex flex-col gap-4 container mx-auto px-14 py-16">
        <div className="mx-auto">
          <HeaderTitle label="About me" white={true} />
        </div>
        <div className="font-open-sans text-xs font-light text-justify leading-normal mt-4 sm:text-base">
          <p>
            Hello, I&apos;m Titan Apriliyan, a skilled developer proficient in React,
            Laravel, Tailwind, MySQL, MongoDB, and Express. With a passion for crafting
            seamless and efficient web applications, I bring a diverse set of technical
            expertise to every project I undertake. Outside the realm of coding,
            you&apos;ll often find me engaging in my favorite hobbies, which include
            hitting the gym to stay fit, enjoying a refreshing jog, and indulging in the
            captivating world of anime.
          </p>
          <p className="mt-4">
            In the dynamic landscape of technology, I continuously strive to expand my
            skill set and stay at the forefront of innovation. Whether it&apos;s designing
            intuitive user interfaces or optimizing database performance, I approach every
            challenge with enthusiasm and a commitment to delivering high-quality
            solutions. Beyond the screen, I find balance and inspiration in an active
            lifestyle and the imaginative narratives of anime, shaping a well-rounded
            perspective that fuels my creativity in both coding and life.
          </p>
          <div className="mt-7 flex justify-center">
            <Button label="Explore" white={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
