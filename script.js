// manaswi3005 pwd weatherapi
// apikey 
let apikey='e0a90b6f2e1c245f892d797c5b908e7d'
// url 
// "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

// getting/accessing all the html elements 
const locationVal=document.getElementById('loc')
const GetBtn=document.getElementById('btn')
const TempVal=document.getElementById('temp')
const DisVal=document.getElementById('weather_dis')
const PlaceVal=document.getElementById('loc_dis')

// GetBtn.addEventListener(('click',()=>{
//     if(locationVal.value=''){
//         alert('plz enter the location')
//     }
// }))
GetBtn.onclick=function(){
    if(locationVal.value ===''){
        alert('plzz enter a location')
    }else{
        loc=locationVal.value
        URL=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

        const{name}=data
        const{feels_like}=data.main
        const{description}=data.weather[0]
        TempVal.innerText=Math.round(feels_like-273)
        PlaceVal.innerText=name
        DisVal.innerText=description

    }).catch(()=>{
        alert('enter a valid data')
    })


    }
    
}
