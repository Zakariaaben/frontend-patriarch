"use client";
import { useState } from "react";
import ContactFormInput from "./ContactFormInput";
import { SubmitButton } from "./formSubmitButton";

const FormParticulier = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const handleContactFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, prenom, phone, email, description, type);
  };
  return (
    <div className="bg-backgroundcolor-900 lg:col-span-2  flex-col max-lg:row-span-2 lg:rounded-bl-md rounded-tl-md max-lg:rounded-tr-md overflow-hidden ">
      <form
        action="submit"
        className="grid grid-cols-1  p-6 gap-8"
        onSubmit={handleContactFormSubmit}
      >
        <span className="text-secondarycolor-200 [text-shadow:1px_1px_8px_var(--tw-shadow-color)] shadow-secondarycolor-800  w-fit justify-self-center font-bold text-3xl -tracking-tighter p-2">
          Vous êtes un Particulier
        </span>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <ContactFormInput
              placeholder=" "
              labelName="Nom"
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            <ContactFormInput
              placeholder=" "
              onChange={(e) => setPrenom(e.target.value)}
              labelName="Prenom"
              required
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <ContactFormInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              labelName="Email"
              placeholder="example@example.com"
            />
            <ContactFormInput
              name="phonenumber"
              labelName="Telephone"
              placeholder="06 99 99 99 99"
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              required
            />
          </div>
          <ContactFormInput
            name="type"
            placeholder="Type"
            onChange={(e) => setType(e.target.value)}
            type="text"
            labelName="Nature du projet"
            required
            className=""
          />
          <div className="relative w-full min-w-[200px]">
            <textarea
              className=" peer h-full min-h-[100px] w-full resize-none rounded-[7px] border placeholder:opacity-0 focus:placeholder:opacity-90 placeholder:text-base border-slate-200 border-t-transparent bg-transparent px-3 py-2.5 font-medium text-[16px] text-slate-300  outline outline-0 transition-all placeholder-shown:border placeholder-shown:rounded-tl-lg placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-secondarycolor-200 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Détails du projet"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-slate-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-slate-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-secondarycolor-200 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-secondarycolor-200 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Description
            </label>
          </div>
          <SubmitButton onClick={handleContactFormSubmit} />
        </div>
      </form>
    </div>
  );
};

export default FormParticulier;
