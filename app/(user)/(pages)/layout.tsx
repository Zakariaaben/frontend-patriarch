import Navbar from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { Suspense } from "react";
import Loading from "./loading";

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
          GeistSans.className
        }
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
}
