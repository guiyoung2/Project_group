import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function MainItems() {
  let state = useSelector(state => state);
  // let dispatch = useDispatch();
  let [count, Setcount] = useState(4);
  let [visible, SetVisible] = useState("");

  const use_for = () => {
    const resulte = [];

    for (let i = 0; i < count; i++) {
      resulte.push(
        <div className="col-md-3 item-list" key={i}>
          <img
            src={`${process.env.PUBLIC_URL}` + "/img/item" + (i + 1) + ".webp"}
            alt={"item" + (i + 1)}
          />
          <div className="item-info">
            <p className="brand">{state.MainItem[i].brand}</p>
            <p className="item-name">{state.MainItem[i].name}</p>
            <p className="item-price">{state.MainItem[i].price}</p>
            <span className="buy-now">즉시 구매가</span>
          </div>
        </div>
      );
    }
    return resulte;
  };

  return (
    <Container>
      <Row className="dropped">
        <h2>Just Dropped</h2>
        <p>발매 상품</p>
      </Row>
      <Row className="dropped-items">{use_for()}</Row>
      <button
        className={"item-more " + visible}
        onClick={() => {
          if (count >= 8) {
            SetVisible("unvisible");
            Setcount(count + 4);
          } else {
            Setcount(count + 4);
          }
        }}
      >
        더보기
      </button>
    </Container>
  );
}
function ManItems() {
  let state = useSelector(state => state);
  let [count, Setcount] = useState(4);
  let [visible, SetVisible] = useState("");

  const use_for = () => {
    const resulte = [];

    for (let i = 0; i < count; i++) {
      resulte.push(
        <div className="col-md-3 item-list" key={i}>
          <img
            src={`${process.env.PUBLIC_URL}` + "/img/item" + (i + 13) + ".webp"}
            alt={"item" + (i + 13)}
          />
          <div className="item-info">
            <p className="brand">{state.ManItem[i].brand}</p>
            <p className="item-name">{state.ManItem[i].name}</p>
            <p className="item-price">{state.ManItem[i].price}</p>
            <span className="buy-now">즉시 구매가</span>
          </div>
        </div>
      );
    }
    return resulte;
  };

  return (
    <Container>
      <Row className="dropped">
        <h2>Just Dropped</h2>
        <p>발매 상품</p>
      </Row>
      <Row className="dropped-items">{use_for()}</Row>
      <button
        className={"item-more " + visible}
        onClick={() => {
          if (count >= 8) {
            SetVisible("unvisible");
            Setcount(count + 4);
          } else {
            Setcount(count + 4);
          }
        }}
      >
        더보기
      </button>
    </Container>
  );
}
function WomenItems() {
  let state = useSelector(state => state);
  let [count, Setcount] = useState(4);
  let [visible, SetVisible] = useState("");

  const use_for = () => {
    const resulte = [];

    for (let i = 0; i < count; i++) {
      resulte.push(
        <div className="col-md-3 item-list" key={i}>
          <img
            src={`${process.env.PUBLIC_URL}` + "/img/item" + (i + 25) + ".webp"}
            alt={"item" + (i + 25)}
          />
          <div className="item-info">
            <p className="brand">{state.WomenItem[i].brand}</p>
            <p className="item-name">{state.WomenItem[i].name}</p>
            <p className="item-price">{state.WomenItem[i].price}</p>
            <span className="buy-now">즉시 구매가</span>
          </div>
        </div>
      );
    }
    return resulte;
  };

  return (
    <Container>
      <Row className="dropped">
        <h2>Just Dropped</h2>
        <p>발매 상품</p>
      </Row>
      <Row className="dropped-items">{use_for()}</Row>
      <button
        className={"item-more " + visible}
        onClick={() => {
          if (count >= 8) {
            SetVisible("unvisible");
            Setcount(count + 4);
          } else {
            Setcount(count + 4);
          }
        }}
      >
        더보기
      </button>
    </Container>
  );
}
function BrandItems() {
  let state = useSelector(state => state);
  let [count, Setcount] = useState(4);
  let [visible, SetVisible] = useState("");

  const use_for = () => {
    const resulte = [];

    for (let i = 0; i < count; i++) {
      resulte.push(
        <div className="col-md-3 item-list" key={i}>
          <img
            src={`${process.env.PUBLIC_URL}` + "/img/item" + (i + 37) + ".webp"}
            alt={"item" + (i + 37)}
          />
          <div className="item-info">
            <p className="brand">{state.BrandItem[i].brand}</p>
            <p className="item-name">{state.BrandItem[i].name}</p>
            <p className="item-price">{state.BrandItem[i].price}</p>
            <span className="buy-now">즉시 구매가</span>
          </div>
        </div>
      );
    }
    return resulte;
  };

  return (
    <Container>
      <Row className="dropped">
        <h2>Just Dropped</h2>
        <p>발매 상품</p>
      </Row>
      <Row className="dropped-items">{use_for()}</Row>
      <button
        className={"item-more " + visible}
        onClick={() => {
          if (count >= 8) {
            SetVisible("unvisible");
            Setcount(count + 4);
          } else {
            Setcount(count + 4);
          }
        }}
      >
        더보기
      </button>
    </Container>
  );
}
{
  /* <Container className="dropped-area">
        <Row className="dropped">
          <h2>Just Dropped</h2>
          <p>발매 상품</p>
        </Row>
        <Row className="dropped-items">
          <div className="col-md-3 item-list">
            <img src="/img/item1.webp" />
            <div className="item-info">
              <p className="brand">Stussy</p>
              <p class="item-name">
                Stussy x Martine Rose Collage Pigment Dyed T-Shirt Black
              </p>
              <p className="item-price">131,000원</p>
              <span className="buy-now">즉시 구매가</span>
            </div>
          </div>
          <div className="col-md-3 item-list">
            <img src="/img/item2.webp" />
            <div className="item-info">
              <p className="brand">Nike</p>
              <p class="item-name">
                Nike x Peaceminusone Kwondo1 Black and White
              </p>
              <p className="item-price">238,000원</p>
              <span className="buy-now">즉시 구매가</span>
            </div>
          </div>
          <div className="col-md-3 item-list">
            <img src="/img/item3.webp" />
            <div className="item-info">
              <p className="brand">Nike</p>
              <p class="item-name">
                Nike x Peaceminusone LS T-Shirt Black (DR0098-010)
              </p>
              <p className="item-price">131,000원</p>
              <span className="buy-now">즉시 구매가</span>
            </div>
          </div>
          <div className="col-md-3 item-list">
            <img src="/img/item4.webp" />
            <div className="item-info">
              <p className="brand">Ader Error</p>
              <p class="item-name">Ader Error Log; baus Off White</p>
              <p className="item-price">499,000원</p>
              <span className="buy-now">즉시 구매가</span>
            </div>
          </div>
        </Row>
        <button className="item-more">더보기</button>
      </Container> */
}
export { MainItems, ManItems, WomenItems, BrandItems };
