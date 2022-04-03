import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 9999;
    background-color: white;
    width: 100%;
    box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.2);
`

export const HeaderDiv = styled.div`
    max-width: 71.25rem;
    width: 71.25rem;
    height: 4.5rem;
    padding: 1.25rem 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    h1{
        margin: 0;
        cursor: pointer;
        :hover{
            color: #f57c00;
        }
    }
    div{
        b{
            font-size: 18px;
            padding: 0px 10px;
            cursor: pointer;
            :hover{
                color: #f57c00;
            }
        }
    }
`