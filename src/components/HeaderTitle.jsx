const HeaderTitle = ({ label, white }) => {
  return (
    <div
      className={`flex justify-center px-8 py-[18px] font-montserrat text-sm font-bold tracking-[6.095px] leading-[127.9%] uppercase border-8 ${
        white ? "border-white" : "border-black"
      } focus:outline-none focus:shadow-none sm:text-xl`}>
      {label}
    </div>
  )
}

export default HeaderTitle
