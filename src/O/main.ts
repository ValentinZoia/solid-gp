/*
Open - Closed Principle
Open for extension, closed for modification.
Abierto a la extensión, cerrado a la modificación.
*/

import {BasicPropertiesItemsStore, ItemStoreGetter} from '../S/main'

class VideoGame_2 extends BasicPropertiesItemsStore{
    private genre:string;
    constructor(
        name:string,
        price:number,
        relaseDate:string,
        genre:string
    ){
        super(name, price, relaseDate);
        this.genre = genre;
    }

    public getGenre():string{
        return this.genre;
    }

}

class Movie_2 extends BasicPropertiesItemsStore {
    private director:string;
    constructor(
        name:string,
        price:number,
        relaseDate:string,
        director:string
    ){
        super(name, price, relaseDate);
        this.director = director;
    }

    public getDirector():string{
        return this.director;
    }
}


class VideoGameStore2 extends ItemStoreGetter<VideoGame_2>{
    constructor(videoGames:VideoGame_2[]){
        super(videoGames);
    }
    public getVideoGamesByGenre(genre:string):VideoGame_2[]{
        return this.items.filter((item:VideoGame_2) => item.getGenre() === genre);
    }

    public getAllVideoGames(){
        return this.items;
    }
}



class MovieStore2 extends ItemStoreGetter<Movie_2>{
    constructor(movies:Movie_2[]){
        super(movies);
    }
    public getMoviesByDirector(director:string):Movie_2[]{
        return this.items.filter((item:Movie_2) => item.getDirector() === director);
    }

    public getAllMovies(){
        return this.items;
    }
}

//seria el mismo que VideoGameStore2 pero con peliculas,
//en lugar de agregar una nueva clase, podemos extender la clase MovieStore2
class VideoGameStoreWithMovies extends MovieStore2{
    private videoGames:VideoGame_2[];
    constructor(videoGames:VideoGame_2[], movies:Movie_2[]){
        super(movies);
        this.videoGames = videoGames;
    }
    public getVideoGamesByGenre(genre:string):VideoGame_2[]{
        return this.videoGames.filter((item:VideoGame_2) => item.getGenre() === genre);
    }

    public getAllVideoGames(){
        return this.videoGames;
    }
}

const videoGames = [
    new VideoGame_2('The Legend of Zelda', 59.99, '2023-05-12', 'Action-Adventure'),
    new VideoGame_2('Super Mario Odyssey', 49.99, '2017-10-27', 'Platformer'),
];
const movies = [
    new Movie_2('Inception', 14.99, '2010-07-16', 'Christopher Nolan'),
    new Movie_2('The Matrix', 9.99, '1999-03-31', 'Lana Wachowski, Lilly Wachowski'),
];


const videGameStore = new VideoGameStoreWithMovies(videoGames, movies);
console.log(videGameStore.getVideoGamesByGenre('Action-Adventure'));
console.log(videGameStore.getMoviesByDirector('Christopher Nolan'));
console.log(videGameStore.getAllVideoGames());
console.log(videGameStore.getAllMovies());
console.log(videGameStore.getAllByHigherPrice(10));//movies