import styled from "styled-components";

type refProps = {
    ref: any
}

export const Projects = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #111;
    padding: 10vh 15vw;
`

export const Canvas = styled.canvas<refProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: #111;
`

export const Project = styled.div`
    background-color: white;
    border-radius: 1vw;
    margin-bottom: 5vh;
`

export const Title = styled.h1`
    text-align: center;
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 300;
    font-size: 2.5vw;
`

export const Contents = styled.div`
    display: flex;
`

export const ImgDiv = styled.div`
    width: 50%;
    img{
        background-color: #eee;
        height: 600px;
    }
`

export const Info = styled.div`

`

export const Introduce = styled.div`

`

export const Description = styled.div`

`