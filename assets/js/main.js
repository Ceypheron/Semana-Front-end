import app from "./firebase/app.js"
import { subscribeToHellfireClub } from "./firebase/helfire-clube.js"

console.log(app)

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
//--------------------------------------------------------------
const btnSubscribe = document.getElementById('txtSubscribe')
btnSubscribe.addEventListener('click', ()=>{
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
        
    }
    //
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log('Inscrito: ${subscriptionId}')
    ////
})
