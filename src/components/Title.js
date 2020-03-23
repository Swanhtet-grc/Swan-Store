import React, { Component } from "react";
import styled from "styled-components";

export default function Title({ name, title }) {
  return (
    <TitleContainer>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center ">
          <h1 className="text-capitalize font-weight-bold">
            {name} <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  width: 98%;
  }
`;
