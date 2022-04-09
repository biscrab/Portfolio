import type { NextPage } from 'next';
import * as S from '../styled/index';
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Comment from '../components/Comment'

const Home: NextPage = () => {

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
        <S.MyName>-이상운-</S.MyName>
        <h1>웹 개발자 포트폴리오</h1>
        <hr/>
        <button>
          더 알아 보기
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </S.My>
      <S.AboutMe>
        <S.Title>ABOUT ME</S.Title>
        <h2>{"프론트앤드 개발자를 꿈꾸는 저를 소개합니다."}</h2>
        <p>
          프론트를 목표로 끊임 없이 발전 중인 이상운 입니다. 
          컴퓨터 분야에 관심이 있어 소프트웨어 마이스터고에 진학 한 저는 1학년 때 부터 선배들께서 직접 만드시 웹사이트들을 보며
          웹사이트 개발에 관심이 생겼고 현재 프론트엔드를 주 전공으로 개발을 하고 있습니다.
          저의 꿈은 훌륭한 프론트엔드가 되는 것 입니다. 팀원들과 잘 협력하고 개발도 척척 해나 갈 수 있는 개발자가 되기위해 공부한 것들을 
          이 사이트에 정리 해놓았습니다.
        </p>
      </S.AboutMe>
      <Skills/>
      <Projects/>
      <S.Github>
        <S.Title>GITHUB</S.Title>
        <div>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA8CAMAAABreNUXAAAAclBMVEX///8AAAAbHyMWExKlpaUTEA/7+/vt7e2qqqpCQUFxcHAAAAr09PSHh4cQDQsFAAC6ubmbm5stLCxRUVEABg4RFhvGxsbX19cKBQEIDxUXGyCysrLPz89JSkx8fX5hYWI0Njji4uImJSVZWVobGhmRkZFJzXEPAAADk0lEQVRYhe2Z6XabMBCFGXaxiMUgQMZsNu//ih0JY0MMPW2w3J6ezo/ECKwPSXOvRomm/Y9fCbuOzcSMa/uTUMe8AIDv+/jzYjqfojYZ5PocOfjNR8gmVPo6KjCVU+0W9NeAVvE62yTbwOp6RtSCO5xj/kLFlqpTiW1xtHnqwxLNATpMs6xVh3VxbfOL5rgD5EJDqKXK11FIVwSDqwrr+CJ5Q/ExaRNWFzVL2lFeilX3Vcmpkb1vaSYWSZ41arCBVFCWbNw6+1JNgRKuKTvPrxu3PGklm1NxPE7SHIFt3CrkVOQnFVh76ntbLo0cMKgwjxp2hzsPGGoF3POUVttisSebPivgTmml70xlylUllvQGne9wB76nsfdw9+aZ72r7aLiTNxSbN3u5+L4Ki2b7djXtGLvJfiwcmLbazZtEzjMo2RnSqe9Nf57eKVWB1UJRa/AtkU5LcN8i3x7oSZwQ4OCtpzNo7qXeTs4dDpJDrBUZr+CasEnHNu78c12LlYiaQIeGUPp0DvMeHz5LeCXuLKOthFQSyCro703Oo5yu1BV2QcV5hwsdhvGjbebySk21IQNT62s6z1xVSTVFDNwfcY77Rwvci+j4J996Q9SQV6JwXnNzJQ65CocI0poL5BMnURN8vuBy/wPH0DuZdI/PpPsU9d+PwFHoCXthJ92NGsNJ+EWwqOqYaUrxuKbZLx/H63dkt2MAtSyLAhGZDE+EByD32xusLCxAcb/DuobIKOURG+uMGxX7kDuGbMFN6cqrAst6B9cFAy51EDgxjvQEQqqtfAfFXFLS7nFhJ2JG20gahVJuANZi9cxkrLWC0LIdTcEdZ649JiOm/DkZC8E9N10XHpJAgdP8zM4OwI2BGkYEKXIpaTyvuVkQO7j++NgF18G2LAMgopAeOZTWyMVfMrFGjVBwzxAZ2PGAXIOKZsQgV77eqQRXctMbNhw5tMxcHCP2g1zT7q8lhH0vuNE2VxRabVSSg1xcKIismbvIq6hlGIP1wnVEgWDRA9weO5RlIsJeuM98/sLtxQsf4mqlBd53uOwgt8Eez7/LdYTfLHT/jXBE3tyuF/pcXxRQGrMV10auxxJqTVwvjnHVj/35LkbdWFGJ+Yw6KgU3FgK6rf0qjQyR23TiTll+0LWKk1SvOI2l0p9x7gG5aNNyRFTsR4V8JBxQZ9hMxMXx8ieoGVu9vMPYyxZbs8X/dHrG/kCl8DfHDz+CM1e/ONDnAAAAAElFTkSuQmCC'/>
          <a href='https://github.com/biscrab'>https://github.com/biscrab</a>
          <span>소스코드 저장소</span>
          <ul>
            <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
            <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
          </ul>
        </div>
      </S.Github>
      <Comment lists={[]}/>
    </>
  )
}

/*
Home.getInitialProps = async function(ctx: any) {
  
}*/

export default Home
