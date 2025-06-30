function inserirName() {
let nomeUsuario = prompt("Qual o seu nome?")
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario;
}

inserirName();

let linguagens = ["Javascript", "Python", "C"];
console.log(linguagens[0]);
console.log(linguagens[1]);
console.log(linguagens[2]);
const item = document.querySelector("#lista");
item.textContent = linguagens[0];