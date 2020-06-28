import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 120px;
  width: 580px;
  background-color: #393B39;
  border-style: solid;
  border-width: 0.5px;
  border-color: #A5D5AB;
  color: #D7E868;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: left;
  align-items: top;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  text-decoration: none;
  color: #E8EFC3;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
