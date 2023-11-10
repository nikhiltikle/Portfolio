import React from 'react';
import Lottie from 'react-lottie';
import readingBook from '../../../assets/reading-book.json';
const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="mt-10">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Experience</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-fit md:w-[300px] mx-2 hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-xl font-semibold text-primary">
                Senior Frontend Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">
                Webonex Technology <br />
              </p>
              <p className="text-sm text-neutral ">2022-Present</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Many applications was architected and set up from scratch, with
              the implementation of various features and tools. Complex software
              issues, including performance optimizations, memory management,
              and network communication problems, were addressed to enhance
              overall stability and performance.
            </p>
          </div>
          <div className="my-6 md:my-4 md:ml-[190px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-fit md:w-[300px] mx-2 hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-xl font-semibold text-primary">
                React Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">
                Webonex Technology <br />
              </p>
              <p className="text-sm text-neutral ">2019-2022</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Improvements to the user experience of a business product were
              executed, integrating theming into one application with four
              distinct themes. Collaboration with designers and engineers
              transformed creative concepts into production realities. Code
              reviews and peer programming sessions ensured code quality and
              adherence to standards.
            </p>
          </div>
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-fit md:w-[300px] mx-2 hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-xl font-semibold text-primary">
                System Engineer
              </h3>
              <p className="text-sm text-neutral font-semibold">
                Tata Consultancy Services <br />
              </p>
              <p className="text-sm text-neutral ">2016-2019</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Progressive web applications are maintained and enhanced by me in
              React.js, Redux, JavaScript, and Git. Technical issues are
              addressed, and applications are customized based on client needs
              within an Agile development team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
