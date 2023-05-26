interface IsmartPhone {
    carica:number
    numeroChiamate:number
    costoMinuto:number


    ricarica($:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void

}

class registroChiamate {
    id:number
    durata:number
    dataOra:Date

    constructor(id:number, durata:number, dataOra:Date){
        this.id = id
        this.durata = durata
        this.dataOra = dataOra
    }
}

class Smartphone implements IsmartPhone {
    carica:number
    numeroChiamate:number
    costoMinuto:number
    registroChiamate:registroChiamate[]


    ricarica($:number):void{this.carica = $ + this.carica}
    numero404():string{return `il credito residuo è ${this.carica}` }
    getNumeroChiamate():number{return this.numeroChiamate}
    chiamata(min:number):void{this.carica = this.carica - min * this.costoMinuto;
            this.registroChiamate.push(new registroChiamate(1, min, new Date()))};
    azzeraChiamate():void{this.chiamata(0)}
    mostraRegistroChiamate():void{}
    filtraChiamatePerData():void{}

    constructor(carica:number, numeroChiamate:number, costoMinuto:number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }
}

let Myphone = new Smartphone(5, 0, 0.20)
let Momphone = new Smartphone(8, 10, 0.20)
let Dadphone = new Smartphone(6, 12, 0.20)

console.log(Myphone.ricarica(15));
console.log(Myphone.numero404());
console.log(Myphone.chiamata(20));
console.log(Myphone.numero404());

// console.log(Momphone.ricarica(20));
// console.log(Momphone.numero404());
// console.log(Myphone.chiamata(5));
// console.log(Myphone.numero404());

// console.log(Myphone.ricarica(30));
// console.log(Myphone.numero404());
// console.log(Myphone.chiamata(12));
// console.log(Myphone.numero404());