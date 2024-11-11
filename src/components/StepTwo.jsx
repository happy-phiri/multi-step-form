import { Link } from "react-router-dom";
import { monthlyPlans, yearlyPlans } from "../data";
import { useState } from "react";
import PlanCard from "./PlanCard";
import { useGlobalContext } from "../Context";

const StepTwo = () => {
  const { setUserData, userData } = useGlobalContext();
  const [plan, setPlan] = useState("month");
  const [selectedPlan, setSelectedPlan] = useState(userData.plan || {});

  const handleChangePlanToMonth = () => {
    setPlan((prevState) => {
      if (prevState === "year") {
        return "month";
      }
    });
  };

  const handleChangePlanToYear = () => {
    setPlan((prevState) => {
      if (prevState === "month") {
        return "year";
      }
    });
  };

  const handleSelectPlan = (item) => {
    if (plan === "month") {
      setSelectedPlan(monthlyPlans.find((plan) => plan.name === item.name));
      setUserData((prevState) => {
        return {
          ...prevState,
          plan: item,
        };
      });
    } else {
      setSelectedPlan(yearlyPlans.find((plan) => plan.name === item.name));
      setUserData((prevState) => {
        return {
          ...prevState,
          plan: item,
        };
      });
    }
  };

  const planElements =
    plan === "month"
      ? monthlyPlans.map((plan) => {
          const { name, icon, price, type } = plan;
          return (
            <PlanCard
              key={name}
              name={name}
              image={icon}
              price={price}
              type={type}
              handleSelectPlan={handleSelectPlan}
              plan={plan}
              selectedPlan={selectedPlan}
            />
          );
        })
      : yearlyPlans.map((plan) => {
          const { name, icon, price, free, type } = plan;
          return (
            <PlanCard
              key={name}
              name={name}
              image={icon}
              price={price}
              free={free}
              type={type}
              handleSelectPlan={handleSelectPlan}
              plan={plan}
              selectedPlan={selectedPlan}
            />
          );
        });

  return (
    <section className="font-ubuntu max-lg:absolute top-[20%] left-0 right-0 w-[90%] mx-auto lg:bg-white lg:w-full lg:h-full lg:py-7 lg:rounded-tr-lg lg:rounded-br-lg">
      <div className="max-lg:bg-white max-lg:pb-7 rounded-lg">
        <div className="lg:w-[80%] max-lg:px-4 max-lg:py-8 max-lg:rounded-lg mx-auto bg-white ">
          <h2 className="text-2xl lg:text-4xl text-marine-blue tracking-wide">
            Select your plan
          </h2>
          <p className="text-cool-gray text-sm tracking-wide">
            You have the option of monthly or yearly billing.
          </p>

          {/* PLANS */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">{planElements}</div>
        </div>

        {/* SWITCH PLANS BUTTON */}
        <div className="bg-magnolia py-3 rounded-lg lg:w-[80%] w-[90%] mx-auto lg:mt-10 flex flex-row flex-nowrap justify-center items-center gap-4">
          <p
            className={
              plan === "month"
                ? "text-marine-blue font-bold tracking-wide"
                : "text-cool-gray tracking-wide font-bold"
            }>
            Monthly
          </p>

          {/* TOGGLE PLANS BUTTONS */}
          <div className="bg-marine-blue p-1 w-12 rounded-3xl flex gap-1 justify-between">
            {/* MONTHLY PLANS BUTTON */}
            <button
              onClick={handleChangePlanToMonth}
              className={`w-4 h-4 rounded-full cursor-pointer duration-500 transform ${
                plan === "month" ? "bg-white" : "bg-marine-blue"
              }`}></button>

            {/* YEARLY PLANS BUTTON */}
            <button
              onClick={handleChangePlanToYear}
              className={`w-4 h-4 rounded-full cursor-pointer duration-500 transform ${
                plan === "year" ? "bg-white" : "bg-marine-blue"
              }`}></button>
          </div>

          <p
            className={
              plan === "year"
                ? "text-marine-blue font-bold tracking-wide"
                : "text-cool-gray tracking-wide font-bold"
            }>
            Yearly
          </p>
        </div>
      </div>

      {/* PREV AND NEXT BUTTONS */}
      <div className="lg:bg-white lg:w-[80%] lg:mx-auto mt-16 lg:mt-20 flex flex-row flex-nowrap justify-between items-center max-lg:mb-10">
        <Link
          to=".."
          className="text-cool-gray font-medium tracking-wide hover:text-marine-blue">
          Go Back
        </Link>
        <Link
          to="/step-three"
          className="bg-marine-blue font-medium text-white px-5 py-2 rounded-lg w-fit">
          Next Step
        </Link>
      </div>
    </section>
  );
};

export default StepTwo;
