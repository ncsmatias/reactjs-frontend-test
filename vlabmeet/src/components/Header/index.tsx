import format  from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import '../Header/styles.css';

interface User {
  username: string;
  password: string;
}

export const Header = () => {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale:ptBR,
  })

  const user: User = JSON.parse(localStorage.getItem("user")|| '{}') 

  return(
    <>
     <header className="headerContainer">
       <img src='./image/logo.svg' alt='V-Lab - Telemedicina e Ultrassom'/>
       <p>Olá, {user.username}</p>
       <span>{currentDate}</span>
     </header>
    </>
  );
}