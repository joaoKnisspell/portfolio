import styled from "styled-components";

export const FormContainer = styled.section`
    width: 100vw;
    min-height: 50vh;
    margin-top: 3.5em;
    background-color: var(--azul-claro);
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color: var(--azul-escuro);
        text-align: left;
        margin-bottom: 0.5em;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        max-width: 600px;
        input, textarea, button{
            width: 100%;
            max-width: 600px;
            border: 1px solid blue;
            outline: none;
            padding: 15px 10px;
            border: none;
            font-size: 16px;
            color: var(--azul-escuro);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
        textarea{
            resize: none;
            height: 135px;
        }
        button{
            background-color: var(--azul-escuro);
            color: var(--branco);
        }
        span{
            display: block;
            margin: 8px 0;
            color: var(--azul-escuro);
            font-size: 18px;
        }
    }
`