
const temperaturField=document.querySelector(".temp")
const locationField=document.querySelector(".time_location p")
const dateField=document.querySelector(".time_location span")
const weatherField=document.querySelector(".condition p")
const searchField=document.querySelector(".search_area")
const form=document.querySelector("form")

form.addEventListener(`submit`, searchForLocation)
let target=`Bengaluru`

const fetchResults=async(targetLocation)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=53854311154946c3a6b63019230712&q=${targetLocation}&aqi=no`;
    const res=await fetch(url)
    const data=await res.json()
    console.log(data)

    let locationName=data.location.name
    let time=data.location.localtime
    let tempc=data.current.temp_c
    let condition=data.current.condition.text
    updateDetails(tempc, locationName, time, condition)
}
function updateDetails(tempc, locationName, time, condition){
    temperaturField.innerHTML=tempc+"&deg;c"
    locationField.innerHTML=locationName
    dateField.innerHTML=time
    weatherField.innerHTML=condition
}
function searchForLocation(e){
    e.preventDefault()
    target=searchField.value
    fetchResults(target)

}
fetchResults(target)


// API key:  53854311154946c3a6b63019230712