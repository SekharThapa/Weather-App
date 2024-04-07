const url = 'https://api.openweathermap.org/data/2.5/weather?q=butwal&appid=c55117f36f4b094edc6f9dc27457def1'


const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const searchbtn = document.querySelector(".search-btn")
const temperature = document.querySelector(".temp")
const cloudstype = document.querySelector(".cloud_type")
const weatherimage = document.querySelector(".weather_image")
 
searchbtn.addEventListener("click",()=>{
    let cityname = search.value;
    fetchweather(cityname)

})

function fetchweather(cityname){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c55117f36f4b094edc6f9dc27457def1`).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        temperature.innerText = `${Math.round(data.main.temp-275)}°`;   
        cloudstype.innerText = data.weather[0].description;
        weatherimage.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png
        `

    })

}
