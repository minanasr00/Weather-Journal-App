const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=cd0bc5c0c71c21aa82388fe2f3c2fb0a&units=metric'

async function theTempreture(zCode) {
    const respond = await fetch(baseURL + zCode + apiKey);
    const data = await respond.json();
    const tempreture = data.main.temp;
    return tempreture;
}

function information() {
    const zCode = document.getElementById('zip').value 
    const dInstrtion = new Date()
    const time = dInstrtion.getMonth()+1+'.'+ dInstrtion.getDate()+'.'+ dInstrtion.getFullYear();
    const feel = document.getElementById('feelings').value
    return { zipCode: zCode, feeling: feel, date: time }
}

const updateIformation = ({ temp: T, feeling: F, date: D }) => {
    document.getElementById('content').innerHTML = F
    document.getElementById('date').innerHTML = D
    document.getElementById('temp').innerHTML = T
    
}

async function getInfo() {
    const respond = await fetch('/getTheData');
    const data = await respond.json();
    return data;
}


async function sendInfo(T, F, D) {
    await fetch('/putTheData', {
        method: 'POST',
        body: JSON.stringify({ temp: T, feeling: F, date: D }),
        headers: { 'content-Type': 'application/json' }
        
    });
}


async function actionGenerat() {
    try {
        const { zipCode: Z, feeling: F, date: D } = information();
        const T = await theTempreture(Z);
        await sendInfo(T, F, D);
        const d = await getInfo();
        updateIformation(d);
    }
    catch (anyFail) {
        console.log(anyFail);
    }
}


document.getElementById('generate').addEventListener('click', actionGenerat)