import styled from "styled-components";

export const My = styled.div`
    width: 100%;
    padding: 240px 0px;
    padding-bottom: 150px;
    background-color: #111;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: white;
    font-family: 'Black Han Sans', sans-serif;
    z-index: -9;
    h1{
        margin: 0;
        font-size: 60px;
        font-weight: 300;
    }
    button{
        width: 200px;
        height: 40px;
        border-radius: 20px;
        margin-top: 35px;
        font-size: 17px;
        background-color: #f57c00;
        color: white;
        font-weight: bold;
    }
`

export const MyName = styled.h1`
    ::before, ::after{
        position: absolute;
        content : "";
        top: -5%;
        left: -5%;
        height:110%;
        width:110%;
        border-radius:50%;
        opacity:0.5;
        filter: blur(60px);
    }
    
    ::after{
        background-color:#00ffff;
        z-index: -1;
        animation : backglow2 15s ease infinite;
    }
    ::before{
        background-color:#ff0072;
        z-index: -2;
        animation : backglow1 15s ease infinite;
    }
    @keyframes backglow1{
        0%{
            transform: translate(10%, 10%) scale(1);
            opacity:0.5;
        }
        25%{
            transform: translate(-10%, 10%) scale(0.8);
            opacity:0.5;
         }
        50%{
            transform: translate(-10%, -10%) scale(1.2);
            opacity:0.8;
        }
        75%{
            transform: translate(10%, -10%) scale(1.1);
            opacity:0.2;
        }
        100%{
            transform: translate(10%, 10%) scale(1);
            opacity:0.5;
        }
    }
    @keyframes backglow2{
        0%{
            transform: translate(-10%, -10%) scale(1);
            opacity:0.5;
            }
        25%{
          transform: translate(10%, -10%) scale(0.8);
          opacity:0.5;
        }
        50%{
            transform: translate(10%, 10%) scale(1.2);
            opacity:0.8;
        }
        75%{
            transform: translate(-10%, 10%) scale(1.1);
            opacity:0.2;
        }
        100%{
            transform: translate(-10%, -10%) scale(1);
            opacity:0.5;
        }
    }
`

export const AboutMe = styled.div`
    padding: 10vh 30vh;
`

export const Skills = styled.div`
    width: 100%;
    background-color: #F9D852;
    padding: 0px 30vh;
    padding-bottom: 4vh;
    padding-top: 8vh;
`

export const Github = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh 0vw;
    div{
        display: flex;
        align-items: start;
        flex-direction: column;
        ul{
            padding-left: 1.3vw;
        }
    }
`

export const Title = styled.h1`
    display: inline;
    font-size: 45px;
    margin: 0;
    margin-bottom: 3vh;
    border-bottom: 1px solid Black;
    font-family: 'Black Han Sans', sans-serif;
`

export const Field = styled.div`
    background-color: white;
    box-shadow: 0.5vh 0.5vh 0.5vh 0.5vh rgba(0, 0, 0, 0.1);
    border-radius: 0.5vw;
    padding: 3vh 2vw;
    margin-bottom: 5vh;
    h2{
        margin-top: 0px;
        padding-bottom: 1vh;
        border-bottom: 2px solid #eee;
        font-size: 4vh;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        img{
            height: 10vh;
            margin-right: 20px;
        }
    }
`

export const CommentDiv = styled.div`
    background-color: #111;
    padding: 10vh;
    h1{
        color: white;
        font-size: 50px;
        margin: 0;
        margin-bottom: 30px;
    }
`

export const CommentInputs = styled.div`
    height: 45px;
    display: flex;
    input{
        height: 45px;
        background-color: rgba(0,0,0,0);
        border: 2px solid white;
        width: 300px;
        font-size: 17px;
        padding: 0px 15px;
        color: white;
        margin-right: 10px;
        box-sizing: border-box;
    }
    button{
        height: 45px;
        background-color: white;
        width: 100px;
        border-radius: 3px;
        font-weight: bold;
    }
`

export const Comments = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Comment = styled.div`
    p{
        border-bottom: 2px solid white;
    }
    span{

    }
`