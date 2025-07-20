function abrirLogin() {
  document.getElementById("modalLogin").classList.remove("oculto");
  mostrarLogin();
}

function fecharLogin() {
  document.getElementById("modalLogin").classList.add("oculto");
}

function abrirMenu() {
  document.getElementById("modalMenu").classList.remove("oculto");
}

function fecharMenu() {
  document.getElementById("modalMenu").classList.add("oculto");
}

function mostrarCadastro() {
  document.getElementById("abasLogin").classList.add("oculto");
  document.getElementById("abaCadastro").classList.remove("oculto");
  document.getElementById("mensagemCadastro").textContent = "";
}

function mostrarLogin() {
  document.getElementById("abaCadastro").classList.add("oculto");
  document.getElementById("abasLogin").classList.remove("oculto");
  document.getElementById("mensagemErro").textContent = "";
  limparErros();
}

function cadastrarUsuario() {
  const novoUsuario = document.getElementById("novoUsuario").value.trim();
  const novaSenha = document.getElementById("novaSenha").value.trim();
  const msg = document.getElementById("mensagemCadastro");

  if (!novoUsuario || !novaSenha) {
    msg.textContent = "Preencha todos os campos.";
    return;
  }

  localStorage.setItem("usuarioSalvo", novoUsuario);
  localStorage.setItem("senhaSalva", novaSenha);

  msg.style.color = "green";
  msg.textContent = "Usuário cadastrado com sucesso!";
}

function fazerLogin() {
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");
  const mensagemErro = document.getElementById("mensagemErro");

  const usuarioValido = localStorage.getItem("usuarioSalvo");
  const senhaValida = localStorage.getItem("senhaSalva");

  limparErros();

  if (usuario.value === usuarioValido && senha.value === senhaValida) {
    mensagemErro.textContent = "";
    alert(`Bem-vindo, ${usuario.value}!`);
    fecharLogin();
  } else {
    mensagemErro.textContent = "Usuário ou senha incorretos.";

    if (usuario.value !== usuarioValido) {
      usuario.classList.add("erro");
    }
    if (senha.value !== senhaValida) {
      senha.classList.add("erro");
    }
  }
}

function limparErros() {
  document.getElementById("usuario").classList.remove("erro");
  document.getElementById("senha").classList.remove("erro");
}

function alternarTema() {
  document.body.classList.toggle("tema-escuro");
  localStorage.setItem("tema", document.body.classList.contains("tema-escuro") ? "escuro" : "claro");
}

function buscar() {
  const termo = prompt("O que deseja buscar?");
  if (termo) {
    alert(`Você buscou por: "${termo}". (simulação)`);
  }
}

window.onload = () => {
  if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("tema-escuro");
  }
};
