import Link from "next/link";
import SlideInFromBottom from "../animations/SlideInFromBottom";

const ContactUsSection = () => {
  return (
    <section id="contactus" className="bg-white dark:bg-gray-900">
      <div>
        <div className="text-dark-blue py-16 pb-0 px-28 xl:p-0 xl:py-32 xl:pb-0 flex flex-col gap-4 w-full justify-center items-center bg-white h-auto ">
          <div className="relative w-full xl:max-w-[1200px] flex flex-col gap-4 xl:pb-16">
            <div className="w-full  h-full ">
              <SlideInFromBottom sequence={0}>
                <div className="w-[100%] text-center flex flex-col">
                  <span
                    className="text-3xl
                     md:text-5xl font-medium tracking-tight"
                  >
                    {"GET IN TOUCH WITH OUR TEAM "}
                  </span>
                  <span
                    className="text-3xl
                     md:text-5xl font-medium tracking-tight"
                  >
                    {"TO RECIEVE INSTANT SUPPORT."}
                  </span>
                </div>
              </SlideInFromBottom>
              <SlideInFromBottom sequence={2}>
                <div className="w-[100%] flex justify-center items-center py-8">
                  <span className="text-xl xl:max-w-[650px] text-center ">
                    If you have any questions about our services and logistics
                    solutions, feel free to contact us anytime using the form
                    below. We are always glad to help you.
                  </span>
                </div>
              </SlideInFromBottom>
              {/* <label htmlFor="input">
              {" "}
              Input
              <input
                id="input"
                className="bg-none border-bottom border-2 w-[150px] border-white"
                type="text"
              />
            </label> */}
              {/* <div className="absolute w-full xl:max-w-[1200px] top-0 flex items-center justify-center">
              <video width="720" height="440" preload="none">
                <source src="/video/main-video.mp4" type="video/mp4" />
              </video>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-dark-blue dark:text-dark-blue"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border-b-2 border-gray-300 text-dark-blue text-xl  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-xl font-medium text-dark-blue dark:text-dark-blue"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-xl text-dark-blue bg-gray-50  border-b-2 border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-dark-blue dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-xl text-dark-blue bg-gray-50  shadow-sm border-b-2 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark-blue dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              type="submit"
              className="py-3 px-5 text-xl font-medium text-center text-white tracking-wider  bg-bright-red sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 transition hover:ease-in-out duration-300  dark:hover:bg-dark-blue dark:focus:ring-primary-800"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
