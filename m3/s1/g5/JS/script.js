"use strict";
class registroChiamate {
    constructor(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
}
class Smartphone {
    ricarica($) { this.carica = $ + this.carica; }
    numero404() { return `il credito residuo è ${this.carica}`; }
    getNumeroChiamate() { return this.numeroChiamate; }
    chiamata(min) {
        this.carica = this.carica - min * this.costoMinuto;
        this.registroChiamate.push(new registroChiamate(1, min, new Date()));
    }
    ;
    azzeraChiamate() { this.chiamata(0); }
    mostraRegistroChiamate() { }
    filtraChiamatePerData() { }
    constructor(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = [];
    }
}
let Myphone = new Smartphone(5, 0, 0.20);
let Momphone = new Smartphone(8, 10, 0.20);
let Dadphone = new Smartphone(6, 12, 0.20);
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
