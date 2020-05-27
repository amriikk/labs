const starShipEndpoint = 'https://swapi.dev/api/starships/';

function getAllStarships() {
    console.log("Hello from getAllStarships!")
    return fetch(starshipEndpoint)
    .then(res => {
        return res.json();
    })
    .then(json=>json.results)
}

export default getAllStarships;