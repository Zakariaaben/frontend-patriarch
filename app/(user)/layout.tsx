import Navbar from "@/components/navbar";
import { Roboto_Mono } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "grid w-full   grid-cols-1 bg-backgroundcolor-950  min-h-fit items-center justify-center overflow-x-hidden " +
        roboto.className
      }
    >
      <Navbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
