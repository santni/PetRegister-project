console.log("O JS está linkado!!");

function verificarInputs() {
    let tutor = document.getElementById("input-nomeTutor").value;
    let pet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let imgLink = document.getElementById("input-imgLink").value;

    console.log(tutor);
    console.log(pet);
    console.log(especie);
    console.log(data);
    console.log(imgLink);

}

if (tutor == "" || pet == "" || especie == "" || data == "" || imgLink == "") {

    //console.log("Os campos estão vazios!");
    envieMsg('Preencha todos os campos, por favor!', 'erro');
    return true;
} else {
    //console.log("Os dados não estão em branco.");
    envieMsg('Os dados foram coletados', 'sucesso');
    return false;
}

function envieMsg(msg, tipo) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

Class Pets {
    constructor(tutor, pet, especie, data, imgLink) {
        
}
