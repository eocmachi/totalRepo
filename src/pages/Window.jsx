import React from "react";
import { Link } from "react-router-dom";

const DB = [
  {
    id: 5,
    title: "헤어질 결심",
    lng: "Decision to Leave",
    genre: "사랑/연애/로맨스 · 심리/미스터리/서스펜스/스릴러",
    director: "박찬욱",
    note: "박찬욱 감독의 11번째 장편영화 <헤어질 결심>은 형사 해준(박해일)과 남편을 타살한 혐의를 받는 용의자 서래(탕웨이)의 만남과 헤어짐을 따라간다. 불면증에 시달리는 형사는 매일 밤 용의자를 감시하며 자신도 모르게 서서히 물들어간다. 형사와 용의자의 관계를 사랑에 빠진 연인의 긴장감으로 예민하게 치환시킨 이 영화는 박찬욱 감독의 필모그래피에서도 유독 솔직하고 정서적이다. 박찬욱 감독 특유의 탐미적인 미장센, 과감하면서도 유려한 편집, 문학적인 대사와 꼼꼼한 상징들은 그야말로 탁월하다. 특히 수사극과 느와르의 형식 위로 포개어지는 감정의 얼룩들은 쉽사리 지워지지 않는다. ‘사랑’이라는 단어 한 번 입 밖에 꺼내지 않고 그 형상을 더듬어 포착한, 극한의 세공이 돋보이는 영화다. (송경원)",
    tit: "아시아영화의 창",
    nation: "Korea",
    year: "2022",
    time: "138min",
    format: "DCP",
  },
  {
    id: 18,
    title: "토라의 남편",
    lng: "Tora′s Husband",
    genre: "가족/아동 · 도시/도시화 · 인권/노동/사회",
    director: "리마 다스",
    note: "팬데믹으로 오랜 폐쇄(lockdown)를 견뎌낸 도시는 여전히 구급차와 통곡으로 소란하고, 생활고와 불안으로 사람들의 일상은 위태롭다. 식당과 베이커리를 경영하며 토목사업을 하는 잔은 인력과 자금 조달에 어려움을 겪고 있고, 종업원들은 매일 말썽을 일으킨다. 그는 어려운 와중에도 직원들의 고용을 유지하고 자선을 베푸는 선량한 사장님이며, 책임감 있는 아들, 자상한 아버지, 막역한 친구이자 강아지에게도 충실한 반려인이지만, 그 모든 정체성을 뒤로 하고 영화는 ‘토라의 남편’ 자리에 이 남자를 최종 소환한다. 코비드 팬데믹이 우리에게서 무엇을 빼앗아 갔고 무엇을 가져다주었는지, 익숙하면서도 낯설게 들여다보게 하는 작품으로, <노래하는 불불>(2018)과 <빌리지 록스타>(2017)로 주목받은 리마 다스가 연출했다. (최은)",
    tit: "아시아영화의 창",
    nation: "India",
    year: "2022",
    time: "140min",
    format: "DCP",
  },
  {
    id: 19,
    title: "세일즈 걸",
    lng: "The Sales Girl",
    genre: "성장영화/청춘 · 여성 · 코미디/유머/블랙코미디/풍자",
    director: "센게도르지 잔치브도르지",
    note: "사룰은 조용한 성격으로 그림 그리는 것을 좋아하지만 부모님의 권유로 적성에도 맞지 않는 원자력공학과를 다니고 있다. 어느 날 바나나에 미끄러져서 넘어지는 바람에 하던 일을 못 하게 된 친구가 대신 아르바이트를 해달라고 부탁한다. 그곳은 다름 아닌 섹스숍. 사룰과는 전혀 어울릴 것 같지 않은 곳이지만 친구는 자신의 비밀을 가장 잘 지켜줄 것 같은 사룰을 설득한다. 온갖 모양과 종류의 성인용품을 판매하고 가끔 배달을 하며 영업 종료 후에는 가게 주인 카티야에게 정산금과 고양이사료를 가지고 찾아가는 것이 일이다. 사룰은 시간이 지날수록 스스로 겪어보지 못하고 알지 못하는 많은 것들을 아는 듯한 카티야에게 흥미를 느낀다. 그리고 두 사람의 특별한 우정은 서로의 삶에 변화를 일으킨다. 예상치 못한 곳에 등장하는 귀여운 연출과 음악이 돋보인다. (박성호)",
    tit: "아시아영화의 창",
    nation: "Mongolia",
    year: "2021",
    time: "124min",
    format: "DCP",
  },
];
const Window = () => {
  return (
    <div className="window grid">
      <div className="container">
        {DB.map((it, idx) => (
          <Link to={"/detail/" + it.id}>
            <div
              className="card"
              onClick={() => {
                console.log(it.id);
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../images/program__0" +
                  it.id +
                  ".jpg"
                }
                alt=""
              />
              <div className="textbox">
                <span className="tit">{it.tit}</span>
                <span className="title">{it.title}</span>
                <span className="director">{it.director}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Window;
