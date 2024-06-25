import React from "react";
import Image from "next/image";
import {
  TableBody,
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableCell,
} from "../ui/Table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
const Row = () => {
  return (
    <TableRow className="">
      <TableCell className="hidden md:table-cell ">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="http://192.168.1.16:3000/api/uploads/1718447316129-131218966image3.jpg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">Laser Lemonade Machine</TableCell>
      <TableCell>
        <div>Ceci est une petite description du projet</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        2023-07-12 10:42 AM
      </TableCell>
      <TableCell className="hidden md:table-cell">
        2023-07-12 10:42 AM
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Star className="h-10 cursor-pointer fill-white transition-all  hover:fill-slate-600 text-slate-600 " />
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              variant="ghost"
              className="focus-visible:ring-0"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only ">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer md:hidden">
              Ajouter aux favoris
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

function ProjectsTable({ projects }: { projects?: any[] }) {
  return (
    <Card className="mx-4">
      <CardHeader>
        <CardTitle className="text-lg">Projets</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] md:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead className="hidden w-[100px] md:table-cell">
                <span className="sr-only">Favoris</span>
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="rounded-lg">
            <Row />
            <Row />
            <Row />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ProjectsTable;
