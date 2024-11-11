import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

export const monthlyPlans = [
  {
    name: "Arcade",
    icon: arcadeIcon,
    price: 9,
    type: "Monthly",
  },
  {
    name: "Advanced",
    icon: advancedIcon,
    price: 12,
    type: "Monthly",
  },
  {
    name: "Pro",
    icon: proIcon,
    price: 15,
    type: "Monthly",
  },
];

export const yearlyPlans = [
  {
    name: "Arcade",
    icon: arcadeIcon,
    price: 90,
    free: 2,
    type: "Yearly",
  },
  {
    name: "Advanced",
    icon: advancedIcon,
    price: 120,
    free: 2,
    type: "Yearly",
  },
  {
    name: "Pro",
    icon: proIcon,
    price: 150,
    free: 2,
    type: "Yearly",
  },
];

export const addons = [
  {
    name: "Online Service",
    feature: "Access to multiplayer games",
    price: 10,
  },
  {
    name: "Larger Storage",
    feature: "Extra 1TB of cloud storage",
    price: 20,
  },
  {
    name: "Customizable Profile",
    feature: "Custom theme on your profile",
    price: 20,
  },
];
