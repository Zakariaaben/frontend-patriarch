import Navbar from "@/components/navbar";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "grid w-full  justify-center grid-cols-1 bg-purple-200 bg-gradient-to-r from-slate-100 to-purple-200 h-fit " +
        roboto.className
      }
    >
      <Navbar />
      {children}
    </div>
  );
}
