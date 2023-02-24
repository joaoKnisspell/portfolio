//React
import { useState, useEffect } from "react";

//Components
import Navbar from "../../components/Navbar";

//Sections
import Introduce from "./sections/Introduce";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import FormPage from "./sections/Form";

const Home = () => {

  const [ projects, setProjects ] = useState([]);
  const [ experiences, setExperiences ] = useState([]);

  useEffect(() => {
    function getProjects(){
      fetch("https://my-json-server.typicode.com/joaoKnisspell/portfolio-api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch((error) => {
        console.log(error)
      })
    }

    function getExperiences(){
      fetch("https://my-json-server.typicode.com/joaoKnisspell/portfolio-api/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.log(error))
    }

    getProjects()
    getExperiences()
  }, [])

  return (
    <>
      <Navbar />
      <Introduce/>
      <Experience experiences={experiences} id="section2"/>
      <Skills projects={projects}/>
      <FormPage />
    </>
  )
}

export default Home