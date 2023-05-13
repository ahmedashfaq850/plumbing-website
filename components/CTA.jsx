import React from 'react'

const CTA = ({CtaText,buttonText}) => {
  return (
    <div className="shadow-xl flex flex-col mb-20 sm:flex-row items-center justify-around w-full  p-4 sm:p-0 sm:h-24    bg-[#1B4845]">
      <h2 className="font-bold text-base p-4 sm:p-0 md:text-2xl text-center text-white">
        {CtaText}
      </h2>
      <button className="bg-[#73D043] shadow-lg text-white w-fit py-1 px-2.5 rounded-lg font-semibold">
        {buttonText}
      </button>
    </div>
  );
}

export default CTA