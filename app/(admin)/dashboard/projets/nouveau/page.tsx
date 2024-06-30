import { NewProject } from "@/components/Admin Components/NewProject";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucidePanelsTopBottom } from "lucide-react";
import Link from "next/link";

function Page() {
  return (
    <>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Projets</CardTitle>
            <CardDescription>
              Manage your Projects and view their performance.
            </CardDescription>
          </div>
          <Link href="/dashboard/projets">
            <LucidePanelsTopBottom className="m-2 " size={28} />
          </Link>
        </div>
      </CardHeader>
      <NewProject />
    </>
  );
}

export default Page;
