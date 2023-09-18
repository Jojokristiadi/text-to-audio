const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
  const input = document.getElementById("input").value
  if (input.trim() === "") {
    document.getElementById("hasil").innerHTML = "Masukkan text terlebih dahulu"
    setTimeout(() => {
      document.getElementById("hasil").innerHTML = "" 
   }, 3000) 
  }
  const voice = new SpeechSynthesisUtterance()
  voice.lang = "id-ID"
  voice.text = input

  window.speechSynthesis.speak(voice)
})