import styled from "styled-components";

export const MyDiv = styled.div`
    width: 100%;
    height: 400px;
    background-image: url("https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_960_720.jpg");
    background-size: cover;
    backdrop-filter: grayscale(1);
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
`

export const ProjectsDiv = styled.div`
    width: 100%;
`
export const ProjectDiv = styled.div`

`

export const ProjectContentsDiv = styled.div`

`

export const ProjectTitle = styled.div`

`

export const SkillsDiv = styled.div`
    width: 100%;
    background-color: #F9D852;
    padding: 30px;
`

export const Title = styled.h1`

`

export const Field = styled.div`
    background-color: white;
    box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 30px;
    h2{
        margin-top: 0px;
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