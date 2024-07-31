import SideNav from "@/components/Admin Components/SideNav";
import TopBar from "@/components/Admin Components/TopBar";
import { Card } from "@/components/ui/card";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-row h-full w-full ">
        <div className="relative">
          <SideNav />
        </div>
        <div className="flex flex-col gap-4 px-4  sm:m-2 h-full w-full ">
          <TopBar />
          <Card>{children}</Card>
        </div>
      </main>
    </>
  );
}
