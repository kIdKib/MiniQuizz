const form = document.querySelector('.form-quizz')
let tab = document.querySelectorAll('.quetion-block')
let tableauResultats = []
const reponses =  [ "c", "a", "c", "b", "c", "c" ]
const emoji = ["👌","✨","👀","☠️","😨","👽"]
const titreResultat = document.querySelector('.resultat h2 ')
const noteResultat = document.querySelector('.note')
const aideResultat = document.querySelector('.aide')
const toutesLesQuestions = document.querySelectorAll('.quetion-block')
let verifTab = []

//Enregistrement des reponses dans tableauResultats
form.addEventListener('submit', e => {
    e.preventDefault()
    for (let i = 1; i <= tab.length; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats)
    tableauResultats = []
})
//Comparaison avec les bonnes rèponses
function verifFunc(tabResultats) {
    for (let x = 0; x < tab.length; x++) {
        
        if (tableauResultats[x] === reponses[x]) {
            verifTab.push(true)
        }else{
            verifTab.push(false)
        }
    }
    echecCouleur(verifTab)
    afficherResultat(verifTab)
    verifTab = []
}

//Donne note
const afficherResultat = (tabCheck) => {
    const nbFautes = tabCheck.filter(po => po !== true).length

    switch (nbFautes) {
        case 0:
            titreResultat.innerText = "👽 T'es pas humain 👽"
            aideResultat.innerText = '✨ rejoins nous ✨'
            noteResultat.innerHTML = '6/6 ☠️'
            break;  
        case 1:
            titreResultat.innerText = "N'abandonne pas ☠️"
            aideResultat.innerText = 'Aller champion plus que 1'
            noteResultat.innerHTML = '5/6'       
            break;
        case 2:
            titreResultat.innerText = "✨ N'abandonne pas✨"
            aideResultat.innerText = 'Aller champion'
            noteResultat.innerHTML = '4/6'
            break;
        case 3:
            titreResultat.innerText = 'Bravo 👌'
            aideResultat.innerText = "Tu as la moitée heun"
            noteResultat.innerHTML = '3/6'
            break;
        case 4:
            titreResultat.innerText = 'Presque la moitiée 👀'
            aideResultat.innerText = 'Aller tu peux le faire ✨'
            noteResultat.innerHTML = '2/6'
            break;
        case 5:
            titreResultat.innerText = "Au moins tu as fait l'effort d'avoir une bonne reponse 👀"
            aideResultat.innerText = 'Qui sais peut etre la prochaine fois tu aura 2'
            noteResultat.innerHTML = '1/6'
            break;
        case 6:
            titreResultat.innerText = "T'es serieux 😨"
            aideResultat.innerText = 'Retente ta chance'
            noteResultat.innerHTML = '0/6 ☠️'
            break;   
 
        default:
            "Désolé, c'est innatendue";
            break;
    }
}

echecCouleur = (poteaux) => {
    for (let j = 0; j < poteaux.length; j++) {
        if (poteaux[j] !== true) {
            toutesLesQuestions[j].style.background = '#ffb8b8'
            toutesLesQuestions[j].classList.add('echec')
            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec')
            }, 500);
         }else{
            toutesLesQuestions[j].style.background = 'lightgreen'
         }
        
    }
}

toutesLesQuestions.forEach( items => {
    items.addEventListener('click', () => {
        items.style.background = "whitesmoke"
    })
})