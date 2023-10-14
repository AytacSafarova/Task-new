const interval=setInterval(()=>{
    console.log('hello');
}, 1000)

clearInterval(interval)



var counter = 10;
var newYearCountdown = setInterval(function(){
document.querySelector('p').innerText=counter
  counter--
  if (counter === 0) {
    document.querySelector('p').innerText=("HAPPY NEW YEAR!!");
    clearInterval(newYearCountdown);
  }
}, 1000);