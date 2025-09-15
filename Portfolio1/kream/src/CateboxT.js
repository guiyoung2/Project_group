import { Container, Row } from "react-bootstrap";

function MainCate() {
  let MainCate1 = [
    "퀴즈 오픈 예정",
    "남성 추천",
    "여성 추천",
    "4월 가입 이벤트",
    "인기 브랜드",
  ];
  let MainCate2 = [
    "정가 아래",
    "인기 럭셔리",
    "Y2K 바이브",
    "셀럽픽",
    "무조건 이벤트",
  ];

  return (
    <Container>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {MainCate1.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/Maincate" +
                    (i + 1) +
                    ".webp"
                  }
                  key={i}
                  alt={"Maincate" + (i + 1)}
                />
                <p>{MainCate1[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {MainCate2.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/Maincate" +
                    (i + 6) +
                    ".webp"
                  }
                  key={i}
                  alt={"Maincate" + (i + 6)}
                />
                <p>{MainCate2[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}

function ManCate() {
  let ManCate = ["New", "인기 신발", "에센셜 아이템", "력셔리", "30만원 이하"];

  return (
    <Container>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {ManCate.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/Mancate" +
                    (i + 1) +
                    ".webp"
                  }
                  key={i}
                  alt={"Mancate" + (i + 1)}
                />
                <p>{ManCate[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
function WomanCate() {
  let WomanCate = [
    "20만원 이하",
    "력셔리",
    "인기 신발",
    "뷰티 & 향수",
    "셀럽픽",
  ];

  return (
    <Container>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {WomanCate.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/Womancate" +
                    (i + 1) +
                    ".webp"
                  }
                  key={i}
                  alt={"Womancate" + (i + 1)}
                />
                <p>{WomanCate[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
function BrandCate() {
  let BrandCate = [
    "모든 브랜드",
    "세일 아이템",
    "데일리백",
    "특별한 하의",
    "홈 스위트홈",
  ];

  return (
    <Container>
      <Row>
        <div className="cate-box col-md-12 list-row">
          {BrandCate.map((a, i) => {
            return (
              <div className="brand-list" key={i}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/Brandcate" +
                    (i + 1) +
                    ".webp"
                  }
                  key={i}
                  alt={"Brandcate" + (i + 1)}
                />
                <p>{BrandCate[i]}</p>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}

export { MainCate, ManCate, WomanCate, BrandCate };
