import { Card } from "@/components/ui/card";
import { ClientPage } from "./_components/clientPage";

const ServicesPage = () => {
  return (
    <>
      <div className="flex flex-col w-full  items-center pb-12">
        <div className="text-center text-3xl p-4 font-extrabold text-customcolors-primary-200">
          Nos Prestations
        </div>
        <ClientPage />
      </div>
    </>
  );
};

export default ServicesPage;
