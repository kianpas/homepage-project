import { useEffect } from "react";
import Wrapper from "../ui/Wrapper";
import classes from "./Project.module.css";
import ProjectItem from "./ProjectItem";

const Project = (props) => {
  return (
    <Wrapper>
      <section className={classes.list}>
        {props.projects.map((data) => (
          <ProjectItem key={data.id} data={data} />
        ))}
      </section>
    </Wrapper>
  );
};

export default Project;
