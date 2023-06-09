import Image from "next/image"
import Link from "next/link";
const Team = () => {
  return (
    <div className="drop-shadow-xl w-full mdu:h-[450px] mb-10 sm:mb-20 flex mdu:flex-row flex-col">
      {/* Image */}
      <div className="w-full mdu:w-[45%] ">
        <Image
          src={'/images/Teams.png'}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full bg-cover object-cover"
          alt="plumbing"
          // priority
        />
      </div>
      {/* Text */}
      <div
        className={`bg-[#1B4845] w-full  mdu:w-[55%]  flex justify-center items-center`}
      >
        <div className="w-full p-5 sm:p-10 gap-4 mdu:gap-4 flex flex-col justify-start">
          <h2 className="text-white font-bold drop-shadow-xl  sm:text-2xl">A trusted, local team</h2>
          <p className="text-gray-200 text-sm sm:text-sm lg:text-lg">We are a locally based team, with Simon having lived in 
                     Harpenden for over 30 years. You may recognise some 
                     our team from the local Rugby club.</p>
         <Link href='/contact#contact'>
          <button className="bg-[#73D043] shadow-md text-white w-fit py-2 px-5 sm:py-2 sm:px-10 rounded-lg font-semibold">
              Call Us
            </button>
         </Link>
        </div>
      </div>
    </div>
  )
}

export default Team;