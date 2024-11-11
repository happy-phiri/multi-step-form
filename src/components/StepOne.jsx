import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";

const StepOne = () => {
  const { setUserData, userData } = useGlobalContext();
  const [personalInfo, setPersonalInfo] = useState({
    name: userData.personalInfo.name || "",
    email: userData.personalInfo.email || "",
    phone: userData.personalInfo.phone || "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!personalInfo.name.trim()) newErrors.name = "Name is required.";
    if (!personalInfo.email.trim()) newErrors.email = "Email is required.";
    if (!personalInfo.phone.trim())
      newErrors.phone = "Phone number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setUserData((prevState) => ({
        ...prevState,
        personalInfo,
      }));
      navigate("/step-two");
    }
  };

  return (
    <section className="font-ubuntu max-lg:absolute top-[20%] left-0 right-0 w-[90%] mx-auto lg:bg-white lg:w-full lg:h-full lg:py-7 lg:rounded-tr-lg lg:rounded-br-lg">
      <div className="lg:w-[80%] max-lg:px-4 max-lg:py-8 max-lg:rounded-lg mx-auto bg-white ">
        <h2 className="text-2xl lg:text-4xl text-marine-blue tracking-wide">
          Personal info
        </h2>
        <p className="text-cool-gray text-sm tracking-wide">
          Please provide your name, email address, and phone number.
        </p>

        <form
          className="mt-8 flex flex-col flex-nowrap gap-4"
          onChange={(e) => handleChange(e)}>
          {/* NAME */}
          <div className="flex flex-col flex-nowrap gap-3">
            <label
              className="text-marine-blue font-medium text-sm leading-3 tracking-wide flex justify-between"
              htmlFor="name">
              Name{" "}
              <span>
                {" "}
                {errors.name && (
                  <p className="text-strawberry-red text-xs">{errors.name}</p>
                )}
              </span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={personalInfo.name || userData.personalInfo.name}
              placeholder="e.g. Stephen King"
              className={`tracking-wide text-marine-blue font-medium border ${
                errors.name ? "border-strawberry-red" : "border-light-gray"
              } rounded-lg px-3 py-2 mt-0 font-ubuntu placeholder:font-ubuntu placeholder:font-normal focus:outline-purplish-blue focus:outline-[0.1px]`}
            />
          </div>

          {/* EMAIL ADDRESS */}
          <div className="flex flex-col flex-nowrap gap-3">
            <label
              className="text-marine-blue font-medium text-sm leading-3 tracking-wide flex justify-between items-center"
              htmlFor="email">
              Email{" "}
              <span>
                {" "}
                {errors.email && (
                  <p className="text-strawberry-red text-xs">{errors.email}</p>
                )}
              </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={personalInfo.email || userData.personalInfo.email}
              placeholder="e.g. stephenking@lorem.com"
              className={`tracking-wide text-marine-blue font-medium border ${
                errors.email ? "border-strawberry-red" : "border-light-gray"
              }  rounded-lg px-3 py-2 mt-0 font-ubuntu placeholder:font-ubuntu placeholder:font-normal focus:outline-purplish-blue focus:outline-[0.1px]`}
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col flex-nowrap gap-3">
            <label
              className="text-marine-blue font-medium text-sm leading-3 tracking-wide flex justify-between items-center"
              htmlFor="phone">
              Phone Number{" "}
              <span>
                {" "}
                {errors.phone && (
                  <p className="text-strawberry-red text-xs">{errors.phone}</p>
                )}
              </span>
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={personalInfo.phone || userData.personalInfo.phone}
              placeholder="eg +1 234 567 890"
              className={`tracking-wide text-marine-blue font-medium border ${
                errors.phone ? "border-strawberry-red" : "border-light-gray"
              } rounded-lg px-3 py-2 mt-0 font-ubuntu placeholder:font-ubuntu placeholder:font-normal focus:outline-purplish-blue focus:outline-[0.1px]`}
            />
          </div>
        </form>
      </div>
      <div className="lg:bg-white lg:w-[80%] lg:mx-auto mt-20 flex flex-row flex-nowrap">
        <button
          onClick={handleSubmit}
          className="bg-marine-blue font-medium text-white px-5 ml-auto py-2 rounded-lg w-fit">
          Next Step
        </button>
      </div>
    </section>
  );
};

export default StepOne;
