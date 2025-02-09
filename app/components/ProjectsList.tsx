"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projectsData";

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link href={`/projects/${project.id}`} key={project.id}>
          <div className="relative group overflow-hidden">
            <Image
              src={project.images.main}
              alt={project.title}
              width={400}
              height={400}
              className="w-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsList;
