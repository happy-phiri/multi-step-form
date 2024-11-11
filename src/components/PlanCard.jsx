/* eslint-disable react/prop-types */

const PlanCard = ({
  name,
  image,
  price,
  free,
  plan,
  type,
  handleSelectPlan,
  selectedPlan,
}) => {
  return (
    <div
      onClick={() => handleSelectPlan(plan)}
      className={`border ${
        selectedPlan.name === name && selectedPlan.type === type
          ? "border-purplish-blue"
          : "border-light-gray"
      }  p-4 rounded-lg md:min-h-[170px] cursor-pointer hover:border-purplish-blue flex flex-col justify-start items-start`}>
      <img src={image} alt={`${name} icon`} className="" />
      <div className="mt-auto">
        <h3 className="text-marine-blue tracking-wide font-medium">{name}</h3>
        <p className="text-cool-gray text-sm tracking-wide">${price}/mo</p>
        {free && (
          <p className="text-marine-blue text-xs font-medium">
            {free} months free
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
