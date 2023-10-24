function toggleMode() {
  const html = document.documentElement
  if(html.classList.contains('light')) {   //ver se no html, na lista de classe, contém o light. Se tiver, vai remover e vice-versa
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
  /* outra forma de fazer este if e else é
    html.classlist.toggle('light) - ele faz sozinho aquilo de cima
  */
  const img = document.querySelector("#profile img")
   if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo usando óculos escuros e camisa preta com fundo azul.")
   } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo usando óculos de grau e camisa preta com fundo azul.")
   }
}