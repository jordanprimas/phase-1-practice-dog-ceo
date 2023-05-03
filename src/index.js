console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    getBreeds()
    getBreedNames()
})

let breeds = [] 

function getBreeds() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgURL)
    .then(res => res.json()) 
    .then(response => {
       // console.log("response", response.message)
    const dogImageContainer = document.getElementById("dog-image-container")
    response.message.forEach(url =>  {
        const img = document.createElement("img")
        img.src = url
        dogImageContainer.append(img)
    })
})
}

function getBreedNames() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(res => res.json())
    .then(res => {
        breeds = Object.keys(res.message)
       addBreedNameToDom(breeds)
       })
    }
    function addBreedNameToDom(breeds) {
        const ul = document.querySelector("#dog-breeds")
        breeds.map(breed => {
         const li = document.createElement("li")
         li.textContent = breed
         ul.append(li)
        })
    }

document.addEventListener("click", event => {
    if (event.target.matches("li")) {
        event.target.style.color = "red"
    }
}) 

document.addEventListener("change", event => {
    const ul = document.querySelector("#dog-breeds")
    if(event.target.matches("#breed-dropdown")) {
    ul.innerHTML = ""
    const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
    addBreedNameToDom(filteredBreeds)
    }
})