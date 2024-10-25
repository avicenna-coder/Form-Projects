const username = document.getElementById("username")
const form = document.getElementById("form")
const display = document.getElementById("display-ui")
let userArray = []


form.addEventListener("submit", function(event){
    event.preventDefault()
    let userName = username.value
    userArray.push(userName)
    form.reset()
    show()
})

function show(){
    userArray.forEach(function(item){
        const heading = document.createElement("h2")
        heading.textContent = `Welcome, ${item}`
        display.append(heading)
    })
}