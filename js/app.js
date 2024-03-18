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

//PARTE 2: GENERAZIONE DELLE CARD DA INSERIRE NELLA PAGINA
