import React, { useEffect, useState } from 'react';
import style from './style.css'

interface cookiePopup {
  activateCookie: boolean,
  cookiesDaysExpiration: Number
  buttonText: string,
  showHideCloseBtn: boolean
}

const ModalCookie = (props: cookiePopup) => {
  const { activateCookie, cookiesDaysExpiration, buttonText } = props;
  const [hasCookie, setHasCookie] = useState('true')

  useEffect(() => {
    const cookie = getCookie('cookieConsents')
    if (cookie) {
      setHasCookie(cookie)
    } else {
      setHasCookie("")
    }
  }, [])

  function setCookie(cname: string, cvalue: string, exdays: Number) {
    const d = new Date();
    d.setTime(d.getTime() + (+exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

    const cookie = getCookie('cookieConsents')
    setHasCookie(cookie)
  }

  function getCookie(cname: string,) {
    const name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  return (
    <>
      {activateCookie ?
        !hasCookie ?
          <div className={style.cookieContainer}>
            <section>
              <div className={style.cookieTextContainer}>
                <span>Utilizamos cookies para melhorar nosso site e sua experiência de compra. Ao continuar navegando em nosso site você está se acordo com a nossa política quanto a utilização de cookies.</span>
              </div>
              <button className={style.cookieButton} onClick={() => setCookie("cookieConsents", 'true', cookiesDaysExpiration)}>{buttonText}</button>
            </section>
          </div> : ""
        : null}
    </>
  )
}

ModalCookie.schema = {
  title: 'Modal de Cookies',
  type: 'object',
  properties: {
    activateCookie: {
      title: 'Ativar modal de cookie?',
      type: 'boolean',
      default: false,
    },
    cookiesDaysExpiration: {
      title: 'Validade do Cookie',
      description: 'Número de dias válidos',
      type: 'number',
      default: 365,
    },
    buttonText: {
      title: 'Texto do Botão',
      description: 'Texto do Botão',
      type: 'string',
      default: 'ACEITAR E FECHAR',
    }
  }
}

export default ModalCookie;