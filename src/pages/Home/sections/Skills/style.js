import styled from "styled-components";

export const SkillsContainer = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding-top:4em ;
    #projects{
        position: absolute;
        top: 0;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 3em;
        margin: 2em 0;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            opacity: 0.8;
            transition: 0.3s;
            cursor: pointer;
            :hover{
                    opacity: 1;
                }
            .icon{
                font-size:65px;
                color: var(--azul-claro);
            }
            span{
                display: block;
                color: var(--branco);
            }
        }
    }

    .articles-section{
        margin: 3em auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3em;
        width: 100%;
        max-width: 1200px;
    }

    article{
        width:350px;
        background-color: rgba(0, 209, 255);
        display: flex;
        flex-direction:column;
        border-radius: 5px;
        box-shadow: rgba(0, 209, 255, 0.4) 0px 5px, rgba(0, 209, 255, 0.3) 0px 10px, rgba(0, 209, 255, 0.2) 0px 15px, rgba(0, 209, 255, 0.1) 0px 20px, rgba(0, 209, 255, 0.05) 0px 25px;
        .article-text{
            padding: 1em;
            text-align: center;
        }
        .article-btns{
            margin-top:10px ;
            display: flex;
            justify-content: center;
            gap: 1em;
            a{
                padding: 5px 10px;
                font-size: 14px;
                cursor: pointer;
                border-radius: 5px;
            }
            .btn-a{
                background-color: var(--azul-escuro);
                color: var(--branco);
                font-weight:300;
            }
            .btn-b{
                background-color:transparent;
                color: var(--azul-escuro);
                border: 1px solid var(--azul-escuro);
                a{
                    color: var(--azul-escuro);
                }
            }
        }
        h4{
            
            font-family: 'Darker Grotesque', sans-serif;
            font-size: 25px;
            font-weight: 700;
        }
        img{
            width: 100%;
            height: 200px;
        }
    }
`