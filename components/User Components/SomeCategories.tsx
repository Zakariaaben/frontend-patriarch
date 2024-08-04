import Image from "next/image";
import Link from "next/link";

async function SomeCategories() {
  const response = await fetch(process.env.API_URL + "/categories");
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
        `${process.env.API_URL}/projects?categoryId=${category.id}`
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

  const numberOfCategories = 3;

  const randomcategories = await choseRandomCategories(numberOfCategories);

  // get related images for each category
  const relatedImages = await getRelatedImages(randomcategories);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-4 mb-12">
        {randomcategories.map((category, index) => (
          <Link
            key={index}
            href={`/nosprojets?categoryId=${category.id}`}
            className="cursor-pointer group max-lg:last:col-span-full"
            target="_blank"
            about="categories"
          >
            <div className=" flex items-center justify-center h-80   relative bg-slate-900  overflow-hidden ">
              <h1 className="text-xl sm:text-2xl text-customcolors-background font-bold text-center p-4 group-hover:scale-[102%] duration-300 z-[2]">
                {category.name}
              </h1>
              {relatedImages[index] != "" && (
                <Image
                  className="z-[1] group-hover:scale-125 object-cover brightness-50  duration-300"
                  src={"/api/uploads/" + relatedImages[index]}
                  alt={category.name}
                  fill
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
