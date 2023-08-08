const num1BTN = document.querySelector('.num1')
const num2BTN = document.querySelector('.num2')
const num3BTN = document.querySelector('.num3')
const startBTN = document.querySelector('.start')

startBTN.addEventListener("click", rollNumbers)

let forFirst
let forSeck
let forThird

function rollNumbers(){
   forFirst = inputRandomNum();
   forSeck = inputRandomNum();
   forThird = inputRandomNum();
   rollFunc(num1BTN, 2000, forFirst)
   rollFunc(num2BTN, 3000, forSeck)
   rollFunc(num3BTN, 4200, forThird, alerty)
}
function rollFunc(btn, time, func, show){
   let emptyNum = 0;
   const fastScroll = setInterval(function(){
         emptyNum++
         btn.innerHTML = emptyNum
      if(emptyNum > 8) {
         emptyNum = 0
      }
   }, 30)
   setTimeout(()=> {
      clearInterval(fastScroll)
      btn.innerHTML = func
      setTimeout(() => {
         if(show)show()
      }, 300)
   },time)
}
function inputRandomNum(){
   let mainNum = Math.random() *100
   let a = mainNum.toString()
   return a[0]
}
function alerty(){
   if(forFirst === 7 && forSeck === 7 && forThird === 7){
      alert("win: x100")
   }else if(forFirst === forSeck && forSeck === forThird){
      alert("win: x25")
   }else if(forFirst === forSeck){
      alert("win: x5")
   }else if(forSeck === forThird){
      alert("win: x5")
   }else if(forFirst === forThird){
      alert("win: x5")
   }

}