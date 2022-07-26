//const fetch = require('node-fetch');

const getRandomAdvice = async () => {
  
  try {
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    const data = await response.json();
    const advice = data.slip.advice;
    //typeWrite(advice);
    addText(advice);
    return advice;
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  } 
}


const addText = (adviceMsg) => {
    console.log(adviceMsg);
  const advText = document.getElementById('adviceText1')
  advText.innerText = adviceMsg;
  typeWriter(advText);
}

const typeWriter = (elemento) => {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

const teste = () => console.log('teste listener ok');

const addListenerBTN = () => {
  const btn = document.querySelector('.reset');
  btn.addEventListener('click', teste)
}

window.onload = () => {
  getRandomAdvice();
}