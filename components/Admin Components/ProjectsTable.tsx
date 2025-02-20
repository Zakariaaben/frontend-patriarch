import { MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { Button } from "../ui/button";
import { CardContent } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Row = ({ project }: { project: Project }) => {
  return (
    <TableRow className="">
      <TableCell className="hidden md:table-cell ">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height={1920}
          src={`/api/uploads/${project.images[0]}`}
          priority={true}
          width="1080"
        />
      </TableCell>
      <TableCell className="font-medium relative">
        <div className="sm:hidden">
          {
            /* {favorite && ( */ <Star className="absolute top-3 right-4 h-4 fill-black" />
          }
        </div>
        <div className="text-lg">{project.name}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <div>{project.description.slice(0, 100)}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {new Date(project.date).toDateString()}
      </TableCell>
      <TableCell>{project.category.name}</TableCell>
      <TableCell className="hidden md:table-cell">
        <Star
          className={
            "h-10 cursor-pointer  transition-all  hover:fill-slate-600 text-slate-600 " // +
            // (favorite ? "fill-slate-600" : "fill-slate-white")
          }
        />
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
            <Link href={`/dashboard/projets/editer/` + project.id}>
              <DropdownMenuItem className="cursor-pointer">
                Edit
              </DropdownMenuItem>
            </Link>
            <Link href={`/dashboard/projets/supprimer/` + project.id}>
              <DropdownMenuItem className="cursor-pointer">
                Delete
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer md:hidden">
              Ajouter aux favoris
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <CardContent>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] md:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Nom</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead>Catégorie</TableHead>
            <TableHead className="hidden w-[100px] md:table-cell">
              <span className="sr-only">Favoris</span>
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="rounded-lg">
          {projects.map((project, index) => {
            return <Row project={project} key={index} />;
          })}
        </TableBody>
      </Table>
    </CardContent>
  );
}

export default ProjectsTable;
