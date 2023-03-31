import Dog from './Dog.js'
import dogsData from './data.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])


document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

document.getElementById("logo-icon").addEventListener('click', reset)



function render() {
    // document.getElementById('card').innerHTML = currentDog.getDogHtml()
    if (currentDogIndex > 2) {
            document.getElementById('profile-container').innerHTML = endMessage()
    } else {
        document.getElementById('card').innerHTML = currentDog.getDogHtml()
    }
}

function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function endMessage(){
    document.getElementById('actions').classList.add('hidden')
    return `
    <div class="end-text">
        <h1>No more single dogs in your area!<br><br>💔 </h1>
    </div>
    `
}

function yes() {
    currentDog.hasBeenSwiped = true
    currentDog.hasBeenLiked = true
    document.getElementById('badge-like').classList.remove('hidden')
    setTimeout(()=>{
        getNewDog()
    }, 2000)
}

function no() {
    currentDog.hasBeenSwiped = true
    document.getElementById('badge-nope').classList.remove('hidden')
    setTimeout(()=>{
        getNewDog()
    }, 2000)
}

function reset(){
    currentDogIndex = 0
    render()
}

render()