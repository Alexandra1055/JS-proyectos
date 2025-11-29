import { Coche } from '../model/models.js'
export function getCoche() {
    return fetch("https://raw.githubusercontent.com/vega/vega/refs/heads/main/docs/data/cars.json")
        .then(response => response.json()
            .then(result => {
                // return result.map(jsonCat => clientToCat(jsonCat))
                return result.map(jsonCar => clientToCar(jsonCar))
            })
            .catch(error => console.log('error', error))
        )
}

function clientToCar(result) {
    return new Coche(result.Name, (result.Horsepower) ? result.Horsepower : '', result.Year);
}
export function search(ev) {
    return (ev.target.value);
}
export function findByName(coches, txt) {
    return coches
        .filter(coche => coche.name.includes(txt));

}

function findByMinHP(coches, min){
    if(!min){
        return coches
    }
    return coches
        .filter(coche => coche.horsePower.value = 0);
}
function findByMaxHP(coches,max){
     if(!max){
        return coches
    }
    return coches
        .filter(coche => coche.horsePower.value <= max);
}

export function buscar (cars,txt,min,max){
    const carsName = findByName(cars, txt);
    const carsMinHP = findByMinHP(cars,min);
    const carsMaxHP = findByMaxHP(cars,max);


}
