import { Injectable } from '@angular/core';
import { Productos } from '../apps/interfaces/productos';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    listProductos: Productos[] = [
        { id: 1, producto: 'Camisa', cantidad: '15', precio_c: '$150', precio_v: '$80' },
        { id: 2, producto: 'Zapatos', cantidad: '15', precio_c: '$150', precio_v: '$80' },
        { id: 3, producto: 'Cinturones', cantidad: '15', precio_c: '$150', precio_v: '$80' },
        { id: 4, producto: 'Pantalones', cantidad: '15', precio_c: '$150', precio_v: '$80' }
    ];

    constructor() { }

    getProducto() {
        return this.listProductos.slice();
    }

    eliminarProducto(index: number) {
        this.listProductos.splice(index, 1);
    }
}
