//PARTE 1: GENERAZIONE PROFILI DEI MEMBRI DEL TEAM.

//Array in cui saranno contenuti i profili dei membri del team.
const teamMembersArray = []; //Array

//Creazione tramite funzione dei profili dei membri del team.
//I profili vengono poi inseriti nell'array.
const wayneBarnett = generateProfile('Wayne Barnett', 'Founder & CEO', './img/wayne-barnett-founder-ceo.jpg');
teamMembersArray.push(wayneBarnett);
const angelaCaroll = generateProfile('Angela Caroll', 'Chief Editor', './img/angela-caroll-chief-editor.jpg');
teamMembersArray.push(angelaCaroll);
const walterGordon = generateProfile('Walter Gordon', 'Office Manager', './img/walter-gordon-office-manager.jpg');
teamMembersArray.push(walterGordon);
const angelaLopez = generateProfile('Angela Lopez', 'Social Media Manager', './img/angela-lopez-social-media-manager.jpg');
teamMembersArray.push(angelaLopez);
const scottEstrada = generateProfile('Scott Estrada', 'Developer', './img/scott-estrada-developer.jpg');
teamMembersArray.push(scottEstrada);
const barbaraRamos = generateProfile('Barbara Ramos', 'Graphic Designar', './img/barbara-ramos-graphic-designer.jpg');
teamMembersArray.push(barbaraRamos);

console.log(teamMembersArray)

//Funzione con il compito di generare i profili.
function generateProfile(memberName, memberRole, memberPic){
    const teamMember = {
        name: memberName, //String
        role: memberRole, //String
        pic: memberPic, //String
    }
    return teamMember; //Object
}

//PARTE 2: GENERAZIONE DELLE CARD DA INSERIRE NELLA PAGINA.
//Acquisire l'elemento del HTML in cui mettere le card.
const membersCardsElement = document.querySelector('.members_cards'); //Element || Null
//Creazione della variabile da inserire nel HTML.
let card = ''; //String
//Creazione del ciclo per acquisire i dati dall'array.
for(let i = 0; i < teamMembersArray.length; i++){
    const currentMember = teamMembersArray[i]; 
    //Creazione del codice della card.
    const cardCode = `
    <div class="colum mb-3">
        <div class="card">
            <img src="${currentMember.pic}">
            <div class="card-body">
                <h5 class="card-title name">${currentMember.name}</h5>
                <p class="card-text role">${currentMember.role}</p>
            </div>
            </div>
    </div>
    `;//String
    //Assegnazione della stringa di cardCode a card.
    card += cardCode; //String 
}

//Inclusione delle card nel HTML.
membersCardsElement.innerHTML = card;
console.log(card)


