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
      metaKeywords={process.env.META_KEYWORD_PROJECTS || ""}
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
