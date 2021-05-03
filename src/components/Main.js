import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Card from "./Card";
import meenoi1 from "../assets/meenoi.jpg";
import meenoi2 from "../assets/meenoi2.jpg";
import meenoi3 from "../assets/meenoi3.jpg";
import meenoi4 from "../assets/meenoi4.jpg";
import meenoi5 from "../assets/meenoi5.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 900px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bolder;
  letter-spacing: -5px;
  &:hover {
    cursor: pointer;
  }
`;

const Main = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [currentRef, setCurrentRef] = useState(0);
  const cardArray = [meenoi1, meenoi2, meenoi3, meenoi4, meenoi5];

  const ref = useRef(null);
  //animation:

  // const mouseEnterAnimation = (e) => {
  //   const tl = gsap.timeline();
  //   tl.to(ref.current.childNodes[0], {
  //     opacity: 1,
  //     display: "block",
  //     duration: 1,
  //   });
  // };

  // const mouseMoveAnimation = (e) => {
  //   const tl = gsap.timeline();
  //   tl.to(
  //     ref.current.childNodes[0],
  //     {
  //       left:
  //         e.pageX - ref.current.childNodes[0].getBoundingClientRect().width / 2,

  //       y:
  //         e.pageY -
  //         ref.current.childNodes[0].getBoundingClientRect().height / 2,
  //       duration: 1,
  //     },
  //     0
  //   );
  // };

  // useEffect(() => {});

  // useEffect(() => {
  //   console.log(ref.current.childNodes[0]);
  // }, []);

  // const mouseOutAnimation = () => {
  //   const tl = gsap.timeline();
  //   tl.to(ref.current.childNodes[0], {
  //     opacity: 0,
  //     display: "none",
  //     duration: 1,
  //   });
  // };

  //final touches!!!

  const handleMouseMove = () => {
    if (currentRef === cardArray.length - 1) {
      setCurrentRef(0);
    } else {
      setCurrentRef(currentRef + 1);
    }
  };

  const finalAnimation = (currentRef) => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[currentRef], {
      autoAlpha: 1,
      duration: 1,
      zIndex: currentRef,
    })
      .to(
        ref.current.childNodes[currentRef],
        {
          x: position.x,
          y: position.y,
          delay: currentRef * 0.1,
        },
        0
      )
      .to(ref.current.childNodes[currentRef], {
        autoAlpha: 0,
        delay: currentRef * 0.11,
      });
  };

  useEffect(() => {
    const set = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    window.addEventListener("mousemove", set);
    return () => {
      window.removeEventListener("mousemove", set);
    };
  }, []);

  useEffect(() => {
    finalAnimation(currentRef);
  }, [currentRef]);

  return (
    <>
      <Container onMouseMove={handleMouseMove}>
        <TextContainer
        // onMouseLeave={mouseOutAnimation}
        // onMouseEnter={(e) => mouseEnterAnimation(e)}
        // onMouseMove={(e) => mouseMoveAnimation(e)}
        >
          <p>Hover over me</p>
        </TextContainer>
        <div style={{ pointerEvents: "none" }} ref={ref}>
          {cardArray.map((item) => {
            return (
              <>
                <Card img={item}></Card>
              </>
            );
          })}
        </div>
      </Container>{" "}
      <Container></Container>
    </>
  );
};

export default Main;
