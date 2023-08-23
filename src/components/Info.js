import React from "react";
import EntryHeading from "./EntryHeading";
import EntryCaption from "./EntryCaption";
import FormInput from "./formInput";
import { useUserContext } from "../context/userContext";

export default function Info({ handleSubmit }) {
  const { name, setName, email, setEmail, number, setNumber } =
    useUserContext();

  return (
    <div
      className=" w-full rounded-3xl space-y-7 p-24 
    phone:bg-white phone:p-8 phone:w-[90%] phone:absolute phone:top-40"
    >
      <div>
        <EntryHeading>Personal info</EntryHeading>
        <EntryCaption>
          Please provide youir name, email address, and phone number
        </EntryCaption>
      </div>
      <form
        className="flex flex-col space-y-6 justify-between h-full"
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          <FormInput
            value={name}
            label="Name"
            placeholder="e.g. Stephen King"
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            value={email}
            label="Email Address"
            placeholder="e.g. stephenking@@lorem.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            value={number}
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="w-full justify-end flex phone:fixed phone:bottom-0 phone:right-0 phone:bg-white phone:p-4">
          <button
            type="submit"
            className="bg-marineBlue text-white w-28 h-12 rounded-lg"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
