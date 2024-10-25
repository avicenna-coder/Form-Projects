const studentArray = [
    {
        fullname: "Mojoyinola Ajibola",
        city: "London"
    },
    {
        fullname: "Ajibola Avicenna",
        city: "Oyo"
    },
    {
        fullname: "Mojoyinola Abiola",
        city: "Iseyin"
    }
]

localStorage.setItem("Deatils", JSON.stringify(studentArray))
const outcome = JSON.parse(localStorage.getItem("Deatils"))
console.log(outcome)