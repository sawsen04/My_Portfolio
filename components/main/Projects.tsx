import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-18"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfolio.png"
          title="Modern Next.js Portfolio"
          description="Explore my work, skills, and experiences with intuitive animations and dynamic UI elements. Let's embark on a journey through my projects and achievements together, brought to life with Next.js and Framer Motion."
        />
        <ProjectCard
          src="/rental_car.png"
          title="Rental_Car_Website"
          description=" Rental car website, meticulously crafted with both frontend and backend expertise for seamless user experience,Book your next adventure with confidence, knowing that our platform is designed to make your journey smooth and enjoyable."
        />
      </div>
    </div>
  );
};

export default Projects;
