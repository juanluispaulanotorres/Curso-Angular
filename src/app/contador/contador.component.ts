
import { Component } from "@angular/core";

@Component({
    selector: "app-contador",               // Etiqueta incluida en el HTML
    template: `
        <h1>Hola</h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>
        
        
        <button (click)=" acumular(base) ">+{{ base }}</button>
        
        <span>{{ numero }}</span>
        
        <button (click)=" acumular(-base) ">-{{ base }}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'curso-angular';
    numero: number = 10;
    base: number = 5;

    acumular(valor:number) {
        this.numero += valor;
    }
}