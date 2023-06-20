const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter")
textareaEl.addEventListener("keyup", ()=>{
  updateCounter()
})
updateCounter()
function updateCounter(){
   totalcounterEl.innerHTML= textareaEl.value.length
   remainingEl.innerText =textareaEl.getAttribute("maxLength") - textareaEl.value.length
  
}