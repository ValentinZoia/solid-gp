/*
    Liskov Substitution Principle ( LSP)
    Los subtipos tienen que ser sustituibles por sus tipos base
    sin alterar el comportamiento del programa.
*/



//ser vivo = living being
class LivingBeing{
    constructor(
        private name:string,
        private age:number,
    ){}

    public getName():string{
        return this.name;
    }
    public getAge():number{
        return this.age;
    }

    public eat(){
        console.log(`${this.name} is eating..`) 
    }
}
    
class Human extends LivingBeing{
    constructor(
        private job:string,
        name:string,
        age:number,
    ){
        super(name, age)
    }

    public getJob():string{
        return this.job;
    }

    public work(){
        console.log(`${this.getName()} is working as a ${this.getJob()}..`)
    }

    
}
class Plant extends LivingBeing{
    constructor(
        private color:string,
        name:string,
        age:number,
    ){
        super(name, age)
    }
    public getColor():string{
        return this.color;
    }
    public photosynthesize(){
        console.log(`${this.getName()} is photosynthesizing..`)
    }
    public grow(){
        console.log(`${this.getName()} is growing..`)
    }
    public eat(){
        throw new Error("Plants do not eat");
    }
}

const livingBeings:LivingBeing[]=[
    new LivingBeing("Generic Living Being", 5),
    new Human("Software Engineer", "Valentin", 20),
    new Plant("Green", "Fern", 2)
]

livingBeings.forEach((livingBeing) =>{
    livingBeing.eat();
})
//cuando llegue a la planta, se va a lanzar un error porque la planta no puede comer
//esto es un ejemplo de que no se cumple el LSP, ya que la planta no
//puede ser sustituida por el tipo base LivingBeing sin alterar el comportamiento del programa



