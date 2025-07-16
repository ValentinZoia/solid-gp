/*
    Interface Segregation Principle (ISP)
    Many specific interfaces are better than
    one general purpose interface.
    Es mucho más fácil tener múltiples interfaces
    que una sola que haga de todo.
*/

interface PcVideoGame1 {
    play(): void;
    save(): void;
    overwriteSave(): void;
    load(): void;
}

class HardcoreVideoGame implements PcVideoGame1 {
    play(): void {
        console.log("Playing hardcore video game");
    }
    save(): void {
        throw new Error("Cannot save in hardcore video game");
    }
    overwriteSave(): void {
        throw new Error("Cannot overwrite save in hardcore video game");
    }
    load(): void {
        throw new Error("Cannot load in hardcore video game");
    }
}

interface PcVideoGame{
    play(): void;
}
interface SaveableVideoGame {
    save(): void;
    overwriteSave(): void;
    load(): void;
}

class BetterHarcoreVideoGame implements PcVideoGame{
    play(): void {
        console.log("Playing better hardcore video game");
    }
}

class CasualVideoGame implements PcVideoGame, SaveableVideoGame {
    play(): void {
        console.log("Playing casual video game");
    }
    save(): void {
        console.log("Saving casual video game");
    }
    overwriteSave(): void {
        console.log("Overwriting save in casual video game");
    }
    load(): void {
        console.log("Loading casual video game");
    }
}