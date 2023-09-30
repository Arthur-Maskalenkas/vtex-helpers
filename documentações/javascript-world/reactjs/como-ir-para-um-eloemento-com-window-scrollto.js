const handleClickButton = (e: any, idToGo: string) => {
  e.preventDefault()
  const element = document.getElementsByClassName(idToGo)?.[0]

  // 60 é o valor a mais que precisa ser subtraído para o scroll parar no lugar certo

  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 60
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  }

}