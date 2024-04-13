import styled from "styled-components";
import PerfilImg from "../assets/Perfil.jpeg";
import ChatSvg from "../assets/chat.svg";
import PinSvg from "../assets/pin.svg";
import { Button } from "./Button";
export function LocalConsultCard() {
  return (
    <StyledLocalCard>
      <header className="remoteCardHeader">
        <section className="patient">
          <img className="patientImage" src={PerfilImg} alt="" />
          <div className="patientInfo">
            <h2>Andrey Klaveren</h2>
            <div className="consultType">
              <img src={PinSvg} alt="" />
              <p>Consulta no local</p>
            </div>
          </div>
        </section>
        <a className="chatImage" href="">
          <img src={ChatSvg} alt="" />
        </a>
      </header>
      <section className="infos">
        <p>14:00 - 15:00 (1 hora)</p>
        <div className="buttons">
          <Button textColor="#FFF" bgColor="#FFB050">
            Ver endereço
          </Button>
        </div>
      </section>
    </StyledLocalCard>
  );
}
const StyledLocalCard = styled.section`
  border: 1px solid #46464630;
  border-radius: 0.8rem;
  margin-top: 0.8rem;
  padding: 1.6rem;
  .remoteCardHeader {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid#46464630;
    .patient {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      .patientImage {
        width: 3.2rem;
        border-radius: 100%;
      }
      .patientInfo {
        h2 {
          color: #464646;
          font-weight: 700;
          font-size: 1.4rem;
          margin-bottom: 0.4rem;
        }
        .consultType {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          p {
            color: #a3a3a3;
            font-weight: 400;
            font-size: 1.2rem;
          }
        }
      }
    }
    .chatImage {
    }
  }
  .infos {
    margin-top: 0.9rem;

    p {
      margin-bottom: 0.9rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: #464646;
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      Button {
        background-color: #4894ff;
        width: 100%;
        border: none;
      }
    }
  }
`;
