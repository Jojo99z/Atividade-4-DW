async function enviarRegisto() {
  const urlBase = "http://localhost:9090/futeboliga";
  const noticias = document.getElementById("noticias").value;



  if (news == ""){
    falhou.innerHTML = "Deve informar os conteudos do site noticias";
    return;
  }

  var myInit = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      noticias: `${noticias}`,
    }),
  };

  var myRequest = new Request(`${urlBase}`, myInit);

  await fetch(myRequest).then(async function (response) {
    if (!response.ok) {
      falhou.innerHTML = "Algo correu mal!";
    } else {
       resposta = await response.json();
       console.log(resposta.message);
       resultado.innerHTML = resposta.message;
    }
  });
}
