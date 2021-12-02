import format  from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import '../Header/styles.css';

export const Header = () => {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale:ptBR,
  })

  return(
    <>
     <header className="headerContainer">
       <img src='./image/logo.svg' alt='V-Lab - Telemedicina e Ultrassom'/>
       <p>Olá, {localStorage.getItem('username')}</p>
       <span>{currentDate}</span>
     </header>
    </>
  );
}