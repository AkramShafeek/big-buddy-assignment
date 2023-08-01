import ModulesList from "./list renderers/ModulesList";

const CourseModules = () => {
  const sampleArr = [1, 2, 3, 4, 5];
  return (
    <div>
      <ModulesList list={sampleArr} />
    </div>
  )
}

export default CourseModules;