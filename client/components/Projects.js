import * as S from '../styled/Project'
import { useEffect, useRef } from 'react';

const Projects = () => {

    const canvasRef = useRef(null);
/*
    useEffect(()=>{
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const canvasSize = canvas.width * canvas.height;
      const starsFraction = canvasSize / 2000;
    
      for(let i = 0; i < starsFraction; i++) {
        //Set up random elements
        let xPos = random(2, canvas.width - 2);
        let yPos = random(2, canvas.height - 2);
        let alpha = random(0.5, 1);
        let size = random(1, 2);
    
        //Add stars
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = alpha;
        ctx.fillRect(xPos, yPos, size, size);
      }
    },[])*/

    return(
      <S.Projects>
        <S.Canvas/>
        <S.Title style={{color:"white"}}>PROJECTS</S.Title>
        <S.Project>
          <S.Title>계산기</S.Title>
          <S.Contents>
            <S.ImgDiv>
              <img />

            </S.ImgDiv>
            <S.Info>
              <S.Introduce>

              </S.Introduce>
              <S.Description>

              </S.Description>
            </S.Info>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>ToDoList</S.Title>
          <S.Contents>
            <S.ImgDiv>
              <img />

            </S.ImgDiv>
            <S.Info>
              <S.Introduce>

              </S.Introduce>
              <S.Description>

              </S.Description>
            </S.Info>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>컬러칩 팔레트</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>DS마켓</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>ETLJ</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>유라이브</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>The Purge(server)</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project> 
        <S.Project>
          <S.Title>GitChart(server)</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>DCS</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>DSM-청원</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />
            </S.ImgDiv>
            <S.Info>
              <S.Introduce>
                </S.Introduce></S.Info> 
          </S.Contents>
          <S.Description>
          </S.Description>    
        </S.Project>
        <S.Project>
          <S.Title>DSM-위키</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
        <S.Project>
          <S.Title>포트폴리오</S.Title>
          <S.Contents>
          <S.ImgDiv>
            <img />

          </S.ImgDiv>
          </S.Contents>
        </S.Project>
      </S.Projects>
    )
}

export default Projects