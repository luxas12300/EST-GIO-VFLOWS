const form = document.querySelector("form");
const emailInput = document.querySelector("email");
const CEPinput = document.querySelector("cep");
const newProduct = document.querySelector("adicionarProduto");
const CNPJinput = document.querySelector("CNPJ");
const inscEstadual = document.querySelector("inscricaoEstadual");
const inscMunicipal = document.querySelector("inscricaoMunicipal");
const telefoneInput = document.querySelector("telefone");
const novoAnexo = document.querySelector("adicionarAnexo");

form.addEventListener("salvarFornecedor", (event) => {
    event.preventDefault();

    if (emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert ("Por favor, preencha o email corretamente.");
        return 0
    }
    //formatação de CEP//
    if(CEPinput.value === "" || !validateCEP(CEPinput.value)){
        alert ("Por favor, preencha o CEP corretamente.");
    }
    
    //formatação de Telefone//
    if(telefoneInput.value === "" || !validateCEP(CEPinput.value)){
        alert ("Por favor, preencha o CEP corretamente.");
    }

function isEmailValid(email){ 
    
    //formatação de email//
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z._-]+\.[a-zA-Z]{2,}$/
    );
        if(emailRegex.test(email)){
            return true;
        }
        return false;
}

function validateCEP(CEP){
    const CEPRegex = new RegExp(
        /^[0-9]$/
    );
}

function validatePhoneNumber(){

}

function clicar(){
    var divProduto = document.createElement("div");
    
}

function newAnexo(){
    var Anexo = novoAnexo.createElement("input");
}

document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("productModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("productModal").style.display = "none";
});

document.getElementById("saveProduct").addEventListener("click", function() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
});
})