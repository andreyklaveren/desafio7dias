import styled from "styled-components";
import { Header } from "./components/Header";
import { RemoteConsultCard } from "./components/RemoteConsultCard";
import { LocalConsultCard } from "./components/LocalConsultCard";
export function App() {
  return (
    <StyledPage>
      <Header />
      <RemoteConsultCard />
      <LocalConsultCard />
    </StyledPage>
  );
}
const StyledPage = styled.div`
  padding-inline: 1.6rem;
`;
