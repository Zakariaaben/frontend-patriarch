import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col w-full  items-center pb-12 min-h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
