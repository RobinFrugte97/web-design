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
