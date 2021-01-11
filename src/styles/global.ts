import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, html {
    font-size: 16px !important;
    font-family: 'Helvetica Neue', Helvetica,Arial,sans-serif;
  }

  button {
    cursor: pointer;
  }
  ::-moz-selection {
    color:#fff;
    background-color:#B72C2A
  }
  ::selection {
    color:#fff;
    background-color:#B72C2A
  }
  ul {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  a {
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export interface DflexProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirecton?: string;
}
export const DFlexStyled = styled.div<DflexProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "start")};
  flex-direction: ${(props) =>
    props.flexDirecton ? props.flexDirecton : "row"};
`;

export const TextColorStyled = styled.span<{ color: string }>`
  color: ${(props) => (props.color ? props.color : "#000")};
`;

export const TooltipStyled = styled.span`
  cursor: pointer;

  &:after {
    position: absolute;
    top: -200px;
    left: 0;
    padding: 0.6rem;
    font-size: 0.84rem;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 0.4s;
    opacity: 0;
    visibility: hidden;
    content: attr(data-tooltip);
  }

  &:hover {
    &:after {
      top: -90px;
      color: #fff;
      opacity: 1;
      visibility: visible;
    }
  }
`;
