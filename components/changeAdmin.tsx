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
import axios from "axios";
import { X } from "lucide-react";
import { useRef, useState } from "react";

export function ChangeAdmin() {
  const [formData, setFormData] = useState<AdminFormType>({
    username: "",
    password: "",
  });
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleChangeAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
    if (formData.password !== confirmedPassword) {
      confirmPasswordInput.current?.setCustomValidity("Passwords do not match");
      return;
    }
    e.preventDefault();
    const response = await axios.post(
      "http://" + process.env.NEXT_PUBLIC_API_URL + "/api/auth/changeadmin",
      formData
    );

    //change admin credentials
    console.log(formData);
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Change User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[325px]">
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
        <form onSubmit={handleChangeAdmin}>
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
                ref={confirmPasswordInput}
                required={true}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Change Credentials</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
