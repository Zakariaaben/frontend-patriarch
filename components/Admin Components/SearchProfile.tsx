"use client";

import { Search, User2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

import Logout from "../Logout";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { useState } from "react";
import { ChangeAdmin } from "../changeAdmin";

function SearchProfile({ user }: { user?: AdminUser }) {
  const [openChangeAdmin, setOpenChangeAdmin] = useState<boolean>(false);
  const triggerChangeAdmin = (value: boolean) => {
    setTimeout(() => {
      setOpenChangeAdmin(value);
    }, 50);
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] text-md focus-visible:ring-0"
          />
        </div>
        <div className="flex flex-col">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full border-none "
              >
                <User2 />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="flex items-center px-5 font-semibold text-lg">
                {user!.username}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="outline-none">
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => triggerChangeAdmin(true)}
                >
                  Change Admin
                </Button>
              </DropdownMenuItem>

              <Logout className=" px-4 border-none w-full  " />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <ChangeAdmin
        className="hidden"
        open={openChangeAdmin}
        triggerChangeAdmin={triggerChangeAdmin}
      />
    </>
  );
}

export default SearchProfile;
