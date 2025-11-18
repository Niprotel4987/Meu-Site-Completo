// Navegação SPA: mostrar/ocultar seções
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => {
    if (secao.id === id) {
      secao.classList.add('ativa');
      secao.classList.remove('oculta');
    } else {
      secao.classList.remove('ativa');
      secao.classList.add('oculta');
    }
  });
}

// Modal Menu
function abrirMenu() {
  const modal = document.getElementById("modalMenu");
  modal.classList.remove("oculto");
  modal.style.display = "flex";
}
function fecharMenu() {
  const modal = document.getElementById("modalMenu");
  modal.classList.add("oculto");
  modal.style.display = "none";
}

// Modal Login
function abrirLogin() {
  const modal = document.getElementById("modalLogin");
  modal.classList.remove("oculto");
  modal.style.display = "flex";
}
function fecharLogin() {
  const modal = document.getElementById("modalLogin");
  modal.classList.add("oculto");
  modal.style.display = "none";
}
function mostrarSenha() {
  const senha = document.getElementById('campoSenha');
  senha.type = senha.type === "password" ? "text" : "password";
}

// Tema / alto contraste
function alternarContraste() {
  document.body.classList.toggle("tema-escuro");
}

// Busca simulada
function buscarConteudo() {
  const termo = document.querySelector('#buscar input[type="search"]').value.trim().toLowerCase();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = termo
    ? `<p>Resultados para: <strong>${termo}</strong></p><ul><li>Exemplo de resultado 1</li><li>Exemplo de resultado 2</li></ul>`
    : `<p>Digite algo para buscar.</p>`;
}

// Surpresa
function mostrarSurpresa() {
  const frases = [
    "Você é incrível!",
    "Hoje é um ótimo dia para aprender algo novo.",
    "Continue criando, Telmo!",
    "Pequenos passos constroem grandes projetos.",
    "Ideias boas merecem ser testadas!"
  ];
  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("surpresa").textContent = aleatoria;
}

// Notificações simuladas
const notificacoes = [
  "Nova versão disponível!",
  "Você tem 3 mensagens novas.",
  "Backup concluído com sucesso."
];
const lista = document.getElementById("lista-notificacoes");
if (lista) {
  lista.innerHTML = notificacoes.map(n => `<li>${n}</li>`).join('');
}

// Ativar links do modalMenu via data-destino (evita erro com emojis)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#modalMenu a[data-destino]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const destino = link.getAttribute('data-destino');
      if (destino) {
        mostrarSecao(destino);
        fecharMenu();
      }
    });
  });

  // Fechar modais clicando fora do conteúdo
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.id === 'modalMenu' ? fecharMenu() : fecharLogin();
      }
    });
  });

  // Acessibilidade: Esc fecha modais
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      fecharMenu();
      fecharLogin();
    }
  });
});
