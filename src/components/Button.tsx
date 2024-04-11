import { ReactNode } from "react";
import styled from "styled-components";
interface PropsButton {
  children: ReactNode;
  textColor?: string;
  bgColor?: string;
}
export function Button({ children, bgColor, textColor }: PropsButton) {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<PropsButton>`
  padding: 1.3rem 1.6rem;
  border-radius: 0.8rem;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
  color: ${(props) => (props.textColor ? props.textColor : "#464646")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  border: 1px solid #ececec;
`;
