import styled from "styled-components";

type refProps = {
    ref: any
}

export const My = styled.div`
    width: 100%;
    padding: 120px 0px;
    background-image: url("https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg");
    background-size: cover;
    backdrop-filter: grayscale(1);
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: white;
    h1{
        margin: 0;
        font-size: 50px;
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

export const AboutMe = styled.div`

`

export const Skills = styled.div`
    width: 100%;
    background-color: #F9D852;
    padding: 0px 20vh;
    padding-bottom: 15px;
    padding-top: 30px;
`

export const Projects = styled.div`
    width: 100%;
    padding: 0px 20vh;
`

export const ProjectCanvas = styled.canvas<refProps>`
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: #111;
`

export const Project = styled.div`
    background-color: white;
    border-radius: 10px;
`

export const ProjectTitle = styled.h2`

`

export const ProjectContents = styled.div`

`

export const Title = styled.h1`
    font-size: 45px;
    margin: 0;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Black Han Sans', sans-serif;
`

export const Field = styled.div`
    background-color: white;
    box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 30px;
    h2{
        margin-top: 0px;
        padding-bottom: 5px;
        border-bottom: 2px solid #eee;
        font-size: 28px;
    }
    div{
        display: flex;
        img{
            height: 80px;
            margin-right: 20px;
        }
    }
`

export const CommentsDiv = styled.div`

`

export const CommentInputs = styled.div`

`

export const Comments = styled.div`

`

export const Comment = styled.div`
    p{
        
    }
    span{

    }
`