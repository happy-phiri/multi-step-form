import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-sidebar-background-desktop max-lg:bg-sidebar-background-mobile bg-center bg-no-repeat bg-cover h-full py-5 flex lg:flex-col max-lg:justify-center gap-5 p-4 font-ubuntu lg:rounded-lg">
      <NavLink to="/" end className="flex flex-row gap-4 items-center">
        <span className="border border-light-blue text-white font-semibold rounded-full w-10 h-10 flex justify-center items-center">
          1
        </span>
        <span className=" hidden lg:flex flex-col justify-center">
          <small className="text-light-blue text-[12px] tracking-wide leading-0">
            STEP 1
          </small>
          <p className="text-white text-sm font-medium font-ubuntu tracking-wide leading-3">
            YOUR INFO
          </p>
        </span>
      </NavLink>

      <NavLink to="step-two" className="flex flex-row gap-4 items-center">
        <span className="border border-light-blue text-white font-semibold rounded-full w-10 h-10 flex justify-center items-center">
          2
        </span>
        <span className="hidden lg:flex flex-col justify-center">
          <small className="text-light-blue text-[12px] tracking-wide leading-0">
            STEP 2
          </small>
          <p className="text-white text-sm font-medium font-ubuntu tracking-wide leading-3">
            Select Plan
          </p>
        </span>
      </NavLink>

      <NavLink to="step-three" className="flex flex-row gap-4 items-center">
        <span className="border border-light-blue text-white font-semibold rounded-full w-10 h-10 flex justify-center items-center">
          3
        </span>
        <span className="hidden lg:flex flex-col justify-center">
          <small className="text-light-blue text-[12px] tracking-wide leading-0">
            STEP 3
          </small>
          <p className="text-white text-sm font-medium font-ubuntu tracking-wide leading-3">
            ADD-ONS
          </p>
        </span>
      </NavLink>

      <NavLink to="step-four" className="flex flex-row gap-4 items-center">
        <span className="border border-light-blue text-white font-semibold rounded-full w-10 h-10 flex justify-center items-center">
          4
        </span>
        <span className="hidden lg:flex flex-col justify-center">
          <small className="text-light-blue text-[12px] tracking-wide leading-0">
            STEP 4
          </small>
          <p className="text-white text-sm font-medium font-ubuntu tracking-wide leading-3">
            SUMMARY
          </p>
        </span>
      </NavLink>
    </nav>
  );
};

export default Header;
