const search = document.getElementById('search');
const searchbar = document.getElementById('search-input');
const btn = document.getElementById('icon'); 
const temp = document.getElementById('data-temp');
const cityElement = document.getElementById('data-city');
const wind = document.getElementById('data-wind');

const apikey = "e926e5ff78a4ce35eed04c3be5b55870";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q="


async function checkWeather(city){

    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    if(response.ok){
        cityElement.innerHTML = data['name'];
        wind.innerHTML = data['wind']['speed']+"km/h";
      let  val = data['main']['temp'];
      let ans = (val -273);
      temp.innerHTML=Math.round(ans)+'°C';
    


        // temp.innerHTML = data['main']['temp']+'K';
    
    }
 else{
    console.error("error:",data.message);
    alert('invalid city name please enter valid city name')
 }
    
}

btn.addEventListener('click',()=>{
    checkWeather(searchbar.value);

  
});


checkWeather();




// main page



const yourWeather = document.getElementById('your-weather');
const searchWeather = document.getElementById('search-weather');



searchWeather.addEventListener('click',()=>{
    console.log('button clicked');
    
   yourWeather.classList.remove('your-weather');



})



