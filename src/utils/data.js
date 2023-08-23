import arcadeIcon from "../assets/images/icon-arcade.svg";
import advanceIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export const steps = [
  {
    step: 1,
    title: "your info",
  },
  {
    step: 2,
    title: "select plan",
  },
  {
    step: 3,
    title: "add-ons",
  },
  {
    step: 4,
    title: "summary",
  },
];

export const plans = [
  {
    icon: arcadeIcon,
    title: "Arcade",
    pricePerMonth: 9,
    pricePerYear: 90,
    monthsFree: 2,
  },
  {
    icon: advanceIcon,
    title: "Advance",
    pricePerMonth: 12,
    pricePerYear: 120,
    monthsFree: 2,
  },
  {
    icon: proIcon,
    title: "Pro",
    pricePerMonth: 15,
    pricePerYear: 150,
    monthsFree: 2,
  },
];

export const addOns = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    pricePerMonth: 1,
    pricePerYear: 10,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricePerMonth: 2,
    pricePerYear: 20,
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    pricePerMonth: 2,
    pricePerYear: 20,
  },
];
