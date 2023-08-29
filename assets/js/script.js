console.log("O JS está linkado!!");

function verificarInputs() {
    let tutor = document.getElementById("input-nomeTutor").value;
    let pet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let imgLink = document.getElementById("input-imgLink").value;

    console.log({ tutor });
    console.log({ pet });
    console.log({ especie });
    console.log({ data });
    console.log({ imgLink });

    if (tutor == "" || pet == "" || especie == "" || data == "" || imgLink == "") {

        console.log("Os campos estão vazios!");
        envieMsg('Preencha todos os campos, por favor!', 'erro');
        return true;
    } else {
        console.log("Os dados não estão em branco.");
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

class Pet {
    constructor(tutor, pet, especie, imgLink, data) {
        this.tutor = tutor;
        this.pet = pet;
        this.especie = especie;
        this.imgLink = imgLink;
        this.data = data;
        this.aniversario = this.calculateAge(data);
    }

    calculateAge(aniversario) {
        //console.log("Data: ", aniversario);
        const newDate = new Date(aniversario);
        //console.log("Data: ", newDate);
        const yearDate = newDate.getFullYear();
        //console.log("Ano: ", yearDate);

        const todayDate = new Date();
        const nowDate = todayDate.getFullYear();

        const age = nowDate - yearDate;
        return age
    }
}


//const nomePet = new Pet("Nicolly", "Luna", "Gato Persa", "19-12-20", "img");
//console.log(nomePet);

function registrarPet() {
    let tutor = document.getElementById("input-nomeTutor").value;
    let pet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let imgLink = document.getElementById("input-imgLink").value;


    const nomePet = new Pet(tutor, pet, especie, imgLink, data);

    bibliotecaPets.addPet(nomePet);
    //console.log(Pet);
}

class ListaPets {
    constructor() {
        this.listaPets = [];
    }

    addPet(parametro) {
        if (verificarInputs()) {
            envieMsg('Preencha todos os campos, por favor!', 'erro');
        } else {
            this.listaPets.push(parametro);
            limparInputs();
            envieMsg('Cadastrado com sucesso!', 'sucesso');
            //console.log(this.listaPets);
        }
    }
}


function limparInputs() {
    console.log("Usei a função de limparInputs");

    document.getElementById("input-nomeTutor").value = "";
    document.getElementById("input-nomePet").value = "";
    document.getElementById("input-especie").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-imgLink").value = "";
}

const bibliotecaPets = new ListaPets();
//console.log(bibliotecaPets);

function renderizarConteudo() {

    /*const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';

    let array = bibliotecaPets.listaPets;
    console.log(array);

    array.forEach(nomePet => {
        const nomePetDiv = `
            <div class='nomePetDetalhe'>
                <h2>Tutor: ${nomePet.tutor}</h2>
                <p>Nome do Pet: R$${nomePet.pet}</p>
                <p>Espécie: ${nomePet.especie}</p>
                <p>Data de nascimento: ${dateinPTBR(nomePet.data)}</p>
                <p>Idade do pet: ${nomePet.age}</p>
                <img src="${nomePet.imgLink}" alt="${nomePet.tutor}">
            </div>
       `;
        listaHTML.innerHTML += nomePetDiv;
    });
} */

    let content = '';
    let array = bibliotecaPets.listaPets;

    array.forEach(nomePet => {
        content += `
    <div class='containerLista'>
                <h2>Tutor: ${nomePet.tutor}</h2>
                <p>Nome do Pet: ${nomePet.pet}</p>
                <p>Espécie: ${nomePet.especie}</p>
                <p>Data de nascimento: ${nomePet.data}</p>
                <p>Idade do pet: ${nomePet.aniversario}</p>
                <img src="${nomePet.imgLink}" alt="${nomePet.tutor}">
            </div>
            `
    });
    document.getElementById('containerLista').innerHTML = content;
}


function showList() {
    document.getElementById("input-container").classList.remove("hidden")
    document.getElementById("div-vazia").classList.add("hidden")
}

function showForm() {
    renderizarConteudo();
    document.getElementById("input-container").classList.add("hidden")
    document.getElementById("div-vazia").classList.remove("hidden")
}