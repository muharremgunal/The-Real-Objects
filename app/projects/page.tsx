"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { hoverImages } from "../data/homeData";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = searchTerm 
    ? hoverImages.filter((image) => {
        const title = typeof image.text === 'object' 
          ? (image.text as any).props?.children?.[0]?.props?.children || ''
          : String(image.text);
        return title.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : hoverImages;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Where functionality meets joy in every design.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${index + 1}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-left">
                    {project.text}
                  </div>
                  <div className="mt-4 inline-flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    View Project →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 mb-8">
            Let's create something amazing together.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
