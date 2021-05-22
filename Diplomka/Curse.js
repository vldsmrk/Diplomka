let bttn_profile = document.querySelector('#bttn-profile')
bttn_profile.addEventListener('click' , (Event)=>{

})

let timer; // пока пустая переменная
let x =10; // стартовое значение обратного отсчета
countdown(); // вызов функции
function countdown(){  // функция обратного отсчета
  document.getElementById('rocket').innerHTML = x;
  x--; // уменьшаем число на единицу
  if (x<0){
    clearTimeout(timer); // таймер остановится на нуле
    alert('Стоп таймер и пуск ракеты!');
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}