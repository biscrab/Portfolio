import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import * as S from '../styled/index';

const Home: NextPage = () => {

  const canvasRef = useRef<HTMLHeadingElement>(null);

  interface ctxType{
    getContext: any
  }
/*
  useEffect(()=>{
    const canvas : HTMLHeadingElement | null = canvasRef.current;
    const ctx : any = canvas.getContext("2d");
    for(let i = 0; i < 100; i ++){

    }
  },[])*/

  return (
    <>
      <S.My>
        <h1>-이상운-</h1>
        <h1>웹 개발자 포트폴리오</h1>
        <hr/>
        <button>
          더 알아 보기
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </S.My>
      <S.AboutMe>

      </S.AboutMe>
      <S.Skills>
        <S.Title>SKILLS</S.Title>
        <S.Field>
          <h2>FrontEnd</h2>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png'/>
            <img src='https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5a42b0a2a9f3a188ee4fd57193ac32d45e18c9373ee9279ea14bcda5fbf831c1ba'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'/>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'/>
            <img src='https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg'/>
            <img src='https://t1.daumcdn.net/cfile/tistory/2541853857EA02BC16'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'/>
          </div>
        </S.Field>
        <S.Field>
          <h2>BackEnd</h2>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/330px-Node.js_logo.svg.png'/>
            <img src='https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png'/>
          </div>
        </S.Field>
        <S.Field>
          <h2>Mobile App</h2>
          <div>
            <img src='data:image/png;base64,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'/>
          </div>
        </S.Field>
        <S.Field>
          <h2>Deployment</h2>
          <div>
            <img src='data:image/png;base64,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'/>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAoCAMAAADzP5WaAAAAY1BMVEX///9nYqZkX6VcVqG7udVfWaOMibrR0ONhXKOQjb3Hxt37+/1+erKopsnY1+daVKB4c7Df3uzu7vWEgLbAv9mal8Hp6PH19fmzsdFWUJ6loshMRZpSS5yurM50b67k4+9taKk7V8zoAAADGElEQVRYheWXbZeyIBCG5S0m35DUENPs///KZ0BMa9Pt2bP2ZeecEhidS4abUaPoD9oQvzRp9sXWl1vxyizL98RWnV7xtJDsyD22q65uzwkf+KpLyN25p7ZtqzCisV1/iKstsDqMlAJU+yHuwAgEbs4IoWbJlTL+gcLwqtP/cK+UsDHlgZsw1m1FWLGCberymdtgxtPogUuJ+gE3pZsF4ImbNJw35vPcpX2Mmwxxk/XxVJg/w6VlfWMCABiVX7jGyP6+w43kWVtnC5Gf8hEh+7rt80fukOdYiXWej9OZGncuoUDxz/2seeLSwvo7Ig51sAycMTb6ZQ1Kla5BvYORfME9CdYhIlXhOVCoUeYzl4BQorhiS/AnLt4TUxaIyLCvCMWOZZQyTL++Opjj5gpHrMJxoWduBvSKh5Iy/ZCGiQvsVvuNjnUD2uf5po02EQeaulNpccZ5n0sKeBsV3ueByyFKbhTKAf0ldacFwFkRD1zh6kstw3LpF9xRV5q5gJLRox/PhetWInRx/OZDGPDnj4CS+hytcc2skXVu7rmxCG5DXQbv3BagGSMcqYg9QEetgDLa4C7sOy4Hci29ETfBOxcjh32QATglUVoeMSXJL3EbQF15A0EWXAw4jBEagN71iXC7M/o1Li35ZNEWF1rOiOi3uIvn3HfcSjxU1GWeQ8WoQVRhfSUjSm9wh+xtbiym3D1yW7+qc+jxvwZabHDPXf8uVysCoVzrJTdmvkC4BhEzAJ/mzYKbPHGBNW9yI9RVmp913BaX84JrsKiV8qx71FM7c7kggGX3QKHGa2p8q7APXKKaN7mV8oLGgm3jBTeSrk6iyolIFwl1ZQzDxZgldw1FdZgl966Kr1xlLyP3Ym/uyBUGEMymFcqRd/YQMiWJ8uO1V+nVXnzErFMd5uVove/ahDUKXAHTZ8MXbmSMmRpB93nFq3xsJ2ZR64aY8+m7Kpmv8mfoisf5/M016er+jNaKikfuLha486vBcC2K/lPcl7Yvt1l1qT25PVnzxD95W3/bkkJkL+14WV+BXwE3x5dW75nlP2b/APrWOUUDeUj+AAAAAElFTkSuQmCC'/>
          </div>
        </S.Field>
        <S.Field>
          <h2>Version Control</h2>
          <div>
            <img src='data:image/png;base64,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'/>
          </div>
        </S.Field>
        <S.Field>
          <h2>Certificate</h2>
          <div>

          </div>
        </S.Field>
      </S.Skills>
      <S.Projects>
        <S.Project>
          <S.ProjectTitle>계산기</S.ProjectTitle>
          <S.ProjectContents>

          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>ToDoList</S.ProjectTitle>
          <S.ProjectContents>

          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>컬러칩 팔레트</S.ProjectTitle>
          <S.ProjectContents>

          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>DS마켓</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>ETLJ</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>유라이브</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>The Purge(server)</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project> 
        <S.Project>
          <S.ProjectTitle>GitChart(server)</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>DCS</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>DSM청원</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project>
        <S.Project>
          <S.ProjectTitle>DSM위키</S.ProjectTitle>
          <S.ProjectContents>
            
          </S.ProjectContents>
        </S.Project>
        <S.ProjectCanvas ref={canvasRef}/>
      </S.Projects>
      <S.CommentsDiv>
        <S.CommentInputs>

        </S.CommentInputs>
        <S.Comments>

        </S.Comments>
      </S.CommentsDiv>
    </>
  )
}

Home.getInitialProps = async function(ctx: any) {
  
}

export default Home
