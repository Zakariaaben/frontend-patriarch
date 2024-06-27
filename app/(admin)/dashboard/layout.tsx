import MobileSideNav from "@/components/Admin Components/MobileSideNav";
import SideNav from "@/components/Admin Components/SideNav";
import TopBar from "@/components/Admin Components/TopBar";
import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-row h-full w-full">
        <div className="relative">
          <SideNav />
        </div>
        <div className="flex flex-col gap-4 m-4 sm:m-2 w-full h-full ">
          <TopBar />

          <Card>{children}</Card>
        </div>
      </main>
      <Toaster />
    </>
  );
}
