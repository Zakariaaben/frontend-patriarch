"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleSignIn } from "@/utils/Auth/handleSignIn";

export function LoginForm() {
  const router = useRouter();

  const [message, setMessage] = useState<string>("");

  const [formData, setFormData] = useState<AdminFormType>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <Card className="w-full  max-w-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account.
        </CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) =>
          handleSignIn(e, formData, setLoading, setMessage, router)
        }
      >
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="text">Username</Label>
            <Input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="text-md"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
              className="text-md"
              placeholder="Enter Password"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="grid gap-2">
          <Button className="w-full" type="submit">
            {!loading ? "Sign in" : "..."}
          </Button>
          {message ? (
            <div className="text-red-600 m-auto">{message}</div>
          ) : null}
        </CardFooter>
      </form>
    </Card>
  );
}

export default LoginForm;
