const urlBase = "http://localhost:8000/futeboliga";
const modalLogin = document.getElementById("modalLogin");
const bsModalLogin = new bootstrap.Modal(
  modalLogin,
  (backdrop = "static")
); // Pode passar opções
const modalRegistar = document.getElementById("modalRegistar");
const bsModalRegistar = new bootstrap.Modal(
  modalRegistar,
  (backdrop = "static")
); // Pode passar opções

const btnModalLogin = document.getElementById("btnModalLogin");
const btnModalRegistar = document.getElementById("btnModalRegistar");
const btnLogoff = document.getElementById("btnLogoff");

modalLogin.addEventListener("shown.bs.modal", () => {
  document.getElementById("usernameLogin").focus();
});
btnModalLogin.addEventListener("click", () => {
  bsModalLogin.show();
});
btnModalRegistar.addEventListener("click", () => {
  bsModalRegistar.show();
});
btnLogoff.addEventListener("click", () => {
  localStorage.removeItem("token");
  document.getElementById("btnLogoff").style.display = "none";
  window.location.replace("index.html");
});

function validaRegisto() {
  let email = document.getElementById("usernameRegistar").value; 
  let senha = document.getElementById("senhaRegistar").value; 
  const statReg = document.getElementById("statusRegistar");
  if (senha.length < 4) {
    document.getElementById("passErroLogin").innerHTML =
      "A senha tem de ter ao menos 4 carateres";
    return;
  }
  fetch(`${urlBase}/registar`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: `email=${email}&password=${senha}`,
  })
    .then(async (response) => {
      if (!response.ok) {
        erro = response.statusText;
        statReg.innerHTML = response.statusText;
        throw new Error(erro);
      }
      result = await response.json();
      console.log(result.message);
      statReg.innerHTML = result.message;
    })
    .catch((error) => {
      document.getElementById(
        "statusRegistar"
      ).innerHTML = `Pedido falhado: ${error}`;
    });
}

function validaLogin() {
  let email = document.getElementById("usernameLogin").value; // email é validado pelo próprio browser
  let senha = document.getElementById("senhaLogin").value; // tem de ter uma senha
  if (senha.length < 4) {
    document.getElementById("passErroLogin").innerHTML =
      "A senha tem de ter ao menos 4 carateres";
    return;
  }
  const statLogin = document.getElementById("statusLogin");

  fetch(`${urlBase}/login`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST", // o login não vai criar nada, só ver se o user existe e a pass está correta
    body: `email=${email}&password=${senha}`,
  })
    .then(async (response) => {
      if (!response.ok) {
        erro = await(response.json())
        throw new Error(erro.msg);
      }
      result = await response.json();
      console.log(result.accessToken);
      const token = result.accessToken;
      localStorage.setItem("token", token);
      document.getElementById("statusLogin").innerHTML = "Sucesso!";
      document.getElementById("btnLoginClose").click();
    })
    .catch(async (error) => {
      statLogin.innerHTML = error
    });
}
async function getNoticias_Record() {
  const urlBase = "http://localhost:8000/futeboliga";
  const listaNoticias = document.getElementById("listaNoticias");
  const criterio = document.getElementById("searchkey").value;
  const varUrl = "http://localhost:8000/futeboliga/Record"
  console.log("Criterio: " + criterio);
  
  let Record= urlBase;
  const token = localStorage.token;
  console.log(token)


  console.log("URL: " + Record);
  const myInit = {
      method: "GET",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
      },
  };
  const myRequest = new Request(varUrl, myInit);

  await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
          listaNoticias.innerHTML = "Não posso mostrar notícias de momento.";
      } else {
        artigos = await response.json();
          console.log(artigos);
          let texto = "";
          if (Object.keys(artigos).length == 1) {
              artigo = artigos[0];
              texto += `
              <div>
                  <h4>${artigo.artigos}</h4>
              </div>`
          } else {
              for (const artigo of artigos){
                  texto += `
              <div>
                  <h4>${artigo.url}
              </div>`
              }
          }
          listaNoticias.innerHTML = texto;
      }
  })
}

async function getNoticias_ABola() {
  const urlBase = "http://localhost:8000/futeboliga";
  const listaNoticias = document.getElementById("listaNoticias");
  const criterio = document.getElementById("searchkey").value;
  const varUrl = "http://localhost:8000/futeboliga/ABola"
  console.log("Criterio: " + criterio);
  
  let ABola= urlBase;
  const token = localStorage.token;
  console.log(token)


  console.log("URL: " + ABola);
  const myInit = {
      method: "GET",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
      },
  };
  const myRequest = new Request(varUrl, myInit);

  await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
          listaNoticias.innerHTML = "Não posso mostrar notícias de momento.";
      } else {
        artigos = await response.json();
          console.log(artigos);
          let texto = "";
          if (Object.keys(artigos).length == 1) {
              artigo = artigos[0];
              texto += `
              <div>
                  <h4>${artigo.artigos}</h4>
              </div>`
          } else {
              for (const artigo of artigos){
                  texto += `
              <div>
                  <h4>${artigo.url}
              </div>`
              }
          }
          listaNoticias.innerHTML = texto;
      }
  })
}

async function getNoticias_OJogo() {
  const urlBase = "http://localhost:8000/futeboliga";
  const listaNoticias = document.getElementById("listaNoticias");
  const criterio = document.getElementById("searchkey").value;
  const varUrl = "http://localhost:8000/futeboliga/OJogo"
  console.log("Criterio: " + criterio);
  
  let OJogo= urlBase;
  const token = localStorage.token;
  console.log(token)


  console.log("URL: " + OJogo);
  const myInit = {
      method: "GET",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
      },
  };
  const myRequest = new Request(varUrl, myInit);

  await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
          listaNoticias.innerHTML = "Não posso mostrar notícias de momento.";
      } else {
        artigos = await response.json();
          console.log(artigos);
          let texto = "";
          if (Object.keys(artigos).length == 1) {
              artigo = artigos[0];
              texto += `
              <div>
                  <h4>${artigo.artigos}</h4>
              </div>`
          } else {
              for (const artigo of artigos){
                  texto += `
              <div>
                  <h4>${artigo.url}
              </div>`
              }
          }
          listaNoticias.innerHTML = texto;
      }
  })
}
  