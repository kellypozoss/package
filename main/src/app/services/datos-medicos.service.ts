import { HttpClient } from '@angular/common/http';
export class DatosMedicosService {
    url = 'http://localhost:4200/apps/datos-medicos';

    constructor(private http: HttpClient) { }

    agregar(datos: any) {
        return this.http.post(`${this.url}agregar.php`, JSON.stringify(datos));
    }
}