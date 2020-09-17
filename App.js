//********************************************LIVE HOST AT https://bamtaiwo9.github.io/   ***************************************
const searchbox=document.getElementById('search')
var img=document.getElementById('svg');
const date = document.getElementById('date')
const dayicon= document.getElementById('dayicon')
const temp=document.getElementById('degree')
const country = document.getElementById('country')
const locations = document.getElementById('loc')
const feel = document.getElementById('b1')
const desp = document.getElementById('b2')
const humidity = document.getElementById('b3')
var fored1 =document.getElementById('f1')
var fored2 =document.getElementById('f2')
var fored3 =document.getElementById('f3')
var fored4 =document.getElementById('f4')
var fored5 =document.getElementById('f5')
var foreic1 =document.getElementById('f11')
var foreic2 =document.getElementById('f22')
var foreic3 =document.getElementById('f32')
var foreic4 =document.getElementById('f42')
var foreic5 =document.getElementById('f52')
const foretemp1 =  document.getElementById('ft1')
const foretemp2 =  document.getElementById('ft2')
const foretemp3 =  document.getElementById('ft3')
const foretemp4 =  document.getElementById('ft4')
const foretemp5 =  document.getElementById('ft5')
const tol = document.getElementById('tol')
const plusicon = document.getElementById('plus')
const info = document.getElementById('info')

var check;

plusicon.addEventListener('click', function () {
    //searchbox.classList.remove('d-none')
    window.location.reload()
})
searchbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      if(searchbox.value.length === 0){ alert(' City name must be entered')
          return console.log('empty inbox') ;}
      console.log(searchbox.value)
      const citySearched=searchbox.value.trim()
      document.getElementById('search').value ='';
      tol.classList.remove('d-none')
      info.classList.remove('d-none')
      

      requestCity(citySearched)
      .then((data) => {
         updateWeatherApp2(data); 
          //one(data)
      })
      .catch((error) => { console.log(error) });

      requestCurrent(citySearched)
      .then((data) => {
         
         updateWeatherApp(data); 
            //two(data)
      })
      .catch((error) => { console.log(error) }); 
      
    }
       
})

  /*const ones=one(pie);const twos=two(pies)
function one(pie){return const p = pie};
function two(pies){return const pi=pies };*/

updateWeatherApp = (one) => {
   
    console.log(one)
    const desp= one.sys.country
    const imageName = one.weather[0].icon;
    const timeNow = one.main.temp.toFixed(1)
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    img.src=iconSrc
    dayicon.src=iconSrc
    temp.innerHTML  =`<span style='color:#dada15'>${timeNow}&deg;C</span>`
    country.textContent = one.sys.country
    locations.innerHTML= ` <span><img src="/assets/iconfinder-icon.svg" alt="" srcset=""></span>${one.name}`
    feel.innerHTML = `<span style='color:#dada15'>${one.main.feels_like}&deg;C</span>` 
    desp.innerHTML =  one.weather[0].description //`<span>${one.weather[0].description}%;C</span>`
    document.getElementById('b2').innerHTML= one.weather[0].description
    humidity.innerText = one.main.humidity + '%'
     
    //desp.style.display = 'block'
    console.log(desp, one.dt)
    console.log(one.weather[0].description); 
    dtestring()

}
updateWeatherApp2 = (one) => {
   
    console.log(one)
    const des= one.city.id
    fored1.innerHTML = new Date (one.list[7].dt *1000).toDateString().split(' ').splice(0,1).join(' ')
    fored2.innerHTML = new Date ((one.list[9].dt +86400) *1000).toDateString().split(' ').splice(0,1).join(' ')
    fored3.innerHTML = new Date ((one.list[9].dt +(2*86400)) *1000).toDateString().split(' ').splice(0,1).join(' ')
    fored4.innerHTML = new Date ((one.list[9].dt +(3*86400)) *1000).toDateString().split(' ').splice(0,1).join(' ')
    fored5.innerHTML = new Date ((one.list[9].dt +(4*86400)) *1000).toDateString().split(' ').splice(0,1).join(' ')
    //icons
    let imgName1 = one.list[7].weather[0].icon;  let tempName1 = one.list[7].main.temp.toFixed(1) ;
    let imgName2 = one.list[16].weather[0].icon ; let tempName2 = one.list[16].main.temp.toFixed(1);
    let imgName3 = one.list[24].weather[0].icon;  let tempName3 = one.list[24].main.temp.toFixed(1);
    let imgName4 = one.list[32].weather[0].icon ; let tempName4 = one.list[32].main.temp.toFixed(1); 
    let imgName5 = one.list[39].weather[0].icon ; let tempName5 = one.list[39].main.temp.toFixed(1);
    
    foreic1.src =`http://openweathermap.org/img/wn/${imgName1}@2x.png`
    foreic2.src =`http://openweathermap.org/img/wn/${imgName2}@2x.png`
    foreic3.src =`http://openweathermap.org/img/wn/${imgName3}@2x.png`
    foreic4.src =`http://openweathermap.org/img/wn/${imgName4}@2x.png`
    foreic5.src =`http://openweathermap.org/img/wn/${imgName5}@2x.png`

    foretemp1.innerHTML = `<span style='color:#dada15'>${tempName1}&deg;C</span>` 
    foretemp2.innerHTML = `<span style='color:#dada15'>${tempName2}&deg;C</span>` 
    foretemp3.innerHTML = `<span style='color:#dada15'>${tempName3}&deg;C</span>` 
    foretemp4.innerHTML = `<span style='color:#dada15'>${tempName4}&deg;C</span>` 
    foretemp5.innerHTML = `<span style='color:#dada15'>${tempName5}&deg;C</span>` 
    console.log(des , new Date (one.list[9].dt *1000)) 
}

dtestring=() => {
    //var d = (new Date()).toString().split(' ').splice(1,3).join(' ');*/
    //var d= new Date().toDateString();
    //console.log(d);
    const dr= new Date().toDateString().split(' ').splice(0,3).join(' ');
     date.textContent =dr
    console.log(dr);
}
const toCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}

