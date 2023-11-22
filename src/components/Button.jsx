const Button = ({ label, white }) => {
  return (
    <button
      className={`uppercase flex justify-center font-montserrat text-sm sm:text-base font-bold tracking-[1.3px] px-6 py-2 border-x-[3px] ${
        white ? "border-white" : "border-black"
      }`}>
      {label}
    </button>
  )
}

export default Button
