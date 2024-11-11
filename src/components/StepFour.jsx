import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../Context";

const StepFour = () => {
  const { userData, setUserData } = useGlobalContext();
  const navigate = useNavigate();

  const getTotalAddonsCost = () => {
    return userData.addons.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
  };

  const handleConfirm = () => {
    setUserData({
      personalInfo: {},
      plan: {},
      addons: [],
    });
    navigate("/thank-you");
  };

  return (
    <section className="font-ubuntu max-lg:absolute top-[18%] left-0 right-0 w-[90%] mx-auto  lg:bg-white lg:w-full lg:h-full lg:py-7 lg:rounded-tr-lg lg:rounded-br-lg">
      <div className="max-lg:bg-white max-lg:pb-7 rounded-lg">
        <div className="lg:w-[80%] max-lg:px-4 max-lg:py-8 max-lg:rounded-lg mx-auto bg-white ">
          <h2 className=" text-base md:text-2xl lg:text-4xl text-marine-blue tracking-wide leading-4">
            Finishing up
          </h2>
          <p className="text-cool-gray text-base tracking-wide">
            Double-check everything looks OK before confirming
          </p>

          {/* CHECK IF ALL NECESSARY FIELDS HAVE BEEN COMPLETED BEFORE DISPLAYING SUMMARY */}
          {Object.keys(userData.plan).length === 0 ||
          userData.addons.length === 0 ? (
            <div className="grid place-content-center pt-10">
              <h3 className="text-xl text-strawberry-red font-semibold text-center">
                Please complete the form
              </h3>
            </div>
          ) : (
            <div>
              <div className="mt-8 flex flex-col gap-4 bg-magnolia p-4 rounded-lg">
                {/* PLAN */}
                <div className="flex flex-row flex-nowrap justify-between border-b border-light-gray pb-3">
                  <div>
                    <h3 className="text-marine-blue tracking-wide font-medium leading-3">
                      {userData.plan.name} ({userData.plan.type})
                    </h3>
                    <Link
                      to="/step-two"
                      className="text-xs tracking-wider leading-none hover:text-purplish-blue hover:underline">
                      Change
                    </Link>
                  </div>
                  <p className="text-marine-blue font-medium">
                    ${userData.plan.price}/
                    {userData.plan.type === "Monthly" ? "mo" : "yr"}
                  </p>
                </div>

                {/* ADDONS */}
                <div className="flex flex-col gap-3">
                  {userData.addons.map((addon) => {
                    const { name, price } = addon;
                    return (
                      <div
                        key={name}
                        className="flex flex-row flex-nowrap justify-between items-center text-sm font-medium">
                        <p className="text-cool-gray tracking-wide font-medium">
                          {name}
                        </p>
                        <p className="text-marine-blue">+${price}/mo</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* TOTAL */}
              <div className="flex flex-row flex-nowrap justify-between p-4">
                <p className="text-cool-gray tracking-wide">
                  Total (per{" "}
                  {userData.plan.type === "Monthly" ? "month" : "year"})
                </p>
                <p className="text-marine-blue font-medium tracking-wide text-lg">
                  ${userData.plan.price + getTotalAddonsCost()}/
                  {userData.plan.type === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PREV AND NEXT BUTTONS */}
      <div className="lg:bg-white lg:w-[80%] lg:mx-auto mt-10 lg:mt-12 flex flex-row flex-nowrap justify-between items-center">
        <Link
          to="/step-three"
          relative="path"
          className="text-cool-gray font-medium tracking-wide hover:text-marine-blue">
          Go Back
        </Link>
        {Object.keys(userData.plan).length > 0 &&
          userData.addons.length > 0 && (
            <Link
              to="/thank-you"
              onClick={handleConfirm}
              className="bg-marine-blue font-medium text-white px-5 py-2 rounded-lg w-fit hover:bg-purplish-blue hover:opacity-50">
              Confirm
            </Link>
          )}
      </div>
    </section>
  );
};

export default StepFour;
