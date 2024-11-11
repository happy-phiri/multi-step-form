import thanksimg from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <section className="font-ubuntu max-lg:absolute top-[20%] left-0 right-0 w-[90%] mx-auto grid place-content-center lg:bg-white lg:w-full lg:h-full lg:py-7 lg:rounded-tr-lg lg:rounded-br-lg">
      <div className="lg:w-[80%] max-lg:px-4 max-lg:py-8 max-lg:rounded-lg mx-auto bg-white ">
        <div className="max-lg:bg-white max-lg:pb-7 rounded-lg flex flex-col items-center justify-center text-center gap-5">
          <img src={thanksimg} alt="thank you icon" />
          <h2 className="text-3xl text-marine-blue font-semibold">Thank You</h2>
          <p className="text-cool-gray tracking-wide w-[90%] text-lg">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
