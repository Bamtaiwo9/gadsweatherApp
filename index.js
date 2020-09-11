 const key = 'cbe3dd267a18f6c89943b3eff94f1ed7';
//const key = '27e00ee0ffd02cf62afb331c67bd900c';
var checker;


const requestCity = async (city) => { 
    //const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const baseURL = 'http://api.openweathermap.org/data/2.5/forecast'
    //pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={your api key}
    //const baseURL = 'http://pro.openweathermap.org/data/2.5/forecast/hourly'
    const query = `?q=${city}&appid=${key}&units=metric`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return  data;
}

//requestCity(mexico)
const requestCurrent = async (city) => { 
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    //const baseURL = 'http://api.openweathermap.org/data/2.5/forecast'
    const query = `?q=${city}&appid=${key}&units=metric`;

    
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}


if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('Registered!', reg);
        }).catch(err => {
            console.log('Registration Failed:', err);
        });
    });
}

let defferedPrompt;
window.addEventListener('beforeinstallprompt', (e) =>{
    e.preventDefault();
    defferedPrompt = e;
    btnAdd.style.display ='block';
})

/*btnAdd.addEventListener('click', (e) => {
    defferedPrompt.prompt();
    defferedPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted'){
            console.log('User accepted the A2Hs prompt');
        }
        defferedPrompt = null
    });
});*/

window.addEventListener('appinstalled', (evt) => {
    app.logEvent('a2hs','installed');
})