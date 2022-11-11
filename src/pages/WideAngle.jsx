import React from "react";
import { Link } from "react-router-dom";

const DB = [
  {
    id: 2,
    title: "밤, 혹은 클라라의 죽음",
    lng: "The Night of the 12th",
    genre: "심리/미스터리/서스펜스/스릴러 · 여성",
    director: "도미닉 몰",
    note: "2016년 10월 12일 밤, 21세의 클라라 로이에가 온몸에 휘발유를 덮어쓰고 산채로 불태워졌다. 누가 이런 야만적인 짓을 저질렀나? 요한과 사법경찰은 클라라 측근을 중심으로 탐문에 나선다. 클라라가 사귀던 남자들 중 한 명이 저지른 보복 행위라는 데에는 의심의 여지가 없다. 수사에는 진척이 없는데 경찰은 설상가상으로 피해자의 개방적인 성격과 자유로운 연애관을 섣불리 판단하려 든다. 스릴러의 거장 도미닉 몰은 단순한 살인 사건을 넘어, 여성에 대한 폭력 전반을 주제로 치밀한 수사를 펼친다. 얼굴 없는 살인자는 누구인가? 여성의 몸을 자기 것으로 생각하는 남성, 또한 본인의 힘을 증명하기 위해 한 여자를 죽일 준비가 되어있는 사람들... 실화를 바탕으로 인간 영혼의 가장 어두운 면을 파헤치는 스릴러 <밤, 혹은 클라라의 죽음>은 많은 프랑스 비평가와 관객이 봉준호의 <살인의 추억>(2003)과 비교했던 작품이기도 하다. (서승희)",
    tit: "와이드 앵글",
    nation: "France",
    year: "2022",
    time: "114min",
    format: "DCP",
  },
  {
    id: 4,
    title: "알카라스의 여름",
    lng: "Alcarràs",
    genre: "가족/아동 · 인권/노동/사회",
    director: "카를라 시몬",
    note: "<프리다의 그해 여름>(2018)으로 베를린영화제의 장편데뷔상을 받았던 카를라 시몬에게 올해 황금곰상의 영예를 안겨준 작품이다. 3대가 함께 운영해온 복숭아 농장에 지주의 통보가 도착한다. 대가족은 여름을 끝으로 삶의 터전에서 떠나야 한다. 경제적 토대의 몰락과 미래의 불안은 평화롭던 카탈루냐의 알카라스 지역에 바람을 몰고 온다. 가족의 관계에 서서히 균열이 일어나고, 농업이 기반인 지역공동체는 위기를 맞는다. 그 와중에, 엇나가는 아이들을 보면서 어떻게든 마지막 수확을 완수하려는 아버지의 노력이 눈물겹다. 정의의 문화인 저항의 전통 아래 만들어진 작품이지만, 영화의 목소리는 나지막하다. 이것은 비단 알카라스의 문제만은 아니기에, 베를린영화제의 지지는 옳다. 지지에 동참하는 길은 멀리 있지 않다. 마음속에 소중한 불씨 하나를 피우는 것. (이용철)",
    tit: "와이드 앵글",
    nation: "Spain/Italy",
    year: "2022",
    time: "121min",
    format: "DCP",
  },

  {
    id: 11,
    title: "남쪽, 적막철도",
    lng: "20th Century Girl",
    genre: "도시/도시화 · 실화바탕",
    director: "샤오추첸",
    note: "기차 덕후라면 <남쪽, 적막철도>를 놓칠 수 없다. 총 길이 98.2킬로미터로 1992년 개통해, 대만 남부를 횡단하는 철도의 탄생부터 마지막 시기까지를 한편의 영화로 담았다. 이 철도와 관계한 구체적인 사람들을 직접 만나 그들의 입으로 기차의 역사를 다시 쓰는 데에 이 영화의 미덕이 있다. 기차 노선 설계자, 터널을 뚫고 철로를 낸 건설 노동자, 기관사와 승무원을 비롯한 철도 노동자들의 생생한 육성을 성실히 수집한다. 철도가 생기면서 달라진 주변 풍광을 증언하는 이들, 철로 주변에서 생계를 이어온 사람들, 기차 사진 전문가, 기차 연구자, 기차 부품 수집광의 이야기도 빼놓지 않는다. 남방 철도에 관한 전 방위적인 구술 아카이브로서 충분히 의미 있는 자료이자 기차로 본 대만의 자화상으로도 손색없다. (정지혜)",
    tit: "와이드 앵글",
    nation: "Taiwan",
    year: "2022",
    time: "113min",
    format: "DCP",
  },
  {
    id: 12,
    title: "따스한 오후",
    lng: "Southern Afternoon",
    genre: "가족/아동",
    director: "란 티안",
    note: "중국어를 읽지 못하는 소수민족 아빠는 큰딸이 연애편지를 받은 게 아닐까 의심한다. 어쩔 수 없이 작은딸에게 편지 내용을 읽어보라고 한다.",
    tit: "와이드 앵글",
    nation: "China",
    year: "2022",
    time: "15min",
    format: "DCP",
  },
  {
    id: 15,
    title: "더더더",
    lng: "Jooyoung in Wonderland",
    genre: "도시/도시화 · 코미디/유머/블랙코미디/풍자",
    director: "정해일",
    note: "연말 분위기로 들썩이는 퇴근길에 주영은 팀장의 전화를 받고 차를 돌린다. 회사로 돌아가 야근을 해야 하는 상황도 짜증 나는데, 우연찮은 해프닝으로 음주운전 단속에 걸려 도로에 발이 묶인다. 환장의 점입가경, 한밤의 난장이다. 개성 강한 캐릭터들이 빚어내는 상황 소동극.",
    tit: "와이드 앵글",
    nation: "Korea",
    year: "2022",
    time: "29min",
    format: "DCP",
  },
  {
    id: 16,
    title: "호수",
    lng: "Lake and I",
    genre: "성장영화/청춘 · 여성",
    director: "박소현",
    note: "정현은 친구 호수의 전화를 받고 호수네 대중목욕탕 청소를 돕고 욕조에 함께 몸을 담근다. 소소한 대화, 막연한 걱정, 막막한 미래. 두 친구의 하루가 물 흐르듯 흘러간다. 물을 모티프로 선명한 드라마 없이 자기의 톤과 무드를 만들어가는 재능이 예사롭지 않다.",
    tit: "와이드 앵글",
    nation: "Korea",
    year: "2022",
    time: "13min",
    format: "DCP",
  },
];
const WideAngle = () => {
  return (
    <div className="wideAngle grid">
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

export default WideAngle;
