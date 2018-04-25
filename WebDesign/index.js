var openPlayer = document.querySelectorAll('img')
var section = document.getElementById('iframesection')
var closePlayer = document.getElementById('close')

var iframeLink = []

for(var i=0; openPlayer.length > i; i++) {
  openPlayer[i].addEventListener('click', function(e){
    e.preventDefault()
    var image = ''
        var video = document.querySelector('#iframesection iframe')
        video.src = e.target.getAttribute("data-link");
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
var musicContainer = document.getElementById("musicContainer")
var gamingContainer = document.getElementById("gamingContainer")
var actionRadio = document.getElementById("actionRadio")
var techRadio = document.getElementById("techRadio")
var sportRadio = document.getElementById("sportRadio")
var musicRadio = document.getElementById("musicRadio")
var gamingRadio = document.getElementById("gamingRadio")
var actionHeader = document.getElementById("actionHeader")
var techHeader = document.getElementById("techHeader")
var sportHeader = document.getElementById("sportHeader")
var musicHeader = document.getElementById("musicHeader")
var actionLabel = document.getElementById("actionLabel")
var techLabel = document.getElementById("techLabel")
var sportLabel = document.getElementById("sportLabel")
var musicLabel = document.getElementById("musicLabel")
var gamingLabel = document.getElementById("gamingLabel")
var selectedFilters = document.getElementById("selectedFilters")
var filterOverview = document.getElementById("filterOverview")
var emptyFilter = document.getElementById('geenFilter')
var filterKlaar = document.getElementById('showVideos')
var selectedAction = document.createElement('li')
selectedAction.innerHTML = 'Action'
selectedAction.setAttribute('class', 'actionSelection')
var selectedTech = document.createElement('li')
selectedTech.innerHTML = 'Tech'
selectedTech.setAttribute('class', 'techSelection')
var selectedSport = document.createElement('li')
selectedSport.innerHTML = 'Sport'
selectedSport.setAttribute('class', 'sportSelection')
var selectedMusic = document.createElement('li')
selectedMusic.innerHTML = 'Sport'
selectedMusic.setAttribute('class', 'musicSelection')
var selectedGaming = document.createElement('li')
selectedGaming.innerHTML = 'Sport'
selectedGaming.setAttribute('class', 'gamingSelection')
var selectedAction2 = document.createElement('li')
selectedAction2.innerHTML = 'Action'
selectedAction2.setAttribute('class', 'actionSelection')
var selectedTech2 = document.createElement('li')
selectedTech2.innerHTML = 'Tech'
selectedTech2.setAttribute('class', 'techSelection')
var selectedSport2 = document.createElement('li')
selectedSport2.innerHTML = 'Sport'
selectedSport2.setAttribute('class', 'sportSelection')
var selectedMusic2 = document.createElement('li')
selectedMusic2.innerHTML = 'Sport'
selectedMusic2.setAttribute('class', 'musicSelection')
var selectedGaming2 = document.createElement('li')
selectedGaming2.innerHTML = 'Sport'
selectedGaming2.setAttribute('class', 'gamingSelection')

actionRadio.addEventListener('click', function(){
  if(actionContainer.classList.contains('gone')) {
    actionContainer.classList.remove('gone')
    actionContainer.classList.add('vidContainer')
    actionHeader.classList.remove('gone')
    actionLabel.classList.remove('toggleLabelOff')
    actionLabel.classList.add('toggleLabelOn')
    selectedAction.innerHTML = 'Action'
    selectedAction2.innerHTML = 'Action'
    selectedFilters.append(selectedAction)
    filterOverview.append(selectedAction2)
    emptyFilter.setAttribute('Style', 'display: none;')
    filterKlaar.setAttribute('Style', 'opacity: 1;')
  } else {
    actionContainer.classList.remove('vidContainer')
    actionContainer.classList.add('gone')
    actionHeader.classList.add('gone')
    actionLabel.classList.toggle('toggleLabel')
    actionLabel.classList.remove('toggleLabelOn')
    actionLabel.classList.add('toggleLabelOff')
    selectedAction.innerHTML = ''
    selectedAction2.innerHTML = ''
    if(actionContainer.classList.contains('gone') && techContainer.classList.contains('gone') && sportContainer.classList.contains('gone') && musicContainer.classList.contains('gone') && gamingContainer.classList.contains('gone')) {
      emptyFilter.setAttribute('Style', 'display: block;')
      filterKlaar.setAttribute('Style', 'opacity: 0;')
    }
  }
})
techRadio.addEventListener('click', function(){
  if(techContainer.classList.contains('gone')) {
    techContainer.classList.remove('gone')
    techContainer.classList.add('vidContainer')
    techHeader.classList.remove('gone')
    techLabel.classList.remove('toggleLabelOff')
    techLabel.classList.add('toggleLabelOn')
    selectedTech.innerHTML = 'Tech'
    selectedTech2.innerHTML = 'Tech'
    selectedFilters.append(selectedTech)
    filterOverview.append(selectedTech2)
    emptyFilter.setAttribute('Style', 'display: none;')
    filterKlaar.setAttribute('Style', 'opacity: 1;')
  } else {
    techContainer.classList.remove('vidContainer')
    techContainer.classList.add('gone')
    techHeader.classList.add('gone')
    techLabel.classList.toggle('toggleLabel')
    techLabel.classList.remove('toggleLabelOn')
    techLabel.classList.add('toggleLabelOff')
    selectedTech.innerHTML = ''
    selectedTech2.innerHTML = ''
    if(actionContainer.classList.contains('gone') && techContainer.classList.contains('gone') && sportContainer.classList.contains('gone') && musicContainer.classList.contains('gone') && gamingContainer.classList.contains('gone')) {
      emptyFilter.setAttribute('Style', 'display: block;')
      filterKlaar.setAttribute('Style', 'opacity: 0;')
    }
  }
})
sportRadio.addEventListener('click', function(){
  if(sportContainer.classList.contains('gone')) {
    sportContainer.classList.remove('gone')
    sportContainer.classList.add('vidContainer')
    sportHeader.classList.remove('gone')
    sportLabel.classList.remove('toggleLabelOff')
    sportLabel.classList.add('toggleLabelOn')
    selectedSport.innerHTML = 'Sport'
    selectedSport2.innerHTML = 'Sport'
    selectedFilters.append(selectedSport)
    filterOverview.append(selectedSport2)
    emptyFilter.setAttribute('Style', 'display: none;')
    filterKlaar.setAttribute('Style', 'opacity: 1;')
  } else {
    sportContainer.classList.remove('vidContainer')
    sportContainer.classList.add('gone')
    sportHeader.classList.add('gone')
    sportLabel.classList.toggle('toggleLabel')
    sportLabel.classList.remove('toggleLabelOn')
    sportLabel.classList.add('toggleLabelOff')
    selectedSport.innerHTML = ''
    selectedSport2.innerHTML = ''
    if(actionContainer.classList.contains('gone') && techContainer.classList.contains('gone') && sportContainer.classList.contains('gone') && musicContainer.classList.contains('gone') && gamingContainer.classList.contains('gone')) {
      emptyFilter.setAttribute('Style', 'display: block;')
      filterKlaar.setAttribute('Style', 'opacity: 0;')
    }
  }
})
musicRadio.addEventListener('click', function(){
  if(musicContainer.classList.contains('gone')) {
    musicContainer.classList.remove('gone')
    musicContainer.classList.add('vidContainer')
    musicHeader.classList.remove('gone')
    musicLabel.classList.remove('toggleLabelOff')
    musicLabel.classList.add('toggleLabelOn')
    selectedMusic.innerHTML = 'Music'
    selectedMusic2.innerHTML = 'Music'
    selectedFilters.append(selectedMusic)
    filterOverview.append(selectedMusic2)
    emptyFilter.setAttribute('Style', 'display: none;')
    filterKlaar.setAttribute('Style', 'opacity: 1;')
  } else {
    musicContainer.classList.remove('vidContainer')
    musicContainer.classList.add('gone')
    musicHeader.classList.add('gone')
    musicLabel.classList.toggle('toggleLabel')
    musicLabel.classList.remove('toggleLabelOn')
    musicLabel.classList.add('toggleLabelOff')
    selectedMusic.innerHTML = ''
    selectedMusic2.innerHTML = ''
    if(actionContainer.classList.contains('gone') && techContainer.classList.contains('gone') && sportContainer.classList.contains('gone') && musicContainer.classList.contains('gone') && gamingContainer.classList.contains('gone')) {
      emptyFilter.setAttribute('Style', 'display: block;')
      filterKlaar.setAttribute('Style', 'opacity: 0;')
    }
  }
})
gamingRadio.addEventListener('click', function(){
  if(gamingContainer.classList.contains('gone')) {
    gamingContainer.classList.remove('gone')
    gamingContainer.classList.add('vidContainer')
    gamingHeader.classList.remove('gone')
    gamingLabel.classList.remove('toggleLabelOff')
    gamingLabel.classList.add('toggleLabelOn')
    selectedGaming.innerHTML = 'Gaming'
    selectedGaming2.innerHTML = 'Gaming'
    selectedFilters.append(selectedGaming)
    filterOverview.append(selectedGaming2)
    emptyFilter.setAttribute('Style', 'display: none;')
    filterKlaar.setAttribute('Style', 'opacity: 1;')
  } else {
    gamingContainer.classList.remove('vidContainer')
    gamingContainer.classList.add('gone')
    gamingHeader.classList.add('gone')
    gamingLabel.classList.toggle('toggleLabel')
    gamingLabel.classList.remove('toggleLabelOn')
    gamingLabel.classList.add('toggleLabelOff')
    selectedGaming.innerHTML = ''
    selectedGaming2.innerHTML = ''
    if(actionContainer.classList.contains('gone') && techContainer.classList.contains('gone') && sportContainer.classList.contains('gone') && musicContainer.classList.contains('gone') && gamingContainer.classList.contains('gone')) {
      emptyFilter.setAttribute('Style', 'display: block;')
      filterKlaar.setAttribute('Style', 'opacity: 0;')
    }
  }
})


var filterNietKlaar = document.getElementById('showFilteren')
var videoSection = document.getElementById('filteredTopics')
var filterSection = document.getElementById('beginFilter')

filterKlaar.addEventListener('click', function(){
  videoSection.setAttribute('Style', 'display: block;')
  filterSection.setAttribute('Style', 'display: none;')
})

filterNietKlaar.addEventListener('click', function(){
  filterSection.setAttribute('Style', 'display: flex;')
  videoSection.setAttribute('Style', 'display: none;')
})
