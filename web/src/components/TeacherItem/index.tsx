import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem(){
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/33402817?s=460&u=1228fb5c157c61146fe47662bb502ec4d6796dcf&v=4" alt="Jailsvs"/>
            <div>
              <strong>Jailson Volnei dos Santos</strong>
              <span>Arquitetura de Software</span>
            </div>  
          </header>
          <p>
            Aprenda como fazer gambiarra sem medo...<br/>
            SOLIDiarra!!!
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato  
            </button>  
          </footer>
        </article>
  )
}

export default TeacherItem;