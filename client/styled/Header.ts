import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 9999;
    background-color: white;
    width: 100%;
    box-shadow: 0vw 0.5vh 1vw 0.5vh rgba(0, 0, 0, 0.2);
`

export const HeaderDiv = styled.div`
    max-width: 75vw;
    width: 75vw;
    height: 4.5rem;
    padding: 2vh 3vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    h1{
        font-size: 4vh;
        margin: 0;
        cursor: pointer;
        :hover{
            color: #f57c00;
        }
    }
    div{
        b{
            font-size: 2.5vh;
            padding: 0vh 1vw;
            cursor: pointer;
            :hover{
                color: #f57c00;
            }
        }
    }
`