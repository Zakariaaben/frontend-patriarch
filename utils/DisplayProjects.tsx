import axios from "axios";
import React from "react";

const fetchProjects = async () => {
  //fetch projects from the server
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/projects"
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

async function DisplayProjects() {
  const Projects: Project[] = await fetchProjects();

  return (
    <div className="grid gap-10  ">
      {Projects.map((Project, key) => (
        <div key={key} className="grid gap-3 ">
          <div>Name: {Project.name}</div>
          <div>Description: {Project.description}</div>
          <div>
            ImageUrls:
            <ul>
              {Project.images.map((image, key) => (
                <li key={key}>{image}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayProjects;
