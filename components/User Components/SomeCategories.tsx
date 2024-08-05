import { unstable_noStore as noStore } from "next/cache";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

const { publicRuntimeConfig } = getConfig();

async function SomeCategories({
  numberOfCategories,
}: {
  numberOfCategories: number;
}) {
  noStore();
  const response = await fetch(publicRuntimeConfig.API_URL + "/categories");
  const categories: Category[] = await response.json();
  const Length = categories.length - 1;

  async function choseRandomCategories(num: number) {
    const chosenCategories: Category[] = [];
    while (chosenCategories.length < num) {
      const randomCategory = categories[(Math.random() * Length) | 0];

      if (
        !chosenCategories.find((category) => category.id === randomCategory.id)
      ) {
        chosenCategories.push(randomCategory);
      }
    }
    return chosenCategories;
  }

  async function getRelatedImages(chosenCategories: Category[]) {
    const relatedImages: string[] = [];
    for (const category of chosenCategories) {
      const response = await fetch(
        `${publicRuntimeConfig.API_URL}/projects?categoryId=${category.id}`
      );

      const projects: Project[] = await response.json();

      const randomProject = projects[(Math.random() * projects.length) | 0];

      if (randomProject) {
        relatedImages.push(randomProject.images[0]);
      } else {
        relatedImages.push("");
      }
    }
    return relatedImages;
  }

  // chose random distinct categories  to display

  const randomcategories = await choseRandomCategories(numberOfCategories);

  // get related images for each category
  const relatedImages = await getRelatedImages(randomcategories);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-4 mb-12 p-2">
        {randomcategories.map((category, index) => (
          <Link
            key={index}
            href={`/nosprojets?categoryId=${category.id}`}
            className="cursor-pointer group max-lg:last:col-span-full"
            about="categories"
          >
            <div className=" flex items-center justify-center h-80   relative bg-slate-900  overflow-hidden ">
              <h1 className="text-xl sm:text-2xl text-customcolors-background font-bold text-center p-4 group-hover:scale-[102%] duration-300 z-[2]">
                {category.name}
              </h1>
              {relatedImages[index] != "" && (
                <Image
                  className="z-[1] absolute top-0 left-0 w-full h-full group-hover:scale-125 object-cover brightness-50  duration-300"
                  src={"/api/uploads/" + relatedImages[index]}
                  alt={category.name}
                  width={400}
                  height={400}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SomeCategories;

export const SkeletonSomeCategories = ({
  numberOfCategories,
}: {
  numberOfCategories: number;
}) => {
  let categoriesComponents = [];
  for (let i = 0; i < numberOfCategories; i++) {
    categoriesComponents.push(
      <Link
        key={i}
        href={"#"}
        className="cursor-pointer group max-lg:last:col-span-full"
        about="categories"
      >
        <div className=" flex items-center justify-center h-80   relative bg-slate-900  overflow-hidden ">
          <h1 className="relative text-xl sm:text-2xl bg-slate-700 w-[50%] blur-lg opacity-80 text-customcolors-background font-bold text-center p-4 group-hover:scale-[102%] duration-300 z-[2]"></h1>
        </div>
      </Link>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-4 mb-12 p-2">
        {categoriesComponents}
      </div>
    </>
  );
};
