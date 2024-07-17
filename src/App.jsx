import { useState } from "react"
import NoProjectSelected from "./components/noProjectSelected"
import ProjectsSideBar from "./components/ProjectsSideBar"
import NewProject from "./components/NewProject"
import SelectedProject from "./components/SelectedProject"

function App() {
  const [projectStarted, setProjectStarted] = useState({
    selectedProjectId: undefined,
    projects:[]
  })
  function handelStartAddProject() {
    setProjectStarted(prevState => {
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }
  function handelSelect(id) {
    setProjectStarted((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handelCancel() {
    setProjectStarted((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handelDelte() {
    setProjectStarted((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:prevState.projects.filter((project)=>project.id!==prevState.selectedProjectId)
      };
    });
  }
  const selectedProject=projectStarted.projects.find(project=>project.id===projectStarted.selectedProjectId)
  let content = <SelectedProject project={selectedProject} onDelte={handelDelte} />
  if (projectStarted.selectedProjectId === null) {
    content = <NewProject onAdd={handelAddProject} onCancel={ handelCancel} />
  }
  else if (projectStarted.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />;
  }
  function handelAddProject(projectDate) {
    setProjectStarted(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectDate,
        id:projectId
      }
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handelStartAddProject}
        projects={projectStarted.projects}
        onSelectProject={ handelSelect} />
      {content}
    </main>
  );
}

export default App
