export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} recieved ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformItem);
  };

  getPerson = async (id) => {
    const item = await this.getResource(`/people/${id}`);
    console.dir(item);
    return this._transformItem(item);
  };

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }) => `${this._imageBase}/characters/${id}.jpg`;

  getStarshipImage = ({ id }) => `${this._imageBase}/starships/${id}.jpg`;

  getPlanetImage = ({ id }) => `${this._imageBase}/planets/${id}.jpg`;

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  });

  _transformStarship = (starship) => ({
    id: this._extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity,
  });

  _transformItem = (item) => ({
    id: this._extractId(item),
    name: item.name,
    gender: item.gender,
    birthYear: item.birth_year,
    eyeColor: item.eye_color,
  });
}
