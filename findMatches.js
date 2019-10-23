const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const clearButt = document.querySelector('#clearInput')
let cities = [];



function findMatches() {
  if (!this.value){
    displayResults();
  } else {
  fetch(endpoint)
  .then(response => response.json())
  .then(response => cities.push(...response));
  const filteredCities = cities.filter(place => {
    if(place.city.toUpperCase().includes(this.value.toUpperCase())) {
      return place;
    }
  });
  filteredCities.length = 10;
  const filteredStates = cities.filter(place => {
  if(place.state.toUpperCase().includes(this.value.toUpperCase())){
    return place;
  }
  })
  filteredStates.length = 10;
  displayResults(filteredCities, filteredStates)
  let set = new Set();
}
}

const clearInput = () => {
  searchInput.textContent = '';
  displayResults();
}


searchInput.addEventListener('keyup', findMatches);
clearButt.addEventListener('click', clearInput)