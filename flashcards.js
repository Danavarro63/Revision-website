const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("dblclick", flipCard));

  if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }



var scratchpad = document.querySelector("#scratchpad")
var scratchpad2 = document.querySelector("#scratchpad2")
var scratchpad3 = document.querySelector("#scratchpad3")
var scratchpad4 = document.querySelector("#scratchpad4")
var scratchpad5 = document.querySelector("#scratchpad5")
var scratchpad6 = document.querySelector("#scratchpad6")
var scratchpad7 = document.querySelector("#scratchpad7")  
var scratchpad8 = document.querySelector("#scratchpad8")

scratchpad.value = localStorage.getItem("notes")
scratchpad2.value = localStorage.getItem("notes2")
scratchpad3.value = localStorage.getItem("notes3")
scratchpad4.value = localStorage.getItem("notes4")
scratchpad5.value = localStorage.getItem("notes5")
scratchpad6.value = localStorage.getItem("notes6")
scratchpad7.value = localStorage.getItem("notes7")
scratchpad8.value = localStorage.getItem("notes8")

let cancel
scratchpad.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes", event.target.value)
  }, 1000)
})
scratchpad2.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes2", event.target.value)
  }, 1000)
})

scratchpad3.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes3", event.target.value)
  }, 1000)
})
scratchpad4.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes4", event.target.value)
  }, 1000)
})
scratchpad5.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes5", event.target.value)
  }, 1000)
})
scratchpad6.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes6", event.target.value)
  }, 1000)
})
scratchpad7.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes7", event.target.value)
  }, 1000)
})
scratchpad8.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes8", event.target.value)
  }, 1000)
})




