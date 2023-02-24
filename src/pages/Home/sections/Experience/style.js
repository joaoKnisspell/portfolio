import styled from "styled-components";

export const ExperienceContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    #experience{
        margin-bottom: 6em;
    }

    h3{
        margin-bottom: 2em;
    }

    .experience-content{
        display: flex;
        justify-content: center;
        gap:3em;
        flex-wrap: wrap;
    }
    
    .card{
        background-color: transparent;
        transition: 0.3s ease-in-out;
        width: 350px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5em;
        gap: 1em;
        box-shadow: 3px 3px 1px var(--azul-claro);
        border: 3px solid var(--azul-claro);
        border-radius: 5px;
        cursor: pointer;
        span{
            display: block;
        }
        h4{
            font-size: 18px;
            font-weight: 700;
            color: var(--branco);
        }
        h5{
            font-size: 16px;
            font-weight: 500;
            color: #cecece;
        }
        h4,h5{
            text-align: center;
        }
        p{
            margin-top: 1em;
            font-size: 15px;
            text-align:justify;
            color: #cecece;
        }
        :hover{
            transform: scale(1.05);
        }
    }
`