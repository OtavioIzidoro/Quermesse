import { dataFestas } from "../Data/festas";
import {
  FundoCards,
  CardsEvents,
  TitleCard,
  ImageDivulga,
  Local,
  Informacao,
} from "../Styles/cards";
import cardImg from "../assets/card.jpg";

import { AiFillEnvironment } from "react-icons/ai";

export default function Cards() {
  return (
    <FundoCards>
      {dataFestas.map((item) => (
        <>
          <CardsEvents>
          <ImageDivulga>
          <img className="teste"src={cardImg} alt="" />
          </ImageDivulga>
            <TitleCard> {item.nomeFesta} </TitleCard>
            <Informacao>
          <AiFillEnvironment className="IconLocal"/>
          <Local>{item.cidade}</Local>
          </Informacao>
          </CardsEvents>
        </>
      ))}
    </FundoCards>
  );
}
