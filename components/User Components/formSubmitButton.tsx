import { HtmlHTMLAttributes } from "react";

export const SubmitButton = (props: HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="relative p-px font-semibold leading-6 text-white no-underline bg-primarycolor-800 hover:bg-opacity-85 cursor-pointer group rounded-xl shadow-zinc-900 w-fit justify-self-end  mx-2 transition"
      type="submit"
    >
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-customcolors-accent-300 ring-1 ring-white/10   transition group:">
        <span>Envoyer</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};
