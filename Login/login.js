const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

btnSenha.addEventListener("click", function () {
    alert("Senha: " + campoSenha.value);
})

