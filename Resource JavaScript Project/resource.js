const formContainer = document.getElementById("form-container")
const form = document.getElementById("form")
const openForm = document.getElementById("open-form")
const website = document.getElementById("website")
const link = document.getElementById("link")
const description = document.getElementById("description")
const buttonForm = document.getElementById("button-form")
let inputArray = []
const websiteText = document.getElementById("webiste-text")
const descriptionText = document.getElementById("description-text")
const printLink = document.getElementById("link-print")
const displayForm = document.getElementById("display-form")
const websiteTitle = document.getElementById("website-title")
const linkText = document.getElementById("link-text")
const descriptionUI = document.getElementById("description-ui")
const trashIcon = document.getElementById("delete-icon") 
const mainContainer = document.getElementById("display-main-container")

const closeContainer = document.getElementById("close-container")


openForm.addEventListener("click", function(){
    formContainer.style.display = `flex`
})

closeContainer.addEventListener("click", function(){
    formContainer.style.display = `none`
})

function userInput(){
    let websiteName = website.value
    let linkName = link.value
    let descriptionName = description.value

    const inputObj = {
        userWebsite : websiteName,
        userlink : linkName,
        userdescription : descriptionName
    }

    inputArray.push(inputObj)

}

form.addEventListener("submit", function(event){
    event.preventDefault();
    userInput();

    // Clear the form content after each submission
    mainContainer.innerHTML = ``
    websiteTitle.innerHTML = ``;
    linkText.innerHTML = ``;
    descriptionUI.innerHTML = ``;
    trashIcon.innerHTML = ``;

    inputArray.forEach(function(item) {
        // Create a container for each resource
        let resourceContainer = document.createElement('div');
        resourceContainer.classList.add('display-form'); // Apply styles from display-form
        let resourceContainer2 = document.createElement('div')
        resourceContainer2.classList.add('description-ui')

        let heading1 = document.createElement("h1");
        heading1.textContent = item.userWebsite;

        let heading2 = document.createElement("h5");
        heading2.textContent = item.userlink;

        let heading3 = document.createElement("p");
        heading3.textContent = item.userdescription;

        const iconElement = document.createElement('i');
        iconElement.classList.add('fa-solid', 'fa-trash');
        iconElement.style.cursor = `pointer`;

        iconElement.addEventListener("click", function(){
            resourceContainer.remove()
        })

        // Append elements to the resource container
        resourceContainer.append(heading1, heading2, iconElement);
        resourceContainer.append(resourceContainer2)
        resourceContainer.append(heading3)
        resourceContainer.style.backgroundColor = `white`

        // Append the resource container to the main container
        mainContainer.append(resourceContainer);
    });

    form.reset();
});


buttonForm.addEventListener("click", function(){
    formContainer.style.display = `none`
})





