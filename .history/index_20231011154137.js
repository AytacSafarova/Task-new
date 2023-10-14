const interval=setInterval(()=>{
    console.log('hello');
}, 1000)

clearInterval(interval)



var counter = 10;
var newYearCountdown = setInterval(function(){
  console.log(counter);
  counter--
  if (counter === 0) {
    console.log("HAPPY NEW YEAR!!");
    clearInterval(newYearCountdown);
  }
}, 1000);