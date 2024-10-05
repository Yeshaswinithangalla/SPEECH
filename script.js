let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let textttt=document.getElementById("text").value
    let speech =new SpeechSynthesisUtterance(textttt)
    speechSynthesis.speak(speech)

})