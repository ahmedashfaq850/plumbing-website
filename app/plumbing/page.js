import CTA from "@/components/CTA";
import Community from "@/components/Community";
import Heading from "@/components/Heading";
import ImageText from "@/components/ImageText";
import PlumbingServices from "@/components/PlumbingServices";
import Team from "@/components/Team";
import Image from "next/image";
import { Fragment } from "react";

const jobs = [
  {
    description: "Fitting taps, sinks, toiletscand showers",
    imageSrc: "/images/plumbing/One.svg",
  },
  {
    description: "Installing new pumps and replacing broken ones",
    imageSrc: "/images/plumbing/Two.svg",
  },
  {
    description: "Fixing showers, taps and replacing cartridges",
    imageSrc: "/images/plumbing/Three.svg",
  },
  {
    description: "Locating and fixing leaks",
    imageSrc: "/images/plumbing/Four.svg",
  },
  {
    description: "Running pipework for washing machines and dishwaters",
    imageSrc: "/images/plumbing/Five.svg",
  },
  {
    description: "Installing water softeners and filters",
    imageSrc: "/images/plumbing/Six.svg",
  },
  {
    description: "Installing boiling water taps",
    imageSrc: "/images/plumbing/Seven.svg",
  },
  {
    description: "Repairing toilet flush mechanisms",
    imageSrc: "/images/plumbing/Eight.svg",
  },
  {
    description: "All types of shower system repairs and installations",
    imageSrc: "/images/plumbing/Nine.svg",
  },
];

const Plumbing = () => {
  return (
    <Fragment>
      <div className="mb-20 mdu:mb-0">
          <ImageText
            title="Local plumbers you can trust"
            description="We have been offering bathroom and plumbing 
services for over 15 years in Harpenden, St Albans, 
and the surrounding areas. Our team are 
professional, reliable, offering a service that is 
second to none.
"
            buttonText="Call Us"
            imageDes="/plumbingsmith.svg"
            order="order-none"
            marginBottom="0"
          />
        </div>
        <ImageText
          title="Book  a Homesmith Plumber"
          description="We’re here to help with leaking taps, shower repairs, toilet repairs, as well as installing new sinks, taps, and appliances. As well as providing quotes for planned work, we offer fully bathroom refurbs."
          buttonText="Book a Plumner"
          imageDes="/van1.png"
          order="order-2"
          marginBottom="20"
        />

    <div className="px-12 mdu:px-24">
        
        {/* TESTIMONIAL SECTION */}
        <ImageText
          title="Our Clients"
          description="Quote from Michael at Silver Cup
          Carousel perhaps with another from Al;lsop,
          And others from other customers."
          buttonR= {true}
          imageDes="/images/testimonial.svg"
          order="order-none"
          marginBottom="20"
          
        />
     </div>   


        <PlumbingServices />
        <div className="px-12 mdu:px-24" > 

          <Team />
        </div>
        {/* Heading and Paragragh */}
        <div className=" px-8 mdu:px-24 flex flex-col gap-5 mb-10 ">
          <h3 className="text-xl sm:text-3xl font-semibold">
            Plumbing services from Homesmith
          </h3>
          <p className="text-sm     sm:text-xl ">
            The most common plumbing jobs we receive include:
          </p>
        </div>

        {/* Plumbing jobs */}
        <div className="p-4 md:p-10 lg:p-20  2xl:p-24">
          <div className="flex gap-5 sm:gap-10 mb-7  flex-wrap  justify-center  ">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="flex p-1   md:p-2 flex-col w-[150px] h-[150px]  items-center justify-center sm:min-w-[180px] sm:p-3   md:min-w-[300px] md:min-h-[200px] 2xl:min-w-[400px]  bg-white rounded-lg  shadow-lg  "
              >
                <div className="w-12 h-12 md:w-[90px] md:h-[100px]">
                  <Image
                    className="mt-4 md:mt-2"
                    src={job.imageSrc}
                    alt={job.title}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-center mt-5 sm:mt-0 p-3 md:p-4 text-[#73D043] md:text-base 2xl:text-xl text-xs">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div >
        <div className="px-12 mdu:px-24"> 
          <CTA
            CtaText="Not sure which trade you need? Just ask us!"
            buttonText="Request Callback"
          />
          <Community />

          <ImageText
            title="We have you covered!"
            description="Our team are based in Harpenden and St Albans covering all the surrounding areas including Redbourn,Wheathampstead, Kimpton, Sandridge, Markyate, Slip End, Caddington, and more."
            buttonText="Our Locations"
            imageDes="/van1.png"
            order="order-2"
            marginBottom="20"
         
        />
        </div>
      
   
    </Fragment>
  );
};

export default Plumbing;
