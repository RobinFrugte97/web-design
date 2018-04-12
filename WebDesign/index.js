var openPlayer = document.querySelectorAll('img')
var section = document.getElementById('iframesection')
var closePlayer = document.getElementById('close')

var iframeLink = []

for(var i=0; openPlayer.length > i; i++) {
  openPlayer[i].addEventListener('click', function(e){
    e.preventDefault()
    var image = ''
      document.onclick = function(e) {
        var video = document.querySelector('#iframesection iframe')
        video.src = e.target.getAttribute("data-link");
      }
    section.classList.remove('videoplayer')
    section.classList.add('openVideo')
  })
}

closePlayer.addEventListener('click', function(){
  section.classList.remove('openVideo')
  section.classList.add('videoplayer')
  section.src = '';
})

var actionContainer = document.getElementById("actionContainer")
var techContainer = document.getElementById("techContainer")
var sportContainer = document.getElementById("sportContainer")
var actionRadio = document.getElementById("actionRadio")
var techRadio = document.getElementById("techRadio")
var sportRadio = document.getElementById("sportRadio")
var actionHeader = document.getElementById("actionHeader")
var techHeader = document.getElementById("techHeader")
var sportHeader = document.getElementById("sportHeader")
var actionLabel = document.getElementById("actionLabel")
var techLabel = document.getElementById("techLabel")
var sportLabel = document.getElementById("sportLabel")

actionRadio.addEventListener('click', function(){
  if(actionContainer.classList.contains('gone')) {
    actionContainer.classList.remove('gone')
    actionContainer.classList.add('vidContainer')
    actionHeader.classList.remove('gone')
    actionLabel.classList.remove('toggleLabelOff')
    actionLabel.classList.add('toggleLabelOn')
  } else {
    actionContainer.classList.remove('vidContainer')
    actionContainer.classList.add('gone')
    actionHeader.classList.add('gone')
    actionLabel.classList.toggle('toggleLabel')
    actionLabel.classList.remove('toggleLabelOn')
    actionLabel.classList.add('toggleLabelOff')

  }
})
techRadio.addEventListener('click', function(){
  if(techContainer.classList.contains('gone')) {
    techContainer.classList.remove('gone')
    techContainer.classList.add('vidContainer')
    techHeader.classList.remove('gone')
    techLabel.classList.remove('toggleLabelOff')
    techLabel.classList.add('toggleLabelOn')
  } else {
    techContainer.classList.remove('vidContainer')
    techContainer.classList.add('gone')
    techHeader.classList.add('gone')
    techLabel.classList.toggle('toggleLabel')
    techLabel.classList.remove('toggleLabelOn')
    techLabel.classList.add('toggleLabelOff')
  }
})
sportRadio.addEventListener('click', function(){
  if(sportContainer.classList.contains('gone')) {
    sportContainer.classList.remove('gone')
    sportContainer.classList.add('vidContainer')
    sportHeader.classList.remove('gone')
    sportLabel.classList.remove('toggleLabelOff')
    sportLabel.classList.add('toggleLabelOn')
  } else {
    sportContainer.classList.remove('vidContainer')
    sportContainer.classList.add('gone')
    sportHeader.classList.add('gone')
    sportLabel.classList.toggle('toggleLabel')
    sportLabel.classList.remove('toggleLabelOn')
    sportLabel.classList.add('toggleLabelOff')
  }
})
