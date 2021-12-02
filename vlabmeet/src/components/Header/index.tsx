import { Container } from "./styles";
import Image from '../ImageHeader';
import format  from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';


const Header: React.FC = () => {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale:ptBR,
  })

  return (
    <>
      <Container>
        <Image src='./image/logo.svg' alt='V-Lab - Telemedicina e Ultrassom'/>
        <span>{currentDate}</span>
      </Container>
    </>
  )
}

export default Header;