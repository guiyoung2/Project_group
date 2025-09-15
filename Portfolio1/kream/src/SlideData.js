import { useState } from "react";
import { Carousel } from "react-bootstrap";

function SlideMain() {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  let SlideMainwrap = [
    "slidemain1",
    "slidemain2",
    "slidemain3",
    "slidemain4",
    "slidemain5",
    "slidemain6",
    "slidemain7",
    "slidemain8",
    "slidemain9",
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {SlideMainwrap.map((a, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={
                `${process.env.PUBLIC_URL}` +
                "/img/" +
                SlideMainwrap[i] +
                ".webp"
              }
              alt={"slide" + (i + 1)}
              key={i}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
function SlideMan() {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  let SlideManwrap = [
    "slideman1",
    "slideman2",
    "slideman3",
    "slideman4",
    "slideman5",
    "slideman6",
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {SlideManwrap.map((a, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={
                `${process.env.PUBLIC_URL}` +
                "/img/" +
                SlideManwrap[i] +
                ".webp"
              }
              alt={"slide" + (i + 1)}
              key={i}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
function SlideWoman() {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  let SlideWomanwrap = [
    "slidewoman1",
    "slidewoman2",
    "slidewoman3",
    "slidewoman4",
    "slidewoman5",
    "slidewoman6",
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {SlideWomanwrap.map((a, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={
                `${process.env.PUBLIC_URL}` +
                "/img/" +
                SlideWomanwrap[i] +
                ".webp"
              }
              alt={"slide" + (i + 1)}
              key={i}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
function SlideBrand() {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  let SlideBrandwrap = [
    "slidebrand1",
    "slidebrand2",
    "slidebrand3",
    "slidebrand4",
    "slidebrand5",
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {SlideBrandwrap.map((a, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={
                `${process.env.PUBLIC_URL}` +
                "/img/" +
                SlideBrandwrap[i] +
                ".webp"
              }
              alt={"slide" + (i + 1)}
              key={i}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export { SlideMain, SlideMan, SlideWoman, SlideBrand };
