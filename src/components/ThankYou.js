import React from "react";
import thankYouIcon from "../assets/images/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 w-full phone:bg-white phone:p-8 phone:w-[90%] phone:absolute phone:top-40 phone:rounded-2xl">
      <img src={thankYouIcon} alt="Thank you" />
      <p className="text-4xl font-bold text-marineBlue">Thank you!</p>
      <p className="max-w-lg text-center text-coolGray">
        Thanks for comfirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
