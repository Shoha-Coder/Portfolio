import Container from "@/components/Container";
import ProjectsFilterSide from "@/components/ProjectsFilterSide";
import React from "react";
import Style from "@/styles/Projects.module.scss";
import FilteredProjects from "@/components/FilteredProjects";
import Helmet from "@/components/Helmet";

const Projects: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Helmet title="Projects" />
      <div className={Style.Projects}>
        <ProjectsFilterSide />
        <FilteredProjects />
      </div>
    </Container>
  );
};

export default Projects;
