let buttonOpenModal = document.getElementById("button-open-modal")
let modalOverlayContainer = document.getElementById("modal-overlay-container")
let closeIcon = document.getElementById("close-icon")
let nameOfItem = document.getElementById("name-of-item")
let linkOfItem = document.getElementById("link-of-item")
let descriptionOfItem = document.getElementById("description-of-item")
let secondContainer = document.getElementById("second-container")
let buttonForForm = document.getElementById("buttom-for-form")


let form = document.getElementById("form")

// Open Modal Overlay
buttonOpenModal.addEventListener("click", openModalOverlay)
function openModalOverlay(){
    modalOverlayContainer.classList.remove("modal-overlay-container")
    modalOverlayContainer.classList.add("modal-overlay-visible")
}

// Close Modal Overlay
closeIcon.addEventListener("click", closeModalOverlay)
function closeModalOverlay(){
    modalOverlayContainer.classList.remove("modal-overlay-visible")
    modalOverlayContainer.classList.add("modal-overlay-container")
}

let itemsBox = []

form.addEventListener("submit", handleDataForm)
function handleDataForm(event){
    event.preventDefault()

    let nameITEM = nameOfItem.value
    let linkITEM = linkOfItem.value
    let descriptionITEM = descriptionOfItem.value

    let createdObj = {
        itemNAME : nameITEM,
        itemLINK : linkITEM,
        descriptITEM : descriptionITEM 
    }

    itemsBox.push(createdObj)
    localStorage.setItem("Items", JSON.stringify(itemsBox))
    getItemsBox()
    loopBox()
    closeFormSubmisson()
    form.reset()
}

// Get Item from Local Storage
function getItemsBox(){
    if(localStorage.getItem("items")){
        itemsBox = localStorage.getItem("items", JSON.parse(itemsBox))
    }
}

function loopBox(){
    itemsBox.forEach(function(item){
        let websiteNAME = item.itemNAME
        let websiteLINK = item.itemLINK
        let websiteDescript = item.descriptITEM

        // Create Element

        let websiteParagraph = document.createElement("div")
        websiteParagraph.classList.add("website-paragraph")

        let websiteNasaContainer = document.createElement("div")
        websiteNasaContainer.classList.add("website-nasa-container")

        let nasa = document.createElement("div")
        nasa.classList.add("nasa")

        let anchor = document.createElement("a")
        anchor.setAttribute("href", `${websiteLINK}`)
        anchor.setAttribute("target", "_blank")
        anchor.textContent = websiteNAME

        let iconContainer = document.createElement("div")
        iconContainer.classList.add("icon-container")

        let icon = document.createElement("i")
        icon.classList.add("fa-solid", "fa-trash")

        let paragraphContainer = document.createElement("div")
        paragraphContainer.classList.add("paragraph-container")

        let paragraph = document.createElement("p")
        paragraph.textContent = websiteDescript

        // Append
        
        paragraphContainer.append(paragraph)
        websiteNasaContainer.append(nasa, iconContainer)
        iconContainer.append(icon)
        nasa.append(anchor)
        websiteParagraph.append(websiteNasaContainer, paragraphContainer)

        secondContainer.append(websiteParagraph)

    })
}

// Close After Submission

buttonForForm.addEventListener("click", closeFormSubmisson)
function closeFormSubmisson(){
    if(modalOverlayContainer.classList.contains("modal-overlay-visible")){
        modalOverlayContainer.classList.remove("modal-overlay-visible")
        modalOverlayContainer.classList.add("modal-overlay-container")
    }
}




