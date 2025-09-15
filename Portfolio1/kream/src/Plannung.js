import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Planning() {
  let state = useSelector(state => state);

  return (
    <>
      <Container className="planning-area">
        <Row className="planning-wrap">
          {state.Planning.map((a, i) => {
            return (
              <div className="col-md-4 planning-item">
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/img/planning" +
                    (i + 1) +
                    ".webp"
                  }
                  alt={"planning" + (i + 1)}
                />
                <h4 className="plan-title">{state.Planning[i].title}</h4>
                <p className="plan-sub">{state.Planning[i].sub}</p>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Planning;
