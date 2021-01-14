import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 50px;
`;

export const HoursStyled = styled.div`
  margin-right: 10px;
  div {
    font-weight: bold;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &:nth-child(2n + 1) {
      color: #555;
      span {
        text-transform: uppercase;
        color: #a7a7a7;
        font-size: 0.6rem;
      }
    }
    &:nth-child(2n) {
      color: #a7a7a7;
      font-size: 0.7rem;
    }
  }
`;

export const EventsContainerStyled = styled.div`
  background-color: #efefef;
  padding: 0 10px;
  width: 600px;
  height: 720px;
  max-width: 100%;
  position: relative;
`;

// crio a variavel de largura que é 100% do bloco dividido pela quantidade de colunas
export const EventItemStyled = styled.div<{
  top: number;
  height: number;
  columns: number;
  column: number;
}>`
  background-color: #fff;
  border-left: 5px solid #b72c2a;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}px` : 0)};
  height: ${(props) => (props.height ? `${props.height}px` : "10px")};
  padding: 10px;
  --width: ${(props) => `calc(100% / ${props.columns})`};
  width: ${(props) =>
    props.columns === 1
      ? "calc(var(--width) - 20px)"
      : `calc(var(--width) - 10px)`};

  --left: ${(props) => props.column - 1};
  left: ${(props) =>
    props.column === 1 ? "10px" : `calc(var(--width) * var(--left))`};

  h4 {
    color: #b72c2a;
    font-size: 0.9rem;
    font-weight: 400;
  }
  p {
    font-size: 0.7rem;
  }
`;
