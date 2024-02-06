import Container from "@/components/Container";
import ProjectsFilterSide from "@/components/ProjectsFilterSide";
import React from "react";
import Style from "@/styles/Projects.module.scss";
import FilteredProjects from "@/components/FilteredProjects";
import SEO from "@/layout/seo/seo";

const Projects: React.FC = (): React.ReactElement => {
  return (
    <SEO
      metaTitle="Shoha-Coder | Projects"
      metaKeywords={
        process.env.META_KEYWORD || "shoha_coder, shoha coder, shohacoder"
      }
      metaDescription="Shoha Coder's Portfolio Projects Page"
      author="Shoha Coder"
    >
      <Container>
        <div className={Style.Projects}>
          <ProjectsFilterSide />
          <FilteredProjects />
        </div>
      </Container>
    </SEO>
  );
};

export default Projects;
