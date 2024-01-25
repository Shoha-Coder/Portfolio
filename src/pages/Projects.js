import Container from "@/components/Container";
import ProjectsFilterSide from "@/components/ProjectsFilterSide";
import React, { useState } from "react";
import Style from "@/styles/Projects.module.scss";
import FilteredProjects from "@/components/FilteredProjects";
import Helmet from "@/components/Helmet";

const Projects = () => {
  const [reactChecked, setReactChecked] = useState(false);
  const [nextChecked, setNextChecked] = useState(false);
  const [viteChecked, setViteChecked] = useState(false);
  return (
    <Container>
      <Helmet title="Projects" />
      <div className={Style.Projects}>
        <ProjectsFilterSide
          reactChecked={reactChecked}
          setReactChecked={setReactChecked}
          nextChecked={nextChecked}
          setNextChecked={setNextChecked}
          viteChecked={viteChecked}
          setViteChecked={setViteChecked}
        />
        <FilteredProjects
          reactChecked={reactChecked}
          nextChecked={nextChecked}
          viteChecked={viteChecked}
          setReactChecked={setReactChecked}
          setNextChecked={setNextChecked}
          setViteChecked={setViteChecked}
        />
      </div>
    </Container>
  );
};

export default Projects;