import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Dessert() {
  let state = useSelector(state => state);

  return (
    <>
      <div className="dessert-area">
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert1.gif`}
          alt="dessert1"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert2.jpeg`}
          alt="dessert2"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert3.gif`}
          alt="dessert3"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert4.jpeg`}
          alt="dessert4"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert5.gif`}
          alt="dessert5"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert6.jpeg`}
          alt="dessert6"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert7.gif`}
          alt="dessert7"
        />
        <img
          src={`${process.env.PUBLIC_URL}/img/dessert8.jpeg`}
          alt="dessert8"
        />
      </div>
      <Container className="dessert-items">
        <Row className="dropped-items dessert-item-area">
          {state.Dessert.map((a, i) => {
            return (
              <div className="col-md-3 item-list">
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/d_item" +
                    (i + 1) +
                    ".webp"
                  }
                  alt={"dessert-item" + (i + 1)}
                />
                <div className="item-info">
                  <p className="brand">{state.Dessert[i].brand}</p>
                  <p className="item-name">{state.Dessert[i].name}</p>
                  <p className="item-price">{state.Dessert[i].price}</p>
                  <span className="buy-now">구매가</span>
                </div>
              </div>
            );
          })}
        </Row>
        <Row className="dessert-info">
          <h4>주의사항</h4>
          <ul>
            <li>본 상품은 KREAM에서 발매되는 앱 전용 상품입니다.</li>
            <li>해당 상품은 카드사 할인 등 추가 할인 적용이 불가합니다.</li>
            <li>
              선착순 구매 시 재고 소진으로 구매 취소 및 조기 종료될 수 있습니다.
            </li>
            <li>
              상품은 매장에서 직접 픽업해야 하며, 픽업 시 구매 내역의 구매자
              명과 신분증 확인 후 수령 가능합니다. (구매 일자에만 수령 가능,
              이후 폐기되므로 구매 일정 확인 필수)
            </li>
            <li>
              판매자의 부득이한 사유로 인해 제품 제공이 불가한 경우 결품 안내 및
              자동 환불처리 될 수 있습니다.
            </li>
            <li>
              부당한 방법으로 구매한 고객의 경우 구매 취소 및 추후 이벤트 응모
              시 불이익을 받을 수도 있습니다.
            </li>
          </ul>
        </Row>
      </Container>
    </>
  );
}

export default Dessert;
