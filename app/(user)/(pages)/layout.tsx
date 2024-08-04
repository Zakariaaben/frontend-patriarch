import Navbar from "@/components/navbar";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
const monserrat = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div
        className={
          "grid w-full   grid-cols-1 min-h-fit bg-customcolors-backgroundw items-center justify-center overflow-x-hidden text-heavy-metal " +
          monserrat.className
        }
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
}
