import "./App.css";
import { Carousel, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "./Footer";
import { SlideMain, SlideMan, SlideWoman, SlideBrand } from "./SlideData";
import { MainCate, ManCate, WomanCate, BrandCate } from "./CateboxT";
import { MainFB, ForMen, ForWomen, ForBrand } from "./CateboxB";
import { MainItems, ManItems, WomenItems, BrandItems } from "./MainItems";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dessert from "./dessert";
import Planning from "./Plannung";

function App() {
  const location = useLocation();
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="white" variant="dark" className="nav-bar sticky-top">
        <Container className="justify-content-end tnb">
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/login">고객센터</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">관심상품</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">로그인</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

        <Container className="header-top">
          <Navbar.Brand href="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
          </Navbar.Brand>

          <Nav
            variant="tabs"
            activeKey={location.pathname}
            className="header-tab"
          >
            <Nav.Item>
              <Nav.Link href="/" eventKey="/">
                HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//service-style" eventKey="/service-style">
                STYLE
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//service-shop" eventKey="/service-shop">
                SHOP
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//login" eventKey="my">
                MY
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//service" eventKey="search" className="search">
                SEARCH
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <Container className="cate">
          <Nav variant="tabs" activeKey={location.pathname}>
            <Nav.Item>
              <Nav.Link href="//dessert" eventKey="/dessert">
                <span className="music-txt">디저트 선물</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" eventKey="/">
                추천
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//?p=/man" eventKey="/man">
                남성
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//woman" eventKey="/woman">
                여성
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//brand" eventKey="/brand">
                브랜드
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="//planning" eventKey="/planning">
                기획전
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SlideMain></SlideMain>
              <MainCate></MainCate>
              <MainItems></MainItems>
              <MainFB></MainFB>
            </>
          }
        ></Route>
        <Route
          path="/dessert"
          element={
            <>
              <Dessert></Dessert>
            </>
          }
        ></Route>
        <Route
          path="/man"
          element={
            <>
              <SlideMan></SlideMan>
              <ManCate></ManCate>
              <ManItems></ManItems>
              <ForMen></ForMen>
            </>
          }
        ></Route>
        <Route
          path="/woman"
          element={
            <>
              <SlideWoman></SlideWoman>
              <WomanCate></WomanCate>
              <WomenItems></WomenItems>
              <ForWomen></ForWomen>
            </>
          }
        ></Route>
        <Route
          path="/brand"
          element={
            <>
              <SlideBrand></SlideBrand>
              <BrandCate></BrandCate>
              <BrandItems></BrandItems>
              <ForBrand></ForBrand>
            </>
          }
        ></Route>
        <Route path="/planning" element={<Planning></Planning>}></Route>
        <Route
          path="/login"
          element={
            <div className="login-area">
              <div className="login-wrap">
                <h2>로그인 로고</h2>
                <div className="email-box">
                  <h3>이메일 주소</h3>
                  <input
                    type="email"
                    placeholder="예) kream@kream.co.kr"
                    autocomplete="off"
                    class="input_txt"
                  ></input>
                </div>
                <div className="password-box">
                  <h3>비밀번호</h3>
                  <input
                    type="password"
                    placeholder=""
                    autocomplete="off"
                    class="input_txt"
                  ></input>
                </div>
                <div className="login-btn-box">
                  <button type="button" className="login-btn">
                    로그인
                  </button>
                </div>
                <ul className="login-search">
                  <li>이메일 가입</li>
                  <li>이메일 찾기</li>
                  <li>비밀번호 찾기</li>
                </ul>
                <div className="another-login">
                  <button type="button" className="naver-login">
                    <span className="naver-logo">&nbsp;</span>네이버로 로그인
                  </button>
                  <button type="button" className="apple-login">
                    <span className="apple-logo">&nbsp;</span>Apple로 로그인
                  </button>
                </div>
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/service"
          element={
            <>
              <div className="service-page">서비스 준비중입니다!</div>
            </>
          }
        ></Route>
        <Route
          path="/service-style"
          element={
            <>
              <div className="service-page">서비스 준비중입니다!</div>
            </>
          }
        ></Route>
        <Route
          path="/service-shop"
          element={
            <>
              <div className="service-page">서비스 준비중입니다!</div>
            </>
          }
        ></Route>
        <Route
          path="*"
          element={<div className="error-page">잘못된 페이지 입니다!</div>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
