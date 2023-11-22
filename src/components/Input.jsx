const Input = ({ label, type }) => {
  if (type == "textarea") {
    return (
      <textarea
        name=""
        id=""
        cols="30"
        rows="7"
        className="p-3 bg-transparent border-l-[5px] border-b-[5px] border-black text-[#8B8B8B] font-montserrat font-bold tracking-[0.48px] text-xs uppercase w-full focus:outline-none max-w-xl mx-auto sm:text-sm"
        placeholder="Your Message*"></textarea>
    )
  }
  return (
    <input
      type="text"
      placeholder={label}
      className="p-3 bg-transparent border-l-[5px] border-b-[5px] border-black text-[#8B8B8B] font-montserrat font-bold tracking-[0.48px] text-xs sm:text-sm uppercase w-full focus:outline-none max-w-xl mx-auto"
    />
  )
}

export default Input
