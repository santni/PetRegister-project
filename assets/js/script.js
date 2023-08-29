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

class Pet {
    constructor(tutor, pet, especie, imgLink) {
        this.tutor = tutor;
        this.pet = pet;
        this.especie = especie;
        this.imgLink = imgLink;
        this.calculateAge = this.calculateAge();
    }

    calculateAge() {
        const today = new Date();
        const birthDate = new Date(this.birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}


function RegistrarPet() {
    let tutor = document.getElementById("input-nomeTutor").value;
    let pet = document.getElementById("input-nomePet").value;
    let especie = document.getElementById("input-especie").value;
    let data = document.getElementById("input-data").value;
    let imgLink = document.getElementById("input-imgLink").value;

    const nomePet = new NomePet(tutor, pet, especie, data, imgLink);

    bibliotecaPets.add(nomePet);
    console.log(bibliotecaPets);
    renderizarConteudo();
}

class ListaPets {
    constructor() {
        this.listaPets = [];
    }

    addPet(parametro) {
        if (verificarInputs()) {
            envieMsg('Preencha todos os campos, por favor!', 'erro');
        } else if (!isURLValida(parametro.imgLink)) {
            envieMsg("URL inválida!", "erro");
        } else {
            this.listaPets.push(parametro);
            limparInputs();
            envieMsg('Cadastrado com sucesso!', 'sucesso');
            console.log(this.listaPets);
        }
    }
}

const bibliotecaPets = new ListaPets();
console.log(bibliotecaPets);

function limparInputs() {
    console.log("Usei a funcao de limparInputs");

    document.getElementById("input-nomeTutor").value = "";
    document.getElementById("input-nomePet").value = "";
    document.getElementById("input-especie").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-imgLink").value = "";
}

function renderizarConteudo() {

    const listaHTML = document.getElementById('containerLista');
    listaHTML.innerHTML = '';

    let array = bibliotecaPets;

    console.log(array);

    array.forEach(nomePet => {

        const nomePetDiv = `
            <div class='nomePetDetalhe'>
                <h2>Tutor: ${nomePet.tutor}</h2>
                <p>Nome do Pet: R$${nomePet.pet}</p>
                <p>Espécie: ${nomePet.especie}</p>
                <p>Data de nascimento: ${nomePet.data}</p>
                <p>Idade do pet: ${nomePet.age}</p>
                <img src="${nomePet.imgLink}" alt="${nomePet.titulo}">
            </div>
       `;

        listaHTML.innerHTML += nomePetDiv;
    });
}

