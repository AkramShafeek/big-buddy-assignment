import { useSelector } from "react-redux";
import ModulesList from "./list renderers/ModulesList";

const CourseModules = () => {
  const selectedCourse = useSelector((store) => store.course.selectedCourse);  
  const sampleArr = [1, 2, 3, 4, 5];
  return (
    <div>
      <ModulesList list={selectedCourse.modules} />
    </div>
  )
}

export default CourseModules;