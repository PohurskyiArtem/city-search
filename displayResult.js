function displayResults(filteredCities, filteredStates) {
	const citiesList = document.querySelector('#filterForCity');
	const statesList = document.querySelector('#filterForState');
	if(filteredCities !== undefined && filteredStates !== undefined){
		const cities = new Map(),
		states = new Map(),
		citiesArr = [],
		statesArr = [];

		filteredCities.forEach(place => {
			if (!cities.has(place.city)){
				cities.set(place.city, place.state);
			}
		});
		filteredStates.forEach(place => {
					if (!states.has(place.state)){
						states.set(place.state);
					}
				});

		cities.forEach((city, state) => {
			citiesArr.push(`
			<li>${city}, ${state}</li>
			`)
		})
		states.forEach((city, state) => {
			statesArr.push(`
			<li>${state}</li>
			`)
		})

		citiesList.innerHTML = `
		<li>Filter for a city</li>
		` + citiesArr.join('');

		statesList.innerHTML = `
		<li>a state</li>
		` + statesArr.join('')
	}else{
		citiesList.innerHTML = ``;
		statesList.innerHTML = ``;
	}

	cities.length = 0;
}
