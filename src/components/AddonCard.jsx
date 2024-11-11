/* eslint-disable react/prop-types */

const AddonCard = ({
  name,
  feature,
  price,
  addon,
  isChecked,
  handleCheckboxChange,
}) => {
  return (
    <div
      key={name}
      className={`flex flex-row flex-nowrap items-center gap-4 border ${
        isChecked && addon.name === name
          ? "border-purplish-blue"
          : "border-light-gray"
      } rounded-lg p-4`}>
      <input
        type="checkbox"
        name="addon"
        id="addon"
        checked={isChecked}
        onClick={(e) => handleCheckboxChange(e, addon)}
      />
      <div className="flex flex-row flex-nowrap justify-between items-center w-full">
        <div>
          <h3 className="text-marine-blue tracking-wide font-medium">{name}</h3>
          <p className="text-cool-gray text-sm max-md:text-xs tracking-wide">
            {feature}
          </p>
        </div>
        <p className="text-purplish-blue max-md:text-sm">+${price}/yr</p>
      </div>
    </div>
  );
};

export default AddonCard;
