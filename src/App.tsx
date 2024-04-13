import styled from "styled-components";
import { Header } from "./components/Header";
import { RemoteConsultCard } from "./components/RemoteConsultCard";
import { LocalConsultCard } from "./components/LocalConsultCard";
import BottomNavigation from "./components/BottomNavigation";
import { PlusCircle } from "@phosphor-icons/react";
export function App() {
  return (
    <StyledPage>
      <Header />
      <RemoteConsultCard />
      <RemoteConsultCard />
      <LocalConsultCard />
      <a href="">
        <PlusCircle color="#4894ff" size={56} weight="fill" />
      </a>
      <BottomNavigation />
    </StyledPage>
  );
}
const StyledPage = styled.div`
  padding-inline: 1.6rem;
`;
