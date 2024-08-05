import Navbar from "@/components/navbar";
import Footer from "@/components/User Components/footer";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";

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
          "grid w-full   grid-cols-1 min-h-[100dvh] bg-customcolors-backgroundw items-center justify-center overflow-x-hidden text-heavy-metal " +
          monserrat.className
        }
      >
        <Suspense>{children}</Suspense>
      </div>
      <Footer />
    </>
  );
}
