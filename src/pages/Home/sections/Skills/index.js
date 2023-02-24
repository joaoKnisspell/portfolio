//Icons
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";

//Style
import { SkillsContainer } from "./style"
import { Link } from "react-router-dom";

const Skills = ({ projects }) => {


  return (
    <SkillsContainer>
        <span id="projects"></span>
        <h3>Habilidades:</h3>

        <ul>
            <li>
                <IoLogoHtml5 className="icon"/>
                <span>HTML</span>
            </li>
            <li>
                <IoLogoCss3 className="icon"/>
                <span>CSS</span>
            </li>
            <li>
                <IoLogoJavascript className="icon"/>
                <span>JavaScript</span>
            </li>
            <li> 
                <IoLogoFirebase className="icon"/>
                <span>Firebase</span>
            </li>
            <li>
                <FaGitAlt className="icon"/>
                <span>Git</span>
            </li>
            <li>
                <IoLogoReact className="icon"/>
                <span>React</span>
            </li>
        </ul>

        <h3>Projetos Recentes:</h3>
        <div className="articles-section">
            {projects.map((project) => {
                return(
                    <article key={project.name}>
                    <img alt={`foto capa do projeto ${project.name}`} src={project.image} />
                    <div className="article-text">
                        <h4>{project.name}</h4>
                        <span>Tecnologias: {project.tecnologies}</span>
                        <div className="article-btns">
                            <Link target="blank" to={project.repos} className="btn-a">Ver mais</Link>
                            <Link target="blank" to={project.vercel} className="btn-b">Acessar</Link>
                        </div>
                    </div>
                </article>
                )
            })}
        </div>

    </SkillsContainer>
  )
}

export default Skills;