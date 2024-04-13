import React from "react";
import styled from "styled-components";
import { CalendarBlank, Users, ChartBar, List } from "@phosphor-icons/react";
// Componente Barra de Navegação
const BottomNavigation: React.FC = () => {
  return (
    <BottomNavbar>
      <NavItem href="#">
        <IconWrapper>
          <CalendarBlank color="#464646" size={20} />
          <p>Consultas</p>
        </IconWrapper>
      </NavItem>
      <NavItem href="#">
        <IconWrapper>
          <Users color="#464646" size={20} />
          <p>Sobre</p>
        </IconWrapper>
      </NavItem>
      <NavItem href="#">
        <IconWrapper>
          <ChartBar color="#464646" size={20} />
          <p>Contato</p>
        </IconWrapper>
      </NavItem>
      <NavItem href="#">
        <IconWrapper>
          <List color="#464646" size={20} />
          <p>Menu</p>
        </IconWrapper>
      </NavItem>
    </BottomNavbar>
  );
};

// Estilos para a barra de navegação
const BottomNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// Estilos para os itens de navegação
const NavItem = styled.a`
  p {
    font-size: 1.2rem;
    color: #464646;
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    p {
      fill: #4894ff;
      color: #4894ff;
    }
    svg {
      fill: #4894ff;
      color: #4894ff;
    }
  }
`;
export default BottomNavigation;
