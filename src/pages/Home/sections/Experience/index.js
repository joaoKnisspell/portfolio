import { ExperienceContainer } from "./style"

const Experience = ({ experiences }) => {
  return (
    <ExperienceContainer>
        <span id="experience"></span>
        <h3>Experiência:</h3>
        <div className="experience-content">
            {experiences.map((experience) => {
                return(
                    <article key={experience.name} className="card">
                        <img src={experience.image} alt={`logo ${experience.company}`} />
                        <div className="article-text">
                            <h4>{experience.name}</h4>
                            <h5>{experience.company}</h5>
                            {/* {experience.start !== '' ? <span>Início:{experience.start}</span> : ''}
                            {experience.end !== '' ? <span>Término/Em andamento:{experience.end}</span> : ''} */}
                            <p>{experience.text}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    </ExperienceContainer>
  )
}

export default Experience