import { Container, Nav, Navbar, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row className="bor-bt">
            <div className="footer-top">
              <div className="ft-top-l">
                <div className="ft-top-ul1">
                  <strong>이용안내</strong>
                  <ul>
                    <li>
                      <Nav.Link>검수기준</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link>이용정책</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link>페널티 정책</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link>커뮤니티 가이드라인</Nav.Link>
                    </li>
                  </ul>
                </div>
                <div className="ft-top-ul2">
                  <strong>고객지원</strong>
                  <ul>
                    <li>
                      <Nav.Link>공지사항</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link>서비스 소개</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link>쇼룸 안내</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link>판매자 방문접수</Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ft-top-r">
                <strong>고객센터 1588-7813</strong>
                <p>운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)</p>
                <p>점심시간 평일 13:00 - 14:00</p>
                <p className="service-nt">
                  1:1 문의하기는 앱에서만 가능합니다.
                </p>
                <Nav.Link>자주 찾는 질문</Nav.Link>
              </div>
            </div>
          </Row>
          <Row className="cor-area">
            <div className="corporation">
              <ul className="term-list">
                <li>
                  <Nav.Link>회사소개</Nav.Link>
                </li>
                <li>
                  <Nav.Link>인재채용</Nav.Link>
                </li>
                <li>
                  <Nav.Link>제휴제안</Nav.Link>
                </li>
                <li>
                  <Nav.Link>이용약관</Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <span className="txt-bold">개인정보처리방침</span>
                  </Nav.Link>
                </li>
              </ul>
              <ul className="sns-list">
                <li>
                  <Nav.Link>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/insta.png`}
                      className="insta"
                      alt="insta"
                    />
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/facebook.png`}
                      className="facebook"
                      alt="facebook"
                    />
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/kakao.png`}
                      className="kakao"
                      alt="kakao_ch"
                    />
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </Row>
          <Row>
            <p className="txt-bold txt-l shin-title">
              신한은행 채무지급보장 안내
            </p>
            <div className="shinhan">
              <p>
                당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
                계약을 체결하여 안전거래를 보장하고 있습니다.
              </p>
              <Nav.Link>서비스가입 시설 확인</Nav.Link>
            </div>
          </Row>
          <Row>
            <div className="copyright-area">
              <p className="notice">
                크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
                상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
                의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
                거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는
                내용에 대한 책임은 크림(주)에 있습니다.
              </p>
              <p className="copyright">© KREAM Corp.</p>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
