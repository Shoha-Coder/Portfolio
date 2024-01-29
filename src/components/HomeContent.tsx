import React from "react";
import Style from "@/styles/HomeContent.module.scss";

const HomeContent: React.FC = (): React.ReactElement => {
  return (
    <div className={Style.HomeContent}>
      <div className={Style.Top}>
        <h3>Hi all. I am</h3>
        <h1>Shoha_Coder</h1>
        <h2>{">"} Front-end developer</h2>
      </div>
      <div className={Style.Bottom}>
        <h3>// complete the game to continue</h3>
        <h3>// you can also see it on my Github page</h3>
        <h3>// find my profile on Github:</h3>
        <h3>
          <span className={Style.const}>const</span>{" "}
          <span className={Style.GithubLink}>githubLink</span> ={" "}
          <a
            href="https://github.com/shoha-coder"
            target="_blank"
            rel="noreferrer"
          >
            “https://
            <br className={Style.brake} />
            github.com/Shoha-Coder”
          </a>
        </h3>
      </div>
    </div>
  );
};

export default HomeContent;
