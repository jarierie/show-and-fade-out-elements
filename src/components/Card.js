import React, { useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  top: 0;
  left: 0;
  width: 300px;
  height: 400px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  visibility: hidden;
  opacity: 0;
`;

const Card = (props) => {
  return (
    <>
      <CardContainer color={props.color}>
        <img src={props.img} alt=''></img>
      </CardContainer>
    </>
  );
};

export default Card;
