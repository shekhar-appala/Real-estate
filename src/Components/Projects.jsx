import React from "react";
import ProjectHeader from "./projects/Header";
import ProjectNav from "./projects/projectNav";
import Banner from "./projects/Banner";
import Footer  from "./Footer"
import ProjectDetails from "./projects/ProjectDetails";

function Projects() {
  return (
    <div>
      <ProjectHeader />
      <ProjectNav />
      <Banner />
      <ProjectDetails />
      <Footer />
    </div>
  );
}

export default Projects;
