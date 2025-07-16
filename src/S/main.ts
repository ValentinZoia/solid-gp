/*
Single responsability principle
Cada cosa tenga una unica responsabilidad
que se ocupe de una sola cosa.

Beneficios:
- Testing: Como las cosas son tan especioficas,
           es mas facil testearlas.
- Lower Coupling: La dependencia entre los diferentes
                  elementos es muy poca, por lo cual
                  es facil Modificarlo, sacarle, agregarle
                  cosas,etc. Facil de mantener.
- Organization: La organizacion del codigo es mas facil,
*/

class VideoGame_1{
    constructor(
        private name:string,
        private price:number,
        private relaseDate:string
    ){} 
    
    public getName():string{
        return this.name;
    }
    public getPrice():number{
        return this.price;
    }
    public getRelaseDate():string{
        return this.relaseDate;
    }

    
}

//❌ Esto tiene un problemon. No respeta el SRP, tiene muchas responsabilidades
class VideoGameStore{
    videoGames: VideoGame_1[];
    constructor(videoGames:VideoGame_1[]){
        this.videoGames = videoGames;
    }

    public getAllGamesByRelaseDate(date:string):VideoGame_1[]{
        return this.videoGames.filter((game:VideoGame_1) => game.getRelaseDate() === date);
    }
    public getAllGamesByHigherPrice(price:number):VideoGame_1[]{
        return this.videoGames.filter((game:VideoGame_1) => game.getPrice() > price);
    }
    public getAllGamesByLowerPrice(price:number):VideoGame_1[]{
        return this.videoGames.filter((game:VideoGame_1) => game.getPrice() < price);
    }
    
    
}

//---------------------------------------------------------------
export class BasicPropertiesItemsStore {
    constructor(
        private name:string,
        private price:number,
        private relaseDate:string
    ){}

    public getName():string{
        return this.name;
    }
    public getPrice():number{
        return this.price;
    }
    public getRelaseDate():string{
        return this.relaseDate;
    }
}

class VideoGame extends BasicPropertiesItemsStore {
    constructor(
        name:string,
        price:number,
        relaseDate:string
    ){
        super(name, price, relaseDate);
    }
}

export class ItemStoreGetter<T extends BasicPropertiesItemsStore> {
    protected items:T[];
    
    constructor(items:T[]){
        this.items = items;
    }

    public getAllByRelaseDate(date:string):T[]{
        return this.items.filter((item:T) => item.getRelaseDate() === date);
    }
    public getAllByHigherPrice(price:number):T[]{
        return this.items.filter((item:T) => item.getPrice() > price);
    }
    public getAllByLowerPrice(price:number):T[]{
        return this.items.filter((item:T) => item.getPrice() < price);
    }

}

class VideoGameStore2 extends ItemStoreGetter<VideoGame>{
    constructor(videoGames:VideoGame[]){
        super(videoGames);
    }

    public getAllVideoGames(){
        return this.items;
    }
}

const videoGame1 = new VideoGame("Game 1", 59.99, "2023-10-01");
const videoGame2 = new VideoGame("Game 2", 49.99, "2023-10-02");
const videoGame3 = new VideoGame("Game 3", 39.99, "2023-10-03");
const videoGameStore = new VideoGameStore2([videoGame1, videoGame2, videoGame3]);
console.log(videoGameStore.getAllByHigherPrice(50));
console.log(videoGameStore.getAllByRelaseDate("2023-10-01"));
console.log(videoGameStore.getAllByLowerPrice(60));
console.log(videoGameStore.getAllVideoGames());
console.info("---------------------------------------------------------------");


class Music extends BasicPropertiesItemsStore {
    constructor(
        name:string,
        price:number,
        relaseDate:string
    ){
        super(name, price, relaseDate);
    }
    
}

class MusicStore extends ItemStoreGetter<Music>{
    constructor(music:Music[]){
        super(music);
    }

    public getAllMusic(){
        return this.items;
    }
}

const music1 = new Music("Song 1", 1.99, "2023-10-01");
const music2 = new Music("Song 2", 2.99, "2023-10-02");
const music3 = new Music("Song 3", 3.99, "2023-10-03");
const musicStore = new MusicStore([music1, music2, music3]);
console.log(musicStore.getAllByHigherPrice(2));
console.log(musicStore.getAllByRelaseDate("2023-10-01"));
console.log(musicStore.getAllByLowerPrice(4));
console.log(musicStore.getAllMusic());
console.info("---------------------------------------------------------------");

class Movie extends BasicPropertiesItemsStore {
    constructor(
        name:string,
        price:number,
        relaseDate:string
    ){
        super(name, price, relaseDate);
    }
}
class MovieStore extends ItemStoreGetter<Movie>{
    constructor(movies:Movie[]){
        super(movies);
    }

    public getAllMovies(){
        return this.items;
    }
}
const movie1 = new Movie("Movie 1", 9.99, "2023-10-01");
const movie2 = new Movie("Movie 2", 8.99, "2023-10-02");
const movie3 = new Movie("Movie 3", 7.99, "2023-10-03");
const movieStore = new MovieStore([movie1, movie2, movie3]);
console.log(movieStore.getAllByHigherPrice(8));
console.log(movieStore.getAllByRelaseDate("2023-10-01"));
console.log(movieStore.getAllByLowerPrice(10));
console.log(movieStore.getAllMovies());