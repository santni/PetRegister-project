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


if (tutor == "" || pet == "" || especie == "" || data == "" || imgLink == "") {

    //console.log("Os campos estão vazios!");
    envieMsg('Preencha todos os campos, por favor!', 'erro');
    return true;
} else {
    //console.log("Os dados não estão em branco.");
    envieMsg('Os dados foram coletados', 'sucesso');
    return false;
}
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

class Pets {
    constructor(tutor, pet, especie, imgLink) {
        this.tutor = tutor;
        this.pet = pet;
        this.especie = especie;
        this.imgLink = imgLink;
    }
}

function RegistrarPets() {
    let tutor = document.getElementById("input-nomeTutor").value;
    let pet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let imgLink = document.getElementById("input-imgLink").value;

    const nomePet = new NomePet(tutor, pet, especie, data, imgLink);

    listaPets.add(nomePet);
    console.log(listaPets);
}

class ListaPets {
    constructor(){
        this.listaPets = [];
    }

    addPet(parametro){
        if (verificarInputs()) {
            envieMsg('Preencha todos os campos, por favor!', 'erro');
        } else if (! isURLValida(parametro.imgLink)) {
            envieMsg("URL inválida!", "erro");
        } else {
            this.listaPets.push(parametro);
            limparInputs();
            envieMsg('Cadastrado com sucesso!', 'sucesso');
            console.log(this.listaPets);
        }
    }
}

const listaPets = new ListaPets();

function limparInputs() {
    let tutor = document.getElementById("input-nomeTutor").value = "";
    let pet = document.getElementById("input-nomePet").value = "";
    let especie = document.getElementById("input-especie").value = "";
    let data = document.getElementById("input-data").value = "";
    let imgLink = document.getElementById("input-imgLink").value = "";
}

function renderizarConteudo() {
    
    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';

    array.forEach(pet => {
        const petsDiv = `
        <div class='petDetalhe'>
            <p>Tutor: ${pet.Tutor}</p>
            <p>: ${pet.preco}</p>
            <p>Descrição: ${pet.descricao}</p>
            <p>Plataforma: ${pet.plataforma}</p>
            <img src="${pet.imgLink}" alt="${pet.titulo}">
        </div>
        `;

        listaHTML.innerHTML += jogosDiv;
    });

}
