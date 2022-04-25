// case sensitive = reconhece letras maiusculas e minusculas;
// por Tag: getElementByTagName()
// por Id: getElementById()
// por nome: getElementsByName()
// por class: getElementsByClassName()
// por seleto: querySelector()

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {        
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"

    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf (".") == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
    
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.innerHTML = "Texto válido"
        txtAssunto.style.color = "green"
        assuntoOk = true
    }
}

function enviar() {
 if (nomeOk == true && emailOk == true && assuntoOk == true){
     alert ("Formulário enviado com sucesso!")
 } else {
     alert ("É necessario preencher todos os campos para o envio...")
 }
}

