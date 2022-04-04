import * as S from '../styled/Header'
import $ from 'jquery' 
import { useEffect } from 'react'

const Header = () => {

    useEffect(()=>{

    })

    const scrollTo = (y) => {
    
    }

    return(
        <S.Header>
            <S.HeaderDiv>
                <h1>LSW's Portofolio</h1>
                <div>
                    <b>About me</b>
                    <b>Skills</b>
                    <b>Archiving</b>
                    <b>Projects</b>
                </div>
            </S.HeaderDiv>
        </S.Header>
    )
}

export default Header