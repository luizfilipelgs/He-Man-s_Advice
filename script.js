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
getRandomAdvice();

const addText = (adviceMsg) => {
  //const adviceMsg = await getRandomAdvice();
  //console.log(await dataAdvc);
  console.log(adviceMsg);
  document.getElementById('adviceText1').innerText = adviceMsg;
}

//addText();
//window.onload = () => addText();
/*
const typeWrite = (adviceMsg) => {
    const textArray = adviceMsg.split(' ');
    const arrays = textArray.map((element) => element.split(''))
    textArray.forEach((palavras, ind) => {
      setTimeout(() => {
        palavras.split('').forEach((letra, i, array) => {
           document.getElementById('adviceText1').innerText += letra
          if (i === array.length -1) {
            document.getElementById('adviceText1').innerText += ' ';
          }
        })
       } , 100 * ind)
    });
} */
