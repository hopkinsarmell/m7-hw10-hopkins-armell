// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
textarea.value = localStorage.getItem('text')
if (document.cookie == "") {
  nameSpan.textContent = 'Your Name'
} else {
  nameSpan.innerText = document.cookie
}



formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  var words = document.getElementById("notes-area").value
  console.log({words})
  localStorage.setItem('text', words)
  document.cookie = document.querySelector('span').innerText


  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  textarea.value = ""
  localStorage.setItem('text', textarea.value) 
 


  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp