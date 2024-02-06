import SectionHeader from "../../UI/SectionHeader";
import ProjectsInformation from "./ProjectsInformation";

function ProjectsOverview() {
  return (
    <section className="mt-10 rounded-md border-blue-700 bg-[#ffffff] p-6 shadow-md">
      <SectionHeader
        heading="Projects of the Month"
        content="Overview of Latest Month"
      />
      <ProjectsInformation />
    </section>
  );
}

export default ProjectsOverview;
