import Link from "next/link";
import { ClientPage } from "./_components/clientPage";

const ServicesPage = () => {
  return (
    <>
      <div className="text-center text-3xl p-4 font-extrabold text-customcolors-primary-200">
        Nos Prestations
      </div>

      <ClientPage />
    </>
  );
};

export default ServicesPage;
