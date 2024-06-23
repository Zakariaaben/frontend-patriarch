"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleChangeAdmin } from "@/utils/Auth/handleChangeAdmin";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

export function ChangeAdmin({ className }: { className?: string }) {
  const [formData, setFormData] = useState<AdminFormType>({
    username: "",
    password: "",
  });
  const router = useRouter();
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => {
            setIsOpen(true), setMessage("");
          }}
          className={className}
        >
          Change User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogClose
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none   disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Changer nom d&apos;utilisateur et mot de passe. Appuyer sur le
            boutton pour sauvegarder
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) =>
            handleChangeAdmin(
              e,
              setLoading,
              setIsOpen,
              setMessage,
              formData,
              confirmedPassword,
              router
            )
          }
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="username"
                placeholder="New Username"
                className="col-span-3"
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                placeholder="Enter Password"
                className="col-span-3"
                type="password"
                required={true}
                onChange={handleChange}
              />
              <Label htmlFor="password" className="text-right">
                Confirmer
              </Label>
              <Input
                id="confirm-password"
                placeholder="Confirm Password"
                className="col-span-3"
                type="password"
                required={true}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="flex items-center gap-5">
            <div>{message}</div>
            <Button
              type="submit"
              className={`flex gap-2 items-center justify-center transition-all duration-200 ease-in-out ${
                loading ? "px-4" : "px-2"
              }`}
            >
              <div>Change Credentials</div>
              {loading && (
                <MoonLoader color={"#ffffff"} speedMultiplier={0.5} size={20} />
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
