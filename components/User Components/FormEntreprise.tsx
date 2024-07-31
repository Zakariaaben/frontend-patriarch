"use client";

import { FormSchema } from "@/validation/formValidation";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import ContactFormInput from "./ContactFormInput";
import { SubmitButton } from "./formSubmitButton";
const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

const FormEntreprise = ({
  showParticulier,
}: {
  showParticulier?: () => void;
}) => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [typeOfProject, setType] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleContactFormSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      familyName,
      phone,
      email,
      description,
      typeOfProject,
      sender: "Professionnel",
    };

    const parse = FormSchema.safeParse(data);
    if (!parse.success) {
      console.log(parse.error?.errors);

      let errormessages: string[] = [];
      parse.error?.errors.forEach((error) => {
        errormessages.push(error.message);
      });
      setLoading(false);
      return toast({
        className: "w-full p-4",
        action: (
          <ul
            className={
              "w-full flex flex-col flex-nowrap  text-sm list-disc " +
              poppins.className
            }
          >
            {errormessages.map((errorMessage) => {
              return <li className="text-nowrap">{errorMessage}</li>;
            })}
          </ul>
        ),
      });
    }

    try {
      const response = await fetch("/api/email/send", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }

      toast({
        action: <div className="w-full ">Message Envoyé avec succés !</div>,
      });
      router.push("/remerciments");
    } catch (err: any) {
      console.error(err);
      toast({
        action: (
          <div className="text-customcolors-text">
            Erreur Lors de l'envoi de votre Email
          </div>
        ),
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-backgroundcolor-900 lg:col-span-2  flex-col max-lg:row-span-2 lg:rounded-bl-md rounded-tl-md max-lg:rounded-tr-md overflow-hidden order-2">
      <form
        action="submit"
        className="grid grid-cols-1  p-6 gap-8"
        onSubmit={handleContactFormSubmit}
      >
        <span className="text-secondarycolor-200 [text-shadow:1px_1px_8px_var(--tw-shadow-color)] shadow-secondarycolor-800  w-fit justify-self-center font-bold text-2xl -tracking-tighter p-2">
          Vous êtes un organisme ou une institution
        </span>
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <ContactFormInput
              placeholder="Nom de l'Organisme"
              onChange={(e) => setFamilyName(e.target.value)}
              labelName="Institution"
              required
              type="text"
            />
            <ContactFormInput
              placeholder=" "
              labelName="Representant"
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
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
              className=" peer h-full min-h-[100px] w-full resize-none rounded-[7px] border placeholder:opacity-0 focus:placeholder:opacity-90 placeholder:text-base border-slate-200 border-t-transparent bg-transparent px-3 py-2.5 font-medium text-[16px] text-slate-400 focus:text-customcolors-text  outline outline-0 transition-all placeholder-shown:border placeholder-shown:rounded-tl-lg placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-secondarycolor-200 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Détails du projet"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-slate-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-customcolors-secondary-200 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-secondarycolor-200 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-secondarycolor-200 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Description
            </label>
          </div>
          <div className="flex justify-between items-center">
            <SubmitButton onClick={handleContactFormSubmit} loading={loading} />
            <span
              onClick={showParticulier}
              className="z-100 bottom-4 left-4 text-secondarycolor-200 text-sm font-medium cursor-pointer  "
            >
              Vous êtes un Particulier ou un Professionnel ?
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEntreprise;
