let petList = []

let petNameField = document.querySelector('#petName')
let ownerNameField = document.querySelector('#ownerName')
let speciesField = document.querySelector('#species')
let breedField = document.querySelector('#breed')

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
}

// const test = new Pet('Alaska', 'Simone', 'Cane', 'Pastore Maremmano')

let petFormReference = document.querySelector('form')

petFormReference.addEventListener('submit', (e) => {
    e.preventDefault()

    let petCreated = new Pet(
        petNameField.value, 
        ownerNameField.value, 
        speciesField.value, 
        breedField.value
        )
        console.log('HO CREATO UN PET', petCreated)

        petList.push(petCreated)

        petNameField.value = ''
        ownerNameField.value = ''
        speciesField.value = ''
        breedField.value = ''

        petNameField.focus()
        // il focus serve per scrivere al primo imput field ovvero petName una volta inviato un form

})