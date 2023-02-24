import styled from "styled-components";

export const IntroduceContainer = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    max-width:1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    margin: 0 auto;

    #inicio{
        position: absolute;
        top:0;
    }

    .avatar{
        width: 400px;
        height: 400px;
        background-color: #e8e8e8;
        border-radius: 100%;
        overflow-x:hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 400px;
        }
    }
    .text{
        color: var(--branco);
        display: flex;
        flex-direction: column;
        gap: 1em;
        line-height: 30px;
        .hello{
            font-weight: 500;
            font-size: 25px;
        }
        h1{
            font-size: 40px;
            color: var(--azul-claro);
        }
        span{
            font-size: 30px;
            font-family: 'Darker Grotesque', sans-serif;
        }
        p{
            width: 100%;
            max-width: 550px;
            font-size: 20px;
            font-weight:400;
            text-align: justify;
        }
        .cv-btn{
            background-color: var(--azul-claro);
            padding: 10px 0;
            box-sizing: border-box;
            width: 140px;
            text-align: center;
            border-radius: 5px;
            color: var(--azul-escuro);
            font-weight: 700;
            font-size: 18px;
            box-shadow: 3px 3px 1px #fff;
            transition: 0.3s ease-in-out;
            border: 1px solid var(--azul-claro);
            :hover{
                background-color: transparent;
                border: 1px solid var(--azul-claro);
                color: var(--azul-claro);
                box-shadow: 0px 0px 0px #fff;
            }
        }
    }

    @media screen and (max-width:500px){
        height: auto;
        flex-direction: column;
        flex-wrap:nowrap;
        justify-content: space-evenly;
        gap: 1em;
        padding: 2em 2em 0 2em;
        .avatar{
            width: 250px;
            height: 250px;
            img{
                width: 250px;
            }
            overflow: hidden;
        }

        .text{
            gap: 10px;
            line-height: 22px;
            .hello{
                font-size: 22px;
                margin-bottom: 5px;
            }
            h1{
                font-size: 28px;
            }
            span{
                font-size: 24px;
            }
            p{
                font-size: 18px;
                margin-bottom: 5px;
            }
            .cv-btn{
               
                width: 120px;
                font-size: 16px;
            }
        }
    }
`