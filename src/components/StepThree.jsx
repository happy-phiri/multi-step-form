import { Link } from "react-router-dom";
import { addons } from "../data";
import AddonCard from "./AddonCard";
import { useState } from "react";
import { useGlobalContext } from "../Context";

const StepThree = () => {
  const { setUserData, userData } = useGlobalContext();
  const [checkedAddons, setCheckedAddons] = useState(
    addons.reduce(
      (acc, addon) => ({
        ...acc,
        [addon.name]: userData.addons.some((item) => item.name === addon.name),
      }),
      {}
    )
  );

  const handleCheckboxChange = (e, addon) => {
    const isChecked = e.target.checked;
    const addonName = addon.name;

    setCheckedAddons((prevState) => ({
      ...prevState,
      [addonName]: isChecked,
    }));

    setUserData((prevState) => {
      const updatedAddons = isChecked
        ? [...prevState.addons, addon] // Add to addons if checked
        : prevState.addons.filter((item) => item.name !== addonName); // Remove if unchecked

      return {
        ...prevState,
        addons: updatedAddons,
      };
    });
  };

  const addOnElements = addons.map((addon) => {
    const { name, feature, price } = addon;
    return (
      <AddonCard
        key={name}
        name={name}
        feature={feature}
        price={price}
        addon={addon}
        isChecked={checkedAddons[name]}
        handleCheckboxChange={handleCheckboxChange}
      />
    );
  });

  return (
    <section className="font-ubuntu max-lg:absolute top-[18%] left-0 right-0 w-[90%] mx-auto  lg:bg-white lg:w-full lg:h-full lg:py-7 lg:rounded-tr-lg lg:rounded-br-lg">
      <div className="max-lg:bg-white max-lg:pb-7 rounded-lg">
        <div className="lg:w-[80%] max-lg:px-4 max-lg:py-8 max-lg:rounded-lg mx-auto bg-white ">
          <h2 className=" text-base md:text-2xl lg:text-4xl text-marine-blue tracking-wide">
            Pick add-ons
          </h2>
          <p className="text-cool-gray text-sm tracking-wide">
            Add-ons help enhance your gaming experience
          </p>

          {/* ADDONS */}
          <div className="mt-8 flex flex-col gap-4">{addOnElements}</div>
        </div>
      </div>

      {/* PREV AND NEXT BUTTONS */}
      <div className="lg:bg-white lg:w-[80%] lg:mx-auto mt-10 lg:mt-20 flex flex-row flex-nowrap justify-between items-center">
        <Link
          to="/step-two"
          relative="path"
          className="text-cool-gray font-medium tracking-wide hover:text-marine-blue">
          Go Back
        </Link>
        <Link
          to="/step-four"
          className="bg-marine-blue font-medium text-white px-5 py-2 rounded-lg w-fit">
          Next Step
        </Link>
      </div>
    </section>
  );
};

export default StepThree;
