//Assets
import perfil from "./perfil.png";
import vector from "./vector.png";

//Style
import { IntroduceContainer } from "./style";
import { DefaultContainer } from "../../../../components/DefaultContainer";

//Router
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <IntroduceContainer >
      {/* <DefaultContainer> */}
        <span id="inicio"></span>
        <div className="avatar">
          <img src={perfil} alt="perfil"/>
        </div>

        <div className="text">
          <p className="hello">Olá, eu sou o</p>
          <h1>João Knisspell</h1>
          <span>Desenvolvedor Web</span>
          <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Unisinos, estou em desenvolvimento e pretendo me tornar Desenvolvedor Full-Stack. Possuo experiência com as seguintes tecnologias: HTML, CSS, JavaScript, Firebase, GIT e ReactJS.</p>
          <Link className="cv-btn" to="https://1drv.ms/b/s!AqoeCBhiSSxAqGwYadDj20JbJyCd?e=iEBqoe" target='blank'>Currículo</Link>
        </div>
      {/* </DefaultContainer> */}
    </IntroduceContainer>
  )
}

export default Introduce;