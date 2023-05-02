export type TFallback = {
  size?: string,
  format?: 'png' | 'jpg' | 'gif',
  backgroundColor?: string,
  textColor?: string,
  text?: string
};

const replaceColors = (str: string) => str.replace('#', '')

// Função gera uma dummy image caso o src passado seja vazio ou undefined
// https://dummyimage.com/600x400/000/fff.png&text=um+texto

// Exemplo de uso:
// <img
// src={generateSrcImage('', {
//   backgroundColor: '000',
//   textColor: '525252',
//   text: 'um texto',
//   format: 'png',
//   size: '500x400'
// })}
// />
// A seguinte imagem vai ser gerada: https://dummyimage.com/500x400/000/525252.png&text=um texto

export const generateSrcImage = (src?: string, fallback?: TFallback) => {
  if (!fallback) {
    return src
  }

  const { size = '300x300', format = 'png', backgroundColor = '000000', textColor = 'ffffff', text = '' } = fallback

  if (src === '' || !src) {
    return `https://dummyimage.com/${size}/${replaceColors(backgroundColor)}/${replaceColors(textColor)}.${format}&text=${text}`
  }

  return src
}
