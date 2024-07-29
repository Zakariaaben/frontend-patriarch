const ServicesPage = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-[100dvh] items-center ">
        <div className="text-center text-3xl">Nos Prestations</div>
        <div className="flex flex-row w-full flex-1   ">
          <div className="w-1/2     flex text-2xl items-center font-bold justify-center cursor-pointer hover:bg-slate-50 transition min-h-full">
            Pour particuliers
          </div>
          <div className="w-1/2 flex text-2xl font-bold items-center justify-center cursor-pointer hover:bg-slate-50 transition min-h-full">
            Pour Professionnels
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
