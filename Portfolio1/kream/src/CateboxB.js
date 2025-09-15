import { Container, Row } from "react-bootstrap";

function MainFB() {
  let MainFB1 = ["아미", "스톤 아일랜드", "샤넬", "롤렉스", "우영미"];
  let MainFB2 = ["폴로", "보테가 베네타", "루이비통", "까르띠에", "애플"];
  let MainFB3 = ["오니츠카 타이거", "마르지엘라", "버버리", "디젤", "소니"];
  return (
    <Container>
      <Row className="brand-focus">
        <h2>Brand Focus</h2>
        <p>추천 브랜드</p>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {MainFB1.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` + "/img/bf" + (i + 1) + ".webp"
                  }
                  alt={"bf" + (i + 1)}
                />
                <p>{MainFB1[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {MainFB2.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` + "/img/bf" + (i + 6) + ".webp"
                  }
                  alt={"bf" + (i + 6)}
                />
                <p>{MainFB2[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {MainFB3.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` + "/img/bf" + (i + 11) + ".webp"
                  }
                  alt={"bf" + (i + 11)}
                />
                <p>{MainFB3[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
function ForMen() {
  let ForMen1 = ["우영미", "발렌시아가", "C.P 컴퍼니", "릭오웬스", "아더에러"];
  let ForMen2 = [
    "톰브라운",
    "포터",
    "피어오브갓",
    "보테가 베네타",
    "파타고니아",
  ];

  return (
    <Container>
      <Row className="brand-focus">
        <h2>Brand Focus</h2>
        <p>인기 남성 브랜드</p>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ForMen1.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/formen" +
                    (i + 1) +
                    ".webp"
                  }
                  alt={"formen" + (i + 1)}
                />
                <p>{ForMen1[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ForMen2.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/formen" +
                    (i + 6) +
                    ".webp"
                  }
                  alt={"formen" + (i + 6)}
                />
                <p>{ForMen2[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
function ForWomen() {
  let ForWomen1 = ["셀린느", "미우 미우", "마뗑킴", "자크뮈스", "코스"];
  let ForWomen2 = [
    "에르메스",
    "비비안 웨스트우드",
    "이자벨 마랑",
    "가니",
    "디올",
  ];

  return (
    <Container>
      <Row className="brand-focus">
        <h2>Brand Focus</h2>
        <p>인기 여성 브랜드</p>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ForWomen1.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/forwomen" +
                    (i + 1) +
                    ".webp"
                  }
                  alt={"forwomen" + (i + 1)}
                />
                <p>{ForWomen1[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ForWomen2.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/forwomen" +
                    (i + 6) +
                    ".webp"
                  }
                  alt={"forwomen" + (i + 6)}
                />
                <p>{ForWomen2[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}

function ForBrand() {
  let ForBrand1 = ["폴리테루", "에스티유", "산산기어", "이미스", "렉토"];
  let ForBrand2 = [
    "에이옵",
    "더뮤지엄비지터",
    "21 Market",
    "아트오브필드",
    "알렌느",
  ];
  let ForBrand3 = ["사파리스팟", "언더마이카", "킨", "니히", "리바이스"];

  return (
    <Container>
      <Row className="brand-focus">
        <h2>Brand Focus</h2>
        <p>추천 브랜드</p>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ForBrand1.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/forbrand" +
                    (i + 1) +
                    ".webp"
                  }
                  alt={"forbrand" + (i + 1)}
                />
                <p>{ForBrand1[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ForBrand2.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/forbrand" +
                    (i + 6) +
                    ".webp"
                  }
                  alt={"forbrand" + (i + 6)}
                />
                <p>{ForBrand2[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ForBrand3.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/forbrand" +
                    (i + 11) +
                    ".webp"
                  }
                  alt={"forbrand" + (i + 11)}
                />
                <p>{ForBrand3[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}

export { MainFB, ForMen, ForWomen, ForBrand };
