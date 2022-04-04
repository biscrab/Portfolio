import * as S from '../styled/index'

const Comment = ({lists}) => {
    return(
        <S.CommentDiv>
            <h1>COMMENT</h1>
            <S.CommentInputs>
              <input placeholder='name'/>
              <input placeholder='comment'/>
              <button>comment</button>
            </S.CommentInputs>
            <S.Comments>
                {lists.map(i => {
                    return(
                        <S.Comment>
                            <p></p>
                            <span></span>
                        </S.Comment>
                    )
                })}
            </S.Comments>
        </S.CommentDiv>
    )
}

export default Comment