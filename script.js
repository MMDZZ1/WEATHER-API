let query

let button = document.querySelector('button')
let span = document.querySelector('#ciudad')
let tempe = document.querySelector('#temperatura')
let icon = document.querySelector('#wicon')
let input = document.querySelector('input')
let res 
let descripcion = document.querySelector("#descripcion")
async function cargarCiudad() {
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=dcec7df661b1e6b0edab51d796b7339c&units=metric`
    try {
        let data = await fetch(urlApi)
        res = await data.json()
        valInput()
        span.textContent = `${res.name}, ${res.sys.country}`
        tempe.textContent = `${parseInt(res.main.temp)}°C`
        descripcion.textContent = res.weather[0].description
        let iconCode = res.weather[0].icon
        let iconUrl = `https://api.openweathermap.org/img/w/${iconCode}.png`
        icon.src = iconUrl
        document.querySelector(".container").style.visibility = "visible"
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
function borrarInput(input){
    input.value = ""
}


button.addEventListener('click', () => { 
    cargarCiudad()
    valValue()
    borrarInput(input)
})

function valValue(){
    if(input.value === ""){
        alert("Ingrese un texto")
    }
}

function valInput(){
    if (res.cod === "404") {
        alert("La ciudad ingresada no existe. Por favor, ingrese una ciudad válida.");
    }
}

function mostrar(e) {
    query = e
}