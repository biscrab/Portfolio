import * as S from '../styled/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return(
        <S.Footer>
            <S.LinkDiv>
                <a href='https://github.com/biscrab'>
                    <FontAwesomeIcon icon="fa-brands fa-github"/>
                </a>
                <a href=''>
                    <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                </a>
                <a href=''>
                    <FontAwesomeIcon icon="fa-brands fa-facebook"/>
                </a>
            </S.LinkDiv>
            <span>© 2022. Lee Sang Woon. All rights reserved.</span>
        </S.Footer>
    )
}

export default Footer