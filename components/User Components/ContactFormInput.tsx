import { InputHTMLAttributes } from "react";

type formInputType = InputHTMLAttributes<HTMLInputElement> & {
  labelName?: string;
};

const ContactFormInput: React.FC<formInputType> = ({ labelName, ...props }) => {
  return (
    <div className={"grid gap-2 relative group h-fit " + props.className}>
      <input
        {...props}
        className="px-1 peer h-full w-full border-b  border-blue-gray-200 bg-transparent pt-4 pb-2 font-sans text-[16px] font-medium text-slate-500  focus:text-customcolors-text outline outline-0 transition-all placeholder-shown:border-customcolors-secondary-900 focus:border-customcolors-secondary-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-sm rounded-none"
      />
      <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-medium text-slate-500 leading-tight  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-customcolors-accent-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-slate-500 peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-customcolors-secondary-400 peer-focus:after:scale-x-100 peer-focus:after:border-customcolors-secondary-300 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-500">
        {labelName}
      </label>
    </div>
  );
};

export default ContactFormInput;
