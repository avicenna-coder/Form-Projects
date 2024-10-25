let addItemButton = document.getElementById("add-button")
let modalOverlay = document.getElementById("modal-overlay")
let nameOfItem = document.getElementById("name-of-item")
let linkToItem = document.getElementById("link-to-item")
let descriptionToItem = document.getElementById("description-to-item")
let closeIconOverlay = document.getElementById("close-icon")
let form = document.getElementById("form")
let itemSection = document.getElementById("items-section")

// Hide and Reveal Modal Overlay

addItemButton.addEventListener("click",revealModalOverlay)
function revealModalOverlay(event){
    modalOverlay.classList.remove("modal-overlay")
    modalOverlay.classList.add("modal-overlay-visible")
    nameOfItem.focus()
}

closeIconOverlay.addEventListener("click", closeIconOverlayModal)

function closeIconOverlayModal(event){
    if(modalOverlay.classList.contains("modal-overlay-visible")){
        modalOverlay.classList.remove("modal-overlay-visible")
        modalOverlay.classList.add("modal-overlay")
    }
}

let researchItem = []

// Collect and Handle Form Data
form.addEventListener("submit", handleFormData)
function handleFormData(event){
    event.preventDefault()
    // Input Data Collection
    let itemName = nameOfItem.value
    let itemLink = linkToItem.value
    let itemDescription = descriptionToItem.value

    // Form Validation

    // Create Object
    const aCreatedItem = {
        itemNAME: itemName,
        itemLINK : itemLink,
        itemDESCRIPTION: itemDescription
    }

    researchItem.push(aCreatedItem)
    localStorage.setItem("ItemsOfResearch", JSON.stringify(researchItem))

    form.reset()
    closeIconOverlayModal()
    getResearchItem()
}

// Get From Local Storage
function getResearchItem(){
    if(localStorage.getItem("ItemsOfResearch")){
       researchItem = JSON.parse(localStorage.getItem("ItemsOfResearch"))
       
    }printItemToUI()
}



// Print Data from Lstorage
function printItemToUI(){
    itemSection.innerHTML = ``
    researchItem.forEach(function(item){
        let nametoPRINT = item.itemNAME
        let linktoPRINT = item.itemLINK
        let descriptToPRINT = item.itemDESCRIPTION

        let researchDivItem = document.createElement("div")
        researchDivItem.classList.add("research-item")

        let titleDeleteContainerDiv = document.createElement("div")
        titleDeleteContainerDiv.classList.add("title-and-delete-container")

        let anchor = document.createElement("a")
        anchor.setAttribute("href", `${linktoPRINT}`)
        anchor.setAttribute("target", "_blank")
        anchor.textContent = nametoPRINT

        let iconDelete = document.createElement("i")
        iconDelete.classList.add("fa-solid", "fa-trash")
        iconDelete.setAttribute("onclick", `deleteItem('${linktoPRINT}')`)

        let descriptionItemDiv = document.createElement("div")
        descriptionItemDiv.classList.add("description-of-item")
        let descriptionParagraph = document.createElement("p")
        descriptionParagraph.textContent = descriptToPRINT

        // Append


        titleDeleteContainerDiv.append(anchor, iconDelete)

        descriptionItemDiv.append(descriptionParagraph)

        researchDivItem.append(titleDeleteContainerDiv, descriptionItemDiv)

        itemSection.append(researchDivItem)
    })
}

function deleteItem(researchLink){
    researchItem.forEach(function(item, index){
        if(item.itemLINK === researchLink){
            researchItem.splice(index, 1)
        }
    })
    localStorage.setItem("ItemsOfResearch", JSON.stringify(researchItem))
    getResearchItem()
    
}