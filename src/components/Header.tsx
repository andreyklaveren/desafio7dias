import styled from "styled-components";
import PerfilImg from "../assets/Perfil.jpeg";

export function Header() {
  return (
    <StyledHeader>
      <section className="user">
        <img className="userImage" src={PerfilImg} alt="" />
        <div className="userInfo">
          <h1>Olá, Andrey</h1>
          <p>Mais 4 consultas hoje</p>
        </div>
      </section>
      <div className="day">Hoje</div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding-top: 3.2rem;
  .user {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 2.2rem;
    .userImage {
      width: 5.7rem;
      border-radius: 100%;
    }
    .userInfo {
      h1 {
        color: #464646;
        font-weight: 700;
        font-size: 2.2rem;
      }
      p {
        color: #a3a3a3;
        font-weight: 400;
        font-size: 1.4rem;
      }
    }
  }
  .day {
    font-size: 1.6rem;
    font-weight: 700;
    color: #464646;
  }
`;
