import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
  ul{
    display: flex;
    gap:1em;
    li{
      padding: 0px 10px;
      color: var(--branco);
      font-size: 18px;
      
    }
    a{
      cursor: pointer;
      :hover{
        border-bottom: 2px solid var(--azul-claro);
      }
    }
  }

  @media screen and (max-width:500px){
    ul{
      gap: 5px;
      li{
        font-size: 16px;
      }
    }
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li><a href="#inicio">Home</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
    </ul>
    </NavContainer>
  )
}

export default Navbar